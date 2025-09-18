"use client"

import { useForm } from "react-hook-form";
import { H1 } from "@/components/layout/H1";
import { Button } from "@/components/layout/Button";

type FormData = {
    email: string;
    password: string;
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
                    name="Login"
                    explanation="ログイン"
                    color1="white"
                    color2="text-yellow"
                />
                <form onSubmit={handleSubmit(onSubmit)} className="text-white text-24 mt-5 px-[22%]">
                    <div className="text-shadow-outline">
                        <div>
                            <label htmlFor="email" className="block text-left">Email <span className="text-16">/ メールアドレス<span className="text-shocking-pink">*</span></span></label>
                            <input
                                className="bg-white w-full placeholder:text-placeholder text-black text-16 py-2 px-5 border-2 border-gray focus:border-black focus:outline-none"
                                id="email"
                                {...register("email")}
                                type="email"
                                placeholder="例）Example@gmail.com"
                            />
                        </div>
                        <div className="mt-2">
                            <label htmlFor="password" className="block text-left">Password <span className="text-16">/ パスワード<span className="text-shocking-pink">*</span></span></label>
                            <input
                                className="bg-white w-full placeholder:text-placeholder text-black text-16 py-2 px-5 border-2 border-gray focus:border-yellow-400 focus:outline-none"
                                id="password"
                                {...register("password")}
                                type="password"
                                placeholder="例）Password"
                            />
                        </div>
                    </div>
                    
                    <div className="my-10">
                        <Button
                            name="Login"
                            color="bg-yellow"
                            url="/sign-in.svg"
                            type="submit"
                        />
                        <p className="my-2">or</p>
                        <Button
                            name="Register"
                            color="bg-accent"
                            url="/sign-up.svg"
                        />
                    </div>
                    
                </form>
            </div>
        </div>
    )
}