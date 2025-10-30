<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Department extends Model
{
    use HasFactory;

    /**
     * @var list<string>
     */
    protected $fillable = [
        'name',
    ];

    public function notices(): HasMany
    {
        return $this->hasMany(Notice::class);
    }

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'department_user')->withTimestamps();
    }

    public function surveys()
    {
        return $this->hasMany(Survey::class);
    }
}
