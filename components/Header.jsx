'use client'

import Image from 'next/image'
import React, {useState} from 'react'
import Icon from '../public/images/logo.svg'
import IconHamburguer from '../public/images/icon-hamburger.svg'
import IconClose from '../public/images/icon-close.svg'

export default function Header() {

  const aStyle = 'hover:border-b-4 border-green-300 flex items-center h-full text-gray-400 hover:text-black cursor-pointer'
  const [buttonHamburgerStyle, setButtonHamburgerStyle] = useState('hidden sm:inline-block')
  const [buttonCloseStyle, setButtonCloseStyle] = useState('hidden')
  const [absoluteMenu, setAbsoluteMenu] = useState('hidden')

  return (
    <>
      <div className='flex flex-row items-center justify-between max-w-5xl w-full h-[70px] z-20 bg-white sm:px-4'>
          <button>
              <Image alt='' src={Icon} width={100} height={100}/>
          </button>
          <ul className='flex flex-row gap-4 h-full items-center sm:hidden'>
              <a className={aStyle}><p>Home</p></a>
              <a className={aStyle}><p>About</p></a>
              <a className={aStyle}><p>Contact</p></a>
              <a className={aStyle}><p>Blog</p></a>
              <a className={aStyle}><p>Careers</p></a>
          </ul>
          <button className='font-semibold text-white px-6 py-2 rounded-3xl bg-gradient-to-r from-[#32D164] to-[#22D3EB] hover:opacity-60 sm:hidden'>
              Request invite
          </button>
          <button 
          className={'hidden sm:inline-block ' + buttonHamburgerStyle}
          onClick={() => {
            setButtonHamburgerStyle('hidden sm:hidden')
            setButtonCloseStyle('hidden sm:inline-block')
            setAbsoluteMenu('hidden sm:flex')
          }}
          >
            <Image alt='' src={IconHamburguer} width={30} height={30}/>
          </button>
          <button 
          className={buttonCloseStyle}
          onClick={() => {
            setButtonCloseStyle('hidden sm:hidden')
            setButtonHamburgerStyle('hidden sm:inline-block')
            setAbsoluteMenu('hidden sm:hidden')
          }}
          >
            <Image alt='' src={IconClose} width={30} height={30}/>
          </button>
      </div>
      <div id='box' className={'absolute flex flex-col items-center gap-4 top-0 left-0 right-0 mx-8 mt-28 rounded-lg py-6 bg-white z-10 font-semibold ' + absoluteMenu}>
        <a>Home</a>
        <a>About</a>
        <a>Contact</a>
        <a>Blog</a>
        <a>Careers</a>
      </div>
    </>
  )
}
