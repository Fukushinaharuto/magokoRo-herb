import Image from "next/image";

type Props = {
    name: string;
    color: string;
    url: string;
    type?: "button" | "submit";
};

export function Button({ name, color, url, type="button"}: Props) {
    return (
        <button type={type}>
  <div
    className={`
      relative inline-block text-text text-20 pl-4 pr-5 py-3 group cursor-pointer z-50
      transition-[transform,box-shadow] duration-300
      hover:scale-105
      overflow-visible
      w-full
    `}
  >
    <div className="absolute inset-0 pointer-events-none border-2 border-black z-50"></div>

    <div className="flex gap-3 z-10 relative">
      {name}
      <Image src={url} alt="searchアイコン" width={35} height={35} priority />
    </div>

    <div
      className={`
        absolute 
        ${color} 
        w-full h-full bottom-0 right-0 -z-10
        translate-x-2 translate-y-2
        group-hover:translate-x-0 group-hover:translate-y-0
        transition-transform duration-300
        shadow-drop-xl

      `}
    />
  </div>
</button>


    );
}

