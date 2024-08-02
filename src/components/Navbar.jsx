"use client";

import React, { useRef, useState } from "react";
import Logo from "./Logo";
import Option from "./mini-component/Option";
import { Drawer } from "./mini-component/Drawer";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { searchInput } from "@/lib/features/searchValue";

function Navbar() {
   const searchParams = useSearchParams();
      searchParams.get('search');
   const [input, setInput] = useState('');
   const dispatch = useDispatch()
   const countryRef = useRef();
   
   const languageOption = [
      "ar",
      "de",
      "en",
      "es",
      "fr",
      "he",
      "it",
      "nl",
      "no",
      "pt",
      "ru",
      "sv",
      "ud",
      "zh",
   ];
   const countryOption = [
      "ae",
      "ar",
      "at",
      "au",
      "be",
      "bg",
      "br",
      "ca",
      "ch",
      "cn",
      "co",
      "cu",
      "cz",
      "de",
      "eg",
      "fr",
      "gb",
      "gr",
      "hk",
      "hu",
      "id",
      "ie",
      "il",
      "in",
      "it",
      "jp",
      "kr",
      "lt",
      "lv",
      "ma",
      "mx",
      "my",
      "ng",
      "nl",
      "no",
      "nz",
      "ph",
      "pl",
      "pt",
      "ro",
      "rs",
      "ru",
      "sa",
      "se",
      "sg",
      "si",
      "sk",
      "th",
      "tr",
      "tw",
      "ua",
      "us",
      "ve",
      "za",
   ];
  
   const inputFiled = () => {
      dispatch(searchInput(input))
   }
   return (
      <>
         <nav className="h-20 shadow flex justify-between px-4 items-center">
            <div className="w-10 sm:w-20 md:w-auto">
               <Option
                  label={"Country"}
                  option={countryOption}
                  ref={countryRef}
               />
            </div>
            <div className="pl-36">
               <Link href={"/"}>
                  <Logo />
               </Link>
            </div>
            <div className="flex items-center justify-between w-80   ">
               <div className="text-xl md:text-base flex border p-1 rounded-md">
                  < >
                     <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder="search" className="w-60 bg-transparent px-2 border-none outline-none shadow-none " />
                     <Link className="text-lg font-medium" href={{
                        pathname:"/result",
                        query:{
                           search:input,
                        }
                     }} onClick={inputFiled}>OK</Link>
                  </>
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
