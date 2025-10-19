<?php

namespace Database\Seeders;

use App\Models\Todo;
use App\Models\User;
use Illuminate\Database\Seeder;

class TodoSeeder extends Seeder
{
    public function run(): void
    {
        $todoTemplates = [
            'admin@example.com' => [
                'Review infrastructure capacity plan.',
                'Approve Q2 security audit report.',
            ],
            'test@example.com' => [
                'Verify onboarding checklist for new hires.',
            ],
            'manager@example.com' => [
                'Compile weekly status summary for stakeholders.',
            ],
            'hr@example.com' => [
                'Prepare orientation materials for next cohort.',
            ],
            'ops@example.com' => [
                'Schedule incident postmortem discussion.',
            ],
        ];

        foreach ($todoTemplates as $email => $todos) {
            $user = User::where('email', $email)->first();

            if (! $user) {
                continue;
            }

            foreach ($todos as $content) {
                Todo::firstOrCreate([
                    'user_id' => $user->id,
                    'content' => $content,
                ]);
            }
        }
    }
}
