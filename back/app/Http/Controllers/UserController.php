<?php

namespace App\Http\Controllers;

use Exception;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function login(LoginRequest $request)
    {
        try {
            $validated = $request->validated();
            $user = User::where('email', $validated['email'])->first();

            if (!$user) {
                return response()->json([
                    'success' => false,
                    'type' => "email",
                    'messages' => ['ユーザーが見つかりません。']
                ], 401);
            }
            if (!Hash::check($validated['password'], $user->password)) {
                return response()->json([
                    'success' => false,
                    'type' => "password",
                    'messages' => ['パスワードが正しくありません。']
                ], 401);
            }

            $token = $user->createToken('token')->plainTextToken;

            return response()->json([
                'success' => true,
                'authToken' => $token,
            ]);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'type' => "email",
                'messages' => ['ログインに失敗しました'],
            ], 500);
        }
    }

    public function register(RegisterRequest $request)
    {
        try {
            $validated = $request->validated();
            $user = User::create([
                'name' => $validated['name'],
                'email' => $validated['email'],
                'password' => Hash::make($validated['password']),
                'telephone_number' => $validated['telephoneNumber'],
                'post_code' => $validated['postCode1']. '-'.$validated['postCode2'] ?? null,
                'prefectures' => $validated['prefectures'] ?? null,
                'municipalities' => $validated['municipalities'] ?? null,
                'street_address' => $validated['streetAddress'] ?? null,
            ]);

            $token = $user->createToken('token')->plainTextToken;

            return response()->json([
                'success' => true,
                'authToken' => $token,
            ]);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'type' => "email",
                'messages' => ['新規登録に失敗しました'],
            ], 500);
        }
    }
}
