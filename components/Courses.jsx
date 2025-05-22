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
                            <div className="card relative overflow-hidden group cursor-pointer mx-[20px] text-center rounded-[10px] p-[30px] max-md:w-[calc(50%-20px)] max-md:mx-[10px] max-md:last:mt-[20px] max-sm:w-full max-sm:mx-0 max-sm:mb-[20px] max-sm:last:mt-0 max-md:p-[20px]" key={i}>
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
