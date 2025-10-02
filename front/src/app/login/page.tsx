"use client"

import { useForm } from "react-hook-form";
import { H1 } from "@/components/layout/H1";
import { Button } from "@/components/layout/Button";
import { UserLogin, UesrLoginRequest } from "@/api/user-login";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Input } from "@/components/layout/Input";


export default function Page() {

    const router = useRouter();
    const { register, handleSubmit, setError, formState: { errors }} = useForm<UesrLoginRequest>();
    
    const onSubmit = (req: UesrLoginRequest) => {
        UserLogin(req).then(( data ) => {
            if(data.success){
                Cookies.set("authToken", data.authToken, { expires: 7, secure: true, sameSite: "strict" });
                router.push('/top'); 
            } else {
                if (data.type === "validation"){
                    Object.entries(data.errors).forEach(([type, messages]) => {
                        setError(type as "email" | "password", {
                            message: (messages as string[])[0],
                        });                    
                    });
                } else if (data.type === "email"){
                    setError("email", {
                        message: (data.messages as string[])[0],
                    }); 
                } else if (data.type === "password"){
                    setError("password", {
                        message: (data.messages as string[])[0],
                    }); 
                }
                
            }
        });
    };

    return(
        <div className="relative pt-[60px]  flex justify-center w-full h-screen" style={{ backgroundImage: "url('/top.jpg')" }}>
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
                        <Input
                            labelEn="Email"
                            labelJp="メールアドレス"
                            required={true}
                            id="email"
                            type="email"
                            placeholder="例）Example@gmail.com"
                            register={register}
                            errors={errors}
                        />
                        <div className={`${!errors.email && "mt-3"}`}>
                            <Input
                                labelEn="Password"
                                labelJp="パスワード"
                                required={true}
                                id="password"
                                type="password"
                                placeholder="例）Password"
                                register={register}
                                errors={errors}
                            />
                        </div>
                    </div>
                    
                    <div className="my-20">
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
                            handleClick={() => router.push('/register')}
                        />
                    </div>
                    
                </form>
            </div>
        </div>
    )
}