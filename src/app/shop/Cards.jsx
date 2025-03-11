
import React, { useState } from "react";
import shopData from "./shopData.js";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link.js";

const ProductCard = () => {
  const product = shopData[0];
  const [selectedImage, setSelectedImage] = useState(
    product.imageOptions[0].img1
  );
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full  sm:w-[250px] pb-2 text-center">
      {/* Product Image */}
      <div
        className="relative w-full  overflow-hidden bg-white transition-all"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute top-2 right-2 flex items-center justify-center z-10 cursor-pointer">
          <FaRegHeart className="hover:text-white"/>
        </div>
        <Link href='/product-item'>
        
        <img
          src={isHovered ? product.bgImg : selectedImage}
          alt="Product"
          className="w-full  cursor-pointer h-full object-cover transition-opacity duration-300"
        />
        </Link>
      </div>

      {/* Product Info */}
      <div className="flex flex-col items-start">
        <h2 className="mt-4 text-[14px] text-gray-400 flex items-center">
          {product.code}
          <span className="ml-5 text-lg cursor-pointer">
            <IoLogoWhatsapp />
          </span>
        </h2>
        <Link href='/product-item'>        
        <p className="text-[#663634] cursor-pointer text-[14px] flex items-center text-left">{product.description}</p>
        </Link>
        <p className="mt-2 text-[#663634]">&#8377; {product.price}</p>
      </div>

      {/* Color Selector */}
      <div className="flex gap-3 mt-4">
        {product.imageOptions.map((option, index) => (
          <button
            key={index}
            className={`w-5 h-5 rounded-full border-2 ${
              selectedImage === Object.values(option)[0]
                ? "border-gray-500"
                : "border-white"
            }`}
            style={{ backgroundColor: option.color }}
            onClick={() => setSelectedImage(Object.values(option)[0])}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
