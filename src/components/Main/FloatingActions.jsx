'use client'

import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft,faLocationDot,faAngleRight,faAnglesUp} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const BackToTop = () => {
    const iconRef = useRef(null)
    const [isFixed, setIsFixed] = useState(null)
    const [iconNavigation,setIconNavigation] = useState(faAngleLeft)
    const [iconVisibility,setIconVisibility] = useState(false)
       
  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 90) {
      setIsFixed(true);
    } else {
      setIsFixed(false)
    }
  }

  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])
const handleScroll = () => {
  window.scrollTo({
      top:0,
      behavior:'smooth'
  })
}
    useGSAP(()=>{
    const handleClick = ()=> {
    gsap.to(iconRef.current,{
    rotate:180,
    duration:0.5,
    onComplete:()=>{
    setIconNavigation((prev)=>(prev === faAngleLeft ? faAngleRight : faAngleLeft))
    setIconVisibility((prev)=>(prev===false?true:false))
    gsap.set(iconRef.current,{rotate:0,opacity:1})
    }
    },
)}    
    iconRef.current.addEventListener('click',handleClick) 
   
},[])

    
  return (
    <div className='fixed bottom-9 z-[99] right-8 '>
        <div className='flex items-center gap-2'>
        <div className={`${iconVisibility?' flex':'opacity-0 pointer-events-none' } opacity-1 cursor-pointer  transition-opacity duration-300`}>
    <FontAwesomeIcon  className='mx-2 bg-[#663634] text-white px-3.5 py-3 3xl:px-5  3xl:py-4 text-xl 3xl:text-3xl rounded-full cursor-pointer' icon={faWhatsapp} />
    <FontAwesomeIcon  className=' bg-[#663634] text-white px-4 py-3 text-xl 3xl:px-5  3xl:py-4 rounded-full 3xl:text-3xl  cursor-pointer' icon={faLocationDot} />
    </div>
    <button  className='bg-[#663634] px-4 py-2.5 rounded-md 3xl:px-5 3xl:py- '>
    <FontAwesomeIcon ref={iconRef} className='text-white text-xl 3xl:text-4xl ' icon={iconNavigation} />
    </button> 

        </div>

      <div className={`${isFixed?'flex justify-end':'opacity-0 pointer-events-none flex justify-end '}  border-black opacity-1 cursor-pointer  transition-opacity duration-1000 mt-2 `} onClick={handleScroll}>
      <FontAwesomeIcon className='bg-[#663634] px-4 py-3 rounded-md text-white 3xl:text-3xl  3xl:px-4  3xl:py-3.5' icon={faAnglesUp} />
        </div>  
    </div>
  )
}

export default BackToTop
