"use client";

import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CardsOne = ({ product }) => {
  const labelRef1 = useRef(null);
  const labelRef2 = useRef(null);
  const labelRef3 = useRef(null);
  const [selectedImage, setSelectedImage] = useState("images1");

  useGSAP(() => {
    gsap.from(labelRef1.current, {
      scale: 1.05,
      opacity: 1,
      repeat: -1,
      yoyo: true,
      duration: 1,
    });
    gsap.from(labelRef2.current, {
      scale: 1.05,
      opacity: 1,
      repeat: -1,
      yoyo: true,
      duration: 1,
    });
    gsap.from(labelRef3.current, {
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
  const [isSlideOpen, setIsSlideOpen] = useState(false);
  const handleSlideOpen = () => {
    setIsSlideOpen(true);
  };

  const handleSlideClose = () => {
    setIsSlideOpen(false);
  };

  return (
    <>
      {product.price ? (
        <div className="sm:m-1.5  m-1 ">
          <div className="w-full lg:w-[95%] pb-2 text-center">
            {/* Product Image */}
            <div className="relative   w-full overflow-hidden bg-white transition-all" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              {/* Labels On Image */}

              <div className="sm:top-2 top-1 absolute sm:w-auto w-20 flex flex-col gap-1">
              <img ref={labelRef1} className={`${product?.best_seller?"":"hidden"}`} src="/assets/labels/best-seller.svg" />
              <img ref={labelRef2} className={`${product?.trending?"":"hidden"}`}src="/assets/labels/trending.svg" />
              <img ref={labelRef3} className={` ${product?.new_arrival?"":"hidden"}`} src="/assets/labels/new-arrivial.svg" />
              </div>

              <div className="absolute top-2 right-2 flex items-center justify-center  cursor-pointer">
                <FontAwesomeIcon icon={faHeart} className="hover:text-white" />
              </div>
              <Link href={`product/${product.name.replace(/\s+/g, "-").toLowerCase()}`}>
                <img src={isHovered ? product?.[selectedImage][1]?.url : product[selectedImage][0]?.url || product["images1"][0]?.url} alt="Product" className=" w-full  h-full object-cover transition-opacity duration-300" />
              </Link>
            </div>

            {/* Product Info */}
            <div className="flex flex-col items-start ">
              <h2 className="mt-2 text-[14px] 3xl:text-xl 4xl:text-2xl text-gray-400 3xl: flex items-center">
                {product.sku}
                <span className="ml-5 hover:scale-105 text-lg cursor-pointer">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-green-500" />
                </span>
              </h2>
              <Link href={`product/${product.name.replace(/\s+/g, "-").toLowerCase()}`}>
                <p className="text-[#663634] line-clamp-2 w-full overflow-hidden text-ellipsis text-left md:w-9/12 text-[12px] sm:text-[13px] 3xl:text-xl 4xl:text-2xl">{product.name}</p>
              </Link>
              <p className="text-xs my-2 3xl:text-xl 4xl:text-2xl text-[#663634]">₹ {product.price}</p>
            </div>

            {/* Color Selector */}
            <div className="flex gap-3 mt-4">
              <button className={`w-5  h-5 rounded-full border-2 ${selectedImage === "images1" ? "border-gray-500" : "border-white"}`} style={{ backgroundColor: product?.color1?.color_code }} onClick={() => setSelectedImage("images1")} />
              <button className={`w-5  h-5 rounded-full border-2 ${selectedImage === "images2" ? "border-gray-500" : "border-white"}`} style={{ backgroundColor: product?.color2?.color_code }} onClick={() => setSelectedImage("images2")} />
              <button className={`w-5  h-5 rounded-full border-2 ${selectedImage === "images3" ? "border-gray-500" : "border-white"}`} style={{ backgroundColor: product?.color3?.color_code }} onClick={() => setSelectedImage("images3")} />
            </div>
          </div>
        </div>
      ) : (
        // Shop the Look Section
        <div className="col-span-2 my-4 row-span-2  w-full h-[80vh] sm:h-screen lg:h-auto   relative z-0">
          <div className="h-full w-full">
            <Image src={product.imageUrl} alt="Shop Image" fill className="sm:object-cover object-center  " />
          </div>

          {/* Text & Button Over Image */}
          <div className="absolute bottom-0  w-full bg-[#663634] flex flex-col lg:flex-row gap-3 py-2 justify-between items-center 3xl:py-8 sm:p-4">
            <p className="text-white md:w-[95%] text-center lg:text-start px-2  text-sm md:text-base 3xl:text-xl 4xl:text-3xl">{product.caption}</p>
            <button onClick={handleSlideOpen} className="border text-white border-white px-4 py-2 3xl:text-xl 4xl:text-2xl mr-4 whitespace-nowrap hover:bg-white hover:text-[#663634] transition-all">
              {product.buttonText}
            </button>
          </div>
        </div>
      )}

      {/* Slide-in Panel */}
      {isSlideOpen && <SlidePanel isOpen={isSlideOpen} handleClose={handleSlideClose} position="right" />}
    </>
  );
};

export default CardsOne;
