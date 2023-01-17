import Image from 'next/image'
import React from 'react'

export default function Card({icon, title, text}) {
  return (
    <div className='flex flex-col w-1/4 h-[fit-content] gap-6 sm:w-full sm:items-center'>
        <Image alt='' src={icon} width={70} height={70}/>
        <h2 className='text-2xl font-normal text-[rgb(45,49,77)]'>{title}</h2>
        <p className='text-gray-400 sm:px-8 sm:text-center'>{text}</p>
    </div>
  )
}
