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

        $todos = Todo::where('user_id', $user_id)
            ->where('department_id', $department_id)
            ->get();

        $department = Department::findOrFail($department_id);

        $members = $department->users()
            ->select('users.id', 'users.name', 'users.img')
            ->with(['tweet:id,user_id,content,created_at'])
            ->orderBy('users.name')
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
            'department' => [
                'department_id' => $department->id,
                'department_name' => $department->name,
                'members' => $members,
                'notices' => $notices,
                'todos' => $todos,
                'user' => $user,
            ],
        ]);
    }
}
