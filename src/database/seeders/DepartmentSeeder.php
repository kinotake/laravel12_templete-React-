<?php

namespace Database\Seeders;

use App\Models\Department;
use Illuminate\Database\Seeder;

class DepartmentSeeder extends Seeder
{
    public function run(): void
    {
        $departments = [
            'career counselor_',
            'sales_',
            'development_(PT)',
            'manager_',
            'development_(CT)',
            'coach_',
            'counselor_',
            'CS_',
            'marketing_',
            'QA_',
        ];

        foreach ($departments as $name) {
            Department::firstOrCreate(['name' => $name]);
        }
    }
}
