"use client"

import React from "react";
import Logo from "./Logo";
import { IoSearchOutline } from "react-icons/io5";
import { FiMoreVertical } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import Option from "./mini-component/Option";
// import Notify from "./mini-component/Notify";
// import {Poppins} from 'next/font/google'
function Navbar() {
  // const poppins = Poppins({ subsets:["latin"]})
  const languageOtpion = ["ar",'de','en','es', 'fr', 'he','it', 'nl', 'no','pt', 'ru', 'sv','ud', 'zh'];
  const countryOption = ["ae",'ar','at','au','be','bg','br','ca','ch','cn','co','cu','cz','de','eg','fr','gb','gr','hk','hu','id','ie','il','in','it','jp','kr','lt','lv','ma','mx','my','ng','nl','no','nz','ph','pl','pt','ro','rs','ru','sa','se','sg','si','sk','th','tr','tw','ua','us','ve',"za"]
  return (
    <>
      <nav className="h-20 shadow flex justify-between px-4 items-center">
        <div className="w-10 sm:w-20 md:w-auto">
          <Option label={"Country"} option={countryOption}/>
        </div>
        <div className="pl-28">
          <Logo />
        </div>
        <div className="flex items-center justify-around w-72">
            <div className="text-xl md:text-3xl">
                <IoSearchOutline />
            </div>
            <div className="w-10 sm:w-20 md:w-auto">
               <Option label={"Language"} option={languageOtpion}/>
            </div>
            <div className="text-2xl hidden   ">
                <FaUserAlt />
            </div>
            <div className="text-xl md:text-2xl ">
                <FiMoreVertical />
            </div>
        </div>
      </nav>
</> 
  );
}

export default Navbar;
