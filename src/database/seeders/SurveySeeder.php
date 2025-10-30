<?php

namespace Database\Seeders;

use App\Models\Survey;
use Illuminate\Database\Seeder;

class SurveySeeder extends Seeder
{
    public function run(): void
    {
        if (Survey::count() >= 20) {
            return;
        }

        for ($i = 1; $i <= 20; $i++) {
            $departmentId = ($i % 3) + 1;
            $userId = ($i % 5) + 1;

            Survey::updateOrCreate(
                [
                    'detail' => sprintf('アンケート%02d: 部署%d向けの意識調査', $i, $departmentId),
                    'department_id' => $departmentId,
                    'user_id' => $userId,
                ],
            );
        }
    }
}
