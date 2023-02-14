"use client";
import Navigation from "../component/navigation";
import Header from "../component/header/Header";
import Footer from "../component/footer/footer";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Profile() {
  const [dataUser, setDataUser] = useState({
    user: { id: "" },
  });
  const [profileData, setProfileData] = useState({});
  const [refetch, setRefetch] = useState(false);
  const getLoginData = async () => {
    if (typeof window !== "undefined") {
      const result = await localStorage.getItem("@userLogin");
      const parsing = JSON.parse(result);
      setDataUser(JSON.parse(result));
      fetch(`http://localhost:5000/api/v1/auth/users/${parsing.user.id}`, {
        // next: { revalidate: 10 },
        method: "GET",
      })
        .then((res) => res.json())
        .then((result) => {
          setProfileData(result.data);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };
  useEffect(() => {
    getLoginData();
  }, [refetch]);

  const [formUser, setFormUser] = useState({
    name: "",
    email: "",
    password: "",
    pin: "",
    phone: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/api/v1/auth/users/${dataUser?.user?.id}`, {
      method: "PATCH",
      body: JSON.stringify(formUser),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result.data);
        setRefetch(!refetch);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  console.log(profileData);

  return (
    <>
      <Header />
      <div className="flex justify-evenly p-[50px] sm:p-[20px]">
        <section className="hidden sm:flex w-[20%] rounded-xl bg-white drop-shadow-xl h-[100vh]">
          <Navigation />
        </section>
        <section>
          <div className="p-5 mr-5  bg-white rounded-xl h-[100%] drop-shadow-xl w-[50vw]">
            <div className="p-[40px]">
              <div className="flex justify-center">
                <Image
                  className=" rounded-xl"
                  src={"/user2.png"}
                  width={120}
                  height={120}
                />
              </div>
              <div className="flex justify-center p-[10px]">
                {/* <Image src={"/Vector.png"} width={15} height={10} /> */}
                <button className="text-[10px] text-[#7A7886]">
                  Edit Photo
                </button>
              </div>
              <div className="mb-[5px]">
                <h1 className="text-center text-[40px]">
                  {profileData.name ?? "-"}
                </h1>
                <h2 className="text-center text-[#7A7886]">
                  {profileData.phone ?? "-"}
                </h2>
              </div>
            </div>
            <div>
              <div className="font-bold mb-7">Personal Information</div>
              <div className="mb-10 text-[#7A7886] text-[12px]">
                We got your personal information from the sign <br /> up
                proccess. If you want to make changes on <br /> your
                information, contact our support.
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex justify-between p-[10px] bg-white rounded-lg my-[10px] drop-shadow-md mb-7">
                <div className="">
                  <span className="ml-1 block text-[12px] text-[#858D96]">
                    Full Name
                  </span>
                  <input
                    defaultValue={profileData.name}
                    className="h-[50px] bg-white appearance-none w-full pt-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[40vw]"
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    onChange={(event) => {
                      // console.log(event.currentTarget.value);
                      setFormUser({
                        ...formUser,
                        name: event.currentTarget.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="flex justify-between p-[10px] bg-white rounded-lg my-[10px] drop-shadow-md mb-7">
                <div className="">
                  <span className="ml-1 block text-[12px] text-[#858D96]">
                    Phone
                  </span>
                  <input
                    defaultValue={profileData.phone}
                    className="h-[50px] bg-white appearance-none w-full pt-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[40vw]"
                    id="phone"
                    type="number"
                    placeholder="Your Phone"
                    onChange={(event) => {
                      // console.log(event.currentTarget.value);
                      setFormUser({
                        ...formUser,
                        phone: event.currentTarget.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="flex justify-between p-[10px] bg-white rounded-lg my-[10px] drop-shadow-md mb-7">
                <div className="">
                  <span className="ml-1 block text-[12px] text-[#858D96]">
                    Verified Email
                  </span>
                  <input
                    defaultValue={profileData.email}
                    className="h-[50px] bg-white appearance-none w-full pt-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[40vw]"
                    id="name"
                    type="email"
                    placeholder="Your Mail"
                    onChange={(event) => {
                      // console.log(event.currentTarget.value);
                      setFormUser({
                        ...formUser,
                        email: event.currentTarget.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="flex justify-between p-[10px] bg-white rounded-lg my-[10px] drop-shadow-md mb-7">
                <div className="">
                  <span className="ml-1 block text-[12px] text-[#858D96]">
                    Password
                  </span>
                  <input
                    defaultValue={profileData.password}
                    className="h-[50px] bg-white appearance-none w-full pt-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[40vw]"
                    id="name"
                    type="password"
                    placeholder="Your Password"
                    onChange={(event) => {
                      // console.log(event.currentTarget.value);
                      setFormUser({
                        ...formUser,
                        password: event.currentTarget.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="flex justify-between p-[10px] bg-white rounded-lg my-[10px] drop-shadow-md mb-7">
                <div className="">
                  <span className="ml-1 block text-[12px] text-[#858D96]">
                    Re-enter Password
                  </span>
                  <input
                    defaultValue={profileData.password}
                    className="h-[50px] bg-white appearance-none w-full pt-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[40vw]"
                    id="name"
                    type="password"
                    placeholder="Re-enter Your Password"
                    onChange={(event) => {
                      // console.log(event.currentTarget.value);
                      setFormUser({
                        ...formUser,
                        password: event.currentTarget.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="flex justify-between p-[10px] bg-white rounded-lg my-[10px] drop-shadow-md mb-7">
                <div className="">
                  <span className="ml-1 block text-[12px] text-[#858D96]">
                    Pin
                  </span>
                  <input
                    defaultValue={profileData.pin}
                    className="h-[50px] bg-white appearance-none w-full pt-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[40vw]"
                    id="name"
                    type="password"
                    placeholder="Your Pin"
                    onChange={(event) => {
                      // console.log(event.currentTarget.value);
                      setFormUser({
                        ...formUser,
                        pin: event.currentTarget.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="flex m-10 justify-center">
                <button
                  type="submit"
                  className="bg-[#6379F4] text-white rounded-lg h-[50px] w-[55%] "
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
