<?php

namespace Database\Seeders;

use App\Models\Notice;
use App\Models\User;
use Illuminate\Database\Seeder;

class NoticeUserSeeder extends Seeder
{
    public function run(): void
    {
        $noticeAssignments = [
            'Office will undergo maintenance this Friday evening.' => [
                'admin@example.com',
                'manager@example.com',
            ],
            'Monthly all-hands meeting scheduled for next Monday.' => [
                'test@example.com',
                'ops@example.com',
            ],
            'Submit your annual leave requests before the end of the month.' => [
                'hr@example.com',
                'test@example.com',
            ],
            'Deployment freeze starts this Wednesday at 18:00.' => [
                'admin@example.com',
                'ops@example.com',
            ],
        ];

        foreach ($noticeAssignments as $content => $emails) {
            $notice = Notice::where('content', $content)->first();

            if (! $notice) {
                continue;
            }

            $userIds = User::whereIn('email', $emails)->pluck('id');

            if ($userIds->isEmpty()) {
                continue;
            }

            $notice->users()->syncWithoutDetaching($userIds);
        }
    }
}
