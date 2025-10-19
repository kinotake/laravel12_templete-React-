<?php

namespace Database\Seeders;

use App\Models\Department;
use App\Models\User;
use Illuminate\Database\Seeder;

class DepartmentUserSeeder extends Seeder
{
    public function run(): void
    {
        $assignments = [
            'General Affairs' => [
                'admin@example.com',
                'manager@example.com',
            ],
            'Human Resources' => [
                'hr@example.com',
                'test@example.com',
            ],
            'Engineering' => [
                'ops@example.com',
                'admin@example.com',
            ],
        ];

        $handledEmails = [];

        foreach ($assignments as $departmentName => $emails) {
            $department = Department::where('name', $departmentName)->first();

            if (! $department) {
                continue;
            }

            $userIds = User::whereIn('email', $emails)->pluck('id');

            if ($userIds->isEmpty()) {
                continue;
            }

            $department->users()->syncWithoutDetaching($userIds);
            $handledEmails = array_merge($handledEmails, $emails);
        }

        $handledEmails = array_unique($handledEmails);

        $departments = Department::orderBy('id')->get();

        if ($departments->isEmpty()) {
            return;
        }

        $remainingUsers = User::whereNotIn('email', $handledEmails)->get();

        if ($remainingUsers->isEmpty()) {
            return;
        }

        $departmentCount = $departments->count();

        foreach ($remainingUsers as $index => $user) {
            $department = $departments[$index % $departmentCount];

            if (! $department) {
                continue;
            }

            $department->users()->syncWithoutDetaching([$user->id]);
        }
    }
}
