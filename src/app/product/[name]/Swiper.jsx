import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

import { Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

const SwiperComponent = ({images}) => {
  return (
    <div className="bg-[#F7ECEB] font-century">
      <h1 className="text-2xl pt-4 text-center text-[#663634] 3xl:text-3xl">YOU MAY ALSO LIKE </h1>
      <div className="flex items-center justify-center p-8">
        <div className="w-full md:w-[90%] relative">
          <button className="custom-prev absolute left-2 md:-left-10 top-[35%] -translate-y-1/2 z-10 text-[#663634] bg-white p-2 rounded-full shadow-md">&#8249;</button>
          <button className="custom-next absolute right-2 md:-right-10 top-[35%] -translate-y-1/2 z-10 text-[#663634] bg-white p-2 rounded-full shadow-md">&#8250;</button>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              480: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="mySwiper">
            {images.map((imagePath, i) => (
              <SwiperSlide navigation={"true"} modules={[Navigation]} key={i}>
                <Link href={"/"}>
                  <div className="bg-[#F7ECEB] text-[#663634]">
                    <div className="aspect-square cursor-pointer bg-white">
                      <img src={imagePath} alt="Swiper" />
                    </div>
                    <div className="p-2 text-sm 4xl:text-3xl">
                      <p className=" 3xl:text-2xl">0.15 and 0.20 ct Attractive Soul Solitaire Diamond Necklace</p>
                      <p className=" 3xl:text-2xl">₹ 68,987</p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
export default SwiperComponent;
