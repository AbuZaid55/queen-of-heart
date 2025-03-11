'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const pathname = usePathname();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const scrollToTopRef = useRef(null);

  // Determine hero content based on route
  const getHeroContent = () => {
    switch (pathname) {
      case '/festara':
        return {
          desktopImage: '/assets/Festara-New-Hero-Banner-Desktop.jpg',
          mobileImage: '/assets/Festara-Page-New-Hero-Banner-Mobile.jpg',
          title: 'Festara',
          description: 'Festara celebrates life\'s most daring moments with a vivid assortment of beautiful gemstone jewelry. Each piece sparkles with beauty, illuminating your surroundings with every movement.',
          imageClasses: 'w-screen h-full max-w-full min-h-[70vh] sm:h-[150vh] md:h-[50vw] lg:h-[60vw] xl:h-[55vw] object-cover md:-mt-20 lg:-mt-28 sm:-mt-56 -mt-[39vw]'
        };
      case '/fazza':
        return {
          desktopImage: '/assets/Fazza-New-Hero-Banner-Desktop.jpg',
          mobileImage: '/assets/Fazza-Landing-Page-New-Hero-Banner-Mobile.jpg',
          logo: '/assets/Fazza-Golden-Logo.svg',
          description: 'Every item of Fazza jewellery is more than just an accessory; it is a timeless treasure that adds long-term value to any woman\'s collection. Fazza designs with the goal of making traditional Polki jewellery more accessible, combining the charm of heritage with modern elegance in each piece.',
          imageClasses: 'w-screen h-full max-w-full min-h-[60vh] sm:h-[150vh] md:h-[50vw] lg:h-[40vw] xl:h-[50vw] object-cover md:-mt-20 lg:-mt-28 sm:-mt-52 -mt-[28vw]'
        };
      // case '/pache':
      //   return {
      //     desktopImage: '/assets/live-life-platinum.jpg',
      //     mobileImage: '/assets/Pache-Collection_Reel_Thumbnail-final.jpg',
      //     imageClasses: 'w-screen h-full max-w-full min-h-[60vw] sm:h-[170vh] md:h-[50vw] lg:h-[40vw] xl:h-[55vw] object-cover md:-mt-20 lg:-mt-12 sm:-mt-52 -mt-[26vw]'
      //   };
      default:
        return {
          video: '/assets/videoplayback.mp4',
          videoClasses: 'relative z-[-1] h-full w-full object-cover lg:-mt-40 md:-mt-26 sm:-mt-56 -mt-[54vw]'
        };
    }
  };

  // Fixed Button Animation
  useEffect(() => {
    const button = document.querySelector('.fixed-shop-button');
    let shopIconWrapper = null;
    
    const handleMouseEnter = () => {
      gsap.to(button, {
        backgroundColor: 'white',
        color: '#C78C06',
        borderColor: '#C78C06',
        duration: 0.05,
        ease: "power2.inOut"
      });
      if (shopIconWrapper) {
        shopIconWrapper.dataset.icon = 'hover';
      } else {
        button.querySelector('img').src = '/assets/sh.png';
      }
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        backgroundColor: '#C78C06',
        color: 'white',
        borderColor: 'transparent',
        duration: 0.05,
        ease: "power2.inOut"
      });
      if (shopIconWrapper) {
        shopIconWrapper.dataset.icon = 'default';
      } else {
        button.querySelector('img').src = '/assets/sh_1.png';
      }
    };

    if (button) {
      shopIconWrapper = button.querySelector('.shop-icon-wrapper');
      button.addEventListener('mouseenter', handleMouseEnter);
      button.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (button) {
        button.removeEventListener('mouseenter', handleMouseEnter);
        button.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  // Scroll-To-Top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setShowScrollTop(true);
        gsap.to(scrollToTopRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.in"
        });
      } else {
        gsap.to(scrollToTopRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => setShowScrollTop(false)
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const heroContent = getHeroContent();

  return (
    <>
      {/* eShop Button */}
      <Link href="/gulz">
        <div className="fixed -right-9 top-52 z-[9999]">
          {pathname === '/' || pathname === '/festara' || pathname === '/fazza' || pathname === '/pache' ? (
            <p className="fixed-shop-button flex items-center bg-yellow-600 text-white w-28 h-12 p-2 transition-all hover:bg-white hover:text-yellow-600 border-2 border-transparent hover:border-yellow-600 font-medium rotate-90">
              <span className="shop-icon-wrapper relative h-6 w-6 mr-3" data-icon="default">
                <Image src="/assets/sh_1.png" alt="Shop Icon Default" fill className="object-contain mr-5" style={{ display: 'var(--display-default, block)' }} />
                <Image src="/assets/sh.png" alt="Shop Icon Hover" fill className="object-contain" style={{ display: 'var(--display-hover, none)' }} />
              </span>
              eShop
            </p>
          ) : (
            <p className="fixed-shop-button flex items-center bg-yellow-600 text-white w-28 h-12 p-2 transition-all hover:bg-white hover:text-yellow-600 border-2 border-transparent hover:border-yellow-600 rotate-90">
              <Image src="/assets/sh_1.png" alt="Logo" width={24} height={24} className="h-6 mr-4" />
              eShop
            </p>
          )}
        </div>
      </Link>

      {/* Scroll to Top Button */}
      <div 
        ref={scrollToTopRef}
        className="fixed right-4 md:right-10 lg:right-20 bottom-4 md:bottom-6 lg:bottom-9 z-[9999]"
        style={{ opacity: 0 }}
      >
        <button
          className="bg-blue-950  text-white p-3 md:p-3 lg:p-5 rounded-lg transition-all duration-300 hover:text-black"
          onClick={scrollToTop}
        >
          <Image src="/assets/colored-logo.png" alt="Scroll to Top" width={12} height={12} className="h-3 md:h-3 lg:h-3" />
        </button>
      </div>

      {/* Hero Content */}
      <div className={`relative flex ${pathname === '/' ? 'w-screen h-[135vw] sm:h-[155vw] md:h-screen lg:h-screen justify-center items-center lg:-mb-16 md:-mb-24 sm:-mb-32 -mb-[28vw]' : 'justify-center flex-col items-center pb-10'} z-[-1] font-gothic`}>
        {heroContent.video ? (
          <video
            className={heroContent.videoClasses}
            autoPlay
            loop
            muted
            aria-label="Promotional video for Gulz Collection"
            src={heroContent.video}
          />
        ) : (
          <div className={`relative w-full ${
            pathname === '/festara' 
              ? 'w-screen h-full max-w-full min-h-[40vh] sm:h-[112vh] md:h-[58vh] lg:h-[51vw] xl:h-[48vw] lg:mt-0 md:mt-0 sm:mt-0 mt-12'
              : pathname === '/fazza'
                ? 'w-screen h-full max-w-full min-h-[50vh] sm:h-[120vh] md:h-[60vh] lg:h-[32vw] xl:h-[42vw] lg:mt-12 md:mt-0 sm:mt-0 mt-9' 
                : pathname === '/pache'
                  ? 'w-screen h-full max-w-full min-h-[50vh] sm:h-[140vh] md:h-[50vw] lg:h-[60vw] xl:h-[60vw]'
                  : ''
          }`}>
            <Image
              src={heroContent.desktopImage}
              alt="Hero Banner"
              width={2060}
              height={1080}
              className={`hidden md:block ${heroContent.imageClasses}`}
              priority
            />
            <Image
              src={heroContent.mobileImage}
              alt="Hero Banner"
              width={768}
              height={1024}
              className={`md:hidden ${heroContent.imageClasses}`}
              priority
            />
          </div>
        )}

        {heroContent.title && (
          <div className='flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 w-full max-w-7xl mx-auto z-30'>
            <h2 className='text-7xl font-autography md:text-8xl lg:text-9xl -my-2 md:-my-4 lg:-my-12 '>{heroContent.title}</h2>
            <p className='pt-4 md:pt-8 lg:pt-12 leading-7 font-centuryGothic w-full md:w-[90%] lg:w-[90%] xl:w-[87%] text-center text-[#757575] text-sm md:text-m lg:text-m tracking-widest'>
              {heroContent.description}
            </p>
          </div>
        )}

        {heroContent.logo && (
          <div className='flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 w-full max-w-7xl mx-auto'>
            <Image 
              src={heroContent.logo}
              alt="Brand Logo"
              width={320}
              height={320}
              className='sm:h-44 sm:w-32 md:h-80 md:w-80 lg:w-80 lg:h-80 h-36 w-36 -mt-3 sm:-mt-14 md:-mt-44 lg:-mt-44 z-30'
              id="fazza"
            />
            <p className='md:-mt-10 -mt-1 xl:-mt-10 lg:-mt-9 leading-7 font-centuryGothic w-full md:w-[90%] lg:w-[90%] xl:w-[87%] text-center text-[#757575] text-sm md:text-m lg:text-m tracking-widest'>
              {heroContent.description}
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        .shop-icon-wrapper[data-icon="default"] {
          --display-default: block;
          --display-hover: none;
        }
        .shop-icon-wrapper[data-icon="hover"] {
          --display-default: none;
          --display-hover: block;
        }
      `}</style>
    </>
  );
};

export default Hero;