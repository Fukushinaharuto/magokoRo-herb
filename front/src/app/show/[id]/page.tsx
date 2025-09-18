import Image from "next/image"
import { H1 } from "@/components/layout/H1"

export default function Page() {
    return(
        <div className="mt-[70px]">
            <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-4 w-full h-full max-w-5xl text-white mt-20">
                    <div className="text-20">
                        <p>No.100 / BLEND</p>
                        <h2 className="text-40 mt-2">胃腸Careブレンド</h2>
                        <h3 className="text-36 mt-10">おすすめ</h3>
                        <div className="mt-2">
                            <p>消化器のバランスを整える</p>
                            <p>胃の健康をサポートする</p>
                        </div>
                        <h3 className="text-36 mt-3">使用ハーブ</h3>
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
                    <div className="w-full aspect-square rounded-4xl bg-gray flex justify-center items-center">
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
            <H1
                name="Select Your Plan!"
                explanation="あなたにあったプランをClick！"
            />
        </div>
    )
}