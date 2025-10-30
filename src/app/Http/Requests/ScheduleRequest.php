<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ScheduleRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'detail' => ['required', 'string', 'max:32'],
            'start' => ['required', 'date'],
            'end' => ['required', 'date', 'after_or_equal:start'],
        ];
    }

    public function attributes(): array
    {
        return [
            'detail' => '詳細',
            'start' => '開始日',
            'end' => '終了日',
        ];
    }

    public function messages(): array
    {
        return [
            'detail.required' => '詳細は必ず入力してください。',
            'detail.max' => '詳細は2行以内（32文字以内）で入力してください。',
            'start.required' => '開始日は必ず入力してください。',
            'start.date' => '開始日は正しい日付形式で入力してください。',
            'end.required' => '終了日は必ず入力してください。',
            'end.date' => '終了日は正しい日付形式で入力してください。',
            'end.after_or_equal' => '終了日は開始日以降の日付を指定してください。',
        ];
    }
}
