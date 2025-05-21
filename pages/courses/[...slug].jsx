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
                                <>
                                {item?.title === isValue ? 
                                    <div className="textWithImage flex w-[calc(100%+40px)] ml-[-20px]" key={i}>
                                        <div className="content w-[calc(50%-20px)] mx-[20px]">
                                            <h1>{item?.title}</h1>
                                            <p>{item?.description}</p>
                                            <div className="btnWrap">
                                                <button>{item?.btn}</button>
                                            </div>
                                        </div>
                                        <div className="imageWrap  w-[calc(50%-20px)] mx-[20px]">
                                            <div className="image">
                                                <Image src={item?.image} alt={item?.alt} className='rounded-[5px]' width={450} height={320} />
                                            </div>
                                        </div>
                                    </div>
                                : '' }
                                </>
                            )
                        })
                    }

                </div>
            </section>
            <section className="certificate">
                <div className="container">
                    
                </div>
            </section>
        </>

    )
}
