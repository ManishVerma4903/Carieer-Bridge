import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';




function Footer() {
  return (
    <div className='px-20  border-t-2 border-[#9D9D9D] py-6 flex justify-between items-center'>
        <div>
            <h1 className='text-3xl font-semibold font-[Inter]'><Link to='/'>CarrierBridge</Link></h1>
            <h1 className='text-xs text-[#9D9D9D]'> © 2024 Your Company. All rights reserved.</h1>
        </div>
        <div className='flex text-3xl gap-2'>
        <FaLinkedin />
        <FaFacebookSquare />
        <FaXTwitter />


        </div>
    </div>
  )
}

export default Footer