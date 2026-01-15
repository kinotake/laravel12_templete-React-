<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Department;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\Chat;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use App\Models\User;
use App\Models\DepartmentUser;

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

    public function energyUpdate(Request $request)
    {

        $login_user_id = Auth::user()->id;
        User::where('id', $login_user_id)->update([
            'energy' => $request->input('new_energy_value'),
        ]);

        return back();
    }

    public function registerDepartmentIndex(Request $request)
    {
        $departments = Department::all();

        return Inertia::render(
            'departments_select',
            [
                'display_data' => [
                    'departments' => $departments,
                ],
            ]
        );

    }

    public function registerDepartment(Request $request)
    {
        $validated = $request->validate([
            'department_ids' => ['required', 'array'],
            'department_ids.*' => ['integer', 'exists:departments,id'],
        ]);

        $user = Auth::user();

        // 既存の所属をいったん全削除（上書きしたい場合）
        DepartmentUser::where('user_id', $user->id)->delete();

        // department_ids を 1つずつ取り出して department_user にレコード作成（Eloquentのcreate）
        foreach ($validated['department_ids'] as $departmentId) {
            DepartmentUser::create([
                'user_id' => $user->id,
                'department_id' => $departmentId,
            ]);
        }

        return redirect('/');

    }

}
