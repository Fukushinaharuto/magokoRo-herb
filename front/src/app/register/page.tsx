"use client"

import { useForm } from "react-hook-form";
import { H1 } from "@/components/layout/H1";
import { Button } from "@/components/layout/Button";

type FormData = {
    name: string;
    email: string;
    password: string;
    telephoneNumber: string;
    postCode1: number;
    postCode2: number;
    prefectures: string;
    municipalities: string;
    streetAddress: string;
};

export default function Page() {
    
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return(
        <div className="relative mt-[60px] flex justify-center w-full h-full" style={{ backgroundImage: "url('/top.jpg')" }}>
            <div className="absolute inset-0 bg-[#333333]/70 backdrop-blur-[10px]" />
            
            <div className="border-2 border-white max-w-4xl w-full text-center my-10 z-10">
                <H1
                    name="Register"
                    explanation="新規登録"
                    color1="white"
                    color2="text-yellow"
                />
                <form onSubmit={handleSubmit(onSubmit)} className="text-white text-24 mt-5 px-[22%]">
                    <div className="text-shadow-outline">
                        <div>
                            <label htmlFor="name" className="block text-left">Name <span className="text-16">/ お名前<span className="text-shocking-pink">*</span></span></label>
                            <input
                                className="bg-white w-full placeholder:text-placeholder text-black text-16 py-2 px-5 border-2 border-gray focus:border-black focus:outline-none mt-1"
                                id="name"
                                {...register("name")}
                                type="text"
                                placeholder="例）加藤 太郎"
                            />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="email" className="block text-left">Email <span className="text-16">/ メールアドレス<span className="text-shocking-pink">*</span></span></label>
                            <input
                                className="bg-white w-full placeholder:text-placeholder text-black text-16 py-2 px-5 border-2 border-gray focus:border-black focus:outline-none mt-1"
                                id="email"
                                {...register("email")}
                                type="email"
                                placeholder="例）Example@gmail.com"
                            />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="password" className="block text-left">Password <span className="text-16">/ パスワード<span className="text-shocking-pink">*</span></span></label>
                            <input
                                className="bg-white w-full placeholder:text-placeholder text-black text-16 py-2 px-5 border-2 border-gray focus:border-black focus:outline-none mt-1"
                                id="password"
                                {...register("password")}
                                type="password"
                                placeholder="例）Password"
                            />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="telephoneNumber" className="block text-left">Telephone Number <span className="text-16">/ 電話番号<span className="text-shocking-pink">*</span></span></label>
                            <input
                                className="bg-white w-full placeholder:text-placeholder text-black text-16 py-2 px-5 border-2 border-gray focus:border-black focus:outline-none mt-1"
                                id="telephoneNumber"
                                {...register("telephoneNumber")}
                                type="text"
                                placeholder="例）090-0000-0000"
                            />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="postCode1" className="block text-left">
                                Post Code <span className="text-16">/ 郵便番号</span>
                            </label>
                            <div className="flex space-x-2 mt-1">
                                <input
                                className="bg-white w-20 placeholder:text-placeholder text-black text-16 py-2 px-3 border-2 border-gray focus:border-black focus:outline-none text-center"
                                id="postCode1"
                                {...register("postCode1")}
                                type="text"
                                placeholder="123"
                                maxLength={3}
                                inputMode="numeric"
                                pattern="\d*"
                                />
                                <span className="text-white text-24">-</span>
                                <input
                                className="bg-white w-28 placeholder:text-placeholder text-black text-16 py-2 px-3 border-2 border-gray focus:border-black focus:outline-none text-center"
                                id="postCode2"
                                {...register("postCode2")}
                                type="text"
                                placeholder="4567"
                                maxLength={4}
                                inputMode="numeric"
                                pattern="\d*"
                                />
                            </div>
                        </div>

                        <div className="mt-3">
                            <label htmlFor="prefectures" className="block text-left">Prefectures <span className="text-16">/ 都道府県</span></label>
                            <input
                                className="bg-white w-full placeholder:text-placeholder text-black text-16 py-2 px-5 border-2 border-gray focus:border-black focus:outline-none mt-1"
                                id="prefectures"
                                {...register("prefectures")}
                                type="text"
                                placeholder="例）愛知県"
                            />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="municipalities" className="block text-left">Municipalities <span className="text-16">/ 市町村区<span className="text-shocking-pink">*</span></span></label>
                            <input
                                className="bg-white w-full placeholder:text-placeholder text-black text-16 py-2 px-5 border-2 border-gray focus:border-black focus:outline-none mt-1"
                                id="municipalities"
                                {...register("municipalities")}
                                type="text"
                                placeholder="例）名古屋市中村区"
                            />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="streetAddress" className="block text-left">Street Address <span className="text-16">/ 番地・建物<span className="text-shocking-pink">*</span></span></label>
                            <input
                                className="bg-white w-full placeholder:text-placeholder text-black text-16 py-2 px-5 border-2 border-gray focus:border-black focus:outline-none mt-1"
                                id="streetAddress"
                                {...register("streetAddress")}
                                type="text"
                                placeholder="例）太閤３丁目２−１４ 2F"
                            />
                        </div>
                    </div>
                    
                    <div className="my-10">
                        <Button
                            name="Register"
                            color="bg-accent"
                            url="/sign-up.svg"
                        />
                        <p className="my-2">or</p>
                        <Button
                            name="Login"
                            color="bg-yellow"
                            url="/sign-in.svg"
                            type="submit"
                        />
                    </div>
                    
                </form>
            </div>
        </div>
    )
}