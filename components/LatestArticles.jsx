import React from 'react'
import ArticleCard from './latest articles components/ArticleCard'
import FirstImage from '../public/images/image-currency.jpg'
import SecondImage from '../public/images/image-restaurant.jpg'
import ThirdImage from '../public/images/image-plane.jpg'
import FourthImage from '../public/images/image-confetti.jpg'

export default function LatestArticles() {
  return (
    <div className='max-w-5xl w-full h-full flex flex-col gap-16 mb-20 sm:items-center'>
        <h2 className='text-4xl text-[rgb(45,49,77)]'>Latest Articles</h2>
        <div className='flex flex-row gap-6 sm:flex-col'>
            <ArticleCard 
            image={FirstImage} 
            by="Claire Robinson" 
            title="Receive money in any currency with no fees" 
            text="The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ..."/>
            <ArticleCard 
            image={SecondImage} 
            by="Wilson Hutton" 
            title="Treat yourself without worrying about money" 
            text="Our simple budgeting feature allows you to separate cut your spending and ser realistic limits each month. That means you ..."/>
            <ArticleCard 
            image={ThirdImage} 
            by="Wilson Hutton" 
            title="Take your Easybank card wherever you go" 
            text="We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ..."/>
            <ArticleCard 
            image={FourthImage} 
            by="Claire Robinson" 
            title="Our invite-only Beta accounts are now live!" 
            text="After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ..."/>
        </div>
    </div>
  )
}
