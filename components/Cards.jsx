import React, { useEffect, useState }  from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function cards() {
     const [courses, setCourses] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch('api/courses');
                const response = await data.json();
                console.log(response.course);
                setCourses(response)

            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])
    console.log(courses.course);
    
  return (
    <section className="cards">
        <div className="container">
            <div className="intro mb-[20px] text-center">
                <h2 className='!font-[600]'>Fetching cards data from mysql</h2>
            </div>
            <div className="cardsWrap flex flex-wrap w-[calc(100%+20px)] ml-[-10px]">
                {
                    courses?.course?.map((item) => {
    
                        return (
                              <div className="card w-[calc(33.33%-20px)] mx-[10px] rounded-[5px] border-black border-[2px] border-solid max-md:w-[calc(50%-20px)] max-md:mx-[10px] max-md:last:mt-[20px] max-sm:w-full max-sm:mx-0 max-sm:mb-[20px] max-sm:last:mt-0">
                                <div className="imgWrap w-full h-[240px]">
                                    <Image src={item?.image_name} alt='' className='w-full h-full object-cover rounded-t-[3px]' width={300} height={300} />
                                </div>
                                <div className="content p-[20px]">
                                <h3 >{item?.course_name}</h3>
                                <p className='my-[10px] !font-[500]'><b>Price:- </b> {item?.price}</p>
                                    <div className="btnWrap">
                                        <Link href={'/'} className='text-black bg-yellow-500 font-[600] rounded-full inline-block px-6 py-3 transition-all duration-300 hover:bg-yellow-600 '>{item?.button}</Link>
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
