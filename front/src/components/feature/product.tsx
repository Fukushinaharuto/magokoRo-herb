import Image from "next/image"
import Link from "next/link";
import { ProductIndexResponse } from "@/api/product-index";

export function Product({ color, url, number, name, type, price  }: ProductIndexResponse) {
    return (
        <Link href={`/show/${number}`} className="max-w-xs bg-white rounded-4xl shadow-drop-2xl hover:scale-103 hover:shadow-none py-6 hover:-translate-y-3 transition-transform duration-300">
            <div className="flex justify-center">
                <div className={`w-[80%] h-auto ${color ? "bg-pink" : "bg-blue"} rounded-full aspect-square flex justify-center items-center`}>
                    <div className="relative w-[80%] h-[80%]">
                        <Image
                            src={url}
                            alt="top画像"
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-center text-text text-20 mt-5 px-3">
                <div>
                    <p>No.{number} / {type}</p>
                    <h1 className="text-24">{name}</h1>
                    <p className="text-end pr-2">{price}yen~</p>
                </div>
            </div>
        </Link>
    )
}