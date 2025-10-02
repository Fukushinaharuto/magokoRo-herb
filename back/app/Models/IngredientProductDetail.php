<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class IngredientProductDetail extends Pivot
{
    protected $table = 'ingredient_product_details';

    protected $fillable = [
        'product_detail_id',
        'ingredient_id',
    ];
}
