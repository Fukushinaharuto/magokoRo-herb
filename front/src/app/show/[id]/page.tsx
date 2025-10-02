"use client"
import Image from "next/image"
import { H1 } from "@/components/layout/H1"
import { useState, useEffect } from "react";
import { ProductShow, ProductShowResponse } from "@/api/product-show";
import { useParams } from "next/navigation";
import { CartStore } from "@/api/cart-store";

export default function Page() {

    const [product, setProduct] = useState<ProductShowResponse>();
    const params = useParams();
    const number = String(params.id);

    useEffect(() => {
        ProductShow({number}).then(({ data }) => {
            setProduct(data);
        });
    }, []);

    const [value10, setValue10] = useState("");
    const [value20, setValue20] = useState("");
    const [value30, setValue30] = useState("");

    if (!product) return <p>Loading...</p>;

    const handleAddCart10 = () => {
        CartStore({ 
            id: product.product10.id, 
            quantity: Number(value10)
        })
        .then((res) => {
            if (res.success){
                alert(res.messages)
            } else{
                alert(res.errors[0])
                console.log(res.errors);
            }
        });
    }
    const handleAddCart20 = () => {
        CartStore({ 
            id: product.product20.id, 
            quantity: Number(value20)
        })
        .then((res) => {
            if (res.success){
                alert(res.messages)
            } else{
                alert(res.errors[0])
                console.log(res.errors);
            }
        });
    }
    const handleAddCart30 = () => {
        CartStore({ 
            id: product.product30.id, 
            quantity: Number(value30)
        })
        .then((res) => {
            if (res.success){
                alert(res.messages)
            } else{
                alert(res.errors[0])
                console.log(res.errors);
            }
        });
    }

    return(
        <div className="mt-[70px]">
            <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-4 w-full h-full max-w-5xl text-text mt-20 items-center">
                    <div className="text-16">
                        <p className="mt-2">No.{product.number} / {product.type}</p>
                        <h2 className="text-40 mt-6 leading-none">{product.name}</h2>
                        <h3 className="text-30 mt-5">おすすめ</h3>
                        <div className="mt-2 flex flex-col gap-1">
                            {product.comments.map((comment, index) => (
                                <p key={index}>★{comment}</p>
                            ))}
                        </div>
                        <h3 className="text-30 mt-3">使用ハーブ</h3>
                        <div className="mt-2">
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                                {product.ingredients.map((ingredient, index) => (
                                    <li key={index}>★{ingredient}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={`${product.color ? 'bg-pink' : 'bg-blue'} w-full aspect-square rounded-4xl flex justify-center items-center`}>
                        <div className="relative w-[80%] h-[80%]">
                            <Image
                                src={product.url}
                                alt="herb画像"
                                fill
                                style={{ objectFit: 'cover' }}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-42">
                <H1
                    name="Select Your Plan!"
                    explanation="あなたにあったプランをClick！"
                />
            </div>
            <div className="flex justify-center gap-3 text-64">
                <div className="flex justify-center items-center">
                    <div className="relative w-[300px] h-[300px]">
                        <Image
                            src="/cup.png"
                            alt="カップ画像"
                            fill
                            style={{ objectFit: "cover" }}
                            priority
                        />
                        {/* 画像の上に重ねる文字やボタン */}
                        <div className="absolute top-[20%] left-[16%] text-20 w-[50%] text-center">
                            <h2><span className="text-40">10</span>杯分</h2>
                            <p className="border border-pink mt3">600yen</p>
                            <input
                                type="number"
                                value={value10}
                                onChange={(e) => setValue10(e.target.value)}
                                min={0}
                                max={99}
                                className="border rounded text-center w-24 mt-3
                                    [&::-webkit-inner-spin-button]:appearance-none
                                    [&::-webkit-outer-spin-button]:appearance-none
                                    [appearance:textfield]"
                            />
                            <br />
                            <button className="mt-3" onClick={handleAddCart10}>cart add</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="relative w-[330px] h-[330px]">
                        <Image
                            src="/cup.png"
                            alt="カップ画像"
                            fill
                            style={{ objectFit: "cover" }}
                            priority
                        />
                        {/* 画像の上に重ねる文字やボタン */}
                        <div className="absolute top-[20%] left-[16%] text-20 w-[50%] text-center">
                            <h2><span className="text-40">20</span>杯分</h2>
                            <p className="border border-pink mt3">1000yen</p>
                            <input
                                type="number"
                                value={value20}
                                onChange={(e) => setValue20(e.target.value)}
                                min={0}
                                max={99}
                                className="border rounded text-center w-24 mt-3
                                    [&::-webkit-inner-spin-button]:appearance-none
                                    [&::-webkit-outer-spin-button]:appearance-none
                                    [appearance:textfield]"
                            />
                            <br />
                            <button className="mt-3" onClick={handleAddCart20}>cart add</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="relative w-[360px] h-[360px]">
                        <Image
                            src="/cup.png"
                            alt="カップ画像"
                            fill
                            style={{ objectFit: "cover" }}
                            priority
                        />
                        {/* 画像の上に重ねる文字やボタン */}
                        <div className="absolute top-[20%] left-[16%] text-20 w-[50%] text-center">
                            <h2><span className="text-40">30</span>杯分</h2>
                            <p className="border border-pink mt3">1500yen</p>
                            <input
                                type="number"
                                value={value30}
                                onChange={(e) => setValue30(e.target.value)}
                                min={0}
                                max={99}
                                className="border rounded text-center w-24 mt-3
                                    [&::-webkit-inner-spin-button]:appearance-none
                                    [&::-webkit-outer-spin-button]:appearance-none
                                    [appearance:textfield]"
                            />
                            <br />
                            <button className="mt-3" onClick={handleAddCart30}>cart add</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}