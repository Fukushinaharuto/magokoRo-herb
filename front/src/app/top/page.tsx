import Image from "next/image"
import { RankingCard } from "@/components/feature/top/ranking-card"
import { Button } from "@/components/layout/Button"
import { ListItem } from "@/components/feature/list-item"
import { H1 } from "@/components/layout/H1"

export default function Page() {
    return( 
        <div>
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
                    name="Ranking♡"
                    explanation="いま、これが売れてます"
                />
            </div>
            
            <div className="flex justify-center mt-14">
                <RankingCard></RankingCard>
            </div>
            <div className="mt-42">
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