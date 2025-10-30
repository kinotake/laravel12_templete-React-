<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            AdminUserSeeder::class,
            TestUserSeeder::class,
            SampleUsersSeeder::class,
            DepartmentSeeder::class,
            DepartmentUserSeeder::class,
            NoticeSeeder::class,
            NoticeUserSeeder::class,
            TodoSeeder::class,
            TweetSeeder::class,
            ScheduleSeeder::class,
            SurveySeeder::class,
        ]);
    }
}
