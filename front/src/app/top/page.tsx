"use client"
import Image from "next/image"
import { RankingCard } from "@/components/feature/top/ranking-card"
import { Button } from "@/components/layout/Button"
import { Product } from "@/components/feature/product"
import { H1 } from "@/components/layout/H1"
import { useEffect, useState } from "react"
import { ProductIndex, ProductIndexResponse } from "@/api/product-index"
import { SearchBox } from "@/components/feature/search-box"

export default function Page() {
    //　バックエンドから送られて切るデータ
    const rankingData = {
        number: 100,
        type: "BLEND",
        name: "胃腸Careブレンド",
        comments: [
            "消化器のバランスを整える",
            "胃の健康をサポートする",
        ],
        ingredients: [
            "★レモンバーム",
            "★ジャーマンカモミール",
            "★レモンバーム",
            "★ジャーマンカモミール",
            "★レモンバーム",
            "★レモンバーム",
            "★ジャーマンカモミール",
            "★ジャーマンカモミール",
            "★ジャーマンカモミール",
            "★ジャーマンカモミール",
        ],
        color: "bg-pink",
        url: "/herb.png",
    };

    const [rankings, setRankings] = useState([rankingData])
    const [products, setProducts] = useState<ProductIndexResponse[]>([])
    const [searchModal, setSearchModal] = useState(true);

    useEffect(() => {
        ProductIndex({}).then(({ data }) => {
            setProducts(data);
        });
    }, []);

    const handleReset = () => {
        ProductIndex({}).then(({ data }) => {
            setProducts(data);
        });
    }
    
    return( 
        <div>
            {searchModal &&
                <SearchBox
                    setProducts={setProducts}
                />
            }
            <div style={{ position: "relative", width: "100vw", height: "auto", aspectRatio: "16 / 9" }}>
                <Image
                    src="/top-color.jpg"
                    alt="top画像"
                    fill
                    priority
                />
            </div>
            <div className="mt-42">
                <H1
                    name="Pick Up♡"
                    explanation="いま、これが売れてます"
                />
            </div>
            <div className="flex justify-center mt-14">
                    {rankings.map((ranking, index) => (
                        <RankingCard
                            key={index}
                            {...ranking}
                        />
                    ))}
                
            </div>
            <div className="mt-42" id="index">
                <H1
                    name="Line up!"
                    explanation="お好みの一杯がきっとある"
                />  
            </div>
            
            <div className="flex justify-center gap-20 mt-14">
                <Button
                    name="Search Brend"
                    color="bg-yellow"
                    url="/search.svg"
                    handleClick={() => setSearchModal(!searchModal)}
                />
                <Button
                    name="Reset"
                    color="bg-accent"
                    url="/reset.svg"
                    handleClick={handleReset}
                />
            </div>
            <div className="flex justify-center mt-20"> 
                <div className="max-w-5xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {products.map((product, index) => (
                        <Product
                            key={index}
                            {...product}
                        />
                    ))}    
                </div>
            </div>
            <div className="mt-20"></div>
        </div>

    )
}