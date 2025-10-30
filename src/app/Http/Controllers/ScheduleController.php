<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Department;
use App\Models\Survey;
use App\Models\Schedule;
use Carbon\Carbon;
use App\Http\Requests\ScheduleRequest;

class ScheduleController extends Controller
{
    public function index($department_id)
    {

        $department = Department::findOrFail($department_id);

        $members = $department->users()->get();

        $members_items= [];

        $start = now()->startOfMonth();
        $end = now()->endOfMonth();

        foreach ($members as $member) {
            $user_id = $member->id;
            $user_name = $member->name;
            $member_schedules = Schedule::where('user_id', $user_id)
                ->where('department_id', $department->id)
                ->where(function ($query) use ($start, $end) {
                    $query->whereBetween('start', [$start, $end])   // 開始が期間内
                        ->orWhereBetween('end', [$start, $end]);  // 終了が期間内
                })
                ->get();
            // 今月を期間として含むものを取得

            $member_surveys = Survey::where('user_id', $user_id)
                ->where('department_id', $department->id)
                ->get();

            $members_items[] = [
                'department_id' => $department_id,
                'user_name' => $user_name,
                'schedules' => $member_schedules,
                'surveys' => $member_surveys,
            ];
        }

        return Inertia::render('schedule', [
            'display_data' => [
                'department_id' => $department->id,
                'department_name' => $department->name,
                // サイドバーに依存しているので消してはならぬ
                'members' => $members,
                'members_items' => $members_items,
            ],
        ]);
    }

    public function store(ScheduleRequest $request)
    {
        Schedule::create([
            'detail' => $request->detail,
            'start'  => $request->start,
            'end'    => $request->end,
        ]);

        return back();
    }
}
