import React, { useState } from "react";
import NavBar from "../shared/NavBar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "../../utils/constant";
import { setLoading } from "../../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

function Signup() {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const loading = useSelector((store) => store.auth);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("password", input.password);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      dispatch(setLoading(true));

      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
        toast(res.data.message, {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="h-[100vh] overflow-hidden cursor-default  relative">
      <img
        className="h-full w-[48%] absolute  right-0"
        src="./Images/SignupImg.png"
        alt=""
      />
      <NavBar />
      <div className="w-1/2 px-28 py-12">
        <div>
          <h1 className="text-[#686262] text-lg">Start your journey</h1>
          <h1 className="font-bold text-3xl">Sign Up to CarrerBridge</h1>
        </div>

        <form
          className="flex mt-10 flex-col gap-6 h-full"
          onSubmit={submitHandler}
        >
          <input
            className="p-3 rounded-lg bg-[#D9D9D9] border border-[#6B6B6B] text-[#595656]  focus:font-semibold focus:text-black "
            type="text"
            value={input.fullname}
            name="fullname"
            onChange={changeEventHandler}
            placeholder="Your Name"
          />
          <input
            className="p-3 rounded-lg bg-[#D9D9D9] border border-[#6B6B6B] text-[#595656]  focus:font-semibold focus:text-black "
            type="text"
            value={input.email}
            name="email"
            onChange={changeEventHandler}
            placeholder="Email"
          />
          <input
            className="p-3 rounded-lg bg-[#D9D9D9] border border-[#6B6B6B] text-[#595656]  focus:font-semibold focus:text-black "
            type="password"
            value={input.password}
            name="password"
            onChange={changeEventHandler}
            placeholder="Password"
          />
          <input
            className="p-3 rounded-lg bg-[#D9D9D9] border border-[#6B6B6B] text-[#595656]  focus:font-semibold focus:text-black "
            type="text"
            value={input.phoneNumber}
            name="phoneNumber"
            onChange={changeEventHandler}
            placeholder="Phone Number"
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
            <div className="flex gap-2 items-center font-semibold ">
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
            <div className="flex items-center gap-2 ml-3 font-semibold ">
              Profile
              <input
                className="w-[100%] file:cursor-pointer cursor-pointer text-[#686262]  bg-[#D9D9D9] rounded-md py-1 file:font-bold font-semibold border border-[#6B6B6B] text-xs file:text-sm file:bg-transparent file:border-none "
                accept="image/*"
                type="file"
                onChange={changeFileHandler}
              />
            </div>
          </div>
          {loading ? (
            <button
              type="submit"
              className="w-full bg-[#1937D6] p-2 text-xl rounded-lg text-white font-bold text-center"
            >
              Sign Up
            </button>
          ) : (
            <button className=" mx-auto cursor-default   py-3 text-white  text-center">
              {" "}
              <LuLoader2 className="mr-2 h-10 w-10 animate-spin text-[#1937D6] " />{" "}
            </button>
          )}
          <h1>
            Already have an account?
            <Link className="text-blue-700" to="/login">
              Login
            </Link>
          </h1>
        </form>
      </div>
    </div>
  );
}

export default Signup;
