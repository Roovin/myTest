import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { courseData } from '@/public/data/courseData'

export default function Courses() {
  return (
    <section className="courses ">
        <div className="container">
            <div className="intro text-center mb-[30px]">
                <h2 className='!font-[600]'>Our Courses</h2>
            </div>
            <div className="cardWrapper flex w-[calc(100%+40px)] ml-[-20px]">
                {
                    courseData?.map((item, i) => {
                        const title = item?.title;
                        const titleWithUrl = title.split(" ").join("-");
                        return (
                            <div className="card relative overflow-hidden group cursor-pointer mx-[20px] text-center rounded-[10px] p-[30px] " key={i}>
                                <Link href={item?.cardBtnUrl + titleWithUrl} className='emptyLink !z-[99]'>.</Link>
                                <div className="bgImg absolute top-0 left-0 w-full h-full ">
                                    <Image src={item?.image} alt='' className='w-full h-full object-cover rounded-[10px] opacity-[0.3] group-hover:scale-[1.1] group-hover:opacity-[1] scale-[1] transition-all delay-[300] ease-in-out' width={400} height={400} />
                                </div>
                                <div className="textWrap z-[10] relative">
                                    <h3 className='mb-[10px] text-black'>{item?.title}</h3>
                                    <p className='text-black !font-[500]'>{item?.cardDescription}</p>
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
