import { Button } from "@/components/layout/Button"
import { ListItem } from "@/components/feature/list-item"
import { H1 } from "@/components/layout/H1"

export default function Page() {
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