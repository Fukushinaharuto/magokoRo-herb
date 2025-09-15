import Image from "next/image"
import { RankingCard } from "@/components/feature/top/ranking-card"
import { Button } from "@/components/layout/Button"
import { ListItem } from "@/components/feature/list-item"

export default function Page() {
    return( 
        <div>
            <div style={{ position: "relative", width: "100vw", height: "auto", aspectRatio: "16 / 9" }}>
                <Image
                    src="/top.jpg"
                    alt="top画像"
                    fill
                    priority
                />
                </div>
            <div className="flex justify-center items-center mt-42">
                <div>
                    <h1 className="text-white text-64 tracking-[0.1em] text-shadow-lg">
                        Ranking♡
                    </h1>
                    <p className="text-yellow text-16 text-shadow-lg text-center">いま、これが売れてます</p>
                </div>
            </div>
            <div className="flex justify-center mt-14">
                <RankingCard></RankingCard>
            </div>
            <div className="flex justify-center items-center mt-42">
                <div>
                    <h1 className="text-white text-64 tracking-[0.1em] text-shadow-lg">
                        Line up!
                    </h1>
                    <p className="text-yellow text-16 text-shadow-lg text-center">お好みの一杯がきっとある</p>
                </div>
            </div>
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
                    <ListItem 
                        id="No.100 / BLEND"
                        name="胃腸Careブレンド"
                        price={600}
                        url="/herb.png"
                    />
                    
                </div>
            </div>

        </div>

    )
}