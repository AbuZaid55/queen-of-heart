'use client'

import React, { useState } from "react";
import EarrningImg from "../../../public/assets/whishlist/earrings.png";
import FB_ICON from "../../../public/assets/whishlist/fb.png";
import TWITTER_ICON from "../../../public/assets/whishlist/twitter.png";
import WHATSAPP_ICON from "../../../public/assets/whishlist/whatsapp.png";
import TELEGRAM_ICON from "../../../public/assets/whishlist/telegram.png";
import MAIL_ICON from "../../../public/assets/whishlist/mail.png";

const WishListItem = () => {
  const [tooltipActive, setTooltipActive] = useState(false);

  return (
    <div className="bg-[#F7ECEB] w-full h-[100%] flex justify-center items-center">
      <div className="bg-white   p-6 flex flex-col gap-y-10 font-centurygothic text-sm py-24 ">
        <div className="grid grid-cols-12 justify-items-center sm:justify-items-start gap-5 border border-[#EFEFEF] py-4 px-3 ">
          <div className=" col-span-12 sm:col-span-1 bg-[#F5F5F5]">
            <img src={EarrningImg} alt="Earrings" />
          </div>
          <div className="col-span-12 sm:col-span-8 font-bold text-center sm:text-start">
            <h3 className="pb-2">
              0.15 ct and 0.40 ct Elijah Diamond Drop Earrings
            </h3>
            <h5>₹ 237,059</h5>
          </div>
          <div className="col-span-12 sm:col-span-3 sm:justify-self-end">
            <button className="min-w-fit px-6 py-3 text-sm leading-4 text-[#515D5B] bg-[#F5F5F5] rounded">
              SELECT OPTIONS
            </button>
          </div>
        </div>
        <div className="relative flex justify-center sm:justify-start border border-[#EFEFEF] py-4 px-3">
          <button
            className={`min-w-fit px-6 py-3 text-sm leading-4 text-[#515D5B] rounded ${
              tooltipActive ? "bg-[#663634] text-white" : "bg-[#F5F5F5]"
            }`}
            onMouseEnter={() => setTooltipActive(true)}
            onMouseLeave={() => setTooltipActive(false)}
          >
            ADD ALL TO CART
          </button>
          {tooltipActive && (
            <div className="absolute sm:w-[20%] bottom-[85%] px-2 text-center py-1 text-xs leading-[14px] text-white bg-[#663634] rounded shadow-md">
              All products on the Wishlist will be added to the cart (except
              out-of-stock products and variable products without specifying the
              variable).
            </div>
          )}
        </div>
        <div className="socials flex gap-x-2 items-center justify-center">
          <div className="text-sm">Share on :</div>
          <div className="flex gap-x-2">
            {[
              FB_ICON,
              TWITTER_ICON,
              WHATSAPP_ICON,
              TELEGRAM_ICON,
              MAIL_ICON,
            ].map((icon, index) => (
              <span
                key={index}
                className="p-1 rounded-full bg-white border border-[#EFEFEF]"
              >
                <img src={icon} alt="social icon" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListItem;
