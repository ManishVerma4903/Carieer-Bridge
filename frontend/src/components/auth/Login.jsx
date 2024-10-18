import React, { useState } from "react";
import NavBar from "../shared/NavBar";
import { USER_API_END_POINT } from "../../utils/constant";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate();


  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    


    try {
      const res = await axios.post(`${USER_API_END_POINT}/login`,input,{
        header:{
          "Content-Type": "application/json"
        },
        withCredentials:true,

      });
      // console.log(res);
      
      if(res.data.success) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      
    }
    
  };

  return (
    <div className="w-full h-full relative">
      <img
        className="h-full w-[47.5%] absolute "
        src="./Images/LoginImg.png"
        alt=""
      />
      <NavBar />
      <div className="w-1/2 h-full   ml-auto p-20">
        <h1 className="text-[#686262] text-lg">Welcome</h1>
        <h1 className="font-bold text-3xl">Login to CarrerBridge</h1>
        <form className="flex mt-10 flex-col gap-6 h-full" onSubmit={submitHandler}>
          <input
            className="cursor-pointer p-3 rounded-lg bg-[#D9D9D9] border border-[#6B6B6B] text-[#595656]  focus:font-semibold focus:text-black "
            type="text"
            value={input.email}
            name="email"
            onChange={changeEventHandler}
            placeholder="Email"
          />
          <input
            className="cursor-pointer p-3 rounded-lg bg-[#D9D9D9] border border-[#6B6B6B] text-[#595656]  focus:font-semibold focus:text-black  "
            type="password"
            value={input.password}
            name="password"
            onChange={changeEventHandler}
            placeholder="Password"
          />
          <div className="flex gap-2 ">
            <div className="flex gap-2 items-center font-semibold ">
              <input
                className="cursor-pointer"
                type="radio"
                name="role"
                value="student"
                checked={input.role === "student"}
                onChange={changeEventHandler}
              />
              Student
            </div>
            <div className="flex gap-2 items-center font-semibold  ">
              <input
                className="cursor-pointer"
                type="radio"
                name="role"
                value="recruiter"
                checked={input.role === "recruiter"}
                onChange={changeEventHandler}
              />
              Recruiter
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#1937D6] p-2 text-xl rounded-lg text-white font-bold text-center"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
