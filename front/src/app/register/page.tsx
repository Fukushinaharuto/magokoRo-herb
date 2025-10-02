"use client"

import { useForm } from "react-hook-form";
import { H1 } from "@/components/layout/H1";
import { Button } from "@/components/layout/Button";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { UserRegister, UesrRegisterRequest } from "@/api/user-register";
import { Input } from "@/components/layout/Input";

export type Type = "name" | "email" | "password" | "telephoneNumber" | "postCode1" | "postCode2" | "prefectures" | "municipalities" | "streetAddress";

export default function Page() {
    const router = useRouter();

    const { register, handleSubmit, setError, formState: { errors } } = useForm<UesrRegisterRequest>();

    const onSubmit = (req: UesrRegisterRequest) => {
        UserRegister(req).then(( data ) => {
            if(data.success){
                Cookies.set("authToken", data.authToken, { expires: 7, secure: true, sameSite: "strict" });
                router.push('/top'); 
            } else {
                if (data.type === "validation"){
                    Object.entries(data.errors).forEach(([type, messages]) => {
                        setError(type as Type, {
                            message: (messages as string[])[0],
                        });                    
                    });
                } else if (data.type === "email"){
                    setError("email", {
                        message: (data.messages as string[])[0],
                    }); 
                }
                
            }
        });
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
                        <Input
                            labelEn="Name"
                            labelJp="お名前"
                            required={true}
                            id="name"
                            type="text"
                            placeholder="例）加藤 太郎"
                            register={register}
                            errors={errors}
                        />
                        <div className={`${!errors.name && "mt-3"}`}>
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
                        </div>
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
                        <div className={`${!errors.password && "mt-3"}`}>
                            <Input
                                labelEn="Telephone Number"
                                labelJp="電話番号"
                                required={true}
                                id="telephoneNumber"
                                type="tel"
                                placeholder="例）09000000000"
                                register={register}
                                errors={errors}
                            />
                        </div>
                        <div className={`${!errors.telephoneNumber && "mt-3"}`}>
                            <label htmlFor="postCode1" className="block text-left">
                                Post Code <span className="text-16">/ 郵便番号</span>
                            </label>
                            <div className="flex space-x-2 mt-1">
                                <input
                                    className={`${errors.postCode1 ? "bg-red-200 border-red-500" : "border-gray bg-white"} w-20 placeholder:text-placeholder text-black text-16 py-2 px-3 border-2 focus:border-black focus:outline-none text-center`}
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
                                    className={` ${errors.postCode2 ? "bg-red-200 border-red-500" : "border-gray bg-white"} w-28 placeholder:text-placeholder text-black text-16 py-2 px-3 border-2 focus:border-black focus:outline-none text-center `}
                                    id="postCode2"
                                    {...register("postCode2")}
                                    type="text"
                                    placeholder="4567"
                                    maxLength={4}
                                    inputMode="numeric"
                                    pattern="\d*"
                                />
                            </div>
                            {(errors.postCode1 || errors.postCode2) && (
                                <div className={`flex justify-end ${errors.postCode1 ? "mr-[48%]" : "mr-[20%]"}`}>
                                    <p className="relative z-20 text-10 p-2 rounded mt-1 w-max text-shadow-none text-white bg-gradient-to-t from-pink-400 via-pink-400 to-pink-300">
                                        {errors.postCode1 ? errors.postCode1.message?.toString() : errors.postCode2?.message?.toString()}
                                        <span className="absolute z-10 left-4 -top-1 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-pink-300" />
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className={`${!errors.postCode1 || !errors.postCode2 && "mt-3"}`}>
                            <Input
                                labelEn="Prefectures"
                                labelJp="都道府県"
                                required={false}
                                id="prefectures"
                                type="text"
                                placeholder="例）愛知県"
                                register={register}
                                errors={errors}
                            />
                        </div>
                        <div className={`${!errors.prefectures && "mt-3"}`}>
                            <Input
                                labelEn="Municipalities"
                                labelJp="市町村区"
                                required={false}
                                id="municipalities"
                                type="text"
                                placeholder="例）名古屋市中村区"
                                register={register}
                                errors={errors}
                            />
                            
                        </div>
                        <div className={`${!errors.municipalities && "mt-3"}`}>
                            <Input
                                labelEn="Street Address"
                                labelJp="番地・建物"
                                required={false}
                                id="streetAddress"
                                type="text"
                                placeholder="例）太閤３丁目２−１４ 2F"
                                register={register}
                                errors={errors}
                            />
                        </div>
                    </div>
                    
                    <div className="my-10">
                        <Button
                            name="Register"
                            color="bg-accent"
                            url="/sign-up.svg"
                            type="submit"
                        />
                        <p className="my-2">or</p>
                        <Button
                            name="Login"
                            color="bg-yellow"
                            url="/sign-in.svg"
                            handleClick={() => router.push('/login')}
                        />
                    </div>
                    
                </form>
            </div>
        </div>
    )
}