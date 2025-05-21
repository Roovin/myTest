import React from 'react'
import Link from 'next/link'
import { courseData } from '@/public/data/courseData'

export default function Courses() {
  return (
    <section className="courses ">
        <div className="container">
            <div className="cardWrapper flex w-[calc(100%+40px)] ml-[-20px]">
                {
                    courseData?.map((item, i) => {
                        const title = item?.title;
                        const titleWithUrl = title.split(" ").join("-");
                        return (
                            <div className="card relative cursor-pointer bg-[#1d3c6b] mx-[20px] text-center rounded-[10px] p-[30px]" key={i}>
                                <Link href={item?.cardBtnUrl + titleWithUrl} className='emptyLink'>.</Link>
                                <div className="textWrap">
                                    <h3 className='mb-[10px] text-white'>{item?.title}</h3>
                                    <p className='text-white'>{item?.cardDescription}</p>
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
