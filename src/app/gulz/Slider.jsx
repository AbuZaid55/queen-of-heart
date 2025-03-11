'use client'

import { useRef, useState } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { Helmet } from "react-helmet";

const Slider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [isDragging, setIsDragging] = useState(false);

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  return (
    <>
      <div className="font-gothic w-full min-h-[20vw] flex justify-center items-center bg-[#F7ECEB] ">
        <div className="relative w-[95%] lg:w-[90%] xl:w-[85%] 2xl:w-[80%]  h-auto min-h-[10vw] lg:min-h-[60vw] xl:min-h-[40vw] hidden lg:block mt-10 lg:mt-56 xl:mt-36 md:mb-10 xl:-mb-0 lg:-mb-[5vw]">
          <button 
            className="absolute left-2 lg:left-[-3%] xl:left-[-5%] top-1/3 z-10 cursor-pointer p-2 transition-all duration-300"
            onClick={scrollPrev}
          >
            <IoIosArrowBack size={24} className="text-amber-950" />
          </button>
          <button
            className="absolute right-2 lg:right-[-3%] xl:right-[-5%] top-1/3 z-10 cursor-pointer p-2 transition-all duration-300"
            onClick={scrollNext}
          >
            <IoIosArrowForward size={24} className="text-amber-950" />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-2">
              <div className="flex-[0_0_100%] min-w-0">
                <div className="flex flex-col lg:flex-row h-full items-center">
                  <div className="relative w-full lg:w-[60%] xl:w-[50%] 2xl:w-[60%] h-[300px] lg:h-[38vw] xl:h-[510px]">
                    <Image 
                      src="/assets/eshop/swipe1.avif"
                      alt="Legacy of Khwaahish - Traditional Indian Jewelry Craftsmanship"
                      fill
                      className="object-contain lg:object-cover"
                    />
                  </div>
                  <div className="w-full lg:w-[50%] xl:w-[45%] 2xl:w-[40%] p-4 lg:p-6 xl:p-8 flex flex-col justify-center">
                    <h1 className="text-xl  sm:text-7xl xl:text-[1.75rem] font-light uppercase text-amber-950 tracking-[0.2rem] lg:tracking-[0.5rem]  3xl:text-4xl">Legacy of <br /> Khwaahish</h1>
                    <p className="mt-4 lg:mt-7 font-light leading-relaxed lg:leading-loose tracking-wide lg:tracking-widest text-sm text-gray-800 3xl:text-3xl">Launched by the mother brand Khwaahish Diamonds, Gulz also showcases the unmistakable Indian finesse that is an integral part of every creation. While all jewellery pieces is conceived, designed and crafted in India, the brand is fearless to experiment newer horizons.</p>
                    <p className="mt-4 lg:mt-7 font-light leading-relaxed lg:leading-loose tracking-wide lg:tracking-widest text-sm text-gray-800 3xl:text-3xl">The fusion of traditional techniques and contemporary design is what has always set us apart. The end product is a delightful synergy between the designer&apos;s vision and the craftsmen&apos;s great skill – all done with painstaking attention to detail and achieving an impeccable finish.</p>
                  </div>
                </div>
              </div>

              <div className="flex-[0_0_100%] min-w-0">
                <div className="flex flex-col lg:flex-row h-full items-center">
                  <div className="relative w-full lg:w-[57%] xl:w-[55%] 2xl:w-[60%] h-[300px] lg:h-[38vw] xl:h-[520px]">
                    <Image
                      src="/assets/eshop/swipe2.avif"
                      alt="The Curator's Tale - Luxury Diamond Jewelry Collection"
                      fill
                      className="object-contain lg:object-cover"
                    />
                  </div>
                  <div className="w-full lg:w-[50%] xl:w-[45%] 2xl:w-[40%] p-4 lg:p-6 xl:p-8 flex flex-col justify-center">
                    <h1 className="text-xl sm:text-2xl xl:text-[1.75rem] font-light uppercase text-amber-950 tracking-[0.2rem] lg:tracking-[0.4rem] 3xl:text-4xl">The Curator&apos;s Tale</h1>
                    <p className="mt-4 lg:mt-9 font-light leading-relaxed lg:leading-loose tracking-wide lg:tracking-widest text-sm text-gray-800 3xl:text-3xl">Our brand represents our desire to create exquisite, beautiful and high-quality diamond jewellery that is as special as you.</p>
                    <p className="mt-4 lg:mt-6 font-light leading-relaxed lg:leading-loose tracking-wide lg:tracking-widest text-sm text-gray-800 3xl:text-3xl">Explore our collection at the Queen of Hearts Galleria and experience a world of Diamond Jewellery, truly Different by Design.</p>
                  </div>
                </div>
              </div>

              <div className="flex-[0_0_100%] min-w-0">
                <div className="flex flex-col lg:flex-row h-full items-center">
                  <div className="w-full lg:w-[67%] xl:w-[55%] 2xl:w-[67%] h-[300px] lg:h-[38vw] xl:h-full border border-gray-200">
                    <div className="w-full h-full">
                      <div className="grid grid-cols-3  h-full">
                        {[
                          {
                            icon: "/assets/Promise-Sec-Icons-1.svg",
                            text: "BIS Hallmarked",
                            alt: "BIS Hallmark Icon"
                          },
                          {
                            icon: "/assets/Promise-Sec-Icons-2.svg",
                            text: "Assured time maintanance",
                            alt: "Maintenance Icon"
                          },
                          {
                            icon: "/assets/Promise-Sec-Icons-3.svg",
                            text: "Life time Exchange",
                            alt: "Exchange Icon"
                          },
                          {
                            icon: "/assets/Promise-Sec-Icons-4.svg",
                            text: "Free 1 year warranty",
                            alt: "Warranty Icon"
                          },
                          {
                            icon: "/assets/Promise-Sec-Icons-5.svg",
                            text: "Different by Design Unique designs with a World",
                            alt: "Design Icon"
                          },
                          {
                            icon: "/assets/Promise-Sec-Icons-6.svg",
                            text: "0% Deduction old Gold exchange",
                            alt: "Gold Exchange Icon"
                          },
                          {
                            icon: "/assets/Promise-Sec-Icons-7.svg",
                            text: "Free and insured shipping across India",
                            alt: "Shipping Icon"
                          },
                          {
                            icon: "/assets/Promise-Sec-Icons-8.svg",
                            text: "Personalized Shopping Experience",
                            alt: "Shopping Icon"
                          },
                          {
                            icon: "/assets/Promise-Sec-Icons-9.png",
                            text: "\"Natural Diamonds\" Certification by International Gemological Laboratories",
                            alt: "Certification Icon",
                            isLarge: true
                          }
                        ].map((item, index) => (
                          <div
                            key={index}
                            className={`
                              flex flex-col items-center justify-center p-4  border border-gray-200
                              ${index % 2 === 0 ? '' : 'bg-gray-800/10'}
                            `}
                          >
                            <div className={`relative ${item.isLarge ? 'w-12  h-12' : 'w-6 h-6'} sm:w-8 sm:h-8 md:w-36 md:h-9`}>
                              <Image src={item.icon} alt={item.alt} fill />
                            </div>
                            <p className="text-[8px] sm:text-[10px] md:text-xs mt-2 px-2 md:px-6 text-center">
                              {item.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-[50%] xl:w-[45%] 2xl:w-[40%] p-4 lg:p-6 xl:p-8 flex flex-col justify-center">
                    <h1 className="text-xl sm:text-2xl sm:py-10 xl:text-[1.75rem] font-light uppercase text-amber-950 tracking-[0.2rem] lg:tracking-[0.4rem] 3xl:text-4xl">The Brand Promise</h1>
                    <p className="mt-4 lg:mt-9 font-light leading-relaxed lg:leading-loose tracking-wide lg:tracking-widest text-sm text-gray-800 3xl:text-3xl">Natural diamonds and precious gemstones that have been sourced ethically only find way to the hands of our craftsmen. Each of it goes through a rigorous process of checking and authentication, which is a non compromising factor for our brand. Each jewellery piece thus created carries the Gulz promise of quality – certified as is by International Gemmological Labs.</p>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>




{/* Mobile */}
        <div className="w-full px-4 sm:px-5 md:px-5 lg:px-12 lg:py-8 md:py-8 sm:py-6 flex flex-col gap-8 lg:hidden mt-20">
          <div className="flex flex-col gap-6">
            <div className="relative w-full h-[350px] sm:h-[410px] md:h-[520px]">
              <Image
                src="/assets/eshop/swipe1.avif"
                alt="Legacy of Khwaahish - Traditional Indian Jewelry Craftsmanship"
                fill
                className="object-cover"
              />
            </div>
            <div className="px-4 text-center">
              <h1 className="text-xl sm:text-2xl md:tracking-[0.5rem] font-light uppercase text-amber-950 tracking-widest">Legacy of Khwaahish</h1>
              <p className="mt-4 font-light leading-relaxed tracking-[0.3px] text-base sm:text-base md:text-[15px] text-gray-700">Launched by the mother brand Khwaahish Diamonds, Gulz also showcases the unmistakable Indian finesse that is an integral part of every creation. While all jewellery pieces is conceived, designed and crafted in India, the brand is fearless to experiment newer horizons.</p>
              <p className="mt-4 font-light leading-relaxed tracking-[0.3px] text-base sm:text-base md:text-[15px] text-gray-700 mb-2">The fusion of traditional techniques and contemporary design is what has always set us apart. The end product is a delightful synergy between the designer&apos;s vision and the craftsmen&apos;s great skill – all done with painstaking attention to detail and achieving an impeccable finish.</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="relative w-full h-[350px] sm:h-[420px] md:h-[520px]">
              <Image
                src="/assets/eshop/swipe2.avif"
                alt="The Curator's Tale - Luxury Diamond Jewelry Collection"
                fill
                className="object-cover"
              />
            </div>
            <div className="px-4 text-center">
              <h1 className="text-xl sm:text-2xl  font-light uppercase text-amber-950 tracking-widest">The Curator&apos;s Tale</h1>
              <p className="mt-4 font-light leading-relaxed tracking-[0.3px] text-base sm:text-base md:text-[15px] text-gray-700">Our brand represents our desire to create exquisite, beautiful and high-quality diamond jewellery that is as special as you.</p>
              <p className="mt-4 font-light leading-relaxed tracking-[0.3px] text-base sm:text-base md:text-[15px] text-gray-700">Explore our collection at the Queen of Hearts Galleria and experience a world of Diamond Jewellery, truly Different by Design.</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="relative grid grid-cols-2 md:grid-cols-3 w-full h-[500px] xs:h-[450px] sm:h-[410px] md:h-[520px]">
              {[
                {
                  icon: "/assets/Promise-Sec-Icons-1.svg",
                  text: "BIS Hallmarked",
                  alt: "Icon 1",
                  bg: false
                },
                {
                  icon: "/assets/Promise-Sec-Icons-2.svg", 
                  text: "Assured time maintanance",
                  alt: "Icon 2",
                  bg: true
                },
                {
                  icon: "/assets/Promise-Sec-Icons-3.svg",
                  text: "Life time Exchange",
                  alt: "Icon 3",
                  bg: false
                },
                {
                  icon: "/assets/Promise-Sec-Icons-4.svg",
                  text: "Free 1 year warranty",
                  alt: "Icon 4", 
                  bg: true
                },
                {
                  icon: "/assets/Promise-Sec-Icons-5.svg",
                  text: "Different by Design Unique designs with a World",
                  alt: "Icon 5",
                  bg: false
                },
                {
                  icon: "/assets/Promise-Sec-Icons-6.svg",
                  text: "0% Deduction old Gold exchange",
                  alt: "Icon 6",
                  bg: true
                },
                {
                  icon: "/assets/Promise-Sec-Icons-7.svg",
                  text: "Free and insured shipping across India",
                  alt: "Icon 7",
                  bg: false
                },
                {
                  icon: "/assets/Promise-Sec-Icons-8.svg",
                  text: "Personalized Shopping Experience",
                  alt: "Icon 8",
                  bg: true
                },
                {
                  icon: "/assets/Promise-Sec-Icons-9.png",
                  text: "\"Natural Diamonds\" Certification by International Gemological Laboratories",
                  alt: "Icon 9",
                  bg: false,
                  span: true,
                  large: true
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`
                    border-[0.00001rem] border-gray-200
                    flex flex-col items-center justify-center p-2 xs:p-3 sm:p-4
                    ${item.bg ? 'bg-gray-800/10' : ''}
                    ${item.span ? 'col-span-2 md:col-span-1' : ''}
                  `}
                >
                  <div className={`relative ${item.large ? 'w-24 h-6 xs:w-20 xs:h-5 sm:w-32 sm:h-7 md:w-28 md:h-9' : 'w-7 h-7 xs:w-6 xs:h-6 sm:w-8 sm:h-8 md:w-10 md:h-10'}`}>
                    <Image src={item.icon} alt={item.alt} fill />
                  </div>
                  <p className="text-[9px] xs:text-[10px] sm:text-[10px] md:text-xs mt-1 xs:mt-2 px-1 xs:px-2 md:px-6 text-center">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="px-1 text-center">
              <h1 className="text-2xl sm:text-2xl sm:pt-5 md:tracking-[0.5rem] font-light uppercase text-amber-950 tracking-widest">
                The Brand Promise
              </h1>
              <p className="mt-4 font-light leading-relaxed tracking-[0.3px] text-base sm:text-base md:text-[15px] text-gray-700">
                Natural diamonds and precious gemstones that have been sourced ethically only find way to the hands of our craftsmen. Each of it goes through a rigorous process of checking and authentication, which is a non compromising factor for our brand. Each jewellery piece thus created carries the Gulz promise of quality – certified as is by International Gemmological Labs.
              </p>
            </div>
          </div>




          
        </div>
      </div>
    </>
  );
};

export default Slider;
