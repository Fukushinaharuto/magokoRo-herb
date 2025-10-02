"use client"
import { H1 } from "@/components/layout/H1"
import Image from "next/image"
import { useEffect, useState } from "react";
import { CartIndex, CartItem } from "@/api/cart-index";
import { CartUpdate } from "@/api/cart-update";
import Link from "next/link";

export default function Page() {

    const [products, setProducts] = useState<CartItem[]>([]);
    const [total, setTotal] = useState<number>();

    const handleUpdate = (id: number, mode: string, quantity?: number) => {
        CartUpdate({ id, mode, quantity }).then(( data ) => {
            console.log(data);
            setProducts((prevProducts) =>
                prevProducts.map((product) =>
                    product.id === id ? { ...product, quantity: data.quantity } : product
                )
            )
        });
    };
    const handleChange = (id: number, quantity: number) => { 
        
        if (quantity < 0 || quantity > 99) {
            return;
        }
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === id ? { ...product, quantity: quantity } : product
            )
        )
    };

    useEffect(() => {
        CartIndex().then(({ carts, total_price }) => {
            setProducts(carts);
            setTotal(total_price)
        });
    }, []);

    if (!products||!total) return <p>Loading...</p>;

    return(
        <div>
            <H1
                name="Shopping Cart"
                explanation="ショッピング  カート"
                color2="text-purple"
            />
            <div className="relative max-h-screen z-0 mt-5">
            <div className="absolute top-0 bottom-0 bg-cart -z-10" style={{ left: "calc(50% - 30.5rem)", right: "calc(50% - 35.5rem)" }}/>
                <div className="flex justify-center">
                    <div className="relative mt-5 z-20 max-w-5xl w-full">
                        <div className="flex justify-center max-w-5xl mx-auto gap-6">
                            <div className="w-2/3">
                                <table className="w-full text-16">
                                    <thead className="border-2 border-black">
                                        <tr>
                                            <th className="py-3 w-2/6"></th>
                                            <th className="py-3 w-2/6">商品</th>
                                            <th className="py-3 w-1/6">数量</th>
                                            <th className="py-3 w-1/6">合計</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {products.map((product) => (
                                        <tr className="border-2 border-black" key={product.id}>
                                            <td className="py-4 flex justify-center">
                                                <div className={`${product.color ? "bg-pink" : "bg-blue"} w-35 h-35 rounded-full flex justify-center items-center`}>
                                                    <div className="relative w-[80%] h-[80%]">
                                                        <Image
                                                            src={product.url}
                                                            alt="top画像"
                                                            fill
                                                            style={{ objectFit: 'cover' }}
                                                            priority
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-3">
                                                <div className="text-20">{product.name}</div>
                                                <div className="flex justify-between items-center">
                                                    <p className="text-14">No.{product.number} / {product.type}</p>
                                                    <p className="text-16">{product.amount}杯分</p>
                                                </div>
                                                    
                                                
                                            </td>
                                            <td className="text-center">
                                                <div className="flex items-center justify-center ml-2">
                                                    <button className="px-1" onClick={() => handleUpdate(product.id, "down")}>-</button>
                                                    <input
                                                        type="number"
                                                        value={product.quantity}
                                                        min={0}
                                                        max={99}
                                                        onChange={(e) => {
                                                            const num = parseInt(e.target.value, 10);
                                                            handleChange(product.id, num)
                                                        }}
                                                        onBlur={(e) => {
                                                            const num = parseInt(e.target.value, 10);
                                                            handleUpdate(product.id, "input", num);
                                                        }}
                                                        className="w-10 border rounded text-center
                                                            [&::-webkit-inner-spin-button]:appearance-none
                                                            [&::-webkit-outer-spin-button]:appearance-none
                                                            [appearance:textfield]"
                                                    />
                                                    <button className="px-1" onClick={() => handleUpdate(product.id, "up")}>+</button>
                                                    <Image
                                                        src="/delete.svg"
                                                        alt="削除アイコン"
                                                        height={20}
                                                        width={20}
                                                        priority
                                                    />
                                                </div>
                                            </td>
                                            <td className="text-center">
                                                ¥{product.price}
                                            </td>
                                        </tr>
                                    ))} 
                                    </tbody>
                                </table>
                            </div>
                            <div className="w-1/3 sticky top-20 h-fit p-4 border rounded shadow bg-white flex justify-center text-16">
                                <div>
                                    <div className="text-center text-20">備考欄</div>
                                    <textarea
                                        id="remark"
                                        rows={6}
                                        className="w-full border-2 border-black p-2 resize-none focus:outline-none focus:ring focus:border-blue-500 mt-3"
                                        placeholder="ご要望・備考はこちらにご記入ください"
                                    />
                                    <table className="w-full mt-3">
                                        <tbody>
                                            <tr className="border-2 border-black">
                                                <td className="px-4 py-2">送料</td>
                                                <td className="px-4 py-2 text-right">¥200</td>
                                            </tr>
                                            <tr className="border-2 border-black">
                                                <td className="px-4 py-2">購入金額</td>
                                                <td className="px-4 py-2 text-right">¥{total}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="flex justify-end mt-3">
                                        <p>合計金額：</p>
                                        <p>¥{total+200}<span className="text-10">（税込）</span></p>
                                    </div>
                                    <div className="flex justify-center mr-3 mt-5 mb-3">
                                        <button className="bg-accent py-3 px-10 rounded-2xl border-2 shadow-drop-xl hover:shadow-none"><Link href="/top">購入する</Link></button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative z-50 w-52 h-[120px]" style={{ left: "calc(50% - 33.5rem)" }}>
                    <div className="text-yellow text-40">
                        <div>magokoRo</div>
                        <div className="leading-none">Herb</div>
                            
                    </div>    
                </div>
            </div>
        </div>
    )
}