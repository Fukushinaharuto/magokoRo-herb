<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ProductPrice extends Model
{
    protected $fillable = [
        'amount_id',
        'product_detail_id',
        'price',
    ];

    public function amount(): BelongsTo
    {
        return $this->belongsTo(Amount::class);
    }

    public function products(): HasMany
    {
        return $this->hasMany(Product::class);
    }
}
