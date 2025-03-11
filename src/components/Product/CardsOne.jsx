"use client";

import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import getPrices from '../../utils/getPrices'

const CardsOne = ({ product, label }) => {
  const labelRef = useRef(null);
  // const product = cardsDataOne[0];
  const [selectedImage, setSelectedImage] = useState("images1");

  useGSAP(() => {
    gsap.from(labelRef.current, {
      scale: 1.05,
      opacity: 1,
      repeat: -1,
      yoyo: true,
      duration: 1,
    });
  }, []);

  if (!product || product.images1.length <= 0) {
    return <div>No image options available</div>;
  }
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full lg:w-[95%] sm:w-[250px] pb-2 text-center ">
      {/* Product Image */}
      <div className="relative  w-full overflow-hidden bg-white transition-all" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        {/* Labels On Image */}
        {label && <img ref={labelRef} className="sm:top-2 top-1 absolute sm:w-auto  w-20" src={label} />}
        <div className="absolute top-2 right-2 flex items-center justify-center z-10 cursor-pointer">
          <FontAwesomeIcon icon={faHeart} className="hover:text-white" />
        </div>
        <Link href={`product/${product.name.replace(/\s+/g, "-").toLowerCase()}`}>
          <img src={isHovered ? product?.[selectedImage][1]?.url : product[selectedImage][0]?.url || product["images1"][0]?.url} alt="Product" className=" w-full  h-full object-cover transition-opacity duration-300" />
        </Link>
      </div>

      {/* Product Info */}
      <div className="flex flex-col items-start">
        <h2 className="mt-4 text-[14px] 3xl:text-xl 4xl:text-2xl text-gray-400 3xl: flex items-center">
          {product.sku}
          <span className="ml-5 text-lg cursor-pointer">
            <FontAwesomeIcon icon={faWhatsapp} className="text-green-500" />
          </span>
        </h2>
        <Link href={`product/${product?.name}`}>
          <p className="text-[#663634] text-left text-[14px] 3xl:text-xl 4xl:text-2xl flex items-center">{product?.name}</p>
        </Link>
        <p className="mt-2 3xl:text-xl 4xl:text-2xl text-[#663634]">&#8377; {getPrices(product)[0]?.finalTotalPrice}</p>
      </div>

      {/* Color Selector */}
      <div className="flex gap-3 mt-4">
        <button
          className={`w-5  h-5 rounded-full border-2 ${selectedImage === "images1" ? "border-gray-500" : "border-white"}`}
          style={{ backgroundColor: product?.color1?.color_code }}
          onClick={() => setSelectedImage("images1")}
        />
         <button
          className={`w-5  h-5 rounded-full border-2 ${selectedImage === "images2" ? "border-gray-500" : "border-white"}`}
          style={{ backgroundColor: product?.color2?.color_code }}
          onClick={() => setSelectedImage("images2")}
        />
         <button
          className={`w-5  h-5 rounded-full border-2 ${selectedImage === "images3" ? "border-gray-500" : "border-white"}`}
          style={{ backgroundColor: product?.color3?.color_code }}
          onClick={() => setSelectedImage("images3")}
        />
      </div>
    </div>
  );
};

export default CardsOne;
