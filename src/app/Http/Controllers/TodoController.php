<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Todo;

class TodoController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $user_id = $user->id;

        $departments = $user->departments;

        $department_todos = [];

        foreach ($departments as $department) {
            $department_id = $department->id;
            $department_todos = Todo::where('user_id', $user_id)
                ->where('department_id', $department->id)
                ->get();

            $department_all_todos[] =[
                'department_id' => $department_id,
                'todos' => $department_todos,
            ];
        }

        $no_department_todos = [];

        $todos = Todo::where('user_id', $user_id)
            ->where('department_id', null)
            ->get();

        $no_department_todos[] = [
            'department_id' => null,
            'todos' => $todos,
        ];

        $members = collect([$user])
            ->map(static function ($user) {
                return [
                    'id' => $user->id,
                    'name' => $user->name,
                    'img' => $user->img,
                    'tweet' => $user->tweet ? [
                        'id' => $user->tweet->id,
                        'content' => $user->tweet->content,
                        'created_at' => $user->tweet->created_at,
                    ] : null,
                ];
            })
            ->values();

        return Inertia::render(
            'user_todo_page',
            [
                'department' => [
                    'department_todos' => $department_todos,
                    'no_department_todos' => $no_department_todos,
                    'members' => $members,
                ],
            ]
        );
    }
}
