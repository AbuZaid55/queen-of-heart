'use client'

import dynamic from 'next/dynamic'

// Constants
import { queenOfHeartsArray } from '@/Data/cardsData'

// Immediately Loaded Components
import HeroSection from '@/components/ui/HeroSection'
import { Provider } from 'react-redux'
import appStore from '@/store/store'

// Lazy Loaded Components
const Hallmarks = dynamic(()=> import('@/components/ui/Hallmarks'))
const Container = dynamic(() => import('../app/landing-page/Container'))
const BrandSlider = dynamic(() => import('@/components/ui/BrandSlider'))
const Galleria = dynamic(() => import('../app/landing-page/Galleria'))

const QueenOfHearts = () => {
  return (
    <Provider store={appStore}>
    <div className='overflow-x-hidden flex flex-col gap-12 text-sm'>
      <HeroSection data={queenOfHeartsArray}/>
      <Hallmarks/>
      <Container/>
      <BrandSlider/>
      <Galleria/>
    </div>
    </Provider>
  )
}

export default QueenOfHearts
