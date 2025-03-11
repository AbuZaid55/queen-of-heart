'use client'
import HeroSection from '@/components/ui/HeroSection'
import { fazzaArray } from '@/Data/cardsData'
import dynamic from 'next/dynamic'

// const Hero = dynamic(()=>import('@/components/Main/Hero'))
const Jewels = dynamic(()=>import('../../components/ui/Jewels'))
const Hallmarks = dynamic(()=>import('@/components/ui/Hallmarks'))
const BrandSlider = dynamic(()=>import('@/components/ui/BrandSlider'))
const VisitStore = dynamic(()=>import('@/components/ui/VisitStore'))
const AdCampaign = dynamic(()=>import('../../components/ui/AdCampaign'))

const Fazza = () => {
  return (
    <div className='overflow-x-hidden flex flex-col gap-12 text-sm'>
      <HeroSection data={fazzaArray}/>
      <Jewels/>
      <AdCampaign/>
      <Hallmarks/>
      <BrandSlider/>
      <VisitStore/>
    </div>
  )
}

export default Fazza