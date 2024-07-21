import React, { useState } from 'react'
import { FaBookmark, FaRegBookmark } from 'react-icons/fa'
import { IoMdMore } from 'react-icons/io'

function ListArticle({img, title, description, author, date}) {
   const [save , setSave] = useState(false)
  return (
    <div className=' border h-60 w-full flex justify-between rounded-xl'>
        <div className=''>
            <img className='h-60 w-fit p-2 rounded-2xl' src={img} alt="" />
        </div>
        <div className='p-2 w-[70%]'>
               <p className='text-xl font-semibold'>{title}</p>
               <p className='font-light py-3'>{description}</p>
               <div className='bg-gray-100 h-24 rounded-2xl w-full flex justify-between items-center px-3'>
                  <div className='h-auto w-40 space-y-2'>
                     <p className='font-semibold text-lg'>{author}</p>
                     <p>{date}</p>
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