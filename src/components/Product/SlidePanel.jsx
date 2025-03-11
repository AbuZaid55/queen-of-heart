"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { RxCross2 } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const SlidePanel = ({ isOpen, handleClose, position = "left" }) => {
  const panelRef = useRef(null);
  const backdropRef = useRef(null);


  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  // GSAP animation for slide-in effect
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        panelRef.current,
        { x: position === "right" ? "100%" : "-100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.5 }
      );
      gsap.to(backdropRef.current, { opacity: 1, duration: 0.3 });
    } else {
      gsap.to(panelRef.current, { x: position === "right" ? "100%" : "-100%", opacity: 0, duration: 0.5 });
      gsap.to(backdropRef.current, { opacity: 0, duration: 0.3 });
    }
  }, [isOpen, position]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop Overlay */}
      <div
        ref={backdropRef}
        className="fixed  inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-10"
        onClick={handleClose} // Close panel when clicking outside
      ></div>

      {/* Slide Panel */}
      <div
        ref={panelRef}
        className={`fixed top-0 ${position === "right" ? "right-0" : "left-0"} w-full md:w-[600px] h-full bg-white shadow-lg p-4 z-[999]`}
      >
        <button className="absolute top-2 right-2 text-lg z-20" onClick={handleClose}>
          <RxCross2 size={24} />
        </button>

        {/* Scrollable Products Grid */}
        <div className="h-[calc(100%-60px)] overflow-y-auto mt-6" data-lenis-prevent = "true">
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            {/* Sample Products */}
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white p-2 cursor-pointer">
                <div className="relative w-full overflow-hidden">
                  <div className="absolute top-2 right-2 cursor-pointer">
                    <FaRegHeart />
                  </div>
                  <img src="/assets/Product/ring.png" alt="Product" className="w-full h-full object-cover transition-opacity duration-300" />
                </div>
                <div className="flex flex-col items-start mt-4">
                  <h2 className="text-[14px] text-gray-400 flex items-center">
                    P00{index + 1}
                    <span className="ml-5 text-lg cursor-pointer"><IoLogoWhatsapp /></span>
                  </h2>
                  <p className="text-[#663634] text-[15px]">Great product description.</p>
                  <p className="mt-2 text-[#663634]">&#8377; {999 + index * 500}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SlidePanel;
