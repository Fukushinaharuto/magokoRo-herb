import Image from "next/image"


type Props = {
    id: string;
    name: string;
    price: number;
    url: string;
};

export function ListItem({ id, name, price, url}: Props) {
    return (
        <div className="max-w-xs bg-cream rounded-4xl shadow-md py-6">
            <div className="flex justify-center">
                <div className="w-[80%] h-auto  bg-gray rounded-full aspect-square flex justify-center items-center">
                    <div className="relative w-[80%] h-[80%]">
                        <Image
                            src={url}
                            alt="top画像"
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-center text-text text-20 mt-5">
                <div>
                    <p>{id}</p>
                    <h1 className="text-24">{name}</h1>
                    <p className="text-end pr-2">{price}yen~</p>
                </div>
            </div>
        </div>
    )
}