'use client'
import React from 'react'
import Image from 'next/image'
import { Helmet } from 'react-helmet'

const Benifit = () => {
  return (
    <>
      

      <div className='font-gothic min-h-[60vh] w-full bg-[#F7ECEB] py-4 md:py-5'>
        <h1 className="text-xl sm:text-2xl md:text-[1.6rem] text-center mt-1 sm:mt-3 md:-mt-2 lg:-mt-20 uppercase text-[#4F2426] tracking-[0.2rem] sm:tracking-[0.4rem] 3xl:text-3xl">
          E-shop Benefits
          <span className="flex border-b-2 border-[#58282a] w-16 sm:w-20 md:w-24 mt-2 mx-auto"></span>
        </h1>
        <div className='w-[95%] md:w-[90%] mt-6 md:mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7'>
          <div className='w-full flex flex-col p-4 md:p-10 gap-4 md:gap-5 items-center'>
            <div className='relative h-8 md:h-10 w-12 md:w-14'>
              <Image 
                src="/assets/eshop/benifit1.svg" 
                alt="Delivery and Returns Icon"
                fill
                className='object-contain'
              />
            </div>
            <h2 className='text-center text-xl md:text-[1.4rem] font-light text-amber-900 tracking-[0.4rem] 3xl:text-3xl'>Delivery & Returns</h2>
            <p className='text-center font-light text-sm 3xl:text-2xl md:text-[0.9rem] tracking-widest leading-2 text-gray-600'>Complementary and secured shipping across India. 10 day complimentary Return policy within India. Your order will be shipped to you fully insured by reputed carriers.</p>
          </div>

          <div className='w-full flex flex-col p-4 md:p-10 gap-4 md:gap-5 items-center'>
            <div className='relative h-8 md:h-10 w-12 md:w-14'>
              <Image 
                src="/assets/eshop/benifit2.svg" 
                alt="Quality Assurance Icon"
                fill
                className='object-contain'
              />
            </div>
            <h2 className='text-center text-xl md:text-[1.4rem] font-light text-amber-900 tracking-[0.4rem] 3xl:text-3xl'>Quality</h2>
            <p className='text-center font-light text-sm md:text-[0.9rem] tracking-widest leading-2 text-gray-600 3xl:text-2xl'>Exceptional quality of diamonds, gemstones and crafting techniques. We are recognised for our diamond expertise and unique craftsmanship. Every diamond and precious gemstone used is handpicked and ethically sourced by our inhouse team of experts.</p>
          </div>

          <div className='w-full flex flex-col p-4 md:p-10 gap-4 md:gap-5 items-center md:col-span-2 lg:col-span-1 md:mx-auto md:max-w-[50%] lg:max-w-full'>
            <div className='relative h-8 md:h-10 w-12 md:w-14'>
              <Image 
                src="/assets/eshop/benifit3.svg" 
                alt="Lifetime Exchange Icon"
                fill
                className='object-contain'
              />
            </div>
            <h2 className='text-center text-xl md:text-[1.4rem] font-light text-amber-900 tracking-[0.4rem] 3xl:text-3xl'>Lifetime Exchange</h2>
            <p className='text-center font-light text-sm md:text-[0.9rem] tracking-widest leading-2 text-gray-600 3xl:text-2xl'>Exchange your old gold with us anytime and upgrade to a brand new piece of Jewellery. We follow a detailed process to assess the purity of old gold received and offer the best exchange value as per current market standards.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Benifit