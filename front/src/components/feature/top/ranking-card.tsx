import Image from "next/image"
import { RankingIndexResponse } from "@/api/ranking-index"

export function RankingCard({ number, type, name, comments, ingredients, color, url }: RankingIndexResponse){
    return(
        <div className="bg-white rounded-3xl max-w-4xl w-full shadow-drop-2xl hover:scale-103 hover:shadow-none py-6 hover:-translate-y-3 transition-transform duration-300">
            <div className="grid grid-cols-2 gap-4 p-5">
                <div className="px-8 flex items-center text-16">
                    <div>
                        <p>No.{number} / {type}</p>
                        <h2 className="text-24 mt-1 leading-none">{name}</h2>
                        <h3 className="text-20 mt-2">おすすめ</h3>
                        <div className="mt-2">
                        {comments.map((comment, index) => (
                            <p key={index}>{comment}</p>
                        ))}
                        </div>
                        <h3 className="text-20 mt-2">使用ハーブ</h3>
                        <div className="mt-2">
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                            {ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={`w-full h-[400px] rounded-xl ${color} flex justify-center items-center`}>
                    <div className="relative w-[80%] h-[80%]">
                        <Image
                            src={url}
                            alt="ハーブ画像"
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}