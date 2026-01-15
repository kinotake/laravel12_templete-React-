<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DepartmentUser extends Model
{
    use HasFactory;

    protected $table = 'department_user';

    /**
     * @var list<string>
     */
    protected $fillable = [
        'department_id',
        'user_id',
    ];
}

