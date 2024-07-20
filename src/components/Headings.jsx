"use client"
import React from 'react'

function Headings() {
  return (
    <div className={`h-10 w-full border rounded-full my-2 flex justify-around items-center `}>
         <p className='font-medium text-xl '>Trending News</p>
         <p className='font-medium text-xl'>Cricket News</p>
         <p className='font-medium text-xl'>Country News</p>
         <p className='font-medium text-xl'>Share-Market News</p>   
         <p className='font-medium text-xl'>Banking News</p>   
         <p className='font-medium text-xl'>Education News</p>   
         <p className='font-medium text-xl'>Other</p>   
    </div>
  )
}

export default Headings