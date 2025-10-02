"use client"
import { Button } from "@/components/layout/Button"
import { Product } from "@/components/feature/product"
import { H1 } from "@/components/layout/H1"
import { useState } from "react";

export default function Page() {

    const productData = {
        number: 100,
        type: "BLEND",
        name: "胃腸Careブレンド",
        color: "bg-pink",
        url: "/herb.png",
        price: 600
    };






    const [favorites, setFavorites] = useState([productData])

    return( 
        <div className="mt-[70px]">
            <H1
                name="Favorites!"
                explanation="お気に入り"
            />
            <div className="flex justify-center gap-20 mt-14">
                <Button
                    name="Search Brend"
                    color="bg-yellow"
                    url="/search.svg"
                />
                <Button
                    name="Reset"
                    color="bg-accent"
                    url="/reset.svg"
                />
            </div>
            <div className="flex justify-center mt-20"> 
                <div className="max-w-5xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {favorites.map((favorite, index) => (
                        <Product
                            key={index}
                            {...favorite}
                        />
                    ))}  
                    
                </div>
            </div>

        </div>

    )
}