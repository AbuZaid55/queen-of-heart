'use client'
import React, { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Cards from "./Cards";
import shopData from "./shopData.js";

const Shop = () => {
  const [isCategoryOpen, setCategoryOpen] = useState(false);
  const [isPriceOpen, setPriceOpen] = useState(false);
  const [isRecommendationOpen, setRecommendationOpen] = useState(false);
  const [isWhatsNewOpen, setWhatsNewOpen] = useState(false);

  // Refs to track clicks outside the menu
  const categoryRef = useRef(null);
  const priceRef = useRef(null);
  const recommendationRef = useRef(null);
  const whatsNewRef = useRef(null);

  // Handle clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        categoryRef.current &&
        !categoryRef.current.contains(event.target) &&
        priceRef.current &&
        !priceRef.current.contains(event.target) &&
        recommendationRef.current &&
        !recommendationRef.current.contains(event.target) &&
        whatsNewRef.current &&
        !whatsNewRef.current.contains(event.target)
      ) {
        // Close all menus when clicking outside
        setCategoryOpen(false);
        setPriceOpen(false);
        setRecommendationOpen(false);
        setWhatsNewOpen(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Category menu
  const handleCategoryClick = () => {
    setCategoryOpen(!isCategoryOpen);
    setPriceOpen(false);
    setRecommendationOpen(false);
    setWhatsNewOpen(false);
  };

  // Price menu
  const handlePriceClick = () => {
    setPriceOpen(!isPriceOpen);
    setCategoryOpen(false);
    setRecommendationOpen(false);
    setWhatsNewOpen(false);
  };

  // Recommendation menu
  const handleRecommendationClick = () => {
    setRecommendationOpen(!isRecommendationOpen);
    setCategoryOpen(false);
    setPriceOpen(false);
    setWhatsNewOpen(false);
  };

  // WhatsNew Menu
  const handleWhatsNewClick = () => {
    setWhatsNewOpen(!isWhatsNewOpen);
    setCategoryOpen(false);
    setPriceOpen(false);
    setRecommendationOpen(false);
  };

  // Clear
  const handleClick = () => {
    window.location.reload(); // This reloads the page
  };

  return (
    <div className="bg-[#f7eceb] h-full w-full px-5 sm:px-10 lg:px-20 pt-14">
      {/* Only show the shop name */}
      <div className=" h-72 4xl:text-4xl w-full flex items-center justify-center text-[#663634] text-[28px] font-normal leading-[1.4] uppercase">
        <h1>SHOP</h1>
      </div>

      <div className="hidden lg:flex items-center gap-5 text-[#663634]">
        {/* Category with additional options when clicked */}
        <h4
          onClick={handleCategoryClick}
          className={`flex items-center justify-center text-[13px] 4xl:text-2xl cursor-pointer hover:font-bold ${
            isCategoryOpen ? "font-bold" : ""
          }`}
          ref={categoryRef} // Add ref to category menu
        >
          Category <MdKeyboardArrowDown />
        </h4>
        {isCategoryOpen && (
          <div className="absolute flex mt-20 gap-5 bg-white p-2 text-[13px] px-5 shadow-md cursor-pointer">
            <p className="hover:font-bold">Diamond Ring</p>
            <p className="hover:font-bold">Diamond Earrings</p>
            <p className="hover:font-bold">Diamond Necklace</p>
            <p className="hover:font-bold">Diamond Bracelate</p>
          </div>
        )}

        {/* Price with additional options when clicked */}
        <h4
          onClick={handlePriceClick}
          className={`flex items-center justify-center text-[13px] 4xl:text-2xl cursor-pointer hover:font-bold ${
            isPriceOpen ? "font-bold" : ""
          }`}
          ref={priceRef}
        >
          Price <MdKeyboardArrowDown />
        </h4>
        {isPriceOpen && (
          <div className="absolute flex mt-20 gap-5 bg-white p-2 text-[13px] px-5 shadow-md cursor-pointer">
            <p className="hover:font-bold">Low To High</p>
            <p className="hover:font-bold">High To Low</p>
          </div>
        )}

        {/* Recommendation with additional options when clicked */}
        <h4
          onClick={handleRecommendationClick}
          className={`flex items-center justify-center text-[13px] 4xl:text-2xl cursor-pointer hover:font-bold ${
            isRecommendationOpen ? "font-bold" : ""
          }`}
          ref={recommendationRef}
        >
          Recommendation <MdKeyboardArrowDown />
        </h4>
        {isRecommendationOpen && (
          <div className="absolute flex mt-20 gap-5 bg-white p-2 text-[13px] px-5 shadow-md cursor-pointer">
            <p className="hover:font-bold">Anniversary</p>
            <p className="hover:font-bold">Casual Outing</p>
            <p className="hover:font-bold">Classic</p>
            <p className="hover:font-bold">Contemporary</p>
            <p className="hover:font-bold">Engagement</p>
            <p className="hover:font-bold">Gitting</p>
            <p className="hover:font-bold">Mordern</p>
            <p className="hover:font-bold">Office Waer</p>
          </div>
        )}

        {/* What's New with additional options when clicked */}
        <h4
          onClick={handleWhatsNewClick}
          className={`flex items-center justify-center text-[13px] 4xl:text-2xl cursor-pointer hover:font-bold ${
            isWhatsNewOpen ? "font-bold" : ""
          }`}
          ref={whatsNewRef}
        >
          What's New <MdKeyboardArrowDown />
        </h4>
        {isWhatsNewOpen && (
          <div className="absolute flex mt-20 gap-5 bg-white p-2 text-[13px] px-5 shadow-md cursor-pointer">
            <p className="hover:font-bold">New Arrival</p>
            <p className="hover:font-bold">Trending</p>
            <p className="hover:font-bold">Best Seller</p>
            <p className="hover:font-bold">Deals</p>
            <p className="hover:font-bold">Latest Trends</p>
          </div>
        )}

        {/* Clear Button */}
        <h4
          className=" flex items-center justify-center text-[13px] 4xl:text-2xl cursor-pointer hover:font-bold"
          onClick={handleClick}
        >
          <RxCross2 />
          Clear
        </h4>

        {/* Right Side Products Counts */}
        <div className="flex items-center text-[13px] ml-0 4xl:text-2xl md:ml-auto text-left md:text-right">
          <h4>Showing 125 Products</h4>
        </div>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 3xl:grid-cols-6 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto mt-20">
        {shopData?.map((product) => (
          <Cards key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
