import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

type InputProps = {
    labelEn: string;
    labelJp: string;
    required: boolean;
    id: string;
    type?: string;
    placeholder?: string;
    register: UseFormRegister<any>;
    errors: FieldErrors;
};

export function Input({ labelEn, labelJp, required, id, type = "text", placeholder, register, errors }: InputProps) {
    return (
        <div>
            <label htmlFor={id} className="block text-left">
                {labelEn} <span className="text-16">/ {labelJp}{required && <span className="text-shocking-pink">*</span>}</span>
            </label>
            <input
                className={`w-full placeholder:text-placeholder text-black text-16 py-2 px-5 border-2 focus:outline-none focus:border-black ${
                errors[id] ? "bg-red-200 border-red-500" : "border-gray bg-white"
                }`}
                id={id}
                type={type}
                placeholder={placeholder}
                {...register(id)}
            />
            {errors[id] && (
                <div className="flex justify-end">
                    <p className="relative z-20 text-10 p-2 rounded mt-1 w-max text-shadow-none text-white bg-gradient-to-t from-pink-400 via-pink-400 to-pink-300">
                        {errors[id]?.message?.toString()}
                        <span className="absolute z-10 left-4 -top-1 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-pink-300" />
                    </p>
                </div>
            )}
        </div>
    );
}
