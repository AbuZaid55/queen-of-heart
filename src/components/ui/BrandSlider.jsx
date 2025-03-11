'use client'

import React, { useRef, useState, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoPlay from 'embla-carousel-autoplay'
import Image from 'next/image'

const BrandSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, dragFree: false },
    [AutoPlay({ delay: 10000, stopOnInteraction: false })]
  )
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setActiveIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => emblaApi.off('select', onSelect)
  }, [emblaApi, onSelect])

  const renderSlide = (src, alt, title, description, additionalDescription = '', key) => (
    <div key={key} className="embla__slide flex-[0_0_100%] min-w-0">
      <div className="flex flex-col md:flex-row items-center bg-neutral-100 w-[100%] justify-center text-center mx-auto">
        <div className="w-full md:w-2/3 relative h-[300px] sm:h-[400px] md:h-[540px]">
          <Image 
            src={src}
            alt={alt}
            fill
            priority={alt === "Slide 1"}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw"
          />
        </div>
        <div className="w-full md:w-1/3 p-4 md:p-8">
          <h3 className="text-2xl font-bigillaBold  sm:text-3xl md:text-[2.6rem] mb-4 text-center tracking-widest md:px-3 leading-9">{title}</h3>
          <p className="text-gray-500 font-gothic text-xs   3xl:text-xl sm:text-sm lg:text-heroSection lg:leading-[28px] tracking-widest leading-6 md:px-2 text-center">{description}</p>
          {additionalDescription && (
            <p className="text-gray-500   3xl:text-xl font-gothic text-xs sm:text-sm lg:text-heroSection lg:leading-[28px] tracking-wider leading-7 text-center mt-5">{additionalDescription}</p>
          )}
        </div>
      </div>
    </div>
  )

  const renderPromiseIcon = (index, icon, text, isLarge = false) => (
    <div key={`promise-icon-${index}`} className={`border-[0.0005rem] border-gray-300 ${index % 2 ? 'bg-neutral-100' : 'bg-white'} flex flex-col items-center  justify-center`}>
      <Image 
        src={icon} 
        alt={`Icon ${index + 1}`} 
        width={isLarge ? 112 : 40} 
        height={isLarge ? 36 : 40}
      />
      <p className="text-xs lg:text-sideBar lg:leading-7   3xl:text-xl mt-2 px-6">{text}</p>
    </div>
  )

  return (
    <section className="py-10 mb-16">
      <div className="max-w-screen-3xl mx-auto px-4 sm:px-8 lg:px-14">
        <div className="relative">
          {/* Desktop version */}
          <div className="hidden min-[1026px]:block">
            <div className="embla overflow-hidden" ref={emblaRef}>
              <div className="embla__container flex gap-5 hover:cursor-grab active:cursor-grabbing">
                {renderSlide(
                  "/assets/Khwaahish-Store-img.jpg",
                  "Slide 1",
                  "Legacy of Khwaahish",
                  "20+ Years of Crafting Unforgettable Jewellery—Blending Tradition with Modern Flair",
                  '',
                  'slide-1'
                )}
                
                {renderSlide(
                  "/assets/Curators-Tale-with-watermark-img.jpg",
                  "Slide 2",
                  "Curator's Tale",
                  "Our brand represents our desire to create exquisite, beautiful and high-quality diamond jewellery that is as special as you.",
                  "Explore our collection at the Queen of Hearts Galleria and experience a world of Diamond Jewellery, truly Different by Design.",
                  'slide-2'
                )}
                
                <div className="embla__slide flex-[0_0_100%] min-w-0">
                  <div className="flex flex-col md:flex-row items-center bg-neutral-100 w-[100%] justify-center text-center mx-auto">
                    <div className="w-full md:w-2/3">
                      <div className="w-full h-[300px] sm:h-[400px] md:h-[540px] border-[0.0005rem] border-gray-300">
                        <div className="grid grid-cols-3 h-full font-gothic">
                          {[
                            { icon: "/assets/Promise-Sec-Icons-1.svg", text: "BIS Hallmarked" },
                            { icon: "/assets/Promise-Sec-Icons-2.svg", text: "Assured time maintanance" },
                            { icon: "/assets/Promise-Sec-Icons-3.svg", text: "Life time Exchange" },
                            { icon: "/assets/Promise-Sec-Icons-4.svg", text: "Free 1 year warranty" },
                            { icon: "/assets/Promise-Sec-Icons-5.svg", text: "Different by Design Unique designs with a World" },
                            { icon: "/assets/Promise-Sec-Icons-6.svg", text: "0% Deduction old Gold exchange" },
                            { icon: "/assets/Promise-Sec-Icons-7.svg", text: "Free and insured shipping across India" },
                            { icon: "/assets/Promise-Sec-Icons-8.svg", text: "Personalized Shopping Experience" },
                            { icon: "/assets/Promise-Sec-Icons-9.png", text: "\"Natural Diamonds\" Certification by International Gemological Laboratories", isLarge: true }
                          ].map((item, index) => renderPromiseIcon(index, item.icon, item.text, item.isLarge))}
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/3 p-4 md:p-8">
                      <h3 className="text-2xl sm:text-3xl  3xl:text-4xl md:text-[2.6rem] mb-2 tracking-widest text-center font-bigillaBold">The Brand Promise</h3>
                      <p className="text-gray-500 text-xs sm:text-sm tracking-wider lg:text-heroSection lg:leading-[28px] leading-6 text-center  3xl:text-xl font-gothic md:mt-5">Pure, Natural Diamonds. Designed to Reflect the Real You.</p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>

            <div className="absolute -bottom-12 left-0 right-0 flex justify-center items-center space-x-1 z-10">
              <button 
                className="w-8 h-8"
                onClick={scrollPrev}
                disabled={activeIndex === 0}
              >
                <Image src="/assets/left-arrow.png" alt="Previous" width={20} height={20} className={`${activeIndex === 0 ? "opacity-100" : ""} cursor-pointer`}/>
              </button>
              {[...Array(3)].map((_, index) => (
                <button
                  key={`dot-${index}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'w-7 bg-black' : 'w-2 bg-gray-900'
                  }`}
                  onClick={() => scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
              <button 
                className="w-8 h-8"
                onClick={scrollNext}
                disabled={activeIndex === 2}
              >
                <Image src="/assets/right-arrow.png" alt="Next" width={20} height={20} className={`${activeIndex === 0 ? "opacity-100" : ""} cursor-pointer`}/>
              </button>
            </div>
          </div>

          {/* Mobile version */}
          <div className="min-[1026px]:hidden space-y-20">
            <div className="flex flex-col items-center bg-neutral-100 shadow-md w-[93%] justify-center text-center mx-auto">
              <div className="relative w-full h-[280px] sm:h-[390px] md:h-[530px]">
                <Image 
                  src="/assets/Khwaahish-Store-img.jpg"
                  alt="Legacy of Khwaahish"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1026px) 93vw"
                />
              </div>
              <div className="w-full p-4 sm:p-6 text-center">
                <h3 className="text-2xl sm:text-3xl mb-3 font-medium tracking-wider leading-tight font-bigillaBold">Legacy of Khwaahish</h3>
                <p className="text-gray-500 text-xs sm:text-sm tracking-wider leading-5 font-gothic">20+ Years of Crafting Unforgettable Jewellery—Blending Tradition with Modern Flair</p>
              </div>
            </div>

            <div className="flex flex-col items-center bg-neutral-100 shadow-md w-[93%] justify-center text-center mx-auto">
              <div className="relative w-full h-[280px] sm:h-[390px] md:h-[530px]">
                <Image 
                  src="/assets/Curators-Tale-with-watermark-img.jpg"
                  alt="Curator's Tale"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1026px) 93vw"
                />
              </div>
              <div className="w-full p-4 sm:p-6 text-center">
                <h3 className="text-2xl sm:text-3xl mb-2 tracking-wider font-bigillaBold">Curator&apos;s Tale</h3>
                <p className="text-gray-500 text-xs sm:text-sm tracking-wider leading-5 font-gothic">
                  Our brand represents our desire to create exquisite, beautiful and high-quality diamond jewellery that is as special as you.
                  <br/><br/>
                  Explore our collection at the Queen of Hearts Galleria and experience a world of Diamond Jewellery, truly Different by Design.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center shadow-md w-[93%] justify-center text-center mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 w-full font-gothic">
                {[
                  { icon: "/assets/Promise-Sec-Icons-1.svg", text: "BIS Hallmarked" },
                  { icon: "/assets/Promise-Sec-Icons-2.svg", text: "Assured time maintanance" },
                  { icon: "/assets/Promise-Sec-Icons-3.svg", text: "Life time Exchange" },
                  { icon: "/assets/Promise-Sec-Icons-4.svg", text: "Free 1 year warranty" },
                  { icon: "/assets/Promise-Sec-Icons-5.svg", text: "Different by Design Unique designs with a World" },
                  { icon: "/assets/Promise-Sec-Icons-6.svg", text: "0% Deduction old Gold exchange" },
                  { icon: "/assets/Promise-Sec-Icons-7.svg", text: "Free and insured shipping across India" },
                  { icon: "/assets/Promise-Sec-Icons-8.svg", text: "Personalized Shopping Experience" }
                ].map((item, index) => (
                  <div key={`mobile-icon-${index}`} className={`border-[0.00001rem] border-gray-200 ${index % 2 ? 'bg-neutral-100' : 'bg-white'} flex flex-col items-center justify-center p-4`}>
                    <Image src={item.icon} alt={`Icon ${index + 1}`} width={32} height={32} className="md:w-10 md:h-10"/>
                    <p className="text-[10px] md:text-xs mt-2 px-2 md:px-6">{item.text}</p>
                  </div>
                ))}
                <div className="col-span-2 md:col-span-1 border-[0.00001rem] bg-white border-gray-200 flex flex-col items-center justify-center p-4">
                  <Image src="/assets/Promise-Sec-Icons-9.png" alt="Icon 9" width={128} height={28} className="md:w-28 md:h-9"/>
                  <p className="text-[10px] md:text-xs mt-2 px-2 md:px-6">&quot;Natural Diamonds&quot; Certification by International Gemological Laboratories</p>
                </div>
              </div>
              <div className="w-full p-4 sm:p-6 text-center">
                <h3 className="text-2xl sm:text-3xl mb-2 tracking-wider font-bigillaBold">The Brand Promise</h3>
                <p className="text-gray-500 text-xs sm:text-sm  tracking-wider leading-6 font-gothic">Pure, Natural Diamonds. Designed to Reflect the Real You.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandSlider
