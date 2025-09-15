import Image from "next/image"

export function RankingCard(){
    return(
        <div className="bg-pink rounded-3xl max-w-4xl w-full shadow-drop-2xl hover:scale-103 hover:shadow-box-3xl">
            <div className="grid grid-cols-2 gap-4 p-5">
                <div className="p-8 text-16">
                    <p>No.100 / BLEND</p>
                    <h2 className="text-24 mt-2">胃腸Careブレンド</h2>
                    <h3 className="text-20 mt-3">おすすめ</h3>
                    <div className="mt-2">
                        <p>消化器のバランスを整える</p>
                        <p>胃の健康をサポートする</p>
                    </div>
                    <h3 className="text-20 mt-3">使用ハーブ</h3>
                    <div className="mt-2">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                            <li>★レモンバーム</li>
                            <li>★ジャーマンカモミール</li>
                            <li>★レモンバーム</li>
                            <li>★ジャーマンカモミール</li>
                            <li>★レモンバーム</li>
                            <li>★レモンバーム</li>
                            <li>★ジャーマンカモミール</li>
                            <li>★ジャーマンカモミール</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full h-full rounded-xl bg-gray flex justify-center items-center">
                    <div className="relative w-[80%] h-[80%]">
                        <Image
                            src="/herb.png"
                            alt="top画像"
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