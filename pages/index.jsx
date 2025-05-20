import React from 'react'
import HeroBanner from '@/components/HeroBanner'
import TabWithImage from '@/components/TabWithImage'
import { heroBannerData } from '@/public/data/heroBannerData'

export default function index() {
  return (
    <>
      <HeroBanner data={heroBannerData}/>
      <TabWithImage />
    </>
  )
}
