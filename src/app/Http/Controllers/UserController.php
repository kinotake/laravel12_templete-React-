<?php

namespace App\Http\Controllers;

use App\Models\Department;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $departments = Department::all(['id', 'name']);

        return Inertia::render('home', [
            'departments' => $departments,
        ]);
    }
}
