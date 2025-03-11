'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

const DropDown = ({dropDownMenu}) => {
  
  const btnRef = useRef(null)
  const [isDropDownOpen,setIsDropDownOpen] = useState(true)
  const pathName = usePathname()
  
  const bgChange = ['/','/festara','/fazza']

  useGSAP(()=>{   
    const handleMouseEnter = () => {
       gsap.to(".close", {
        rotate: 20,
        scale:1.3,
        duration: 0.5,
      });
    };
     
  
   
    const handleMouseLeave = ()=> {
      gsap.to('.close',{rotate:0,duration:0.5,scale:1})
    }
    const btn = btnRef.current
    btn.addEventListener("click", handleClickClose);
    btn.addEventListener("mouseenter", handleMouseEnter);
    btn.addEventListener("mouseleave", handleMouseLeave);
  })

  const handleClickClose = ()=>{      
    gsap.to(dropDownMenu.current,{
      yPercent:-100,
      ease:'power3.in'
    })
    setIsDropDownOpen(false)
  }

  // useEffect(()=>{
  //   const handleClickOutside = (e)=>{
  //     if(isDropDownOpen &&
  //       dropDownMenu.current &&
  //       !dropDownMenu.current.contains(e.target)
  //     ) {
  //       handleClickClose()
  //     }
  //   }

  //   document.addEventListener('mousedown',handleClickClose)
  // },[isDropDownOpen])

  return (
    <div ref={dropDownMenu} className={`${bgChange.includes(pathName)?'bg-white':'bg-[#f7eceb]'} z-[999999] opacity-0 left-0 fixed w-full  flex justify-center font-gothic`}>
        <div  className='w-[95%] relative my-1 '>
          <div className='flex  justify-center items-center md:mt-10'>
            <h1 className=' text-center relative text-[#663634] font-bold 3xl:text-[35px]  text-lg before:w-12 before:h-[10px]  before:border-b-[1px] before:absolute before:border-[rgb(102,54,52)] before:top-5 before:left-9'>SEARCH HERE</h1>
          </div>
         
            <img ref={btnRef}  src="/assets/eshop/output-onlinejpgtools-removebg-preview.png" className='close h-4 3xl:h-8  cursor-pointer absolute right-3 top-5' alt="close-tag" />
         
            <form className='flex px-3 md:w-[60%] m-auto justify-center my-6 '>
                <input type='text' placeholder='Search' className= {`${bgChange.includes(pathName)?'border-2 border-black':'bg-transparent bg-white'} w-full py-3 px-2  focus:outline-none rounded-l-md`}/>
                <button className='bg-[#663634] rounded-r-md px-2.5'>
                <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='#fff' width="24px"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                </button>
            </form>
            <h1 className='text-center 3xl:text-[30px] 3xl:py-5 text-sm font-bold'>Frequently Searched Items:</h1>
            <div className='py-3  mb-5 px-0.5 md:flex md:justify-center text-center gap-3 '>
                <button className='border-gray-500 border-[1px] text-gray-400 px-5 mx-2  rounded-full 3xl:text-[18px] text-[12px] hover:scale-105 transition-transform duration-300'>Rings</button>
                <button className='border-gray-500 border-[1px] text-gray-400 px-2.5 mx-2 rounded-full 3xl:text-[18px]   text-[12px] hover:scale-105 transition-transform duration-300'>Bracelets</button>
                <button className='border-gray-500 border-[1px] text-gray-400 px-2.5 mx-2 rounded-full 3xl:text-[18px]   text-[12px] hover:scale-105 transition-transform duration-300'>Earrings</button>
                <button className='border-gray-500 border-[1px] text-gray-400 px-2.5  rounded-full 3xl:text-[18px]   text-[12px] hover:scale-105 transition-transform duration-300'>Glitz</button>
                <button className='border-gray-500 border-[1px] text-gray-400 px-2.5 mx-2 rounded-full 3xl:text-[18px]   text-[12px] hover:scale-105 transition-transform duration-300'>Glitz</button>
                <button className='border-gray-500 border-[1px] text-gray-400 px-2.5 mx-2 rounded-full 3xl:text-[18px]   text-[12px] hover:scale-105 transition-transform duration-300'>Galaxy</button>
                <button className='border-gray-500 border-[1px] text-gray-400 px-2.5 mx-2 rounded-full 3xl:text-[18px]   text-[12px] hover:scale-105 transition-transform duration-300'>Baalis</button>
            </div>
        </div>
      
    </div>
  )
}

export default DropDown
