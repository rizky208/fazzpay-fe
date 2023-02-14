import Image from "next/image";

export default function Navigation() {
  return (
    <div className="flex py-5 ">
      <div className="block h-[70%] ">
        <div className="flex p-[20px] hover:border-l-[1px] border-[blue]">
          <Image
            src={"/grid.png"}
            width={20}
            height={20}
            className="mr-[10px]"
          />
          <button className="">Dashboard</button>
        </div>
        <div className="flex p-[20px] hover:border-l-[1px] border-[blue]">
          <Image
            src={"/arrow-up.png"}
            width={20}
            height={20}
            className="mr-[10px]"
          />
          <button className="">Transfer</button>
        </div>
        <div className="flex p-[20px] hover:border-l-[1px] border-[blue]">
          <Image
            src={"/plus.png"}
            width={20}
            height={20}
            className="mr-[10px]"
          />
          <button className="">Top Up</button>
        </div>
        <div className="flex p-[20px] hover:border-l-[1px] border-[blue]">
          <Image
            src={"/user.svg"}
            width={20}
            height={20}
            className="mr-[10px]"
          />
          <button className="">Profile</button>
        </div>
        <div className="flex p-[20px] hover:border-l-[1px] border-[blue] self-end">
          <Image
            src={"/log-out.png"}
            width={20}
            height={20}
            className="mr-[10px]"
          />
          <button className="">Log Out</button>
        </div>
      </div>
    </div>
  );
}
