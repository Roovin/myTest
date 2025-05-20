import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroBanner() {
  return (
    <section className="herobanner bg-[#1d3c6b] !pb-[0]">
        <div className="container !static">
          <div className="imgWithText flex items-center pb-[80px]">
            <div className="text-Wrapper w-[50%] mx-[20px] pb-[30px]">
              <h1 className='text-white'>Unlock Your Brand's True Potential</h1>
              <p className='text-white'>At Thinkacademies, we don't just market — we ignite digital revolutions. Our AI-powered strategies are built to captivate, convert, and accelerate your growth. From powerful SEO to scroll-stopping social media, we turn your vision into visible impact.</p>
              <div className="btnWrap">
                <Link href={'/'} className='text-white'>Get Started</Link>
              </div>
            </div>
            <div className="imgWrapper w-[50%] mx-[20px] text-center max-h-[390px]">
              <Image src={'/heroBanner/hero.png'} alt='Girl With Mobile' className='absolute bottom-[0] right-[5%]' width={400} height={390} />
            </div>
          </div>
        </div>
    </section>
  )
}
