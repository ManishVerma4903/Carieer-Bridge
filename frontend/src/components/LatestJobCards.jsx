import React from "react";

function LatestJobCards() {
  return (
    <div className="m-2 rounded-3xl border-2 border-[#9D9D9D] p-1 cursor-default">
      <div className="bg-[#FFE1CC] rounded-3xl py-3 px-4  ">
        <div className="flex justify-between items-center mb-2">
          <h1 className="bg-white text-black text-sm font-bold px-3 py-1 font-['Hanken Grotesk'] rounded-full">24,May,2024</h1>
          <i className="ri-bookmark-line bg-white cursor-pointer px-2 py-1 rounded-full"></i>
        </div>
        <h1 className="text-sm">Amazon</h1>
        <div className="flex justify-between items-center mb-2">
          <h1 className="w-[70%]  text-xl font-semibold">Senior UI/XI Designer</h1>
          <img
            className="w-10 rounded-full"
            src="https://imgs.search.brave.com/l9Rrf5T0RLHuNWj3O75clJZLa2_8Men-m0z6c3vcnw4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDc3NzEx/OTMuanBn"
            alt=""
          />
        </div>
        <p className="w-[80%] text-xs mb-4">Need a UI/XI Designer with knowledge of
        Figma and WordPress.</p>
        <div className="flex gap-2 items-center mb-4">
            <span className="border  border-[#9D9D9D] px-4 py-1 rounded-full text-xs font-semibold text-[#9D9D9D]">12 Position</span>
            <span className="border  border-[#9D9D9D] px-4 py-1 rounded-full text-xs font-semibold text-[#9D9D9D]">Part Time</span>
        </div>
      </div>
      <div className="flex justify-between px-4 py-4">
        <div className="">
            <h1 className="text-base font-semibold">12 LPA</h1>
            <h1 className="text-[#9D9D9D] text-sm leading-3 ">India</h1>
        </div>
        <button className="bg-black rounded-full px-4  font-semibold text-white">Details</button>
      </div>
    </div>
  );
}

export default LatestJobCards;
