"use client"
import React,{useState} from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";
function Headline({ imgURL, title, author, date, ref }) {
    const [save, setSave] = useState(false)

  return (
    <div className="w-[900px] h-full  border my-3 rounded-xl bg-gray-200">
      <dir className="px-5 ">
        <h2 className="text-4xl font-extrabold">
          {title}
        </h2>
      </dir>
      <div className="flex justify-center w-full">
        <img
          className="w-[850px] h-auto rounded-xl"
          src={imgURL}
          alt={title}
        />
      </div>
      <div className="my-2 w-auto h-16 bg-white rounded-xl mx-5 px-4 flex justify-between items-center">
        <div className="">
          <p className="font-semibold w-fit">{author}</p>
          <p className="w-fit">{date}</p>
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
