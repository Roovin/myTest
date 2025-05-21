import React from 'react'

export default function Counter({data}) {
    
  return (
    <section className="counter bg-[#001f3d]">
        <div className="container">
            <div className="itemWrapper w-[calc(100%+40px)] ml-[-20px] flex ">
                {
                    data?.map((item, i) => {
                        return (
                            <div className="item bg-[#003366] p-[20px] mx-[20px] rounded-[10px] text-center">
                                <h2 className='text-white !font-[600]'>{item?.count}<span>{item?.sing}</span></h2>
                                <h3 className='text-white'>{item?.title}</h3>
                                <p className='text-white mt-[10px]'>{item?.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}
