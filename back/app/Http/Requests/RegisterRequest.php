<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255', 'unique:users,email'],
            'password' => ['required', 'string', 'min:8', 'max:30'],
            'telephoneNumber' => ['required', 'string', 'unique:users,telephone_number', 'regex:/^\d{10,11}$/'],
            'postCode1' => ['nullable', 'digits:3'],
            'postCode2' => ['nullable', 'digits:4'],
            'prefectures' => ['nullable', 'string'],
            'municipalities' => ['nullable', 'string'],
            'streetAddress' => ['nullable', 'string', 'max:255'],
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => '名前は必須です。',
            'name.string' => '名前は文字列で入力してください。',
            'name.max' => '名前は255文字以内で入力してください。',
        
            'email.required' => 'メールアドレスは必須です。',
            'email.email' => 'メールアドレスの形式が正しくありません。',
            'email.max' => 'メールアドレスは255文字以内で入力してください。',
            'email.unique' => 'そのメールアドレスは既に使われています。',
        
            'password.required' => 'パスワードは必須です。',
            'password.string' => 'パスワードは文字列で入力してください。',
            'password.min' => 'パスワードは8文字以上で入力してください。',
            'password.max' => 'パスワードは30文字以内で入力してください。',
        
            'telephoneNumber.required' => '電話番号は必須です。',
            'telephoneNumber.string' => '電話番号は文字列で入力してください。',
            'telephoneNumber.unique' => 'その電話番号は既に使われています。',
            'telephoneNumber.regex' => '電話番号は10桁か11桁の数字で入力してください。',
        
            'postCode1.digits' => '郵便番号（前半）は3桁で入力してください。',
            'postCode2.digits' => '郵便番号（後半）は4桁で入力してください。',
        
            'prefectures.string' => '都道府県は文字列で入力してください。',
        
            'municipalities.string' => '市区町村は文字列で入力してください。',
            
            'streetAddress.string' => '町名・番地は文字列で入力してください。',
            'streetAddress.max' => '町名・番地は255文字以内で入力してください。',
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(
            response()->json([
                'success' => false,
                'type' => "validation",
                'errors' => $validator->errors()->toArray()
            ], 422)
        );
    }
}
