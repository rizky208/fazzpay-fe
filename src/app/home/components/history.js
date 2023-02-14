"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export const History = () => {
  const [historyData, setHistoryData] = useState([]);
  const [refetch, setRefetch] = useState(false);
  const getHistoryData = async () => {
    if (typeof window !== "undefined") {
        const result = await localStorage.getItem("@userLogin");
        const parsing = JSON.parse(result);
        fetch(`http://localhost:5000/api/v1/profile/history/${parsing.user.id}`, {
        // next: { revalidate: 10 },
          method: "GET",
        })
          .then((res) => res.json())
          .then((result) => {
            setHistoryData(result?.data);
          })
          .catch((error) => {
            console.log(error.message);
          });
    }
  };
  useEffect(() => {
    getHistoryData();
  }, [refetch]);

  return (
    <div className="bg-white rounded-xl drop-shadow-xl">
      <div className="p-5">
        <h1>Transaction History</h1>
        { historyData.length > 0 &&  historyData?.map((item, index) => {
          return (
            <div className="flex p-[20px]" key={index}>
              <Image src="/user1.png" width={50} height={50} alt="" />
              <div className="mx-[10px]">
                <h1>{item.name}</h1>
                <h2>{item.category}</h2>
              </div>
              <h1>{item.balance}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};
