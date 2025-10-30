<?php

namespace App\Http\Controllers;

use App\Models\Department;
use App\Models\Notice;
use App\Models\User;
use App\Models\Todo;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Auth;

class DepartmentController extends Controller
{
    public function index(int $department_id): Response
    {
        $user = Auth::user();
        $user_id = $user->id;

        $department = Department::findOrFail($department_id);

        $department_user_todos = [];

        $todos = Todo::where('user_id', $user_id)
            ->where('department_id', $department->id)
            ->get();

        $department_user_todos[] = [
            'department_id' => $department->id,
            'department_name' => $department->name,
            'todos' => $todos,
        ];

        $members = $department->users()
            ->get()
            ->map(static function (User $user) {
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

        $notices = $department->notices()
            ->select('id', 'title', 'content', 'created_at')
            ->orderByDesc('created_at')
            ->get()
            ->map(static function (Notice $notice) {
                return [
                    'id' => $notice->id,
                    'title' => $notice->title,
                    'content' => $notice->content,
                    'created_at' => $notice->created_at,
                ];
            })
            ->values();

        return Inertia::render('department_page', [
            'display_data' => [
                'department_id' => $department->id,
                'department_name' => $department->name,
                'members' => $members,
                'notices' => $notices,
                'user' => $user,
                'display_todos' => $department_user_todos,
            ],
        ]);
    }
}
