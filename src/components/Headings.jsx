"use client"
import React from 'react'
import Link from 'next/link'
function Headings() {
  return (
    <div className={`h-10 w-full border rounded-full my-2 flex justify-around items-center `}>
         <Link href={"/news/treading-news"} className='font-medium text-xl '>Trending News</Link>
         <Link href={"/news/cricket-news"} className='font-medium text-xl'>Cricket News</Link>
         <Link href={"/news/entertainment-news"} className='font-medium text-xl'>Entertainment News</Link>  
         <Link href={"/news/share-market-news"} className='font-medium text-xl'>Share-Market News</Link>   
         <Link href={"/news/banking-news"} className='font-medium text-xl'>Banking News</Link>   
         <Link href={"/news/science-news"} className='font-medium text-xl'>Science News</Link>   
         <Link href={"/news/other-news"} className='font-medium text-xl'>Other</Link>   
    </div>
  )
}

export default Headings