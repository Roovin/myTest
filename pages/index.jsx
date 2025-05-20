import React from 'react'
import HeroBanner from '@/components/HeroBanner'
import TabWithImage from '@/components/TabWithImage'
import { heroBannerData } from '@/public/data/heroBannerData'
import { tabWithImageData } from '@/public/data/tabWithImageData'

export default function index() {
  return (
    <>
      <HeroBanner data={heroBannerData}/>
      <TabWithImage data={tabWithImageData}/>
    </>
  )
}
