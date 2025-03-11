'use client'
import React from "react";
// import { Helmet } from "react-helmet";
import { queenOfHeartsArray } from "@/Data/cardsData";

const Collection = () => {
  return (
    <>
      

      <div className="font-gothic md:h-[130vh] w-full bg-[#F7ECEB] ">
        <h1 className="text-[1.2rem] sm:text-[1.5rem] 3xl:pt-10 3xl:text-3xl text-center font-light uppercase text-amber-950 tracking-[0.4rem] pt-7">
          Gulz collection - The <br className="sm:hidden" /> Muse
          <span className="flex border-b-[1px] border-[#58282a] w-16 sm:w-20 md:w-24 mt-2 mx-auto"></span>
        </h1>

        <div className="flex items-center justify-center flex-col ">
          <p className="text-center w-[94%] sm:w-[80%] md:w-[88%] lg:w-[60.2vw] tracking-wider text-base md:text-base font-light mt-4 max-[766px]:order-2 text-gray-700 3xl:text-2xl 3xl:pb-10">
            "Gul" in Persian origin means Rose. Inspired and also named after one
            of the Founders Gulan Chetan, this collection's unique and captivating
            beauty is a story to be unfolded…
          </p>

          <div className="h-screen md:h-[110vh] w-[90%] md:w-[88%] mt-3 mx-auto max-[766px]:order-1">
            {/* <video
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              aria-label="Promotional video for Gulz Collection"
              src="/assets/video.mp4"
            ></video> */}

<>        
        <video className='w-full hidden sm:block h-full min-h-screen object-cover md:h-auto' muted autoPlay loop src={queenOfHeartsArray[0].landingVideo}></video> 
        {/* For Mobile */}
          <video className='w-full block  sm:hidden  h-screen object-cover md:h-auto' muted autoPlay loop src={queenOfHeartsArray[0].landingVideoMobile}></video>
        </>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
