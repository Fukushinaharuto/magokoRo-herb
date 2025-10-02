<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Ingredient extends Model
{
    protected $fillable = [
        'value',
    ];

    // リレーション
    public function productDetails(): BelongsToMany
    {
        return $this->belongsToMany(ProductDetail::class, 'ingredient_product_details');
    }
}
