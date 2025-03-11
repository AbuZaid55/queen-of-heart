import React, {  useEffect, useState } from "react";
import { options } from "@/Data/cardsData";
import Image from "next/image";
import gsap from "gsap";

const CustomizeSideBar = ({grades,carats, price, sidebarMenu, selectedColor, onConfirm }) => {
  const [selectedMetal, setSelectedMetal] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedSize, setSelectedSize] = useState(options.sizes[0]);
  const [deliveryDate, setDeliveryDate] = useState("17th March 2025");

  const getBackgroundColors = (color) => {
    switch (color) {
      case "Rose Gold":
        return { selectedBg: "#efd750", normalBg: "#dfd28b" }; // Gold shades
      case "White Gold":
        return { selectedBg: "#9b9898", normalBg: "#b7b4b4" }; // Silver shades
      case "Yellow Gold":
        return { selectedBg: "#cc6659", normalBg: "#ce8d84" }; // Peach shades (default)
      default:
        return { selectedBg: "#B76E79", normalBg: "#A05263" }; // Fallback colors
    }
  };

  const { selectedBg, normalBg } = getBackgroundColors(selectedColor);

  const handleMetalSelect = (metal) => {
    setSelectedMetal(metal);
  };

  const handleGradeSelect = (grade) => {
    setSelectedGrade(grade);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleClose = () => {
    gsap.to(sidebarMenu.current, {
      xPercent: 100,
      ease: "power2.in",
    });
  };

  const handleConfirmSelection = () => {
    onConfirm(selectedMetal, selectedGrade, selectedSize.size);
    handleClose();
  };

  useEffect(()=>{
    setSelectedMetal(carats[0])
    setSelectedGrade(grades[0])
  },[carats,grades])
  return (
    <div ref={sidebarMenu} data-lenis-prevent="true" className="opacity-0 z-[99999] flex flex-col gap-5 bg-[#eed9d7] top-0 right-0 lg:w-[40vw] w-full h-full fixed   overflow-y-auto">
      {/* Price Section */}
      <div className="flex  sticky top-0 w-full z-[999] py-2 items-end justify-between bg-[#663634] text-white">
        <div className="flex items-end mx-2">
        <h1 className="font-bold text-xl 3xl:text-2xl 4xl:text-3xl">₹{price?.finalTotalPrice}</h1>
        <h5 className={` ${price.finalTotalPrice === price.totalPriceBeforeDiscount?"hidden":""} text-gray-400 text-sm font-bold line-through ml-3`}>₹{price?.totalPriceBeforeDiscount}</h5>
        </div>
        <div className="flex items-center mx-5">
          <h1 className="md:mx-5 mx-3 md:text-lg text-sm">Delivered by {deliveryDate}</h1>
          <Image onClick={handleClose} src="/assets/images/cross.svg" width={15} height={10} alt="Close" className="close-btn  h-6 ml-auto cursor-pointer transition-transform duration-500 transform hover:rotate-180" />
        </div>
      </div>
      {/* Metal Select */}
      <div className="px-3 text-[#663634]">
        <h1 className="text-xl ">Select your Metal</h1>

        <div className="flex my-2">
          {carats.map((metal, index) => (
            <div
              key={index}
              onClick={() => handleMetalSelect(metal)}
              style={{
                backgroundColor: selectedMetal === metal ? selectedBg : normalBg,
              }}
              className="border-2 cursor-pointer bg-opacity-30 backdrop-blur-lg px-1 py-1 mr-2 rounded-2xl flex flex-col text-center">
              <h1 className="py-1.5">{metal}</h1>
              <h1 className="bg-white backdrop-blur-lg px-6 rounded-2xl">{metal}</h1>
            </div>
          ))}
        </div>
      </div>
      {/* Diamond Grade Select */}
      <div className="px-3 text-[#663634]">
        <h1 className="text-xl ">Select Diamond Grade</h1>
        <div className="flex my-2">
          {grades.map((grade, index) => (
            <div key={index} onClick={() => handleGradeSelect(grade)} className={`${selectedGrade === grade ? "bg-[#07dada]" : "bg-[#83dddd]"} border-2 cursor-pointer  bg-opacity-30 backdrop-blur-lg px-1 py-1 mr-2 rounded-2xl flex flex-col text-center`}>
              <h1 className="py-1.5">{grade}</h1>
              <h1 className="bg-white backdrop-blur-lg   px-4 rounded-2xl">{grade}</h1>
            </div>
          ))}
        </div>
      </div>

      {/* Size Select */}
      <div className="px-3 text-[#663634] flex flex-col">
        <h1 className="text-xl">Select your Size</h1>
        <div className="flex flex-wrap gap-2 my-2">
          {options.sizes.map((size, index) => (
            <div
              key={index}
              onClick={() => handleSizeSelect(size)}
              className={`${selectedSize.size === size.size ? "bg-gradient-to-b  from-white to-[#ea766c]" : "bg-gradient-to-b  from-white to-[#f2c8c4]"} px-2 lg:w-32 w-24  cursor-pointer  bg-opacity-30 backdrop-blur-lg  py-2 rounded-2xl flex flex-col`}>
              <h1 className="">Size: {size.size}</h1>
              <h1>{size.dimension}</h1>
              <h1 className="">{size.status}</h1>
            </div>
          ))}
        </div>
      </div>

      <button onClick={handleConfirmSelection} className="bg-[#663634] w-fit mx-auto mb-10 text-white px-8 py-2 rounded-lg font-bold">
        Confirm Selection
      </button>
    </div>
  );
};

export default CustomizeSideBar;
