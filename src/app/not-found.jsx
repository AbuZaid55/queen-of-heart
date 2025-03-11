// src/app/not-found.tsx
"use client";

import { useRouter } from "next/navigation";
import Header from "../components/Main/Header"
import Footer from "../components/Main/Footer"
import { useEffect } from "react"


export default function NotFound() {
  const router = useRouter()
     
  useEffect(()=>{
  let timer = setTimeout(()=>{
    router.push('/')
   },5000)

   return()=>clearTimeout(timer)
      
  },[])

  return (
      <>
      <Header isErrorPage={true}/>
      <div className="bg-[#F7ECEB] w-full min-h-screen flex items-center justify-center font-centurygothic px-4 text-center ">            
      <div className="max-w-md md:max-w-lg flex flex-col items-center">
        <h1 className="text-lg md:text-2xl 4xl:text-4xl text-[#663634] tracking-[5px] md:tracking-[7px] leading-normal font-normal md:whitespace-nowrap">
          THE PRODUCT OR PAGE IS NO LONGER AVAILABLE
        </h1>
        <p className="mt-2 text-[#545454]  4xl:text-4xl font-normal text-sm md:text-base text-center">
          We&apos;re redirecting you to our homepage in 5 seconds.
        </p>
        <h2 className="mt-4 text-sm md:text-lg text-[#663634] leading-normal tracking-[3px] md:tracking-[5px] md:whitespace-nowrap text-center  4xl:text-4xl">
          If you&apos;re not redirected, please click the button below:
        </h2>
        <div className="pt-6 md:pt-8">
         
          <button type='submit' className='bg-[#663634] cursor-default mt-2 px-7 py-3 border-transparent text-white text-sm hover:bg-transparent hover:text-[#663634]  4xl:text-4xl transition-all duration-500 ease-in-out border hover:border-[#663634]'  onClick={()=>router.push('/')} >Back to home</button>
        </div>
      </div>
    </div>
    <Footer/>
      </>
  )
}
