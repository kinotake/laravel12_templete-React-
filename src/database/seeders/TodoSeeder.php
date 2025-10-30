<?php

namespace Database\Seeders;

use App\Models\Todo;
use Illuminate\Database\Seeder;

class TodoSeeder extends Seeder
{
    public function run(): void
    {
        $userId = 1;
        $departments = [1, 2, 3];

        foreach ($departments as $departmentId) {
            for ($i = 1; $i <= 10; $i++) {
                $title = sprintf('部署%dのタスク%02d', $departmentId, $i);
                $content = sprintf('部署%d向けに自動作成したTODO%02dです。', $departmentId, $i);
                $slackUrl = sprintf('https://slack.example.com/department/%d/task/%02d', $departmentId, $i);

                Todo::updateOrCreate(
                    [
                        'user_id' => $userId,
                        'department_id' => $departmentId,
                        'title' => $title,
                    ],
                    [
                        'content' => $content,
                        'slack_url' => $slackUrl,
                    ],
                );
            }
        }
    }
}
