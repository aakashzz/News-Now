"use client"
import React, { useState } from 'react'
import { FaBookmark, FaRegBookmark } from 'react-icons/fa'
import { IoMdMore } from 'react-icons/io'
import LimitedText from './mini-component/LimitText'
import Image from "next/image"

function ListArticle({img, title, description, author, sourceName, date}) {
   const [save , setSave] = useState(false);
   const newDate = date.slice(0,10)
  return (
    <div className=' border h-fit w-full flex justify-between rounded-xl my-4 hover:shadow-2xl duration-200'>
        <div className=''>
            <Image className='w-[430px] h-[230px] p-2 rounded-2xl' width={430} height={230} src={img} alt={title} />
        </div>
        <div className='p-2 w-[70%] flex flex-row flex-wrap justify-between'>
               <p className='text-xl font-semibold'>{title}</p>
               <LimitedText className={"font-light py-3"} text={description} limit={200} />
               <div className='bg-gray-100 h-20 rounded-2xl w-full flex justify-between items-center px-3'>
                  <div className='h-auto w-52 space-y-2'>
                     <LimitedText text={author || sourceName} limit={13} className={"font-semibold text-lg"}/>
                     <p>{newDate}</p>
                  </div>
                  <div className=' gap-x-1 flex items-center'>
                  {
                save ? (<FaBookmark className='text-2xl'/>) : (<FaRegBookmark className='text-2xl'/>)
            }
                        <IoMdMore className='text-3xl'/>
                  </div>
               </div>
        </div>
    </div>
  )
}

export default ListArticle