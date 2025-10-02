<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Comment extends Model
{
    protected $fillable = [
        'product_detail_id',
        'value',
    ];

    // リレーション
    public function productDetail(): BelongsTo
    {
        return $this->belongsTo(ProductDetail::class);
    }
}
