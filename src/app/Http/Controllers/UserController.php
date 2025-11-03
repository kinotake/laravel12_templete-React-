<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Department;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\Chat;
use Illuminate\Support\Facades\Http;

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

        $chats = Chat::where('user_id', $user->id)
            ->get();

        return Inertia::render('home', [
            'route' => "all_search",
            'chats' => $chats,
            'departments' => $departments,
            'user_department_ids' => $user_department_ids,
        ]);
    }

    public function show($department_id)
    {
        $user = Auth::user();

        $chats = Chat::where('user_id', $user->id)
            ->get();

        $baseUrl = env('FASTAPI_URL');
        $endpoint = '/document/get';

        $response = Http::post($baseUrl . $endpoint, [
            'department_id' => $department_id,
        ]);

        $data = $response->json();
        $document = $data['document'] ?? '応答がありません';

        return Inertia::render('document_edit', [
            'route' => "department_search",
            'chats' => $chats,
            'document' => $document,
            'department_id' => $department_id,
        ]);
    }
}
