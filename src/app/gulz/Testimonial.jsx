'use client'
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import AutoPlay from 'embla-carousel-autoplay';
import Image from 'next/image';

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  // Initialize Embla with autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  }, [AutoPlay({ delay: 3000, stopOnInteraction: false })]);

  const testimonialData = [
    {
      logo: "",
      data: "Seeing the spectacular designs at Khwaahish , my heart really desires to shop there very soon. This entire line is very customized, so lightweight and beautiful.. I am just loving them ",
      image: "/assets/eshop/testtimonialPersons/swathi-rekha.jpg",
      name: "Swathi Rekha",
      role: "Entrepreneur",
    },
    {
      logo: "",
      data: "I love the new collection Gulz… its simply beautiful. Every single piece is gorgeous, wearable and extremely well made. The entire look and feel is very international by all means. Khwaahish is family to me and their pieces are just stunning. ",
      image: "/assets/eshop/testtimonialPersons/jyothi.jpg",
      name: "Jyoti",
      role: "Entrepreneur",
    },
    {
      logo: "",
      data: "When it comes to Khwaahish.. its my go to place for smart jewellery. And regarding the collection, I love love the jacket chandelier diamond earrings and the other unique designs. It's so wearable and it's so me.  ",
      image: "/assets/eshop/testtimonialPersons/Pratibha.jpg",
      name: "Pratibha  ",
      role: "Entrepreneur",
    },
    {
      logo: "",
      data: "With Khwaahish my journey started very long ago right from their inception in 2003. This collection  is something very different .. very sleek and elegant pieces. I love all the stuff at Khwaahish usually and its difficult to choose my favourite today. ",
      image: "/assets/eshop/testtimonialPersons/Chhavi.jpg",
      name: "Dr. Chhavi Kalra  ",
      role: "Singer/Artist",
    },
    {
      logo: "",
      data: "Khwaahish are our family jewellers for every right reason.. Their new collection Gulz, is so very fresh and some of the designs are very interesting too! I am sure I'll find many favourites among them as usual.",
      image: "/assets/eshop/testtimonialPersons/Dimple.jpg",
      name: "Dimple",
      role: "Home Maker",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setActiveIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      emblaApi && emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <div className="font-gothic w-full sm:-mt-3 md:-mt-0 lg:-mt-0 md:h-[110vh] bg-[#F7ECEB] md:-mb-24 sm:mb-0 lg:-mb-20 xl:-mb-36 ">
      <h1 className="text-xl sm:text-2xl md:text-[1.7rem] text-center sm:mt-3 md:-mt-4 uppercase text-[#4F2426] tracking-[0.2rem] sm:tracking-[0.4rem]  3xl:text-4xl mb-6">
        Testimonals
        <span className="flex border-b-2 border-[#58282a] w-16 sm:w-20 md:w-24 mt-2 mx-auto"></span>
      </h1>

      <div className="w-[90%]   cursor-grabbing select-none md:w-[85%] lg:w-[80%] mx-auto overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonialData.map((item, index) => (
            <div 
              key={index}
              className="flex-[0_0_100%] min-w-0 pl-4"
              style={{ flex: `0 0 ${100 / slidesPerView}%` }}
            >
              <div className="h-[60vh] sm:h-[55vh] md:h-[60vh] lg:h-[75vh] xl:h-[55vh]  w-[98%] text-center bg-white p-4 flex flex-col justify-between">
                <div>
                  <div className="h-12 w-12 relative">
                    <Image
                      fill
                      className="object-contain"
                      src="/assets/eshop/testtimonialLogo.svg"
                      alt="testimonial logo"
                    />
                  </div>
                  <p className="text-left 3xl:text-2xl  4xl:text-3xl mt-3 font-light text-[0.85rem] tracking-wider leading-6 text-gray-700">
                    {item.data}
                  </p>
                </div>

                <div className="w-full flex gap-5 items-center">
                  <div className="sm:h-20 sm:w-20 w-16 h-16 bg-red-500 rounded-full overflow-hidden relative">
                    <Image
                      fill
                      className="object-cover"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <div>
                    <h3 className="text-amber-900 text-xl text-left 3xl:text-3xl ">{item.name}</h3>
                    <p className="text-sm 3xl:text-2xl  text-left font-light">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sm:flex justify-center gap-2 mt-4 hidden">
        {[...Array(slidesPerView === 1 ? 5 : slidesPerView === 2 ? 3 : 2)].map((_, index) => (
          <div
            key={index}
            onClick={() => scrollTo(index * (slidesPerView === 1 ? 1 : slidesPerView === 2 ? 2 : 3))}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              Math.floor(activeIndex / (slidesPerView === 1 ? 1 : slidesPerView === 2 ? 2 : 3)) === index 
                ? "bg-[#663634]" 
                : "bg-gray-300 border"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
