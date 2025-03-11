

import React from 'react'
import Image from 'next/image'

const HeroSection = ({data}) => {
  if(!data || data.length === 0) return null
  const {landingVideo,landingVideoMobile, banner, bannerMobile, styles, heading, description,src} = data[0]  

  return (
    <div className='flex flex-col items-center gap-[10px] w-full max-w-full overflow-hidden'>
      {
        landingVideo ? ( 
        <>        
        <video className='w-full max-w-full hidden sm:block h-full min-h-screen object-cover md:h-auto' muted autoPlay loop src={landingVideo}></video> 
         {/* For Mobile */}
         <video className='w-full max-w-full block sm:hidden h-screen object-cover md:h-auto' muted autoPlay loop src={landingVideoMobile}></video>

        </>

        )
        : (
        <> 
        <Image height={1280} width={1980} priority className='hidden w-full max-w-full object-cover md:block' src={banner} alt='landing-banner'/>

        <Image height={600} width={480} className='w-full object-cover md:hidden' src={bannerMobile} alt='landing-banner-mobile' priority/>
        
        </> 
        )
      }
      <h1 className={styles}>{heading}</h1>
      <img className='h-20 -mt-20 md:h-36 md:-mt-32  object-cover pb-2' src={src}/>
      
      <p className={`3xl:text-[25px] max-w-[90%] text-center  text-sm font-gothic leading-[1.8]  tracking-[1.3px] text-gray-500 lg:max-w-[70%]`}>{description}</p>
  </div>
  )
}

export default HeroSection