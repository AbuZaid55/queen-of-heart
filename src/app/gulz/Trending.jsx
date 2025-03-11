'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Trending = () => {
  return (
    <>
      <div className='bg-[#F7ECEB] min-h-[50vw] lg:mb-0 md:-mb-90 sm:-mb-0 py-4 sm:py-4 md:py-0 '>
        <div className='mx-auto w-[90%] sm:w-[90%] md:w-[85%] lg:w-[80%] flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-12 lg:gap-16'>
          <div className='relative w-full md:w-1/2 h-[80vw] sm:h-[75vw] md:h-[60vh] lg:h-[40vw] px-4 sm:px-9 md:px-6 lg:px-6'>
            <Image
              src="/assets/eshop/trending.avif"
              alt="Trending diamond rings collection"
              fill
              className='object-cover object-left-top rounded-sm'
              sizes="(max-width: 640px) 95vw, (max-width: 768px) 90vw, 40vw"
              priority
            />
          </div>
          <div className='font-gothic w-full sm:w-full md:w-1/2 flex flex-col justify-center px-4 sm:px-0 md:px-6 lg:px-6'>
            <div>
              <h1 className='text-5xl my-5 sm:text-6xl md:text-5xl font-carpethenRegular lg:text-6xl font-light text-amber-950 tracking-normal 3xl:text-8xl' >What&apos;s Trending</h1>
              <p className='mt-4 sm:mt-6 3xl:text-3xl md:mt-8 lg:mt-10 tracking-wide font-light text-sm sm:text-sm md:text-base text-gray-700'>
                Find your wardrobe essential or a new everyday favourite with our array of diamond rings. From classic styles to trendy designs, to dazzling ones and minimalist ones for understated elegance, you will find many to suit your signature style.
              </p>
              <button className='mt-4 sm:mt-6 md:mt-8 lg:mt-10 tracking-[.3rem] leading-loose font-light border-b border-amber-950 float-right 3xl:text-3xl text-sm sm:text-base'>
                <Link href='/product'>
                EXPLORE ALL RINGS                
                </Link>               
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Trending