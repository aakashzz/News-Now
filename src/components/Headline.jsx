"use client"
import React,{useState} from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";
function Headline({ imgURL, title, author, date, ref, link }) {
    const [save, setSave] = useState(false)
    const newDate = date?.slice(0,10);
      function goToLink(){
         return window.open(link,"_blank");
      }
  return (
    <div className="w-[900px] h-full  border my-3 rounded-xl bg-gray-200">
      <dir className="px-5 ">
        <h2 className="text-4xl font-extrabold">
          {title}
        </h2>
      </dir>
      <div className="flex justify-center w-full">
        <img
        onClick={goToLink}
          className="w-[850px] h-[450px] rounded-xl cursor-pointer"
          src={imgURL}
          alt={title}
        />
      </div>
      <div className="my-2 w-auto h-16 bg-white rounded-xl mx-5 px-4 flex justify-between items-center">
        <div className="">
          <p className="font-semibold w-fit">{author}</p>
          <p className="w-fit">{newDate}</p>
        </div>
        <div className="text-2xl">
            {
                save ? (<FaBookmark />) : (<FaRegBookmark />)
            }
        </div>
      </div>
    </div>
  );
}

export default Headline;
