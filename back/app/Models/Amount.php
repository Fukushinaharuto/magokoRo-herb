<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Amount extends Model
{
    protected $fillable = [
        'value',
    ];

    // リレーション
    public function productPrices(): HasMany
    {
        return $this->hasMany(ProductPrice::class);
    }
}
