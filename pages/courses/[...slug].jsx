import React from 'react'
import Image from 'next/image'
import { courseData } from '@/public/data/courseData'

export default function Course() {

  return (
    <section className="CourseDetails">
        <div className="container">
            <div className="textWithImage">
                <div className="content">
                    <h1></h1>
                    <p></p>
                    <div className="btnWrap">
                        <button></button>
                    </div>
                </div>
                <div className="imageWrap">
                    <div className="image">
                        <Image src={'/'} alt='' width={450} height={320} />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
