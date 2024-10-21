import React from "react";

function HeroSection() {
  return (
    <div className="text-center flex flex-col gap-3 mb-10">
      <h1 className="text-5xl mt-16 font-[Itim]">
        Discover the <span className="text-[#1937D6]">Ideal match</span> for{" "}
        <br /> Professional needs.
      </h1>
      <h1 className="text-lg font-semibold text-[#999999] ">
        Search your dream job now.
      </h1>

      <div className="flex items-center justify-center gap-5 ">
        <div className=" border flex gap-2 items-center rounded-full px-4 py-2 border-[#999999] shadow-xl w-[30%]">
        <i className="ri-search-line font-semibold"></i>
        <input type="text" 
        placeholder="Search your dream job" 
        className="text-[#979797] bg-transparent  w-full focus:outline-none focus:font-semibold focus:text-black " />
        </div>
        <button className="bg-[#1937D6] text-white border border-[#1937D6] rounded-full px-8 font-semibold py-2 shadow-xl">Search</button>
      </div>
    </div>
  );
}

export default HeroSection;
