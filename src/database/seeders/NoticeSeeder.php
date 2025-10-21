<?php

namespace Database\Seeders;

use App\Models\Department;
use App\Models\Notice;
use Illuminate\Database\Seeder;

class NoticeSeeder extends Seeder
{
    public function run(): void
    {
        $notices = [
            'career counselor_' => [
                [
                    'title' => 'Monthly KPI Review Reminder',
                    'content' => 'Monthly counseling KPI review is on Friday at 16:00.',
                ],
                [
                    'title' => 'Coaching Guidelines Update',
                    'content' => 'Share updated coaching guidelines with new hires by Thursday.',
                ],
            ],
            'sales_' => [
                [
                    'title' => 'Quarterly Workshop Notice',
                    'content' => 'Quarterly sales workshop next Tuesday—attendance required.',
                ],
                [
                    'title' => 'Pipeline Update Deadline',
                    'content' => 'Submit September pipeline updates before the 10th.',
                ],
            ],
            'development_(PT)' => [
                [
                    'title' => 'Release Candidate Freeze',
                    'content' => 'Release candidate build freezes on Wednesday at 18:00.',
                ],
            ],
            'manager_' => [
                [
                    'title' => 'Managers Sync Reschedule',
                    'content' => 'Managers sync has moved to Monday 14:00 starting next week.',
                ],
            ],
            'development_(CT)' => [
                [
                    'title' => 'Tech Debt Sprint',
                    'content' => 'Tech debt clean-up sprint kicks off this Thursday.',
                ],
            ],
            'coach_' => [
                [
                    'title' => 'Session Feedback Forms',
                    'content' => 'Upload the latest session feedback forms by end of day.',
                ],
            ],
            'counselor_' => [
                [
                    'title' => 'Onboarding Checklist Update',
                    'content' => 'Client onboarding checklist updates are now available.',
                ],
            ],
            'CS_' => [
                [
                    'title' => 'Escalation Procedure Rollout',
                    'content' => 'New escalation procedures roll out on the 20th.',
                ],
            ],
            'marketing_' => [
                [
                    'title' => 'Campaign Launch Briefing',
                    'content' => 'Campaign launch briefing scheduled for Wednesday morning.',
                ],
            ],
            'QA_' => [
                [
                    'title' => 'Regression Testing Schedule',
                    'content' => 'Regression testing for sprint 25 starts tomorrow at 9:00.',
                ],
            ],
        ];

        foreach ($notices as $departmentName => $contents) {
            $department = Department::where('name', $departmentName)->first();

            if (! $department) {
                continue;
            }

            foreach ($contents as $noticeData) {
                Notice::firstOrCreate(
                    [
                        'department_id' => $department->id,
                        'title' => $noticeData['title'],
                    ],
                    [
                        'content' => $noticeData['content'],
                    ],
                );
            }
        }
    }
}
