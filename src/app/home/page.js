import Navigation from "../component/navigation";
import Header from "../component/header/Header";
import Footer from "../component/footer/footer";
import Image from "next/image";
import { History } from "./components/history";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex h-[100%] justify-evenly p-[50px] sm:p-[20px]">
        <div className="hidden sm:flex w-[20%] rounded-xl bg-white drop-shadow-xl">
          <Navigation />
        </div>
        <div className="">
          <div className="block sm:flex border-[1px] rounded-xl p-[40px] bg-[#6379F4] w-[100%]">
            <div className="w-[100%]">
              <h1 className="mb-[10px] text-[#FFFFFF]">Balance</h1>
              <h1 className="mb-[10px] text-[#FFFFFF] text-[50px]">
                Rp120.000
              </h1>
              <h1 className="text-[#FFFFFF]">+6282112801436</h1>
            </div>
            <div>
              <button className="block w-[100%] border-[1px] px-[30px] py-[10px] rounded mb-[50px] bg-[#FFFFFF] opacity-[50%] hover:opacity-[100%]">
                Transfer
              </button>
              <button className="block w-[100%] border-[1px] py-[10px] rounded bg-[#FFFFFF] opacity-[50%] hover:opacity-[100%]">
                Top Up
              </button>
            </div>
          </div>
          <div className="block md:block lg:flex mt-10 justify-between h-[55%]">
            <div className="p-5 mr-5  bg-white rounded-xl h-[100%] drop-shadow-xl">
              <div className="block  ">
                <div className="flex justify-between ">
                  <Image src="/in2.png" width={100} height={100} alt="" />
                  <Image src="/out2.png" width={100} height={100} alt="" />
                </div>
                <div className="px-[30px]">
                  <Image src="/graphic.png" width={250} height={250} alt="" />
                </div>
              </div>
            </div>
            <History />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
