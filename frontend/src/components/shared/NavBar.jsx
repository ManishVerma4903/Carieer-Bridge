import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const user = false;
  const [open, setOpen] = useState(false)
  return (
    <div className="w-full h-20 flex items-center justify-between px-24 py-2">
      <h1 className="text-3xl font-semibold font-[Inter]">CarrerBridge</h1>
      <div className="navlinks">
        <ul className="flex gap-6 font-bold text-xl  items-center">
          <li>Home</li>
          <li>Jobs</li>
          <li>Browse</li>
        </ul>
      </div>
      {!user ? (
        <div className="  buttons flex gap-4 text-lg font-bold items-center ">
            <Link to="/login">
          <button className="rounded-md border-black border px-3 py-1  "> Login</button>
            </Link>

            <Link to= "/signup">
          <button className="rounded-md border text-white  px-3 py-1 border-[#FFFFFF]   bg-[#1937d6] drop-shadow-md">SignUp</button>
            </Link>
        </div>
      ) : (
        <div  onClick={() => setOpen(!open)} className="profile cursor-pointer relative w-14 h-14 rounded-full  bg-[url('avtar.png')] bg-cover bg-center ml-28">
            <div className={`popover cursor-default p-2 absolute top-[110%] -right-16  w-60 h-32 border-2 drop-shadow-lg rounded-md ${!open ? `hidden` : `block`}`}>
            <div className="flex gap-1 ">
            <div className="avtar  w-10 h-10 rounded-full bg-[url('avtar.png')] bg-cover bg-center "> </div>
           <div>
           <h1 className="text-sm font-semibold mt-3">Full Name</h1>
           <p className="text-xs">Lorem ipsum dolor sit amet.</p>
           </div>

            </div>

            <div className="mt-1 px-2">
            <div className="flex items-center gap-5">
            <i className="ri-user-3-line  text-lg "/>
            <h5  className="text-xs font-semibold hover:cursor-pointer hover:underline">View Profile</h5>
            </div>
            <div className="flex items-center gap-5">
            <i className="ri-logout-box-r-line"/>
            <h5 className="text-xs font-semibold hover:cursor-pointer hover:underline">Log Out</h5>
            </div>
            </div>
            
            </div>

        </div>
      )}
    </div>
  );
}

export default NavBar;
