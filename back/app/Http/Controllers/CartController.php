<?php

namespace App\Http\Controllers;


use App\Http\Requests\CartStoreRequest;
use App\Http\Requests\CartUpdateRequest;
use App\Models\Cart;
use Illuminate\Support\Facades\Auth;


class CartController extends Controller
{

    public function index()
    {
        $userId = Auth::id();
        $carts = Cart::with('product.productDetail')
            ->where('user_id', $userId)
            ->get()
            ->map(function ($cart) {
                return [
                    'id' => $cart->id,
                    'color' => $cart->product->productDetail->color,
                    'url' => $cart->product->productDetail->image_url,
                    'number' => $cart->product->productDetail->number,
                    'name' => $cart->product->productDetail->name,
                    'type' => $cart->product->productDetail->type,
                    'price' => $cart->product->productDetail->price,
                    'amount' => $cart->product->productPrice->amount->value,
                    'quantity' => $cart->quantity,
                ];
            });

            $totalPrice = 0;
            foreach ($carts as $cart) {
                $totalPrice += $cart['price'] * $cart['quantity'];
            }
        
            // 合計金額をレスポンスに含める場合
            return response()->json([
                'carts' => $carts,
                'total_price' => $totalPrice,
            ]);
        }


    public function store(CartStoreRequest $request)
    {
        $validated = $request->validated();
        $userId = Auth::id();
        $productId = (int) $validated['id'];
        $quantity = (int) $validated['quantity'];

        $cart = Cart::where('user_id', $userId)
            ->where('product_id', $productId)
            ->first();

        if ($cart) {
            $cart->quantity += $quantity;
            $cart->save();
        } else {
            $cart = Cart::create([
                'user_id' => $userId,
                'product_id' => $productId,
                'quantity' => $quantity,
            ]);
        }

        return response()->json([
            'success' => true,
            'messages' => 'カートに追加しました。',
        ]);
    }

    public function update(CartUpdateRequest $request)
    {
        $validated = $request->validated();
        $cart = Cart::find($validated['id']);
        $quantity = $cart->quantity;

        switch ($validated['mode']) {
            case "up":
                if ($quantity < 99) {
                    $quantity++;
                    $cart->quantity = $quantity;
                } else {
                    return response()->json([
                        'success' => false,
                    ]);
                }
                break;
            case "down":
                if ($quantity > 0) {
                    $quantity--;
                    $cart->quantity = $quantity;
                } else {
                    return response()->json([
                        'success' => false,
                    ]);
                }
                break;
            case "input":
                $quantity = $validated['quantity'];
                if ($quantity >= 0 && $quantity <= 99) {
                    $cart->quantity = $quantity;
                } else {
                    return response()->json([
                        'success' => false,
                    ]);
                }
                break;
        }

        $cart->save();

        return response()->json([
            'success' => true,
            'quantity' => $quantity,
        ]);
    }

}