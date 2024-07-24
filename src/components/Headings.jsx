"use client"
import React from 'react'
import Link from 'next/link'
function Headings() {
  return (
    <div className={`h-10 w-full border rounded-full my-2 flex justify-around items-center `}>
         <Link href={"/treading-news"} className='font-medium text-xl '>Trending News</Link>
         <Link href={"/cricket-news"} className='font-medium text-xl'>Cricket News</Link>
         <Link href={"/entertainment-news"} className='font-medium text-xl'>Entertainment News</Link>  
         <Link href={"/share-market-news"} className='font-medium text-xl'>Share-Market News</Link>   
         <Link href={"/banking-news"} className='font-medium text-xl'>Banking News</Link>   
         <Link href={"/science-news"} className='font-medium text-xl'>Science News</Link>   
         <Link href={"/other-news"} className='font-medium text-xl'>Other</Link>   
    </div>
  )
}

export default Headings