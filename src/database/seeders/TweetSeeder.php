<?php

namespace Database\Seeders;

use App\Models\Tweet;
use App\Models\User;
use Illuminate\Database\Seeder;

class TweetSeeder extends Seeder
{
    public function run(): void
    {
        $tweets = [
            'admin@example.com' => [
                'Kicked off the new infra monitoring rollout today.',
            ],
            'test@example.com' => [
                'Testing the notification flow end-to-end. Feedback welcome!',
            ],
            'manager@example.com' => [
                'Proud of the team hitting our sprint goals ahead of schedule.',
            ],
            'hr@example.com' => [
                'Career workshop next week—sign up if you have not already.',
            ],
            'ops@example.com' => [
                'Night shift went smoothly thanks to the new runbooks.',
            ],
        ];

        foreach ($tweets as $email => $messages) {
            $user = User::where('email', $email)->first();

            if (! $user) {
                continue;
            }

            foreach ($messages as $content) {
                Tweet::firstOrCreate([
                    'user_id' => $user->id,
                    'content' => $content,
                ]);
            }
        }
    }
}
