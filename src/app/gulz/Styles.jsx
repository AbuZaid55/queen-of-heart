"use client";
import Link from "next/link";
import { useState, useRef, useEffect, use } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import api from "@/utils/api";

const ringdata = {
  name: "ALL RINGS",
  image: "/assets/rings/Rings.avif",
  link: "",
}


const braceletdata = [
  {
    name: "oval",
    image: "/assets/bracelet/Oval.avif",
    alt: "Oval bracelets collection",
    link: "",
  },
];

const necklacedata = [
  {
    name: "all necklace",
    image: "/assets/necklaces/All-Necklaces.avif",
    alt: "View all necklaces collection",
    link: "",
  },
];

const earringsdata = [
  {
    name: "all earrings",
    image: "/assets/earrings/All-Earrings.avif",
    alt: "View all earrings collection",
    link: "",
  },
];

const Styles = () => {
  const [activeButton, setActiveButton] = useState('');
  const [categoryList, setCategoryList] = useState([]);
  const [activeData, setActiveData] = useState([])

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      containScroll: "trimSnaps",
      align: "start",
      holdDrag: true,
    },
    [AutoScroll({ playOnInit: true, speed: -1, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const getActiveData = () => {
    categoryList?.map((category) => {
      if (category.name === activeButton) {
        setActiveData(category)
      }
    })
  };

  const getCategoriesAndStyle = async () => {
    try {
      const res = await api.get("/store/eshop/categories/get-all-categories");
      const data = await res.data;
      setCategoryList(data);
      setActiveButton(data[0]?.name)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategoriesAndStyle();
  }, []);
  useEffect(() => {
    getActiveData()
  }, [activeButton])

  return (
    <section>
      <div className="font-gothic  py-4 w-full bg-[#F7ECEB] font-light p-3 md:p-6" aria-label="Recommendations">
        <h2 className="text-xl sm:text-2xl md:text-[1.6rem] text-center mt-4 sm:mt-6 md:mt-4 uppercase text-[#4F2426] tracking-[0.2rem] sm:tracking-[0.4rem]">
          Browse by Styles
          <span className="flex border-b-[1px] border-[#58282a] w-16 sm:w-20 md:w-24 mt-2 mx-auto mb-5"></span>
        </h2>

        <div className="md:hidden  flex w-full sm:w-10/12 mx-auto px-10 sm:px-10 md:px-12 lg:px-12 space-x-4 gap-1 overflow-x-hidden no-scrollbar justify-center items-center lg:py-0 md:py-0 sm:py-0 py-2 mb-4">
          {
            categoryList.map((category) => (
              <div key={category._id} onClick={() => setActiveButton(category?.name)} className={` cursor-pointer w-[25%] h-full flex-shrink-0  flex flex-col justify-center items-center rounded-lg ${activeButton === category?.name ? "bg-[#fffcfb] border border-amber-950" : ""}`}>
                <p className="text-amber-950 font-light text-[2.5vw] text:sm-xs  md:text-xs lg:text-xs">{category?.name.replace("Diamond", "")}</p>
              </div>
            ))
          }
        </div>

        <div className="md:w-[95%]  sm:w-1/3 lg:w-[760px]  w-[95%] md:h-20 md:flex hidden items-center justify-between relative left-1/2 -translate-x-1/2 mt-2 space-x-8" role="tablist" aria-label="Jewelry categories">
          {categoryList?.map((category) => (
            <button
              key={category._id}
              onClick={() => setActiveButton(category.name)}
              className={`px-10 h-fit flex items-center justify-center button1 rounded-full ${activeButton === category.name ? "bg-[#fffcfb] border border-amber-950" : "bg-[#663634]"}`}
              role="tab"
              aria-selected={activeButton === category.name}
              aria-controls="rings-panel">
              <p className={`${activeButton === category.name ? "text-amber-950" : "text-white"} uppercase tracking-[.2rem] p-1`}>{category.name.replace("Diamond", "")}</p>
            </button>
          ))}
        </div>

        <div
          className="md:w-[95%] lg:w-[900px] w-[95%] p-4 bg-#f9f4f3 rounded-2xl relative left-1/2 -translate-x-1/2 mt-2 overflow-hidden bg-[#fbf6f5] border border-amber-950"
          role="tabpanel"
          id={`${activeButton}-panel`}
          aria-label={`${activeButton} styles carousel`}>
          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#F7ECEB] to-transparent z-40"></div>
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#F7ECEB] to-transparent z-40"></div>

          <div className="embla hover:cursor-pointer active:cursor-grabbing" ref={emblaRef}>
            <div className="embla__container  flex items-center">
              {activeData && activeData?.styles?.map((item, index) => (
                <div key={index} className="embla__slide flex-[0_0_auto] min-w-0 px-8">
                  <Link href={`/${activeData?.name.toLowerCase().replaceAll(" ", "-")}?style=${item.name.toLowerCase().replaceAll(" ", "-")}`}>
                    <div className="flex flex-col justify-center items-center gap-2">
                      <div className="relative w-20 h-20  md:w-28 md:h-28">
                        <Image src={item.image?.url || '/'} alt={item.name} fill sizes="(max-width: 768px) 80px, 112px" className="rounded-full object-cover" draggable="false" />
                      </div>
                      <p className="uppercase text-center  text-xs md:text-sm tracking-[0.4em] text-amber-950">{item.name}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Styles;
