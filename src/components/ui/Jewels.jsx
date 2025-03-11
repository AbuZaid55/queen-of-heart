'use client'

import useEmblaCarousel from 'embla-carousel-react'
import AutoPlay from 'embla-carousel-autoplay'
import { usePathname } from 'next/navigation';
import { useRef, useState, useCallback, useEffect } from 'react';
import Image from 'next/image';

const Jewels = () => {
  const pathname = usePathname();

  const getContent = () => {
    switch (pathname) {
      case '/festara':
        return {
          slides: [
            ['/assets/Festara-Carousal-Images-1.jpg', '/assets/Festara-Carousal-Images-6.jpg', '/assets/Festara-Carousal-Images-2.jpg'],
            ['/assets/Festara-Carousal-Images-4.jpg', '/assets/Festara-Carousal-Images-3.jpg', '/assets/Festara-Carousal-Images-5.jpg']
          ],
          tabletSlides: [
            ['/assets/Festara-Carousal-Images-1.jpg', '/assets/Festara-Carousal-Images-6.jpg'],
            ['/assets/Festara-Carousal-Images-2.jpg', '/assets/Festara-Carousal-Images-4.jpg'],
            ['/assets/Festara-Carousal-Images-3.jpg', '/assets/Festara-Carousal-Images-5.jpg']
          ],
          description: 'A dazzling showcase of handpicked gemstones, crafted to elevate your every moment with unmatched brilliance and boldness. All designs can be customized as per your requirements.'
        };
      case '/fazza':
        return {
          slides: [
            ['/assets/Fazza-Carousel-Imgs-1.jpg', '/assets/Fazza-Carousel-Imgs-5.jpg', '/assets/Fazza-Carousel-Imgs-4.jpg'],
            ['/assets/Fazza-Carousel-Imgs-7.jpg', '/assets/Fazza-Carousel-Imgs-6.jpg', '/assets/Fazza-Carousel-Imgs-8.jpg'],
            ['/assets/Fazza-Carousel-Imgs-9.jpg', '/assets/Fazza-Carousel-Imgs-3.jpg', '/assets/Fazza-Carousel-Imgs-2.jpg']
          ],
          tabletSlides: [
            ['/assets/Fazza-Carousel-Imgs-1.jpg', '/assets/Fazza-Carousel-Imgs-5.jpg'],
            ['/assets/Fazza-Carousel-Imgs-4.jpg', '/assets/Fazza-Carousel-Imgs-7.jpg'],
            ['/assets/Fazza-Carousel-Imgs-6.jpg', '/assets/Fazza-Carousel-Imgs-8.jpg'],
            ['/assets/Fazza-Carousel-Imgs-9.jpg', '/assets/Fazza-Carousel-Imgs-3.jpg'],
            ['/assets/Fazza-Carousel-Imgs-2.jpg', '/assets/Fazza-Carousel-Imgs-1.jpg']
          ],
          description: 'A tribute to timeless elegance with pure, uncut diamonds that exude boldness, capturing your unique essence in every sparkle. All designs can be customized as per your requirements.'
        };
      case '/pache':
        return {
          slides: [
            ['/assets/pache-carousel-1.jpg', '/assets/pache-carousel-2.jpg', '/assets/pache-carousel-3.jpg'],
            ['/assets/pache-carousel-4.jpg', '/assets/pache-carousel-5.jpg', '/assets/pache-carousel-6.jpg'],
            ['/assets/pache-carousel-7.jpg', '/assets/pache-carousel-8.jpg', '/assets/pache-carousel-9.jpg'],
            ['/assets/pache-carousel-10.jpg', '/assets/pache-carousel-11.jpg', '/assets/pache-carousel-12.jpg'],
            ['/assets/pache-carousel-13.jpg', '/assets/pache-carousel-14.jpg', '/assets/pache-carousel-1.jpg']
          ],
          tabletSlides: [
            ['/assets/pache-carousel-1.jpg', '/assets/pache-carousel-2.jpg'],
            ['/assets/pache-carousel-3.jpg', '/assets/pache-carousel-4.jpg'],
            ['/assets/pache-carousel-5.jpg', '/assets/pache-carousel-6.jpg'],
            ['/assets/pache-carousel-7.jpg', '/assets/pache-carousel-8.jpg'],
            ['/assets/pache-carousel-9.jpg', '/assets/pache-carousel-10.jpg'],
            ['/assets/pache-carousel-11.jpg', '/assets/pache-carousel-12.jpg'],
            ['/assets/pache-carousel-13.jpg', '/assets/pache-carousel-14.jpg']
          ],
          description: 'This collection is exclusively made in Platinum, Gold and Diamonds. All designs can be customized as per your requirements. Do visit our store to view the entire collection.'
        };
      default:
        return null;
    }
  };

  const content = getContent();
  if (!content) return null;

  const mobileSlides = content.slides.flat();
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTabletIndex, setActiveTabletIndex] = useState(0);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  const autoplayOptions = {
    delay: 9000,
    stopOnInteraction: false
  }

  const [desktopEmblaRef, desktopEmblaApi] = useEmblaCarousel([AutoPlay(autoplayOptions)])
  const [tabletEmblaRef, tabletEmblaApi] = useEmblaCarousel({ loop: true }, [AutoPlay(autoplayOptions)])
  const [mobileEmblaRef, mobileEmblaApi] = useEmblaCarousel({ loop: true }, [AutoPlay(autoplayOptions)])
 
  const onDesktopSelect = useCallback(() => {
    if (desktopEmblaApi) setActiveIndex(desktopEmblaApi.selectedScrollSnap())
  }, [desktopEmblaApi])

  const onTabletSelect = useCallback(() => {
    if (tabletEmblaApi) setActiveTabletIndex(tabletEmblaApi.selectedScrollSnap())
  }, [tabletEmblaApi])

  const onMobileSelect = useCallback(() => {
    if (mobileEmblaApi) setActiveMobileIndex(mobileEmblaApi.selectedScrollSnap())
  }, [mobileEmblaApi])

  useEffect(() => {
    if (desktopEmblaApi) desktopEmblaApi.on('select', onDesktopSelect)
    if (tabletEmblaApi) tabletEmblaApi.on('select', onTabletSelect)
    if (mobileEmblaApi) mobileEmblaApi.on('select', onMobileSelect)
  }, [desktopEmblaApi, tabletEmblaApi, mobileEmblaApi, onDesktopSelect, onTabletSelect, onMobileSelect])

  const scrollPrev = (api) => {
    if (api) api.scrollPrev()
  }

  const scrollNext = (api) => {
    if (api) api.scrollNext()
  }

  const scrollTo = (index, api) => {
    if (api) api.scrollTo(index)
  }

  return (
    <div className="font-gothic flex flex-col items-center pb-8 -mb-20 sm:-mb-5 md:-mb-10 lg:-mb-0">
      <div className="flex flex-col items-center justify-center px-4 sm:px-0">
        <div className="flex items-center justify-center mb-3">
          <hr className="w-8 sm:w-16 h-0.5 bg-gray-700 border-0 rounded" />
          <span className="text-lg sm:text-3xl text-gray-700 mx-2 sm:mx-4">Jewels at a Glance</span>
          <hr className="w-8 sm:w-16 h-0.5 bg-gray-700 border-0 rounded" />
        </div>
        <p className='pt-4 md:pt-8 lg:pt-2 leading-7 font-centuryGothic w-full md:w-[80%] lg:w-[80%] xl:w-[75%] text-center text-[#757575] text-sm md:text-m lg:text-md 3xl:text-2xl tracking-widest'>
          {content.description}
        </p>
      </div>

      <div className="w-full overflow-hidden pb-8">
        <section className="py-4 sm:py-4 md:py-4 ">
          <div className="relative ">
            <div className="hidden min-[1025px]:block">
              <div className="overflow-hidden" ref={desktopEmblaRef}>
                <div className="flex gap-4">
                  {content.slides.map((slideSet, setIndex) => (
                    <div key={setIndex} className="flex-[0_0_100%] min-w-0 cursor-grab active:cursor-grabbing">
                      <div className="flex gap-5 px-[0.1vw]">
                        {slideSet.map((src, index) => (
                          <div key={index} className="flex-1 relative w-full h-[500px] 3xl:h-[800px] 3xl:object-cover">
                            <Image
                              src={src}
                              alt={`Slide ${setIndex * 3 + index + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-12 left-0 right-0 flex justify-center items-center space-x-1">
                <Image 
                  src="/assets/left-arrow.png" 
                  width={20} 
                  height={20} 
                  className="cursor-pointer" 
                  alt="Previous" 
                  onClick={() => scrollPrev(desktopEmblaApi)}
                />
                {content.slides.map((_, index) => (
                  <span
                    key={index}
                    className={`slide-dot h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      index === activeIndex ? 'w-8 bg-black' : 'w-2 bg-gray-900'
                    }`}
                    onClick={() => scrollTo(index, desktopEmblaApi)}
                  ></span>
                ))}
                <Image 
                  src="/assets/right-arrow.png" 
                  width={20} 
                  height={20} 
                  className="cursor-pointer" 
                  alt="Next"
                  onClick={() => scrollNext(desktopEmblaApi)}
                />
              </div>
            </div>

            <div className="hidden min-[766px]:block min-[1025px]:hidden">
              <div className="overflow-hidden" ref={tabletEmblaRef}>
                <div className="flex gap-4">
                  {content.tabletSlides.map((pair, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0">
                      <div className="flex gap-4 px-[0.05vw]">
                        {pair.map((src, imgIndex) => (
                          <div key={imgIndex} className="flex-1 relative w-full h-[400px]">
                            <Image
                              src={src}
                              alt={`Slide ${index * 2 + imgIndex + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-12 left-0 right-0 flex justify-center items-center space-x-1">
                <Image 
                  src="/assets/left-arrow.png" 
                  width={20} 
                  height={20} 
                  className="cursor-pointer" 
                  alt="Previous"
                  onClick={() => scrollPrev(tabletEmblaApi)}
                />
                {content.tabletSlides.map((_, index) => (
                  <span
                    key={index}
                    className={`slide-dot-tablet h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      index === activeTabletIndex ? 'w-8 bg-black' : 'w-2 bg-gray-900'
                    }`}
                    onClick={() => scrollTo(index, tabletEmblaApi)}
                  ></span>
                ))}
                <Image 
                  src="/assets/right-arrow.png" 
                  width={20} 
                  height={20} 
                  className="cursor-pointer" 
                  alt="Next"
                  onClick={() => scrollNext(tabletEmblaApi)}
                />
              </div>
            </div>

            <div className="min-[766px]:hidden relative">
              <div className="overflow-hidden" ref={mobileEmblaRef}>
                <div className="flex gap-5">
                  {mobileSlides.map((src, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0 ">
                      <div className="relative w-full h-[400px] xs:h-[400px] sm:h-[500px]">
                        <Image
                          src={src}
                          alt={`Slide ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-8 sm:-bottom-12 left-0 right-0 flex justify-center items-center space-x-1">
                <Image 
                  src="/assets/left-arrow.png" 
                  width={16} 
                  height={16} 
                  className="cursor-pointer sm:w-8 sm:h-8" 
                  alt="Previous"
                  onClick={() => scrollPrev(mobileEmblaApi)}
                />
                {mobileSlides.map((_, index) => (
                  <span
                    key={index}
                    className={`slide-dot-mobile h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      index === activeMobileIndex ? 'w-6 sm:w-8 bg-black' : 'w-1.5 sm:w-2 bg-gray-900'
                    }`}
                    onClick={() => scrollTo(index, mobileEmblaApi)}
                  ></span>
                ))}
                <Image 
                  src="/assets/right-arrow.png" 
                  width={16} 
                  height={16} 
                  className="cursor-pointer sm:w-8 sm:h-8" 
                  alt="Next"
                  onClick={() => scrollNext(mobileEmblaApi)}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Jewels;