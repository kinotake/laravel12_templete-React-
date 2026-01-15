<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use App\Models\Survey;

class StudyController extends Controller
{
    public function store(Request $request)
    {
        $department_id = $request->department_id;
        $array_number = $request->array_number;
        $user_id = Auth::id();
        $surveys = Survey::where('user_id', $user_id)
            ->where('department_id', $department_id)
            ->get();
        
        $surveys_count = $surveys->count();

        if ($array_number >= $surveys_count) {

            Survey::create([
                'detail' => $request->detail,
                'department_id'  => $request->department_id,
                'user_id'  => $user_id,
            ]);

            return redirect('user/todo');

        }
        else
        {
            $sub_one = $array_number-1;
            $change_servey = Survey::where('user_id', $user_id)
                ->where('department_id', $department_id)
                ->orderBy('id')   
                ->skip($sub_one)       
                ->first();

            $change_servey->detail = $request->detail;
            $change_servey->department_id = $request->department_id;
            $change_servey->save();

            return redirect('user/todo');
        }

        return redirect('user/todo');
    }
}
