'use client'

import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'

const Recommendation = () => {
  const recomendation = [
    { img: "/assets/svgs/modern.png", title: "modern", alt: "Modern jewelry collection" },
    { img: "/assets/svgs/engagement.png", title: "engagement", alt: "Engagement rings and jewelry" },
    { img: "/assets/svgs/contemporary.png", title: "contemporary", alt: "Contemporary jewelry designs" },
    { img: "/assets/svgs/party-wear.png", title: "party wear", alt: "Party wear jewelry collection" },
    { img: "/assets/svgs/casual-outing.png", title: "casual outing", alt: "Casual jewelry pieces" },
    { img: "/assets/svgs/anniversary.png", title: "anniversary", alt: "Anniversary jewelry collection" },
    { img: "/assets/svgs/office-wear.png", title: "office wear", alt: "Office wear jewelry" },
    { img: "/assets/svgs/classic.png", title: "classic", alt: "Classic jewelry designs" },
  ];

  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      dragFree: true,
      containScroll: "trimSnaps",
      align:'center',
      holdDrag: true
    },
    [AutoScroll({ playOnInit: true, speed:1.5 ,stopOnInteraction: false, stopOnMouseEnter:true})]
  );

  return (
    <section className="font-gothic py-8 w-full bg-[#F7ECEB] font-light " aria-label="Jewelry Recommendations">
      <h1 className="text-xl sm:text-2xl md:text-[1.6rem] text-center mt-3 sm:mt-6 md:mt-2 uppercase text-[#4F2426] tracking-[0.2rem] sm:tracking-[0.4rem] ">
        Browse with our Recommendation
        <span className="flex  border-b-[1px] lg:border-b-2 border-[#58282a] w-16 sm:w-20 md:w-24 mt-2 mx-auto"></span>
      </h1>
      
      <div className=" relative w-[97vw] lg:w-[1300px]  h-[22vh] lg:h-[170px]  md:h-[25vh]  mx-auto mt-6 sm:mt-8 md:mt-10">
        <div className="absolute   inset-2 bg-white shadow-[0_4px_6px_rgba(0,0,0,0.1),0_-4px_6px_rgba(0,0,0,0.1)]"></div>
        
        <div className="relative w-full  h-full overflow-hidden" role="region" aria-label="Jewellery style recommendations carousel">
          <div className="absolute    sm:left-[-4] lg:left-[-2] md:left-[-2] -left-0 top-0  w-8 md:w-16 sm:w-16  lg:w-24 h-full bg-gradient-to-r from-[#F7ECEB] via-[#F7ECEB] to-transparent z-40"></div>
          
          <div className="embla  hover:cursor-pointer active:cursor-grabbing" ref={emblaRef}>
            <div className="flex gap-10  md:gap-28 px-14  sm:px-14 lg:gap-24 md:px-28  lg:mt-8 mt-[35px]">
              {recomendation.map((item, index) => (
                <div
                  key={index}
                  className="flex  flex-col justify-center items-center gap-5 flex-shrink-0 "                  
                  role="listitem"
                  aria-label={item.alt}
                >
                  <Link href="/shop" className="flex  justify-center flex-col items-center">
                    <div className="w-14  h-14 lg:w-[70px] lg:h-[70px]  md:w-[8.2vw] md:h-[8.2vw] rounded-full bg-[#F7ECEB] border-[0.25px] border-dashed border-amber-950 flex items-center justify-center">
                      <div className=" w-10  h-8 lg:w-[40px] lg:h-[40px] md:w-8  md:h-8 sm:h-8 sm:w-8 relative">
                        <Image 
                          src={item.img}
                          alt={item.alt}
                          fill
                          sizes="(max-width: 1024px) 32px, 2.5vw"
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <p className="uppercase text-center text-xs md:text-base tracking-[0.3em] mt-2 text-gray-700">
                      {item.title}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -right-1   lg:right-[-2] md:right-[-2] sm:right-[-4] top-0 md:w-16 sm:w-16 w-8 lg:w-24 h-full bg-gradient-to-l from-[#F7ECEB] via-[#F7ECEB] to-transparent z-40"></div>
        </div>
      </div>
    </section>
  );
};

export default Recommendation;
