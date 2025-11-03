<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Chat extends Model
{
    use HasFactory;

    /**
     * @var list<string>
     */
    protected $fillable = [
        'user_id',
        'query',
        'similar_context',
        'answer',
        'similarity_score',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
