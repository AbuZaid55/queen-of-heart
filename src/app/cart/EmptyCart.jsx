import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";

import Image from "next/image";
import Link from "next/link";
const EmptyCart = () => {
  return (
    <div className="bg-[#F7ECEB] px-4  pb-20 sm:pb-32 sm:pt-6  flex flex-col justify-between w-full ">
      <h1 className="font-centuryGothic text-center text-[28px] leading-10 text-[#663634] tracking-[7px] font-normal">
        CART
      </h1>

      <div className="flex flex-col justify-center items-start pt-8 sm:pt-24 relative w-full">
        <div className="flex  gap-x-2 items-center mb-5 font-centuryGothic border text-xs bg-[#F7ECEB] border-[#663634] rounded p-4 w-full focus:outline-none placeholder-[#663634] pt-4">
          <div>
            <IoCheckmarkCircle size={30} color="#663634" />
          </div>
          <div className="text-[#663634] font-gothic text-xs leading-7 tracking-normal font-normal">
            “0.20 Ct Lustrous Dazzles Solitaire Diamond Ring” removed. Undo?
          </div>
        </div>
        <div className="relative w-[100%]">
          <img
            src="/assets/Frameicon1.png.png"
            className="absolute left-4 top-[30px] transform -translate-y-1/2 text-[#663634]"
          />

          <div className="mb-5 font-centuryGothic border text-xs bg-[#F7ECEB] border-[#663634] rounded p-4 pl-14 w-full focus:outline-none placeholder-[#663634]">
            <p className="text-[#663634] font-gothic text-xs leading-7 tracking-normal font-normal">
              Your cart is currently empty.
            </p>
          </div>
        </div>
      </div>
     <Link href='/shop'>
     
      <button className="font-centuryGothic w-max bg-[#663634] text-white font-semibold px-8 tracking-[1px] py-4 shadow-md hover:bg-white hover:text-[#663634] hover:border-[#663634] border-[0.5px] transition text-xs">
        RETURN TO SHOP
      </button>
     </Link>
    </div>
  );
};

export default EmptyCart;
