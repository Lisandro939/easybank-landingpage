import Image from 'next/image'
import React from 'react'
import Logo from '../public/images/logo-footer.svg'
import FacebookLogo from '../public/images/icon-facebook.svg'
import YoutubeLogo from '../public/images/icon-youtube.svg'
import TwitterLogo from '../public/images/icon-twitter.svg'
import PinterestLogo from '../public/images/icon-pinterest.svg'
import InstagramLogo from '../public/images/icon-instagram.svg'

export default function Footer() {

    const aStyle = 'text-white hover:text-[#32D164] cursor-pointer'

  return (
    <footer className='flex justify-center w-screen h-full bg-[rgb(45,49,77)]'>
        <div className='w-full max-w-5xl flex flex-row justify-between py-8 sm:flex-col sm:gap-6'>
            <div className='flex flex-col h-full justify-around items-center gap-8'>
                <Image alt='' src={Logo} width={150} height={100}/>
                <div className='flex flex-row gap-4 justify-center'>
                    <a className={aStyle}><Image alt='' src={FacebookLogo} width={20} height={10}/></a>
                    <a className={aStyle}><Image alt='' src={YoutubeLogo} width={20} height={10}/></a>
                    <a className={aStyle}><Image alt='' src={TwitterLogo} width={20} height={10}/></a>
                    <a className={aStyle}><Image alt='' src={PinterestLogo} width={20} height={10}/></a>
                    <a className={aStyle}><Image alt='' src={InstagramLogo} width={20} height={10}/></a>
                </div>
            </div>
            <div className='flex flex-col ml-[-150px] gap-2 text-white sm:ml-0 sm:items-center sm:mb-[-20px]'>
                <a className={aStyle}>About Us</a>
                <a className={aStyle}>Contact</a>
                <a className={aStyle}>Blog</a>
            </div>
            <div className='flex flex-col ml-[-150px] gap-2 text-white sm:ml-0 sm:items-center'>
                <a className={aStyle}>Careers</a>
                <a className={aStyle}>Support</a>
                <a className={aStyle}>Privacy Policy</a>
            </div>
            <div className='flex flex-col gap-6 sm:w-full sm:items-center'>
                <button className='font-semibold text-white px-2 sm:px-6 py-2 rounded-3xl bg-gradient-to-r from-[#32D164] to-[#22D3EB] hover:opacity-60'>
                    Request invite
                </button>
                <p className='text-gray-400'>© Easybank. All Rights Reserved</p>
            </div>
        </div>
    </footer>
  )
}
