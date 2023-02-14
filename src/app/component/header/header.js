'use client'
import { useEffect, useState } from "react";
import Login from "./login";
import Unlogin from "./unlogin";

export default function Header() {
  const [dataUser, setDataUser] = useState({})
  const getLoginData = async ()=> {
    if (typeof window !== "undefined") {
      const result = await localStorage.getItem('@userLogin')
      setDataUser(JSON.parse(result))
    }
  }
  useEffect(()=> {
    getLoginData()
  },[])
  if(typeof dataUser !="undefined") {
    // console.log(dataUser?.user?.name ?? '-','aowkoko-------------')
    return (<>
      <Login name={dataUser?.user?.name ?? '-'} phone={dataUser?.user?.phone ?? '-'} />
    </>
    );
  }
  return(<>
    <Unlogin />
  </>)
}
