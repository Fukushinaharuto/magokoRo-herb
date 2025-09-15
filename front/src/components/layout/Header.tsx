import Image from "next/image";
import Link from "next/link";
export function Header() {
    return (
        <div className="top-0 left-0 position: fixed w-full z-50">
            <div className="flex justify-end items-center h-[60px] bg-white px-4">
                <div className="flex items-center space-x-8">
                    <button className="border py-2 px-4 text-16 rounded-full hover:shadow-box-xl shadow-drop-xl">ログイン</button>
                    <div className="flex space-x-4">
                        <button className="hover:scale-150">
                            <Link href={'/top'}>
                                <Image src="/top.svg" alt="topアイコン" width={35} height={35} priority />
                            </Link>
                        </button>
                        <button className="hover:scale-150">
                            <Image src="/search.svg" alt="searchアイコン" width={35} height={35} priority />
                        </button>
                        <button className="hover:scale-150">
                            <Image src="/favorite.svg" alt="favoriteアイコン" width={35} height={35} priority />
                        </button>
                        <button className="hover:scale-150">
                            <Image src="/cart.svg" alt="cartアイコン" width={35} height={35} priority />
                        </button>
                        <button className="hover:scale-150">
                            <Image src="/menu-open.svg" alt="menu-openアイコン" width={35} height={35} priority />
                        </button>            
                    </div>
                </div>
            </div>
        </div>
    );
}