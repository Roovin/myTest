import React, { useState } from 'react'
import { useRouter } from "next/router"
import Image from 'next/image'
import { courseData } from '@/public/data/courseData'

export default function Course() {

    const router = useRouter();
    const query = router.query
    const queryVal = query?.slug?.[0];
    var getValue = queryVal?.replace(/-/g, " ")

    const [isValue, setGetValue] = useState(getValue);

    return (
        <>
            <section className="CourseDetails">
                <div className="container">
                    {
                        courseData?.map((item, i) => {
                            return (
                                <div key={i}>
                                    {item?.title === isValue ?
                                        <div className="textWithImage flex max-sm:flex-wrap w-[calc(100%+40px)] ml-[-20px] max-md:w-[calc(100%+20px)] max-md:ml-[-10px] max-sm:w-full max-sm:ml-0" >
                                            <div className="content w-[calc(50%-20px)] mx-[20px] max-sm:w-full max-sm:mx-0">
                                                <h1>{item?.title}</h1>
                                                <p>{item?.description}</p>
                                                <div className="btnWrap mt-[20px]">
                                                    <button className='bg-[#001f3d] text-white px-6 py-3 rounded-md hover:bg-blue-800 transition duration-300'>{item?.btn}</button>
                                                </div>
                                            </div>
                                            <div className="imageWrap  w-[calc(50%-20px)] mx-[20px] max-sm:mt-[20px] max-sm:w-full max-sm:mx-0">
                                                <div className="image">
                                                    <Image src={item?.image} alt={item?.alt} className='rounded-[5px]' width={450} height={320} />
                                                </div>
                                            </div>
                                        </div>
                                        : ''}
                                </div>
                            )
                        })
                    }

                </div>
            </section>
            <section className="certificate">
                <div className="container">
                    {
                        courseData?.map((item, i) => {
                            return (
                                <div key={i}>
                                    {item?.title === isValue ?
                                        <div className="certificate bg-gray-100 text-center py-[30px] max-md:p-[20px]">
                                            <h2>{item?.certifiedTitle}</h2>
                                            <p>{item?.para}</p>
                                            <Image src={item?.certiImage} alt={item?.certiAlt} className='mx-auto my-[20px]' width={300} height={300} />
                                            <p>{item?.para1}</p>
                                        </div>
                                    : ''}
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>

    )
}
