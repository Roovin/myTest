import React from 'react'
import Image from 'next/image';
import { useState } from 'react';

export default function TabWithImage({data}) {
  const [setImage, isSetImage] = useState(0);
  
  const myfunction = (i) => {
      if(setImage == i) {
        isSetImage(null)
      }
      isSetImage(i);
  }

  return (
    <section className="tabWithImage">
        <div className="container">
            <div className="intro mb-[20px] max-sm:text-center" data-aos="fade-up">
                <h2 className='text-black !font-[600] inline-block'>Our Services</h2>
            </div>
            <div className="tabWrapper flex w-[calc(100%+20px)] ml-[-10px] max-md:w-full max-md:ml-0 max-md:block items-center">
                <div className="tabList w-[50%] mx-[10px] max-md:w-full max-md:mx-0 max-md:mb-[20px]" data-aos="fade-up">
                  {
                    data?.map((item, i) => {
                      return (
                        <div key={i} className={`item p-2 border-[1px] border-gray-200 rounded-[5px] mb-[10px] cursor-pointer ${setImage === i ? 'bg-sky-100' : ''}`} onClick={() => myfunction(i)} >
                          <h2 className='!text-[18px] !font-semibold mb-[5px]'>{item?.title}</h2>
                          <p className='!text-[14px]'>{item?.description}</p>
                        </div>
                      )
                    })
                  }
                </div>
                <div className="imgWrapper w-[50%] mx-[10px] max-md:w-full max-md:mx-0">
                  {
                    data?.map((item, i) => {
                      return (
                          <div key={i} className={`imgWrap ${setImage === i ? 'block' : 'hidden'} max-h-[490px] overflow-hidden`}>
                            <Image src={item?.image} alt={item?.alt} width={500} height={450} />
                          </div>
                        )
                      }
                    )
                  }
                </div>
            </div>
        </div>
    </section>
  )
}
