'use client'
import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faHeart } from '@fortawesome/free-regular-svg-icons'
import { faL, faMagnifyingGlass,faCartShopping,faClipboard,faRightFromBracket    } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import DropDown from '../ui/DropDown'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import ProfileDropDown from '@/app/product/[name]/ProfileDropDown'
import { brandsList, cartItems, categoryList } from '@/Data/cardsData'
import CartDropDown from '@/app/product/[name]/CartDropDown'

const Header = () => {
  
  const sidebarMenu = useRef(null)
  const dropDownMenu = useRef(null)
  // const profileDropdown = useRef(null)
  const pathName = usePathname()
  const [isFixed, setIsFixed] = useState(false)
  const [isSideBarOpen,setIsSideBarOpen] = useState(false) 
  const [showProfileDropDown,setShowProfileDropdown] = useState(false)
  const [showCartDropDown,setshowCartDropDown] = useState(false)



  
  

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
 
  
  
  let data = {
    brandLogo: '/assets/eshop/Gulz-brown.svg',
    sideBarLogo: '/assets/eshop/menu.svg',
  }
 
  
   if(pathName==='/gulz'){
    data.brandLogo = "/assets/eshop/Gulz-Logo.svg"
    data.sideBarLogo = '/assets/eshop/menu-white.svg'
   }

  return (
    <>
    <DropDown dropDownMenu={dropDownMenu}/>  
    <div className={`${isFixed ? 'fixed shadow-2xl z-[999] ' : 'absolute z-[99999]'} top-0 left-0 h-28 w-full`}>
      
      {/* Marqeee Section */}
      <div className={`md:h-9 w-full flex flex-col md:justify-normal md:items-start items-center justify-center  
  ${isFixed ? 'md:bg-[#663634] bg-white'  : 'md:bg-[#663634]'}`}>   
   <div className='w-full bg-white text-center md:w-auto md:bg-transparent md:mt-1 font-gothic '>

  
  {<a href="https://khwaahish-next.vercel.app/" target='_blank' className="ml-4 md:py-1 text-sm 3xl:text-[25px]  text-black md:text-white  relative z-50 cursor-pointer 
    border-b border-b-transparent transition-all duration-300 ease-in-out md:hover:border-b-white  border-black b hover:border-b-black"> Visit Brand Website</a>}
   </div>

  <div className="md:w-[35%] flex items-center justify-center md:inline md:pt-1 w-full h-full md:absolute  
    md:left-1/2 md:-translate-x-1/2 md:bg-transparent bg-[#663634] md:top-0 overflow-hidden">    
    <div className="marquee  text-white font-gothic md:text-sm 3xl:text-[22px] text-xs">
      <p className='py-1.5 md:py-0 cursor-default'>Free & Insured Shipping Across India | International Shipping +91 9884039111 Free & Insured Shipping Across India | International Shipping +91 9884039111</p>
    </div>    
  </div>
</div>


      {/* Below Section */}
      <div className={`${isFixed ? 'bg-[#f7eceb]' : 'bg-transparent'} h-16 md:h-[12vh] w-full flex items-center justify-between sm:p-2 px-2  sm:px-8`}>
        <div className="h-7 3xl:h-12 3xl:w-12  md:h-8 md:w-8 cursor-pointer">
          {isFixed ? (
            <img className="open-btn h-full w-full object-contain hover:scale-110 transition-all duration-300" src="/assets/eshop/menu.svg" alt=""/>
          ) : (
            <img className="open-btn h-full w-full object-contain hover:scale-110 transition-all duration-300" src={data.sideBarLogo} alt=""/>
          )}
        </div>
        {/* Logo Section */}
        <div className="flex justify-center ml-4 sm:ml-0   items-center gap-1 md:gap-2 relative z-[1000]">                                            
            {isFixed ? (
              <Link href="/gulz" className="h-fit w-14 3xl:w-52 sm:w-40 sm:pr-2">
                <img src="/assets/eshop/Gulz-brown.svg" alt="" />
              </Link>
            ) : (
              <Link href="/gulz" className="h-fit w-20 3xl:w-52 sm:w-40 pr-2">
                <img src={data.brandLogo} alt="" />
              </Link>
            )}
          
          <Link href="/" className={`${isFixed ? 'border-l border-[#663634] text-[#663634]' : (`${pathName==='/gulz' ? 'text-white border-l border-white ':'border-l border-[#663634] text-[#663634]'}`)} w-20 sm:w-full cursor-pointer text-[14px] md:text-2xl sm:pl-2 pl-1 3xl:text-[28px] md:pl-3`}>
            QUEENS OF HEARTS
          </Link>
        </div>


        {/* Icon Section */}
   <div className={`${isFixed ? 'text-[#663634]' : (pathName === '/gulz' ? 'text-white' : 'text-[#663634]')} flex  justify-between`}>
  <FontAwesomeIcon icon={faMagnifyingGlass} className="search-btn cursor-pointer md:text-xl text-lg  3xl:text-3xl 4xl:text-4xl"/>
    
    <div className='relative'>
    <FontAwesomeIcon onMouseEnter={()=>setshowCartDropDown(true)} icon={faCartShopping} className="cursor-pointer md:text-xl text-lg sm:px-5 px-3 3xl:text-3xl 4xl:text-4xl"/>
     <span className='absolute text-[10px] -top-4 py-0.5 px-1.5 right-1 rounded-full bg-[#704342] text-white'>{cartItems.length}</span>
     {showCartDropDown &&   <CartDropDown setshowCartDropDown={setshowCartDropDown}/> 
     
     }
    </div>

     <Link href='/my-account/my-wishlist' className='relative'>
    <FontAwesomeIcon className="cursor-pointer md:text-xl text-lg 3xl:text-3xl sm:pr-5 pr-2 4xl:text-4xl" icon={faHeart} />
    <span className='absolute text-[10px] -top-4 py-0.5 px-1.5 right-1 rounded-full bg-[#704342] text-white'>{cartItems.length}</span>

     </Link>
  <div className='hidden sm:block'>    
    <FontAwesomeIcon onMouseEnter={()=>setShowProfileDropdown(true)}
      icon={faUser} className="cursor-pointer md:text-xl text-lg font-extralight 3xl:text-3xl 4xl:text-4xl" /> 
    {showProfileDropDown && <ProfileDropDown setShowProfileDropdown={setShowProfileDropdown}/>  }
  </div>
</div>

      </div>

      {/* Sidebar Section */}
      <div data-lenis-prevent = "true" ref={sidebarMenu} className="opacity-0  fixed top-0 left-0 sm:w-[24rem] 3xl:w-[35rem] 4xl:w-[45rem]  lg:w-[25rem] w-full h-full bg-[#f7ebeb] text-[#4F2426] z-[9999] shadow-lg overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-[#4F2426] [&::-webkit-scrollbar-thumb]:rounded">
        <div className="p-4 font-gothic">
          <div className="text-xl font-bold hover:text-gray-500 px-4 flex justify-end items-center w-full">
            <Image src="/assets/eshop/output-onlinejpgtools-removebg-preview.png"  width={25} height={15} alt="Close" className="close-btn h-6 ml-auto cursor-pointer transition-transform duration-500 transform hover:rotate-180" />
          </div>

          <h4 className="text-lg 3xl:text-[30px] sm:text-xl font-semibold px-1 text-[#4F2426] tracking-widest">
            Categories
            <span className="block border-b-2 border-[#4F2426] w-14 mt-2"></span>
          </h4>
 
          <ul className="mt-6 space-y-4 px-2">
            {
              categoryList.map((category,index)=>(
            <li key={index}>
              <Link onClick={handleClose}  href={`/${category.replace(/\s+/g, "-").toLowerCase()}`} className="text-gray-800 hover:text-[#4F2426] hover:underline hover:underline-offset-4 3xl:text-[25px] transition-all duration-500 text-[0.95rem] tracking-widest">{category}
              </Link>
            </li>

              ))
            }
            
            <h4 className="text-lg 3xl:text-[30px] sm:text-xl font-semibold px-1 text-[#4F2426] tracking-widest pt-5">
            Collections
            <span className="block border-b-2 border-[#4F2426] w-14 mt-2"></span>
          </h4>
          <li>
              <Link onClick={handleClose} href="/product" className="text-gray-800 hover:text-[#4F2426] hover:underline hover:underline-offset-4 transition-all 3xl:text-[25px] duration-500 text-[0.95rem] tracking-widest">
                Glitz
              </Link>
            </li>
          <li>
              <Link onClick={handleClose} href="/product" className="text-gray-800 hover:text-[#4F2426] hover:underline hover:underline-offset-4 transition-all 3xl:text-[25px] duration-500 text-[0.95rem] tracking-widest">
                Galaxy
              </Link>
            </li>
            <div className="text-gray-700 3xl:text-[20px] 4xl:text-[35px] 4xl:leading-[1.5] text-[0.95rem] sm:text-[0.95rem] leading-6 py-5 tracking-widest">
              Queen of Hearts - Chennai&apos;s crown jewel of partywear, where lightweight don&apos;t mean low on drama. Our sub-brands are curated in-house, designed to excite & appeal to the lifestyle of those who appreciate craft & all things precious.
            </div>
            <h4 className="text-lg 3xl:text-[30px]  sm:text-xl font-semibold px-1 text-[#4F2426] tracking-widest">
              Curated Brands
              <span className="block border-b-2 border-[#4F2426] w-14 mt-2"></span>
            </h4>

            {
              brandsList.map((brand,index)=>(
                <li key={index}>
                <Link href={brand.path} onClick={handleClose} className="text-gray-800 hover:text-[#4F2426] hover:underline hover:underline-offset-4 transition-all 3xl:text-[25px] duration-500 text-[0.95rem] tracking-widest">
                  {brand.title}
                </Link>
              </li>
              ))
            }
           
           
            
          </ul>

          <Link href="/" onClick={handleClose} className="text-[#4F2426] hover:text-yellow-600 hover:underline hover:underline-offset-4 transition-all 3xl:text-[25px] duration-500 mt-10 block text-base sm:text-lg">
            VISIT BRAND WEBSITE
          </Link>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Header;
