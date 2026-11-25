<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Media extends Model
{
    use HasFactory;

    protected $table = 'media';

    protected $fillable = [
        'title',
        'type',
        'score',
        'year',
        'synopsis',
        'image',
        'genre',
    ];

    protected $casts = [
        'score' => 'float',
        'year' => 'integer',
    ];

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'media_user')->withTimestamps();
    }

    public function scopeSearchTitle($query, ?string $title)
    {
        return $query->when($title, fn ($q) => $q->where('title', 'like', "%{$title}%"));
    }
}
