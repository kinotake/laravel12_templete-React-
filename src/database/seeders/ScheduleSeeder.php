<?php

namespace Database\Seeders;

use App\Models\Schedule;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;

class ScheduleSeeder extends Seeder
{
    public function run(): void
    {
        if (Schedule::count() >= 20) {
            return;
        }

        $start = Carbon::create(2025, 10, 20, 9, 0, 0);

        for ($i = 1; $i <= 20; $i++) {
            $departmentId = ($i % 3) + 1;
            $userId = ($i % 5) + 1;
            $detail = sprintf('スケジュール%02d: 部署%dとユーザー%dの打ち合わせ', $i, $departmentId, $userId);
            $startTime = $start->copy()->addDays($i);

            Schedule::updateOrCreate(
                [
                    'detail' => $detail,
                    'department_id' => $departmentId,
                    'user_id' => $userId,
                ],
                [
                    'start' => $startTime->toDateString(),
                    'end' => $startTime->copy()->addDays(random_int(1, 3))->toDateString(),
                ],
            );
        }
    }
}
