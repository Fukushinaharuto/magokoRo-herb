<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class ProductDetail extends Model
{
    protected $fillable = [
        'tag_id',
        'name',
        'number',
        'type',
        'image_url',
        'color',
        'price',
    ];

    // リレーション
    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class);
    }

    public function ingredients(): BelongsToMany
    {
        return $this->belongsToMany(Ingredient::class, 'ingredient_product_details');
    }

    public function favorites(): HasMany
    {
        return $this->hasMany(Favorite::class);
    }

    public function products(): HasMany
    {
        return $this->hasMany(Product::class);
    }

    public function tag(): BelongsTo
    {
        return $this->belongsTo(Tag::class, 'tag_id', 'id');
    }
    
}
