<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\TodoController;
use App\Http\Controllers\ScheduleController;
use App\Http\Controllers\SlackController;
use App\Http\Controllers\PythonController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Http;

Route::get('/', [UserController::class, 'index'])->name('home');
Route::get('/departments/{department_id}', [DepartmentController::class, 'index']);
Route::get('/user/todo', [TodoController::class, 'index']);
Route::get('/schedules/{department_id}', [ScheduleController::class, 'index']);
Route::post('/schedule/store', [ScheduleController::class, 'store']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::post('/aaa', function (Request $request) {
    $payload = json_decode($request->input('payload'), true);
    Log::info('Slack request data', $payload);

    $responseUrl = $payload['response_url'] ?? null;
    if (!$responseUrl) {
        return response()->json(['ok' => false, 'error' => 'No response_url'], 400);
    }

    // 非同期でSlackに返信
    Http::post($responseUrl, [
        'text' => '✅ Laravelがリクエストを受け取りました！（response_url経由）',
        'response_type' => 'ephemeral', // or 'in_channel'
    ]);

    return response()->json(['ok' => true]);
});

Route::post('/slack/interact', [SlackController::class, 'interact']);

Route::post('/api/rag/query', [PythonController::class, 'index']);
Route::post('/api/department/rag/query', [PythonController::class, 'indexDepartment']);
Route::post('/rag/edit/{department_id}', [PythonController::class, 'edit']);

Route::get('/document/edit/{department_id}', [UserController::class, 'show']);