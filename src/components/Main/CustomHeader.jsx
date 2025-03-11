'use client'
import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import DropDown from '../ui/DropDown'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Marquee from '../ui/Marquee'

const CustomHeader = () => {
  
  const sidebarMenu = useRef(null)
  const dropDownMenu = useRef(null)
  const pathName = usePathname()
  const [isFixed, setIsFixed] = useState(false)
  const [isSideBarOpen,setIsSideBarOpen] = useState(false) 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 170) {
        setIsFixed(true);
      } else {
        setIsFixed(false)
      }
    };

   

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  useGSAP(() => {
    
    const closeBtn = document.querySelector('.close-btn');
    const openBtn = document.querySelector('.open-btn');
    const searchbtn = document.querySelector('.search-btn');

    gsap.set(sidebarMenu.current, { xPercent: -100 ,opacity:1})   


   //DropDown
    gsap.set(dropDownMenu.current,{yPercent:-100,opacity:1})
    const handleClickOpen = ()=>{      
      gsap.to(dropDownMenu.current,{
        yPercent:0,
      })
    }

    closeBtn.addEventListener('click', handleClose)
    openBtn.addEventListener('click', handleOpen)
    searchbtn.addEventListener('click', handleClickOpen)
  });
  
  const handleOpen = () => {
    gsap.to(sidebarMenu.current, {
      xPercent: 0,
      ease:'power2.out',
    });
    setIsSideBarOpen(true)
  };

  const handleClose = () => {
    gsap.to(sidebarMenu.current, {
      xPercent: -100,
      ease:'power2.in'
    });
    setIsSideBarOpen(false)
  };



  useEffect(()=>{
    const handleClickOutside = (e) => {
      if(isSideBarOpen &&
        sidebarMenu.current &&
        !sidebarMenu.current.contains(e.target)
      ){
        handleClose()
        console.log('hello');
        
      }
    }

    document.addEventListener('mousedown',handleClickOutside)
  },[isSideBarOpen])
 
  const logoMap = {
  "/":{ 
  normal:"/assets/homeLogo.png",
  fixed:'/assets/homeBlack.png'
  },
  "/fazza": {
  normal:"/assets/fazza-white-logo.png",
  fixed:'/assets/Fazza-logo.svg'
  },
  "/festara":{ 
    normal:"/assets/download.svg",
    fixed:'/assets/Festara-Logo.svg'

  }
  }
  const {normal,fixed} = logoMap[pathName]

  

  return (
    <>
    <DropDown dropDownMenu={dropDownMenu}/>  
    <div className={`${isFixed ? 'fixed shadow-2xl z-[999] ' : 'absolute z-[999]'} top-0 left-0 h-28 w-full`}>
      
      {/* Marqeee Section */}
      
          <div>
          <Marquee/>
          </div>


      {/* Below Section */}
      <div className={`${isFixed ? 'bg-white' : 'bg-transparent'} h-16 md:h-[12vh] w-full flex items-center justify-between p-1 px-4 md:px-8`}>
        <div className="h-7 3xl:h-12 3xl:w-12  md:h-8 md:w-8 cursor-pointer">
          {isFixed ? (
            <img className="open-btn h-full w-full object-contain hover:scale-110 transition-all duration-300" src="/assets/eshop/menu.svg" alt=""/>
          ) : (
            <img className="open-btn h-full w-full  object-contain hover:scale-110 transition-all duration-300" src='/assets/eshop/menu-white.svg'alt=""/>
          )}
        </div>
        {/* Logo Section */}
        <div className="flex justify-center  items-center gap-1 md:gap-2 relative z-[1000]">                          
             <Link href="/" className="h-fit -mt-2 pl-2 md:pr-2">
  <img src={isFixed ? fixed : normal} className='md:h-20 3xl:h-32 h-10 object-contain' alt="Website Logo"/>
</Link>     
          
        <Link href="/" className={`${isFixed ? 'border-l border-[#663634] text-black' : 'border-l border-white text-white'}   sm:w-full cursor-pointer 3xl:text-[28px] text-sm md:text-xl  lg:py-1  pl-2 md:pl-3`}>
          QUEENS OF HEARTS
        </Link>
        </div>


        {/* Icon Section */}
        <div className={`${isFixed ? 'text-black' :  'text-white' }  flex justify-between`}>
  <FontAwesomeIcon icon={faMagnifyingGlass} className="search-btn cursor-pointer md:text-xl text-lg 3xl:text-3xl pr-3 mt-[3px] md:pr-5" />
  <Link href="#">
    <FontAwesomeIcon icon={faLocationDot}  className="cursor-pointer md:text-xl text-lg 3xl:text-3xl font-extralight" />
  </Link>
</div>

      </div>

      {/* Sidebar Section */}
      <div data-lenis-prevent = "true" ref={sidebarMenu} className=" opacity-0  fixed top-0 left-0 sm:w-[24rem]  3xl:w-[35rem] 4xl:w-[45rem]  lg:w-[27.5%] w-full h-full bg-white text-[#4F2426] z-[9999] shadow-lg overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-[#4F2426] [&::-webkit-scrollbar-thumb]:rounde d">
        <div className="p-4 font-gothic">
          <div className="text-xl font-bold hover:text-gray-500 px-4 flex justify-end items-center w-full">
            <Image src="/assets/eshop/output-onlinejpgtools-removebg-preview.png"  width={25} height={15} alt="Close" className="close-btn h-6 ml-auto cursor-pointer transition-transform duration-500 transform hover:rotate-180" />
          </div>

         

          <ul className="mt-6  space-y-4 px-2">            
            
            <div className="text-gray-700 3xl:text-[20px] 4xl:text-[35px] 4xl:leading-[1.5] 4xl:text-4xl sm:text-[15px] leading-2 mb-10 tracking-widest">
              Queen of Hearts - Chennai&apos;s crown jewel of partywear, where lightweight don&apos;t mean low on drama. Our sub-brands are curated in-house, designed to excite & appeal to the lifestyle of those who appreciate craft & all things precious.
            </div>
            <h4 className="3xl:text-[30px] sm:text-xl font-semibold px-1 text-[#4F2426] tracking-widest">
              Curated Brands
              <span className="block border-b-[1px] border-[#4F2426] w-20 mt-2"></span>
            </h4>
            <li>
              <Link href="/gulz" onClick={handleClose} className="text-gray-800  hover:text-[#4F2426] hover:underline hover:underline-offset-4 transition-all duration-500 3xl:text-[25px] 4xl:text-[40px] text-[16px] tracking-widest">
                Gulz-Trendy & Chic Diamonds
              </Link>
            </li>
            <li>
              <Link href="/fazza" onClick={handleClose} className="text-gray-800 hover:text-[#4F2426] hover:underline hover:underline-offset-4 transition-all duration-500 3xl:text-[25px] 4xl:text-[40px] text-[16px]  tracking-widest">
                Fazza-Gorgeous Polki
              </Link>
            </li>
            <li>
              <Link href="/festara" onClick={handleClose} className="text-gray-800 hover:text-[#4F2426] hover:underline hover:underline-offset-4 transition-all duration-500 3xl:text-[25px] 4xl:text-[40px] text-[16px]  tracking-widest">
                Festara-Romancing Gemstones
              </Link>
            </li>
           
          </ul>

          <a href="https://khwaahish-next.vercel.app/" target='_blank'  rel="noopener noreferrer" onMouseDown={handleClose} className="text-[#4F2426] hover:text-yellow-600 hover:underline pl-2.5 hover:underline-offset-4 transition-all duration-500 mt-10 block text-base 3xl:text-[25px] 4xl:text-[40px] sm:text-lg">
            VISIT BRAND WEBSITE
          </a>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default CustomHeader;
