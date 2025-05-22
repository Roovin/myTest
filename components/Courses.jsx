import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


export default function Courses({data}) {
  return (
    <section className="courses ">
        <div className="container">
            <div className="intro text-center mb-[30px]" data-aos="fade-up">
                <h2 className='!font-[600]'>Our Courses</h2>
            </div>
            <div data-aos="fade-up" className="cardWrapper flex w-[calc(100%+40px)] ml-[-20px] max-md:flex-wrap max-md:w-[calc(100%+20px)] max-md:ml-[-10px] max-sm:w-full max-sm:ml-0">
                {
                    data?.map((item, i) => {
                        const title = item?.title;
                        const titleWithUrl = title.split(" ").join("-");
                        return (
                            <div key={i} className="card relative overflow-hidden shadow-xs group cursor-pointer w-[calc(33.33%-20px)] mx-[20px] min-h- text-center rounded-[10px]  max-md:w-[calc(50%-20px)] max-md:mx-[10px] max-md:last:mt-[20px] max-sm:w-full max-sm:mx-0 max-sm:mb-[20px] max-sm:last:mt-0" >
                                <Link href={item?.cardBtnUrl + titleWithUrl} className='emptyLink !z-[99]'>.</Link>
                                <div className="bgImg  w-full h-[230px]">
                                    <Image src={item?.image} alt={item?.alt} className='w-full h-full object-cover rounded-[10px] opacity-[0.3]' width={400} height={400} />
                                </div>
                                <div className="textWrap z-[10]">
                                    <div className="text-Wrapper absolute left-0 w-full bottom-0 p-[10px] pb-[5px] group-hover:bottom-[20px]">
                                        <h3 className='mb-[10px] text-black'>{item?.title}</h3>
                                        <div className="hiddenContent h-0 group-hover:h-full transition-all duration-[300]">
                                            <p className='text-black !font-[500] truncate whitespace-normal line-clamp-2'>{item?.cardDescription}</p>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}