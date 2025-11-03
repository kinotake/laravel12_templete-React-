<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;
use App\Models\Chat;
use Illuminate\Support\Facades\Auth;

class PythonController extends Controller
{
    public function index(Request $request)
    {

        $query = $request->input('query');

        $baseUrl = env('FASTAPI_URL');
        $endpoint = '/rag/query';

        $response = Http::post($baseUrl . $endpoint, [
            'query' => $query,
        ]);

        $data = $response->json();

        $reply = $data['reply'] ?? '応答がありません';
        $maxIndex = $data['max_index'] ?? null;
        $maxScore = $data['max_score'] ?? null;

        $user = Auth::user();

        Chat::create([
            'user_id' => $user->id,
            'query' => $query,
            'similar_context' => $maxIndex,
            'answer' => $reply,
            'similarity_score' => $maxScore,
        ]);

        return redirect('/');
    }

    public function edit(Request $request)
    {
        $text = $request->input('text');
        $department_id = $request->input('department_id');

        $baseUrl = env('FASTAPI_URL');
        $endpoint = '/document/edit';

        $response = Http::post($baseUrl . $endpoint, [
            'text' => $text,
            'department_id' => $department_id,
        ]);

        $data = $response->json();

        $reply = $data['reply'] ?? '応答がありません';
        $maxIndex = $data['max_index'] ?? null;
        $maxScore = $data['max_score'] ?? null;

        $user = Auth::user();

        Chat::create([
            'user_id' => $user->id,
            'query' => $query,
            'similar_context' => $maxIndex,
            'answer' => $reply,
            'similarity_score' => $maxScore,
        ]);

        return redirect('/');
    }
}
