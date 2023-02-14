import Image from "next/image";

export default function Login({name='aowka', phone='aowk'}) {
  console.log(name, phone)
  return (
    <div className="bg-white p-10 rounded-b-[20px] drop-shadow-xl">
      <div className="flex justify-between w-[100%] px-10">
        <div className="self-center">
          <Image src="/logo-blue.png" width={100} height={80} alt="" />
        </div>
        <div className="flex items-center">
          <div className="px-2">
            <Image
              className="rounded-xl"
              src="/user1.png"
              width={40}
              height={40}
              alt=""
            />
          </div>
          <div className="px-2">
            <div className="text-[#3A3D42] font-bold">{name}</div>
            <div className="">{phone}</div>
          </div>
          <div className="px-2">
            <Image src="/bell.png" width={23} height={23} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
