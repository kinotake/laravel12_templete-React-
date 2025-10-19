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
            'General Affairs' => [
                'Office will undergo maintenance this Friday evening.',
                'Monthly all-hands meeting scheduled for next Monday.',
            ],
            'Human Resources' => [
                'Submit your annual leave requests before the end of the month.',
            ],
            'Engineering' => [
                'Deployment freeze starts this Wednesday at 18:00.',
            ],
        ];

        foreach ($notices as $departmentName => $contents) {
            $department = Department::where('name', $departmentName)->first();

            if (! $department) {
                continue;
            }

            foreach ($contents as $content) {
                Notice::firstOrCreate([
                    'department_id' => $department->id,
                    'content' => $content,
                ]);
            }
        }
    }
}
