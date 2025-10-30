<?php

namespace App\Http\Controllers;

use App\Models\Department;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        $user_department_items = $user->departments;
        $user_department_ids = [];

        foreach ($user_department_items as $user_department_item) {
            $user_department_ids[] = $user_department_item->id;
        };

        $departments = Department::all(['id', 'name']);

        return Inertia::render('home', [
            'departments' => $departments,
            'user_department_ids' => $user_department_ids,
        ]);
    }
}
