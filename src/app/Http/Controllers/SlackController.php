<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models\Department;
use App\Models\User;
use Illuminate\Support\Facades\Log;
use App\Models\Todo;
use Illuminate\Support\Facades\Auth;

class SlackController extends Controller
{
    public function interact(Request $request)
    {
        // ここをスラックのユーザと紐付ける
        $user_id = 1;
        $user = User::find($user_id);

        $departments = $user->departments;

        $payload = json_decode($request->input('payload'), true);

        if (isset($payload['type']) && $payload['type'] == 'message_action') {

            $trigger_id = $payload['trigger_id'];

            $options = [];

            $options = [[
                'text' => [
                    'type' => 'plain_text',
                    'text' => '分類なし',
                ],
                'value' => 'none',
            ]];

            foreach ($departments as $department) {
                $options[] = [
                    'text' => [
                        'type' => 'plain_text',
                        'text' => $department->name,
                    ],
                    'value' => (string)$department->id,
                ];
            }

            $teamDomain = data_get($payload, 'team.domain');
            $channelId = data_get($payload, 'channel.id');
            $messageTs = data_get($payload, 'message_ts');

            // "." を削除して Slack URL 用に整形
            $tsFormatted = str_replace('.', '', $messageTs);

            $slackUrl = "https://{$teamDomain}.slack.com/archives/{$channelId}/p{$tsFormatted}";

            $view = [
                'type' => 'modal',
                'callback_id' => 'select_example',
                'private_metadata' => json_encode([
                    'original_message' => $payload['message'] ?? null,
                    'user_id' => $payload['user']['id'] ?? null,
                    'slack_url' => $slackUrl,
                ]),
                'title' => ['type' => 'plain_text', 'text' => '選択してください'],
                'blocks' => [
                    [
                        'type' => 'input',
                        'block_id' => 'select_block',
                        'label' => ['type' => 'plain_text', 'text' => 'オプションを選択'],
                        'element' => [
                            'type' => 'static_select',
                            'action_id' => 'option_select',
                            'placeholder' => ['type' => 'plain_text', 'text' => '選んでください'],
                            'options' => $options,
                        ]
                    ]
                ],
                'submit' => ['type' => 'plain_text', 'text' => '送信'],

            ];

            $response = Http::withToken(env('SLACK_BOT_TOKEN'))
                ->post('https://slack.com/api/views.open', [
                    'trigger_id' => $trigger_id,
                    'view' => json_encode($view),
                ]);

            return response()->json(['ok' => true]);
        }

        if (isset($payload['type']) && $payload['type'] == 'view_submission') {

            $selected = $payload['view']['state']['values']['select_block']['option_select']['selected_option']['value'] ?? null;
            $meta = json_decode($payload['view']['private_metadata'] ?? '{}', true);

            if($selected == 'none'){

                $department_id = null;
                $selected_department_name = "未分類";

            }else{

                $selected_department = Department::find($selected);
                $selected_department_name = $selected_department->name;
                $department_id = $selected_department->id;

            };

            Log::info($department_id);
            Todo::create([
                // ここをスラックのユーザと紐付ける
                'user_id' => $user_id,
                'department_id' => $department_id,
                'title' => null,
                'slack_url' => $meta['slack_url'],
                'content' => $meta['original_message']['text'],
            ]);

            Http::withToken(env('SLACK_BOT_TOKEN'))->post('https://slack.com/api/chat.postMessage', [
                'channel' => $payload['user']['id'], // DM でユーザー本人に送る
                'text' => "番号:『{$selected_department_name} 』のTodoリストに『{$meta['original_message']['text']}』が作成されました！{$meta['slack_url']}",
            ]);

            return response()->json(['response_action' => 'clear']);
        }

        return response()->json(['ok' => true]);
    }
}