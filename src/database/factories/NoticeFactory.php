<?php

namespace Database\Factories;

use App\Models\Department;
use App\Models\Notice;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Notice>
 */
class NoticeFactory extends Factory
{
    protected $model = Notice::class;

    public function definition(): array
    {
        return [
            'department_id' => Department::factory(),
            'content' => $this->faker->paragraph(),
        ];
    }
}
