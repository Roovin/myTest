
import React from 'react'
import HeroBanner from '@/components/HeroBanner'
import TabWithImage from '@/components/TabWithImage'
import Counter from '@/components/Counter'
import Courses from '@/components/Courses'
import Cards from '@/components/Cards'
import QuoteSlider from '@/components/QuoteSlider'
import ContactUs from '@/components/ContactUs'
import { heroBannerData } from '@/public/data/heroBannerData'
import { tabWithImageData } from '@/public/data/tabWithImageData'
import { counterData } from '@/public/data/counterData'
import { courseData } from '@/public/data/courseData'
import { quoteData } from '@/public/data/quoteData'
import { useEffect } from 'react'
import { NextSeo } from 'next-seo'


export default function index() {
  return (
    <>
      <NextSeo 
        title={'Think academy'}
				description={'Think Academy'}
				canonical='https://my-test-gilt.vercel.app/'
				openGraph={{
					url: 'https://my-test-gilt.vercel.app/',
					title: 'Think Academy',
					description: 'Think Academy',
					images: [
						{
							url: 'https://my-test-gilt.vercel.app/',
							width: 800,
							height: 600,
							alt: 'ThinkAcademy',
							type: 'image/jpeg',
						},
					],
					siteName: 'ThinkAcademy',
				}}
      />
      <HeroBanner data={heroBannerData}/>
      <TabWithImage data={tabWithImageData}/>
      <Counter data={counterData} />
      <Cards />
      <Courses data={courseData} />
      <QuoteSlider data={quoteData} />
      <ContactUs />
    </>
  )
}
