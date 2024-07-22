"use client"
import React from 'react'
import LimitedText from './mini-component/LimitText'

function ShortArticles({date, description, author, sourceName}) {
  const newDate = date.slice(0,10)
  return (
    <div className='border h-40 w-80 my-4 bg-gray-200 mx-2 rounded-2xl hover:shadow-2xl duration-200 '>
        <p className='font-medium text-right px-2 py-1'>{newDate}</p>
        <LimitedText className={"text-sm text-center w-80 text-wrap px-2"} text={description} limit={150}/>
        <p className='text-lg font-semibold pl-3 py-2'>{author || sourceName}</p>
    </div>
  )
}

export default ShortArticles