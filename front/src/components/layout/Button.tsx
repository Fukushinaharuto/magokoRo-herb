import Image from "next/image";

type Props = {
    name: string;
    color: string;
    url: string;
};

export function Button({ name, color, url }: Props) {
    return (
        <div className={`
            relative inline-block border-2 border-black text-text text-20 pl-4 pr-5 py-3 group cursor-pointer
            transition-[transform,box-shadow] duration-300
            hover:scale-105 hover:shadow-box-2xl
        `}>
            <div className="flex gap-3">
                {name}
                <Image src={url} alt="searchアイコン" width={35} height={35} priority />
            </div>
            <div
                className={`
                    absolute ${color} w-full h-full bottom-0 right-0 -z-10
                    translate-x-2 translate-y-2
                    group-hover:translate-x-0 group-hover:translate-y-0
                    transition-transform duration-300
                    shadow-drop-2xl
                `}
            />
        </div>
    );
}

