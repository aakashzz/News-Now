import React from 'react'
import {Poppins} from 'next/font/google'

function Headings() {
    const poppins = Poppins({ subsets:["latin"]})
  return (
    <div className={`h-10 w-full border rounded-full my-2 flex justify-around items-center ${poppins.className}`}>
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