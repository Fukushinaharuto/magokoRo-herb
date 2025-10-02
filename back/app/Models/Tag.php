<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Tag extends Model
{
    protected $table = 'tags';
    protected $fillable = ['value'];

    public function productDetails(): HasMany
    {
        return $this->hasMany(ProductDetail::class, 'tag_id', 'id');
    }
}
