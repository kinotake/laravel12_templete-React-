<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Todo;
use App\Models\Survey;
use App\Models\Schedule;
use Illuminate\Support\Facades\Log;

class TodoController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $user_id = $user->id;

        $departments = $user->departments;

        $user_all_todos = [];

        $todos = Todo::where('user_id', $user_id)
            ->where('department_id', null)
            ->where('done', false)
            ->get();

        $user_all_todos[] = [
            'department_id' => null,
            'todos' => $todos,
        ];

        foreach ($departments as $department) {
            $department_id = $department->id;
            $department_name = $department->name;
            $department_todos = Todo::where('user_id', $user_id)
                ->where('department_id', $department->id)
                ->where('done', false)
                ->get();

            $user_all_todos[] =[
                'department_id' => $department_id,
                'department_name' => $department_name,
                'todos' => $department_todos,
            ];
        }

        $no_department_todos = [];

        $no_department_todos[] = [
            'department_id' => null,
            'department_name' => $department->name,
            'todos' => $todos,
        ];

        $members = collect([$user])
            ->map(static function ($user) {
                return [
                    'id' => $user->id,
                    'name' => $user->name,
                    'energy' => $user->energy,
                    'img' => $user->img,
                    'tweet' => $user->tweet ? [
                        'id' => $user->tweet->id,
                        'content' => $user->tweet->content,
                        'created_at' => $user->tweet->created_at,
                    ] : null,
                ];
            })
            ->values();

        $user_all_surveys = [];

        foreach ($departments as $department) {
            $department_id = $department->id;
            $department_name = $department->name;
            $department_surveys = Survey::where('user_id', $user_id)
                ->where('department_id', $department->id)
                ->get();

            $user_all_surveys[] = [
                'department_id' => $department_id,
                'department_name' => $department_name,
                'surveys' => $department_surveys,
            ];
        }

        $user_all_schedules = [];

        $start = now()->startOfMonth();
        $end = now()->endOfMonth();

        foreach ($departments as $department) {
            $department_id = $department->id;
            $department_name = $department->name;
            $department_schedules = Schedule::where('user_id', $user_id)
                ->where('department_id', $department->id)
                ->where(function ($query) use ($start, $end) {
                    $query->whereBetween('start', [$start, $end])   // 開始が今月内
                        ->orWhereBetween('end', [$start, $end]);  // 終了が終了内
                })
                ->get();

            $user_all_schedules[] = [
                'department_id' => $department_id,
                'department_name' => $department_name,
                'schedules' => $department_schedules,
            ];
        }

        return Inertia::render(
            'user_todo_page',
            [
                'display_data' => [
                    'display_todos' => $user_all_todos,
                    // ユーザ一人分の情報が入っています（消さないでください）
                    'user' => $user,
                    'members' => $members,
                    'departments' => $departments,
                    'user_all_surveys' => $user_all_surveys,
                    'schedules' => $user_all_schedules,
                ],
            ]
        );
    }

    public function done($todo_id)
    {
        $user_id = Auth::id();
        $todo = Todo::where('user_id', $user_id)
            ->where('id', $todo_id)
            ->first();

        if ($todo) {
            $todo->done = true;
            $todo->save();
        }

        return redirect()->back();

    }
}
