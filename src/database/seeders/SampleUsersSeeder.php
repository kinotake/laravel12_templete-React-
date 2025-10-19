<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class SampleUsersSeeder extends Seeder
{
    public function run(): void
    {
        $users = [
            ['name' => 'Project Manager', 'email' => 'manager@example.com'],
            ['name' => 'HR Coordinator', 'email' => 'hr@example.com'],
            ['name' => 'Operations Lead', 'email' => 'ops@example.com'],
        ];

        for ($i = 1; $i <= 27; $i++) {
            $users[] = [
                'name' => sprintf('Sample Member %02d', $i),
                'email' => sprintf('member%02d@example.com', $i),
            ];
        }

        foreach ($users as $user) {
            if (User::where('email', $user['email'])->doesntExist()) {
                User::factory()->state(fn () => $user)->create();
            }
        }
    }
}
