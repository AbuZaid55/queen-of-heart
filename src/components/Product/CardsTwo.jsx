"use client";

import React, { useState } from "react";
import { cardsDataTwo } from "../../Data/cardsData";
import { FaRegHeart } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import SlidePanel from "./SlidePanel";
import Image from "next/image";
import Link from "next/link";

const CardsTwo = () => {
  const [isSlideOpen, setIsSlideOpen] = useState(false);
  const handleSlideOpen = () => {
    setIsSlideOpen(true);
  };

  // Function to close the slide
  const handleSlideClose = () => {
    setIsSlideOpen(false);
  };
  return (
    <div className="flex   flex-col lg:flex-row mt-10 gap-6">
      {/* Left Side - Full Image */}
      {/* Left Side: Full Image Section */}
      <div className="flex-1 relative">
        <Image
          src="/assets/Product/cardImg1.png"
          alt="Shop Image"
          width={700}
          height={700}
          className="w-full h-full object-cover"
        />

        {/* Desktop View: Text & Button Over Image */}
        <div className="absolute bottom-0 left-0 w-full bg-[#663634] hidden sm:flex justify-between items-center p-4">
          <p className="text-white w-[75%] text-sm md:text-base 3xl:text-xl 4xl:text-3xl">
            A diamond necklace: because sometimes your neck needs to make a
            statement too!
          </p>
          <button
            onClick={handleSlideOpen}
            className="border text-white border-white px-4 py-2 3xl:text-xl 4xl:text-2xl mr-4 whitespace-nowrap hover:bg-white hover:text-[#663634] transition-all"
          >
            Shop The Look
          </button>
        </div>

        {/* Mobile View: Text & Button Below Image */}
        <div className="sm:hidden bg-[#663634]  flex flex-col items-center text-center p-4">
          <p className="text-white text-sm md:text-base mb-2 ">
            A diamond necklace: because sometimes your neck needs to make a
            statement too!
          </p>
          <button
            onClick={handleSlideOpen}
            className="border text-white border-white px-4 py-2 hover:bg-white hover:text-[#663634] transition-all"
          >
            Shop The Look
          </button>
        </div>
      </div>

      {/* Right Side - Cards Grid */}
      <div className="grid   grid-cols-2 md:grid-cols-2 gap-4 flex-1">
        {cardsDataTwo.slice(0, 4).map((product, index) => {
          const [selectedImage, setSelectedImage] = useState(
            product.imageOptions[0].img1
          );
          const [isHovered, setIsHovered] = useState(false);

          return (
            
            <div key={index} className="w-full  lg:w-[95%] sm:w-[250px]  pb-2 text-center">
              {/* Product Image */}
              <div
                className="relative   w-full overflow-hidden bg-white transition-all"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="absolute  top-2 right-2 flex items-center justify-center z-10 cursor-pointer">
                  <FaRegHeart className="hover:text-white" />
                </div>
                <Link href={`product/${product.description.replace(/\s+/g, "-").toLowerCase()}`}>
                <img
                  src={isHovered ? product.bgImg : selectedImage}
                  alt="Product"
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
                </Link>
              </div>

              {/* Product Info */}
              <div className="flex flex-col items-start">
                <h2 className="mt-4  3xl:text-xl 4xl:text-2xl text-[14px] text-gray-400 flex items-center">
                  {product.code}
                  <span className="ml-5 text-lg cursor-pointer">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-green-500"/>                  </span>
                </h2>
                <p className="text-[#663634]  3xl:text-xl 4xl:text-2xl text-[14px] flex items-center">
                  {product.description}
                </p>
                <p className="mt-2 text-[#663634]  3xl:text-xl 4xl:text-2xl">&#8377; {product.price}</p>
              </div>

              {/* Color Selector */}
              <div className="flex gap-3 mt-4">
                {product.imageOptions.map((option, idx) => {
                  const image = Object.values(option)[0];
                  const color = option.color;

                  return (
                    <button
                      key={idx}
                      className={`w-5 h-5 rounded-full border-2 ${
                        selectedImage === image
                          ? "border-gray-500"
                          : "border-white"
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedImage(image)}
                    />
                  );
                })}
              </div>
            </div>
            
          );
        })}
      </div>
      {/* Slide-in Panel */}
      {isSlideOpen && (
        <SlidePanel
          isOpen={isSlideOpen}
          handleClose={handleSlideClose}
          position="right"
        />
      )}
    </div>
  );
};

export default CardsTwo;
