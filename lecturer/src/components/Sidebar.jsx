import { useState } from "react"
import Class from "./Class";
import New from "./New";
import Update from "./Update";

const Sidebar = () => {
    const[res,setRes]=useState("Class");
  return (
    <div className="w-[150px] h-screen py-2 bg-green-500 justify-between flex flex-col">
        <div className="w-full justify-start flex flex-col text-white font-medium">
            <a onClick={()=>setRes("Class")} className="hover:bg-green-700 px-1 py-2">My Class</a>
            <a onClick={()=>setRes("New")} className="hover:bg-green-700 px-1 py-2">Enter Results</a>
            <a onClick={()=>setRes("update")} className="hover:bg-green-700 px-1 py-2">Update Results</a>
            <a></a>
        </div>
        <div>
            {res==="Class"?<Class/>:null}
            {res==="New"?<New/>:null}
            {res==="update"?<Update/>:null}
        </div>
        <p>Zulu</p>
    </div>
  )
}

export default Sidebar