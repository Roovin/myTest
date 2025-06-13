import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HeroBanner({data}) {

  useEffect(() => {
    AOS.init({ duration: 800,
      once: true
     });
  }, []);
  
  return (
    <section className="herobanner bg-[#1d3c6b] !pb-[0]">
        <div className="container !static">
          <div className="imgWithText flex items-center pb-[80px] max-sm:pb-0 max-sm:block w-[calc(100%+40px)] ml-[-20px] max-sm:w-full">
            <div className="text-Wrapper w-[50%] max-sm:w-full mx-[20px] pb-[30px]" data-aos="fade-up">
              <h1 className='text-white'>{data?.title}</h1>
              <p className='text-white'>{data?.description}</p>
              <div className="btnWrap relative inline-block mt-[20px]">
                <Link href={data?.btnUrl} className='text-black bg-yellow-500 font-[600] rounded-full inline-block px-6 py-3 transition-all duration-300 hover:bg-yellow-600 '>{data?.btnText}</Link>
              </div>
            </div>
            <div className="imgWrapper w-[50%] max-sm:w-full mx-[20px] text-center max-h-[390px] max-sm:max-h-full" >
              <Image src={data?.imageUrl} alt={data?.alt} className='absolute bottom-[0] right-[5%] max-sm:static max-sm:mx-auto' data-aos="fade-up" width={400} height={390} />
            </div>
          </div>
        </div>
    </section>
  )
}
