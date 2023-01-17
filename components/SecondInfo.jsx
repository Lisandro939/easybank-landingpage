import React from 'react'
import Card from './second info components/Card'
import FirstIcon from '../public/images/icon-online.svg'
import SecondIcon from '../public/images/icon-budgeting.svg'
import ThirdIcon from '../public/images/icon-onboarding.svg'
import FourthIcon from '../public/images/icon-api.svg'

export default function SecondInfo() {
  return (
    <div className='flex flex-col gap-6 w-full max-w-5xl mb-16 sm:items-center sm:mb-24'>
        <h2 className='text-4xl text-[rgb(45,49,77)] sm:text-center sm:w-[200px]'>
            Why choose Easybank?
        </h2>
        <p className='max-w-xl text-gray-400 mb-8 sm:px-10 sm:text-center'>
            We leverage Open Banking to turn your bank account into your financial hub.
            Control your finances line never before.
        </p>
        <div className='flex flex-row gap-6 sm:flex-col sm:w-screen'>
            <Card icon={FirstIcon} title="Online Banking" text="Our modern web and mobile applications allow you yo keep track of your finances wherever you are in the world."/>
            <Card icon={SecondIcon} title="Simple Budgeting" text="See exactly where your money goes each month. Receive notifications when you're close to hitting your limits."/>
            <Card icon={ThirdIcon} title="Fast Onboarding" text="We don't do branches. Open your account in minutes online and start taking control of your finances right away."/>
            <Card icon={FourthIcon} title="Open API" text="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."/>
        </div>
    </div>  
  )
}
