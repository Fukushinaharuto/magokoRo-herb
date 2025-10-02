<?php

namespace App\Http\Controllers;

use App\Models\ProductDetail;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $tagId = $request->input('id');

        $query = ProductDetail::query();

        if ($tagId) {
            $query->where('tag_id', $tagId);
        }

        $products = $query->get()->map(function ($product) {
            return [
                'color' => $product->color,
                'url' => $product->image_url,
                'number' => $product->number,
                'name' => $product->name,
                'type' => $product->type,
                'price' => $product->price,
            ];
        });

        return response()->json($products);
    }

    public function show(Request $request): JsonResponse
    {
        $number = $request->integer('number');

        $productDetail = ProductDetail::where('number', $number)->first();
        $products = Product::where('product_detail_id', $productDetail->id)->get()
            ->map(function ($product) {
                return [
                    'id' => $product->id,
                    'price' => $product->productPrice->price,
                ];
            });

        $response = [
            'id' => $productDetail->id,
            'color' => $productDetail->color,
            'url' => $productDetail->image_url,
            'number' => $productDetail->number,
            'name' => $productDetail->name,
            'type' => $productDetail->type,
            'product10' => $products->get(0),
            'product20' => $products->get(1),
            'product30' => $products->get(2),
            'comments' => $productDetail->comments->pluck('value')->all(),
            'ingredients' => $productDetail->ingredients->pluck('value')->all(),
        ];

        return response()->json($response);
    }

}
