import React from 'react'
import HeroBanner from '@/components/HeroBanner'
import TabWithImage from '@/components/TabWithImage'
import Counter from '@/components/Counter'
import Courses from '@/components/Courses'
import QuoteSlider from '@/components/QuoteSlider'
import ContactUs from '@/components/ContactUs'
import { heroBannerData } from '@/public/data/heroBannerData'
import { tabWithImageData } from '@/public/data/tabWithImageData'
import { counterData } from '@/public/data/counterData'
import { courseData } from '@/public/data/courseData'
import { quoteData } from '@/public/data/quoteData'


export default function index() {

  return (
    <>
      <HeroBanner data={heroBannerData}/>
      <TabWithImage data={tabWithImageData}/>
      <Counter data={counterData} />
      <Courses data={courseData} />
      <QuoteSlider data={quoteData} />
      <ContactUs />
    </>
  )
}
