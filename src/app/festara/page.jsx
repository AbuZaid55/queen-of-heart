// 'use client'
import dynamic from 'next/dynamic'
// import Navbar from './Navbar'
// import Header from './Header'

import HeroSection from '@/components/ui/HeroSection'
import { festaraArray } from '@/Data/cardsData'
// const Hero = dynamic(()=>import('@/components/Main/Hero'))
const Jewels = dynamic(()=>import('@/components/ui/Jewels'))
const Hallmarks = dynamic(()=>import('@/components/ui/Hallmarks'))
const BrandSlider = dynamic(()=>import('@/components/ui/BrandSlider'))
const VisitStore = dynamic(()=>import('@/components/ui/VisitStore'))
const AdCampaign = dynamic(()=>import('@/components/ui/AdCampaign'))

const festara = () => {
  return (
    <div className='overflow-x-hidden flex flex-col gap-12 text-sm'>
      {/* <Navbar/> */}
      {/* <Hero/> */}
      {/* <Header/> */}
      <HeroSection data={festaraArray}/>
      <Jewels/>
      <AdCampaign/>
      <Hallmarks/>
      <BrandSlider/>
      <VisitStore/>
    </div>
  )
}

export default festara