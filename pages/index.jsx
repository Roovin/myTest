import React from 'react'
import HeroBanner from '@/components/HeroBanner'
import TabWithImage from '@/components/TabWithImage'
import Counter from '@/components/Counter'
import { heroBannerData } from '@/public/data/heroBannerData'
import { tabWithImageData } from '@/public/data/tabWithImageData'
import { counterData } from '@/public/data/counterData'


export default function index() {
  
  return (
    <>
      <HeroBanner data={heroBannerData}/>
      <TabWithImage data={tabWithImageData}/>
      <Counter data={counterData} />
    </>
  )
}
