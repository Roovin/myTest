import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroBanner({data}) {
  
  return (
    <section className="herobanner bg-[#1d3c6b] !pb-[0]">
        <div className="container !static">
          <div className="imgWithText flex items-center pb-[80px]  w-[calc(100%+40px)] ml-[-20px]">
            <div className="text-Wrapper w-[50%] mx-[20px] pb-[30px]">
              <h1 className='text-white'>{data?.title}</h1>
              <p className='text-white'>{data?.description}</p>
              <div className="btnWrap relative inline-block mt-[20px]">
                <Link href={data?.btnUrl} className='text-black bg-yellow-500 font-[600] rounded-full inline-block px-6 py-3 transition-all duration-300 hover:bg-yellow-600 '>{data?.btnText}</Link>
              </div>
            </div>
            <div className="imgWrapper w-[50%] mx-[20px] text-center max-h-[390px]">
              <Image src={data?.imageUrl} alt={data?.alt} className='absolute bottom-[0] right-[5%]' width={400} height={390} />
            </div>
          </div>
        </div>
    </section>
  )
}
