"use client";

import { use, useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import {cardsDataOne} from "../../Data/cardsData";
import CardsOne from "../../components/Product/CardsOne";
import CardsTwo from "../../components/Product/CardsTwo.jsx";
import CardsThree from "../../components/Product/CardsThree.jsx";
import Image from "next/image";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import api from "@/utils/api";



const page = () => {

  //  Menu bars
  const [isCategoryOpen, setCategoryOpen] = useState(false);
  const [isPriceOpen, setPriceOpen] = useState(false);
  const [isRecommendationOpen, setRecommendationOpen] = useState(false);
  const [isWhatsNewOpen, setWhatsNewOpen] = useState(false);
  const [categoryData,setCategoryData]=useState({})
  const [productList,setProductList]=useState([])
  const {category} = useParams()
  const name = category.replaceAll("-"," ")
  const params = useSearchParams()
  const styleName = params.get("style")


  // Refs to track clicks outside the menu
  const categoryRef = useRef(null);
  const priceRef = useRef(null);
  const recommendationRef = useRef(null);
  const whatsNewRef = useRef(null);

  const getCategory = async()=>{
    if(!name) return;
    try {
      const res = await api.get(`/store/eshop/categories/get-category-by-name/${name}`)
      const data = res.data 
      setCategoryData(data)
    } catch (error) {
      console.log(error)
    }
  }

  const getProduct = async()=>{
    if(!categoryData?._id) return;
    let styleId = ''
    categoryData?.styles?.map((style)=>{
      if(style.name.toLowerCase() === styleName){
        styleId = style._id
      }
    })
    try {
      const res = await api.post("/store/eshop/products/get-products",{category:categoryData._id,style:styleId})
      const data = await res.data
      setProductList(data?.products)
    } catch (error) {
      console.log(error)
    }
  }


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
  const handleStyleClick = () => {
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

  useEffect(()=>{
    getCategory()
  },[name])
  useEffect(()=>{
    getProduct()
  },[categoryData])

  return (
    <div className="pb-20  h-full w-full px-5 sm:px-10 lg:px-0    bg-[#f7eceb] font-gothic">
      <div className=" pt-10   lg:px-20">
        {/* Left Side - Text Content */}
        <div className="flex  flex-col md:flex-row justify-between items-center md:pt-28 py:20 pt-32 mb-10">
        <div className="left   w-full 4xl:w-[40%] md:w-1/2 flex flex-col justify-center text-center md:text-left mb-5">
          <h1 className="text-xl sm:text-2xl md:text-3xl 4xl:text-5xl 3xl:text-4xl text-[#663634] uppercase tracking-[0.32em]">
            {categoryData?.name}
          </h1>
          <p className="mt-2 text-[14px] lg:text-[17px] text-gray-600 3xl:text-2xl 3xl:leading-[1.5] 4xl:leading-[1.6] 4xl:w-full 4xl:text-3xl w-full lg:w-[80%] mx-auto lg:mx-0 lg:leading-[1.5] leading-[2] tracking-[0.04em]">
            {categoryData?.description}
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="right w-full md:w-1/2 flex justify-center  md:mt-5">
          <Image
            src={categoryData?.image?.url || '/'}
            alt={categoryData?.name || ''}
            width={1200}
            height={1200}
            priority={true}
            className="w-full h-auto rounded-lg object-cover md:w-[80%] md:max-w-full"
          />
        </div>
        </div>
      </div>

      {/* Below Section (Category, Price, etc.) */}
      <div className="hidden lg:flex items-center w-[85%] m-auto gap-5 text-[#663634]">
        {/* Price with additional options when clicked */}
        <h4
          onClick={handlePriceClick}
          className={`flex items-center justify-center text-[13px] 3xl:text-xl cursor-pointer hover:font-bold ${
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

        {/* Category with additional options when clicked */}
        <h4
          onClick={handleStyleClick}
          className={`flex items-center justify-center text-[13px] 3xl:text-xl cursor-pointer hover:font-bold ${
            isCategoryOpen ? "font-bold" : ""
          }`}
          ref={categoryRef} // Add ref to category menu
        >
          Style <MdKeyboardArrowDown />
        </h4>
        {isCategoryOpen && (
          <div className="absolute flex mt-20 gap-5 bg-white p-2 text-[13px] px-5 shadow-md cursor-pointer">
            <p className="hover:font-bold ">Statement</p>
            <p className="hover:font-bold">Brands</p>
            <p className="hover:font-bold">Solitaire</p>
            <p className="hover:font-bold">Gemstone</p>
            <p className="hover:font-bold">Eternity</p>
            <p className="hover:font-bold">3 Diamond</p>
          </div>
        )}

        {/* Recommendation with additional options when clicked */}
        <h4
          onClick={handleRecommendationClick}
          className={`flex items-center justify-center text-[13px] 3xl:text-xl cursor-pointer hover:font-bold ${
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
            <p className="hover:font-bold">Gifting</p>
            <p className="hover:font-bold">Modern</p>
            <p className="hover:font-bold">Office Wear</p>
          </div>
        )}

        {/* What's New with additional options when clicked */}
        <h4
          onClick={handleWhatsNewClick}
          className={`flex items-center justify-center text-[13px] 3xl:text-xl cursor-pointer hover:font-bold ${
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
          className="flex items-center justify-center text-[13px] 3xl:text-xl cursor-pointer hover:font-bold"
          onClick={handleClick}
        >
          <RxCross2 />
          Clear
        </h4>

        {/* Right Side Products Counts */}
        <div className="flex items-center text-[13px] ml-0 3xl:text-xl md:ml-auto text-left md:text-right">
          <h4>Showing 125 Products</h4>
        </div>
      </div>

    <div className=" w-[85%] m-auto">

      {/* Cards section 1 */}
      <div className="grid grid-cols-2  sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6 lg:gap-0 mx-auto mt-20">
        {productList?.map((product) => (
          <div key={product._id}>
            <CardsOne product={product} label={product.label}/>
          </div>
        ))}
      </div>

      {/* Cards section 2 */}
      {/* <div className=" ">        
        <CardsTwo />
      </div> */}

      {/* Cards section 3 same as Section 1 */}
      {/* <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2   lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto mt-10">
        {cardsDataOne.map((product) => (
           <div key={product.id} >           
           <CardsOne label={product.label}/>
           </div>
        ))}
      </div> */}

      {/* Cards Section 4 same as Section 2 */}
      {/* <div>
        <CardsThree />
      </div> */}
    </div>
      
    </div>
  );
};

export default page;
