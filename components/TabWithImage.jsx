import React from 'react'
import Image from 'next/image';

export default function TabWithImage({data}) {
  console.log(data);
  
  return (
    <section className="tabWithImage">
        <div className="container">
            <div className="intro mb-[20px]">
                <h2 className='text-black'>Our Services</h2>
            </div>
            <div className="tabWrapper">
                <div className="tabList w-[50%]">
                  {
                    data?.map((item, i) => {
                      return (
                        <div key={i} className="item p-2 border-[1px] rounded-[5px] mb-[10px]">
                          <h2 className='!text-[18px] font-[600]'>{item?.title}</h2>
                          <p className='!text-[14px]'>{item?.description}</p>
                        </div>
                      )
                    })
                  }
                </div>
                <div className="imgWrapper w-[50%]">
                  {
                    data?.map((item, i) => {
                      return (
                          <div key={i} className="imgWrap">
                            <Image src={''} alt='' width={''} height={''} />
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
