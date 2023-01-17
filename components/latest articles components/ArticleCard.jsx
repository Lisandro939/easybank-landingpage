import Image from 'next/image'
import React from 'react'

export default function ArticleCard({image, by, title, text}) {
  return (
    <div className='flex flex-col gap-8 sm:items-center'>
        <Image alt='' src={image} width={240} height={100} priority className='aspect-[8/7] rounded-t-lg sm:aspect-[4/3] sm:w-[90%]'/>
        <div className='flex flex-col gap-4 px-6 sm:px-16'>
            <label className='text-xs text-gray-400'>By {by}</label>
            <h4 className='text-lg leading-5 text-[rgb(45,49,77)] hover:text-[#31D35C] cursor-pointer'>{title}</h4>
            <p className='text-sm text-gray-400'>{text}</p>
        </div>
    </div>
  )
}
