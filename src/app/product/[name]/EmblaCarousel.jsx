'use client'
import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const EmblaCarousel = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', slidesToScroll: 2 }, [Autoplay()])
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  return (
    <div className="relative max-w-2xl mx-auto">
      {/* Carousel Wrapper */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div className="flex-[0_0_50%] sm:p-2 p-[2px]" key={index}>
              <div className="bg-white rounded-lg shadow-md   3xl:py-10 flex flex-col justify-center items-center">
                <p className="text-center text-[12.5px] mt-2 md:text-lg  3xl:text-2xl">{slide.heading}</p>
                <img src={slide.imageUrl} alt={slide.heading} className="sm:w-32 my-5 sm:h-32 w-16 h-20  object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute -left-3 md:-left-6 top-1/2 -translate-y-1/2 md:p-2 p-1.5 bg-white rounded-full shadow"
        onClick={() => emblaApi && emblaApi.scrollPrev()}
      >
        <FontAwesomeIcon icon={faChevronLeft} className='text-lg' />
      </button>
      <button
        className="absolute -right-3 md:-right-6 top-1/2 -translate-y-1/2 md:p-2 p-1.5 bg-white rounded-full shadow"
        onClick={() => emblaApi && emblaApi.scrollNext()}
      >
        <FontAwesomeIcon icon={faChevronRight} className='text-lg' />
      </button>
    </div>
  )
}

export default EmblaCarousel
