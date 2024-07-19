"use client"

import React from "react";
import Logo from "./Logo";
import { IoSearchOutline } from "react-icons/io5";
import { FiMoreVertical } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import Option from "./mini-component/Option";
import Notify from "./mini-component/Notify";
import {Poppins} from 'next/font/google'
function Navbar() {
  const poppins = Poppins({ subsets:["latin"]})
  return (
    <>
      <nav className="h-20 shadow flex justify-between px-4 items-center">
        <div className="">
          <Option label={"Country"}/>
        </div>
        <div className="pl-28">
          <Logo />
        </div>
        <div className="flex items-center justify-between w-72">
            <div className="text-3xl">
                <IoSearchOutline />
            </div>
            <div className="">
                <Option label={"Language"}/>
            </div>
            <div className="text-2xl">
                <FaUserAlt />
            </div>
            <div className="text-2xl">
                <FiMoreVertical />
            </div>
        </div>
        <div className={`h-10 w-full border rounded-full my-2 flex justify-around items-center ${poppins.className}`}>
         <p className='font-medium text-xl '>Trending News</p>
         <p className='font-medium text-xl'>Cricket News</p>
         <p className='font-medium text-xl'>Country News</p>
         <p className='font-medium text-xl'>Share-Market News</p>   
         <p className='font-medium text-xl'>Banking News</p>   
         <p className='font-medium text-xl'>Education News</p>   
         <p className='font-medium text-xl'>Other</p>   
    </div>
      </nav>
    </> 
  );
}

export default Navbar;
