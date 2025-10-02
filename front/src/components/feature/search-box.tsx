import Image from "next/image";
import { ProductIndex, ProductIndexResponse } from "@/api/product-index";
export type Props = {
    setProducts: (products: ProductIndexResponse[]) => void;
};

export function SearchBox({ setProducts }: Props) {

    const handleSearch = (id: number) => {
        ProductIndex({id}).then(({ data }) => {
            setProducts(data);
        });
    }
    return (
        <div className="bg-[#D9D9D9]/40 top-[130px] left-[10px] fixed backdrop-blur-[10px] z-40 p-10">
            <div className="flex flex-col w-full text-24 gap-5">
                <button 
                    className="bg-yellow py-3 px-5 rounded-sm flex justify-between items-center shadow-drop-xl hover:scale-103 hover:shadow-none hover:-translate-y-2 transition-transform duration-300" 
                    onClick={() => {
                        const element = document.getElementById('index');
                        element?.scrollIntoView({ behavior: 'smooth' });
                        handleSearch(1);
                    }}
                >
                    <p>★Beautyブレンド</p>
                    <div className="relative bg-[#D9D9D9] w-12 h-12 rounded-full flex items-center justify-center">
                        <div className="w-[60%] h-[60%] relative">
                            <Image
                            src="/click.svg"
                            alt="top画像"
                            fill
                            priority
                            />
                        </div>
                    </div>
                    
                </button>
                <button 
                    className="bg-yellow py-3 px-5 rounded-sm flex justify-between gap-5 items-center shadow-drop-xl hover:scale-103 hover:shadow-none hover:-translate-y-2 transition-transform duration-300"
                    onClick={() => {
                        const element = document.getElementById('index');
                        element?.scrollIntoView({ behavior: 'smooth' });
                        handleSearch(2);
                    }}
                >
                    <p>★季節の変わり目ブレンド</p>
                    <div className="relative bg-[#D9D9D9] w-12 h-12 rounded-full flex items-center justify-center">
                        <div className="w-[60%] h-[60%] relative">
                            <Image
                            src="/click.svg"
                            alt="top画像"
                            fill
                            priority
                            />
                        </div>
                    </div>
                    
                </button>
                <button 
                    className="bg-yellow py-3 px-5 rounded-sm flex justify-between items-center shadow-drop-xl hover:scale-103 hover:shadow-none hover:-translate-y-2 transition-transform duration-300"
                    onClick={() => {
                        const element = document.getElementById('index');
                        element?.scrollIntoView({ behavior: 'smooth' });
                        handleSearch(3);
                    }}
                >
                    <p>★おやすみブレンド</p>
                    <div className="relative bg-[#D9D9D9] w-12 h-12 rounded-full flex items-center justify-center">
                        <div className="w-[60%] h-[60%] relative">
                            <Image
                            src="/click.svg"
                            alt="top画像"
                            fill
                            priority
                            />
                        </div>
                    </div>
                    
                </button>
                <button 
                    className="bg-yellow py-3 px-5 rounded-sm flex justify-between items-center shadow-drop-xl hover:scale-103 hover:shadow-none hover:-translate-y-2 transition-transform duration-300"
                    onClick={() => {
                        const element = document.getElementById('index');
                        element?.scrollIntoView({ behavior: 'smooth' });
                        handleSearch(4);
                    }}
                >
                    <p>★体サポートブレンド</p>
                    <div className="relative bg-[#D9D9D9] w-12 h-12 rounded-full flex items-center justify-center">
                        <div className="w-[60%] h-[60%] relative">
                            <Image
                            src="/click.svg"
                            alt="top画像"
                            fill
                            priority
                            />
                        </div>
                    </div>
                    
                </button>
                <button 
                    className="bg-yellow py-3 px-5 rounded-sm flex justify-between items-center shadow-drop-xl hover:scale-103 hover:shadow-none hover:-translate-y-2 transition-transform duration-300"
                    onClick={() => {
                        const element = document.getElementById('index');
                        element?.scrollIntoView({ behavior: 'smooth' });
                        handleSearch(5);
                    }}
                >
                    <p>★心ブレンド</p>
                    <div className="relative bg-[#D9D9D9] w-12 h-12 rounded-full flex items-center justify-center">
                        <div className="w-[60%] h-[60%] relative">
                            <Image
                            src="/click.svg"
                            alt="top画像"
                            fill
                            priority
                            />
                        </div>
                    </div>
                    
                </button>
            </div>
        </div>
    )
}