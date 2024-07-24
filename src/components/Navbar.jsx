"use client"

import React, { useRef } from "react";
import Logo from "./Logo";
import { IoSearchOutline } from "react-icons/io5";

import { FaUserAlt } from "react-icons/fa";
import Option from "./mini-component/Option";
import { Drawer } from "./mini-component/Drawer";
function Navbar() {
  const languageOption = ["ar",'de','en','es', 'fr', 'he','it', 'nl', 'no','pt', 'ru', 'sv','ud', 'zh'];
  const countryOption = ["ae",'ar','at','au','be','bg','br','ca','ch','cn','co','cu','cz','de','eg','fr','gb','gr','hk','hu','id','ie','il','in','it','jp','kr','lt','lv','ma','mx','my','ng','nl','no','nz','ph','pl','pt','ro','rs','ru','sa','se','sg','si','sk','th','tr','tw','ua','us','ve',"za"]
  const countryRef = useRef(); 
  function drawer(){
    console.log(Drawer);
    
    return <Drawer />
  }
  return (
    <>
      <nav className="h-20 shadow flex justify-between px-4 items-center">
        <div className="w-10 sm:w-20 md:w-auto">
          <Option label={"Country"} option={countryOption} ref={countryRef}/>
        </div>
        <div className="">
          <Logo />
        </div>
        <div className="flex items-center justify-between w-40">
            <div className="text-xl md:text-3xl">
                <IoSearchOutline />
            </div>
            {/* <div className="w-10 sm:w-20 md:w-auto">
               <Option label={"Language"} option={languageOption}/>
            </div> */}
            <div className="text-2xl   ">
                <FaUserAlt />
            </div>
            <div className="text-xl md:text-2xl ">
                {/* <FiMoreVertical className="cursor-pointer" onClick={drawer}/> */}
                <Drawer />
            </div>
        </div>
      </nav>
</> 
  );
}

export default Navbar;
