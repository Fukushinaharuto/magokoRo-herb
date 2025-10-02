<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class CartUpdateRequest extends FormRequest
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
            'id' => ['required', 'exists:carts,id'],     
            'quantity' => ['integer', 'min:0', 'max:99'],
            'mode' => ['required', 'string'],
        ];
    }

    public function messages(): array
    {
        return [
            'id.required' => 'idは必須です。',
            'id.exists' => '指定されたidは存在しません。',
            'quantity.required' => '数量は必須です。',
            'quantity.integer' => '数量は整数で入力してください。',
            'quantity.min' => '数量は0以上で入力してください。',
            'quantity.max' => '数量は99以下で入力してください。',
            'mode.required' => 'モードは必須です。',
            'mode.string' => 'モードは文字列です。',

        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(
            response()->json([
                'success' => false,
                'errors' => $validator->errors()->all(),
            ], 422)
        );
    }
}
