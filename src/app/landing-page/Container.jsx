'use client'
import React, { useRef } from 'react'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import Image from 'next/image';

const Container = () => {
  const containerRef = useRef(null)
  const buttonRefs = useRef([])

  useGSAP(() => {
    buttonRefs.current.forEach(button => {
      const tl = gsap.timeline({ paused: true })
      
      tl.to(button, {
        backgroundColor: 'white',
        color: 'black',
        borderColor: '#C78C06',
        scale: 1.1,
        duration: 0.3,
        ease: 'power2.out'
      })

      const handleEnter = () => tl.play()
      const handleLeave = () => tl.reverse()

      button.addEventListener('mouseenter', handleEnter)
      button.addEventListener('mouseleave', handleLeave)

      return () => {
        button.removeEventListener('mouseenter', handleEnter)
        button.removeEventListener('mouseleave', handleLeave)
      }
    })
  }, { scope: containerRef })

  const sections = [
    {
      name: 'Gulz',
      description: 'Gulz offers diamond jewellery that is both trendy and effortlessly stylish, feeling as light as it looks. It\'s jewellery designed for the contemporary you, ideal for regular wear.',
      image: '/assets/1200X800-Queen-of-hearts-carousel-banner-images-Gulz.jpg',
      alt: 'Gulz Jewellery',
      tagline: 'Trendy. Chic and Simply You.',
      link: '/gulz'
    },
    {
      name: 'Fazza',
      description: 'One-of-a-kind diamonds for a one-of-a-kind you. Fazza doesn\'t just dress you up, it leaves a legacy in every sparkle. Our uncut diamonds are bold, timeless, and unapologetically unique, just like you.',
      image: '/assets/1200X800-Queen-of-hearts-carousel-banner-images-Fazza.jpg',
      alt: 'Fazza Jewellery',
      tagline: 'Gorgeous & Pure Uncut Polki',
      link: '/fazza'
    },
    {
      name: 'Festara',
      description: 'Festara turns up the brightness! Gemstones that sparkle as boldly as you live. Shine with every step—because life\'s too short for dull jewellery. Your style, your vibe. Festara\'s vibrant gems are handpicked to match your kindred spirit.',
      image: '/assets/1200X800-Queen-of-hearts-carousel-banner-images-Festara.jpg',
      alt: 'Festara Jewellery',
      tagline: 'A Mélange of Precious Gemstones',
      link: '/festara'
    },
    // {
    //   name: 'Pache',
    //   description: 'Our timeless designs are for those who appreciate the finer things in life, offering the perfect balance of precision & class.',
    //   image: '/assets/1200X800-Queen-of-hearts-carousel-banner-images-Pache.jpg',
    //   alt: 'Pache Jewellery',
    //   tagline: 'Precious Jewellery for Men',
    //   link: '/'
    // }
  ]

  return (
    <div ref={containerRef}>
      {sections.map((section, index) => (
        <section key={section.name} className={`text-center font-gothic w-full h-auto flex-col ${index === 0 ? '-mt-5 md:mt-0' : 'mt-10'} lg:mt-10 sm:py-1`}>
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            <hr className="w-6 sm:w-16 h-0.5 bg-gray-700 border-0 rounded" />
            <span className="text-xl 3xl:text-5xl lg:text-3xl sm:text-container text-gray-700 mx-2 sm:mx-4">{section.name}</span>
            <hr className="w-6 sm:w-16 h-0.5 bg-gray-700 border-0 rounded" />
          </div>

          <p className="text-[3vw] md:text-sm 3xl:text-2xl text-gray-500 tracking-widest text-center px-[4vw] md:px-[10vw] lg:px-[15vw] mb-[2vw] leading-relaxed">
            {section.description}
          </p>

          <div className="max-w-screen-2xl mx-auto px-4 3xl:mx-0 sm:px-16">
            <div className="bg-neutral-100 rounded-[3vw] 3xl:m-auto 3xl:w-[95vw] 3xl:h-[80vh] sm:rounded-[3.5vw]  shadow-md overflow-hidden">
              <div className="flex flex-col   lg:flex-row">
                <div className="w-full lg:w-4/6  relative h-[400px] lg:h-[40rem]">
                  <div className="w-full h-full lg:h-[40rem] 3xl:h-[80vh]">
                    <Image
                      src={section.image}
                      alt={section.alt}
                      width={1400}
                      height={1200}
                      className="object-cover  w-full h-full"
                    />
                  </div>
                </div>

                <div className="w-full lg:w-1/3 flex 3xl:h-[80vh] flex-col justify-center items-center p-6 lg:p-8">
                  <h3 className="text-2xl lg:text-5xl text-gray-900 3xl:text-5xl mb-3 lg:mb-4 tracking-widest font-bigillaBold">{section.name}</h3>
                  <p className="text-xs lg:text-lg 3xl:text-2xl text-gray-500 mb-4 lg:mb-6 tracking-widest">
                    {section.tagline}
                  </p>
                  <Link href={section.link}>
                    <button 
                      ref={el => buttonRefs.current[index] = el}
                      className="bg-yellow-700 text-white text-[3vw] md:text-[1.4vw] lg:text-[1vw] py-[1.5vw] md:py-[1vw] lg:py-[0.7vw] px-[5vw] md:px-[3vw] lg:px-[2vw] rounded-[6vw] md:rounded-[3vw] lg:rounded-[2vw] shadow-md border-2 border-transparent transition-all duration-300 hover:scale-105"
                    >
                      EXPLORE MORE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}

export default Container
