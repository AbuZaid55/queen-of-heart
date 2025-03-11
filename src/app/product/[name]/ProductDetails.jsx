"use client";

import React, { useEffect, useRef, useState } from "react";
import { overallDetails, priceBreakup, productDetails, slides } from "@/Data/cardsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShareNodes, faTruck, faLock, faArrowDown, faVideo } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CustomizeSideBar from "./CustomizeSideBar";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import EmblaCarousel from "./EmblaCarousel";
import api from "@/utils/api";
import getPrice from "../../../utils/getPrices";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const Productdetails = ({ name, image, colors }) => {
  const productData = [
    {
      title: "Alluring Dazzle Diamond Jacket Ring",
      discountedPrice: "23,564",
      actualPrice: "33,564",
    },
  ];

  // const dispatch = useDispatch()
  const labelsRef = useRef(null);
  const buttonRef = useRef(null);
  const placeholderRef = useRef(null);
  const sidebarMenu = useRef(null);
  const productDetailsSection = useRef(null);
  const productDetailsSectionMobile = useRef(null);
  const contentRef = useRef(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedImages, setSelectedImg] = useState([]);

  const [activeSection, setActiveSection] = useState(overallDetails[0].name);
  const activeContent = overallDetails.find((section) => section.name === activeSection);

  const [openDetails, setOpenDetails] = useState(false);
  const [openPriceBreakup, setPriceBreakup] = useState(false);
  const [openShipping, setOpenShipping] = useState(false);
  const [openReturn, setOpenReturn] = useState(false);
  const [slideImage, setSlideImage] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({ carat: "14k", grade: "SI-GH", size: "7" });
  const [product, setProduct] = useState({});
  const [prices, setPrices] = useState([]);
  const [carats, setCarats] = useState([]);
  const [grades, setGrades] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState({});

  useGSAP(() => {
    const button = buttonRef.current;
    const placeholder = placeholderRef.current;

    gsap.set(sidebarMenu.current, { xPercent: 100, opacity: 1 });
    gsap.from(labelsRef.current, {
      scale: 1.02,
      opacity: 1,
      repeat: -1,
      yoyo: true,
      duration: 1,
      transformOrigin: "center center",
    });

    gsap.to(button, {
      scrollTrigger: {
        trigger: placeholder,
        start: "top 80%",
        end: "top center",
        onEnter: () => button.classList.remove("fixed", "bottom-0", "lg:w-[35%]"),
        onLeaveBack: () => button.classList.add("fixed", "bottom-0", "lg:w-[35%]"),
      },
    });
  }, []);

  useGSAP(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, scale: 0.5, rotate: -10 },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.7,
          ease: "back.out(1.5)",
        }
      );
    }
  }, [activeSection]);

  const handleOpen = () => {
    gsap.to(sidebarMenu.current, {
      xPercent: 0,
      ease: "power2.out",
    });
  };

  const handleScroll = () => {
    if (window.innerWidth <= 1010) {
      gsap.to(window, { duration: 1, scrollTo: productDetailsSectionMobile.current.offsetTop - 70 });
      setOpenDetails(true);
    } else {
      gsap.to(window, { duration: 1, scrollTo: productDetailsSection.current.offsetTop - 70 });
    }
    setActiveSection(overallDetails[0].name);
  };

  const handleMouseMove = (e, imgRef, containerRef) => {
    const { left, top, width, height } = containerRef.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    imgRef.style.transformOrigin = `${x}% ${y}%`;
    imgRef.style.transform = "scale(1.5)";
  };

  const handleMouseLeave = (imgRef) => {
    imgRef.style.transformOrigin = "center center";
  };

  const handleSelection = (selectedMetal, selectedGrade, selectedSize) => {
    setSelectedOptions({
      carat: selectedMetal,
      grade: selectedGrade,
      size: selectedSize,
    });
  };

  const getProductDetails = async () => {
    if (!name) return;
    name = name.replaceAll("-", " ");
    try {
      const res = await api.get(`/store/eshop/products/get-product-by-name/${name}`);
      const data = res.data;
      setProduct(data);
      setSelectedColor(data?.color1?.name);
      setSelectedImg(data?.images1);
      const _prices = getPrice(data);
      setPrices(_prices);
      const _grade = [];
      const _carat = [];
      _prices.map((obj) => {
        if (!_grade.includes(obj.grade)) {
          _grade.push(obj.grade);
        }
        if (!_carat.includes(obj.carat)) {
          _carat.push(obj.carat);
        }
      });
      setGrades(_grade);
      setCarats(_carat);
      setSelectedOptions({ carat: _prices[0]?.carat, grade: _prices[0].grade, size: "7" });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCart = () => {
    console.log(productData);
    // dispatch(c)
  };

  useEffect(() => {
    getProductDetails();
  }, []);
  useEffect(() => {
    if (selectedColor === product?.color3?.name) {
      setSelectedImg(product?.images3);
    } else if (selectedColor === product?.color2?.name) {
      setSelectedImg(product?.images2);
    } else {
      setSelectedImg(product?.images1);
    }
  }, [selectedColor]);

  useEffect(() => {
    prices.map((obj) => {
      if (obj.carat === selectedOptions.carat && obj.grade === selectedOptions.grade) {
        setSelectedPrice(obj);
      }
    });
  }, [selectedOptions]);

  return (
    <div className="bg-[#F7ECEB] relative font-century ">
      <div className="w-full md:w-[95%]  m-auto p-1 pt-44 ">
        {/* Procuct Section */}
        <div className="lg:flex relative">
          {/* Images and slidebar */}
          <div className="lg:w-[80%] relative  lg:mr-4">
            <div className="grid  grid-cols-6 md:grid-cols-2 gap-3 lg:w-full w-[95%] mx-auto">
              {/* Main Image Display */}
              <div className="aspect-square bg-white relative overflow-hidden col-start-1 col-end-7 md:col-end-1">
                <label className="absolute z-50 top-1 lg:hidden block">
                  <img src="/assets/labels/trending.svg" className="w-36" />
                </label>
                <div style={{ width: `${image.length * 100}%`, left: `-${slideImage * 100}%` }} className="h-full  rounded-md flex relative transition-all ease-in-out duration-700 object-cover">
                  {selectedImages?.map((image, i) => (
                    <div key={i} className="aspect-square bg-white relative cursor-pointer" onMouseMove={(e) => handleMouseMove(e, document.getElementById(`img-${i}`), e.currentTarget)} onMouseLeave={() => handleMouseLeave(document.getElementById(`img-${i}`))}>
                      <img id={`img-${i}`} src={image?.url} alt="Image" className="w-full h-full  object-cover slideImg" />
                    </div>
                  ))}
                </div>
              </div>
              {/* Thumbnail Selection */}
              {selectedImages?.map((image, i) => (
                <div key={i} className={`aspect-square bg-white relative ${i == 0 ? "block md:hidden  " : ""}`}>
                  <img onClick={() => setSlideImage(i)} src={image?.url} alt="Image" className="w-full h-full object-cover cursor-pointer" />
                </div>
              ))}
            </div>

            {/* Product Details Section For larger Screen */}
            <div ref={productDetailsSection} className="lg:flex hidden font-gothic gap-4 my-10 py-10  px-3">
              {/* Left Side */}
              <div className="flex flex-col gap-14 py-5 max-w-[200px]">
                <button
                  onClick={() => setActiveSection("Product Details")}
                  className={`text-start  3xl:text-2xl pl-4 py-3 rounded-lg border-[1px] border-gray-400 transition-all duration-300 ${activeSection === "Product Details" ? "bg-[#663634] border-transparent text-white" : "bg-transparent text-gray-700"}`}>
                  Product Details
                </button>
                <button
                  onClick={() => setActiveSection("Price Breakup")}
                  className={`text-start  3xl:text-2xl pl-4 py-3 rounded-lg border-[1px] border-gray-400 transition-all duration-300 ${activeSection === "Price Breakup" ? "bg-[#663634] border-transparent text-white" : "bg-transparent text-gray-700"}`}>
                  Price Breakup
                </button>
                <button
                  onClick={() => setActiveSection("Shipping Details")}
                  className={`text-start  3xl:text-2xl pl-4 py-3 rounded-lg border-[1px] border-gray-400 transition-all duration-300 ${activeSection === "Shipping Details" ? "bg-[#663634] border-transparent text-white" : "bg-transparent text-gray-700"}`}>
                  Shipping Details
                </button>
                <button
                  onClick={() => setActiveSection("Returns/Exchange")}
                  className={`text-start  3xl:text-2xl pl-4 py-3 rounded-lg border-[1px] border-gray-400 transition-all duration-300 ${activeSection === "Returns/Exchange" ? "bg-[#663634] border-transparent text-white" : "bg-transparent text-gray-700"}`}>
                  Returns/Exchange
                </button>
              </div>
              {/* Right Side */}
              <div ref={contentRef} className="w-full border-[1px] h-auto border-gray-400 rounded-lg px-10">
                <h1 className="text-center text-xl  3xl:text-3xl underline py-2">{activeSection}</h1>
                <div className="py-5">
                  <div className={activeSection === "Product Details" ? "" : "hidden"}>
                    <div className={`${selectedPrice?.total_gold_weight ? "" : "hidden"} border-b-[1px] flex flex-row text-gray-500 text-[16px] py-3  border-gray-400 justify-between`}>
                      <h1>Net Gold Weight:</h1>
                      <p>{selectedPrice?.total_gold_weight} gms</p>
                    </div>
                    <div className={`${selectedPrice?.totalDiamondWeight ? "" : "hidden"} border-b-[1px] flex flex-row text-gray-500 text-[16px] py-3  border-gray-400 justify-between`}>
                      <h1>Total Diamond Weight:</h1>
                      <p>{selectedPrice?.totalDiamondWeight} CTS</p>
                    </div>
                    <div className={`${product.gemstone_weight ? "" : "hidden"} border-b-[1px] flex flex-row text-gray-500 text-[16px] py-3  border-gray-400 justify-between`}>
                      <h1>Gemstone Weight:</h1>
                      <p>{product?.gemstone_weight} CTS</p>
                    </div>
                    <div className={`${product?.gemstone_name ? "" : "hidden"} border-b-[1px] flex flex-row text-gray-500 text-[16px] py-3  border-gray-400 justify-between`}>
                      <h1>Gemstone Name:</h1>
                      <p>{product?.gemstone_name}</p>
                    </div>
                    <div className={`${product?.collection?.name ? "" : "hidden"} border-b-[1px] flex flex-row text-gray-500 text-[16px] py-3  border-gray-400 justify-between`}>
                      <h1>Collection:</h1>
                      <p>{product?.collection?.name}</p>
                    </div>
                    <div className={`${product?.style?.name ? "" : "hidden"} border-b-[1px] flex flex-row text-gray-500 text-[16px] py-3  border-gray-400 justify-between`}>
                      <h1>Style:</h1>
                      <p>{product?.style?.name}</p>
                    </div>
                  </div>

                  <div className={activeSection === "Price Breakup" ? "text-xs" : "hidden"}>
                    <div className={`${selectedPrice?.goldprice ? "" : "hidden"} border-b-[1px] flex flex-row text-gray-500 text-[16px] py-3  border-gray-400 justify-between`}>
                      <h1>
                        {selectedPrice?.carat} {selectedColor} ({product?.total_gold_weight}g)
                      </h1>
                      <p className="flex gap-2">
                        <span className={selectedPrice?.gold_discount ? "" : "hidden"}>₹{selectedPrice?.goldPriceAfterDiscount}</span> <span className={selectedPrice?.gold_discount ? " text-nowrap" : "hidden"}> ({selectedPrice?.gold_discount}% off) </span>{" "}
                        <span className={selectedPrice?.gold_discount ? " line-through" : ""}>₹{selectedPrice?.goldprice}</span>
                      </p>
                    </div>
                    <div className={`${selectedPrice?.diamondprice ? "" : "hidden"} border-b-[1px] flex flex-row text-gray-500 text-[16px] py-3  border-gray-400 justify-between`}>
                      <h1>
                        {selectedPrice?.grade} Diamond ({selectedPrice?.totalDiamondWeight}ct)
                      </h1>
                      <p className="flex gap-2">
                        <span className={selectedPrice?.diamond_discount ? "" : "hidden"}>₹{selectedPrice?.diamondPriceAfterDiscount}</span> <span className={selectedPrice?.diamond_discount ? "text-nowrap" : "hidden"}> ({selectedPrice?.diamond_discount}% off) </span>{" "}
                        <span className={selectedPrice?.diamond_discount ? "line-through" : ""}>₹{selectedPrice?.diamondprice}</span>
                      </p>
                    </div>
                    <div className={`${product.gemstone_price ? "" : "hidden"} border-b-[1px] flex flex-row text-gray-500 text-[16px] py-3  border-gray-400 justify-between`}>
                      <h1>
                        Gemstone({selectedPrice.gemstone_weight}ct) {product?.gemstone_name}
                      </h1>
                      <p>₹{product?.gemstone_price}</p>
                    </div>
                    <div className={`${selectedPrice?.makingCharge ? "" : "hidden"} border-b-[1px] flex flex-row text-gray-500 text-[16px] py-3  border-gray-400 justify-between`}>
                      <h1>Making Charge</h1>
                      <p>₹{selectedPrice?.makingCharge}</p>
                    </div>
                    <div className={`${selectedPrice?.wastageCharge ? "" : "hidden"} border-b-[1px] flex flex-row text-gray-500 text-[16px] py-3  border-gray-400 justify-between`}>
                      <h1>Wastage Charge</h1>
                      <p>₹{selectedPrice?.wastageCharge}</p>
                    </div>
                    <div className={`${selectedPrice?.subTotal ? "" : "hidden"} border-b-[1px] flex flex-row text-gray-500 text-[16px] py-3  border-gray-400 justify-between`}>
                      <h1>SubTotal</h1>
                      <p className="flex gap-2">
                        <span className={selectedPrice?.totalAfterDiscount ? "" : "hidden"}>₹{selectedPrice?.totalAfterDiscount}</span> <span className={selectedPrice?.totalAfterDiscount ? "text-nowrap" : "hidden"}> ({selectedPrice?.discount_on_total}% off) </span>{" "}
                        <span className={selectedPrice?.discount_on_total ? "line-through" : ""}>₹{selectedPrice?.subTotal}</span>
                      </p>
                    </div>
                    <div className={`${selectedPrice?.gstAmount ? "" : "hidden"} border-b-[1px] flex flex-row text-gray-500 text-[16px] py-3  border-gray-400 justify-between`}>
                      <h1>Tax ({selectedPrice?.gst}%)</h1>
                      <p>₹{selectedPrice?.gstAmount}</p>
                    </div>
                    <div className={`${selectedPrice?.finalTotalPrice ? "" : "hidden"} flex flex-row text-gray-500 text-[16px] py-3  border-gray-400 justify-between`}>
                      <h1>Total</h1>
                      <p>₹{selectedPrice?.finalTotalPrice}</p>
                    </div>
                  </div>

                  <p className={activeSection === "Shipping Details" ? "" : "hidden"}>
                    The shipping is insured and free for all orders within India. The shipment will be carried out for domestic and any product in stock within the next 24 hours after purchase. For international shipping, please get in touch with us at +91 98840 39111. To know more, kindly take a
                    look at our shipping policy here.
                  </p>

                  <p className={activeSection === "Returns/Exchange" ? "" : "hidden"}>
                    10-Day Return Policy: Products can be returned within 10 days of the date of purchase by customers making purchases online. If you are not satisfied with the products and wish to return them for any reason after you receive them, you can send it back to us for an Exchange/refund
                    of your product/money within 10 days. Returns can be made only if you satisfy the conditions given below:
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text and content  */}
          <div className="lg:w-5/12 flex flex-col gap-6 3xl:gap-16 my-0 mx-2 sm:mx-5 3xl:mx-10 m-auto text-lg text-[#663634]">
            {/* Title  */}
            <div className="flex flex-col md:gap-2 gap-0 3xl:gap-4">
              {/* Name And Icon */}

              <h1 className="sm:text-lg mt-2 md:mt-0 text-[17px]  font-bold 4xl:text-3xl  3xl:text-2xl">{product?.name}</h1>

              <div className="flex md:justify-between md:flex-row md:items-start flex-row items-center  justify-between">
                <div className="lg:flex-row lg:justify-between lg:items-start gap-2 flex items-center  justify-between">
                  <div className="flex items-end">
                    <h1 className="font-bold text-xl 3xl:text-2xl 4xl:text-3xl">₹{selectedPrice?.finalTotalPrice}</h1>
                    <h5 className={` ${selectedPrice.finalTotalPrice === selectedPrice.totalPriceBeforeDiscount ? "hidden" : ""} text-gray-400 text-sm font-bold line-through ml-3`}>₹{selectedPrice?.totalPriceBeforeDiscount}</h5>
                  </div>
                </div>
                <div className="flex flex-col-reverse md:flex-row items-center justify-between ">
                  <button onClick={handleScroll} className="border-2 lg:px-4 px-2 3xl:text-xl text-[16px] mx-2 rounded-3xl flex items-center justify-between bg-white">
                    Details <FontAwesomeIcon icon={faArrowDown} className="text-gray-300 pl-2" />
                  </button>
                  <div className="md:flex">
                    <FontAwesomeIcon className="bg-white cursor-pointer text-gray-400 text-sm md:text-lg p-2 3xl:text-2xl rounded-md mr-2 " icon={faHeart} />
                    <FontAwesomeIcon className="text-gray-400 cursor-pointer p-2 text-sm  md:text-lg 3xl:text-2xl rounded-md bg-white" icon={faShareNodes} />
                  </div>
                </div>
              </div>

              <div ref={labelsRef} className="lg:block hidden ">
                <img src="/assets/labels/best-seller.svg" />
              </div>
              {/* Color Selection  */}
              <div>
                <h1 className="mb-2 3xl:text-2xl  4xl:text-3xl">Select Gold Color</h1>
                <div className="flex space-x-4">
                  <label
                    className={`${product?.color1 ? "" : "hidden"} w-4 h-4  3xl:w-8 3xl:h-8 rounded-full flex items-center justify-center cursor-pointer 
                    ${selectedColor === product?.color1?.name ? "ring-2 ring-[#663634]" : "ring-2 ring-white"} transition-all duration-300`}>
                    <input type="radio" name="goldColor" value="color1" checked={selectedColor === product?.color1?.name} onChange={() => setSelectedColor(product?.color1?.name)} className="hidden" />
                    <div className="w-4 h-4 3xl:w-7 3xl:h-7 rounded-full" style={{ backgroundColor: product?.color1?.color_code }}></div>
                  </label>
                  <label
                    className={`${product?.color2 ? "" : "hidden"} w-4 h-4  3xl:w-8 3xl:h-8 rounded-full flex items-center justify-center cursor-pointer 
                    ${selectedColor === product?.color2?.name ? "ring-2 ring-[#663634]" : "ring-2 ring-white"} transition-all duration-300`}>
                    <input type="radio" name="goldColor" value="color2" checked={selectedColor === product?.color2?.name} onChange={() => setSelectedColor(product?.color2?.name)} className="hidden" />
                    <div className="w-4 h-4 3xl:w-7 3xl:h-7 rounded-full" style={{ backgroundColor: product?.color2?.color_code }}></div>
                  </label>
                  <label
                    className={` ${product?.color3 ? "" : "hidden"} w-4 h-4  3xl:w-8 3xl:h-8 rounded-full flex items-center justify-center cursor-pointer 
                    ${selectedColor === product?.color3?.name ? "ring-2 ring-[#663634]" : "ring-2 ring-white"} transition-all duration-300`}>
                    <input type="radio" name="goldColor" value="color3" checked={selectedColor === product?.color3?.name} onChange={() => setSelectedColor(product?.color3?.name)} className="hidden" />
                    <div className="w-4 h-4 3xl:w-7 3xl:h-7 rounded-full" style={{ backgroundColor: product?.color3?.color_code }}></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Customize */}
            <div className="border-[1px] border-[#663634] rounded-3xl font-gothic bg-white text-center flex flex-col gap-4  3xl:gap-10">
              <h1 className="relative my-3 sm:text-2xl text-xl before:content-[''] before:absolute before:h-[3px] before:w-10 before:left-[43%] before:bottom-0 before:bg-gradient-to-r before:from-[#663634] before:to-[#cc6c68] before:rounded-lg">Customize</h1>
              {/* GoldPurity */}
              <div className="flex justify-between mx-2">
                <h3 className=" 3xl:text-2xl sm:text-lg text-[15px]">Select Gold purity</h3>
                <div onClick={handleOpen} className="border-2 flex items-center sm:text-lg text-[14px] justify-between cursor-pointer px-3 w-5/12 py-1 rounded-lg text-center">
                  {selectedOptions.carat}
                  <img src="/assets/arrowDown.png" className="h-5" alt="" />
                </div>
              </div>
              {/* GoldGrade */}
              <div className="flex justify-between mx-2">
                <h3 className="text-start sm:text-lg text-[15px]  3xl:text-2xl">Select Diamond Grade</h3>
                <div onClick={handleOpen} className="border-2 flex items-center sm:text-lg text-[14px] justify-between cursor-pointer px-3 w-5/12 md:py-1 rounded-lg text-center">
                  {selectedOptions.grade}
                  <img src="/assets/arrowDown.png" className="h-5" alt="" />
                </div>
              </div>
              {/* GoldSize */}
              <div className="flex justify-between mx-2">
                <h3 className=" 3xl:text-2xl sm:text-lg text-[15px]">Select Ring Size</h3>
                <div onClick={handleOpen} className="border-2 cursor-pointer flex items-center justify-between px-3 w-5/12 sm:text-lg text-[14px] py-1 rounded-lg text-center">
                  {selectedOptions.size}
                  <img src="/assets/arrowDown.png" className="h-5" alt="" />
                </div>
              </div>
              <div className="flex flex-col  gap-3">
                <h1 className="text-gray-600  3xl:text-2xl">All products are certified</h1>
                <img className="w-auto mx-2 sm:mx-auto h-auto  sm:w-10/12 mb-7" alt="Certified Products" src={"/assets/icon/hallmarkImages.png"} />
              </div>
            </div>

            {/* Chat Section*/}

            <div className="border-[1px] border-[#663634] font-gothic rounded-3xl py-4 bg-white flex flex-col gap-3  3xl:gap-8">
              <div className="flex justify-start items-center  px-2 mt-1">
                {/* Online */}
                <div className="flex items-center space-x-1 md:space-x-2 md:mx-3 mx-0">
                  <span className="sm:w-4  sm:h-4 h-3.5 w-3.5 bg-green-600 inline-block rounded-full"></span>
                  <h2 className="text-sm sm:text-lg 3xl:text-2xl">Online</h2>
                </div>
                {/* Offline */}
                <div className="flex items-center space-x-1  md:space-x-2 md:mx-3 px-3">
                  <span className="sm:w-4  sm:h-4 h-3.5 w-3.5 bg-gray-400 inline-block rounded-full"></span>
                  <h2 className="text-sm sm:text-lg 3xl:text-2xl">Offline</h2>
                </div>
                {/* Message */}
                <button className="sm:text-sm text-[12px] border-2 border-[#e3dcdc] sm:px-5  3xl:text-2xl px-1.5  sm:py-1 rounded-3xl hover:bg-[#7e4b4a] hover:text-white">Leave a message</button>
              </div>
              <button className="flex items-center justify-center sm:text-xl hover:bg-[#663634] transition-all duration-500 ease-in-out group border-2 py-2 border-[#663634] mx-4 rounded-lg">
                <FontAwesomeIcon icon={faWhatsapp} className="text-gray-500 transition-all duration-500 ease-in-out group-hover:text-green-600 mx-3 text-2xl" />
                <h1 className="text-gray-500 group-hover:text-gray-100 transition-all duration-500 ease-in-out  3xl:text-2xl">CHAT WITH EXPERTS</h1>
              </button>

              <div className="text-center text-sm leading-5  3xl:text-xl px-2">Seeking the perfect jewelry to complement your style? Our Experts are here to assist you with personalized guidance.</div>
            </div>

            {/* Product Story Section*/}
            <div className="border-2 border-white flex flex-col gap-7  3xl:gap-7 justify-center font-gothic items-center text-center md:py-4 py-2">
              <h1 className=" relative inline-block border-b-[1px] border-[#663634]  3xl:text-2xl">Our Product Story</h1>
              <p className=" 3xl:text-2xl leading-6 text-[16px] px-5">{product?.description}</p>
            </div>

            {/* Recommonded for  */}
            <div className="border p-2 border-[#663634] font-gothic ">
              <div className="flex flex-col justify-center items-center">
                <h1 className="mb-3 4xl:text-3xl border-b-[1px] border-[#663634]  3xl:text-2xl">Recommended For</h1>
              </div>
              <div className="grid grid-cols-2 md:gap-2 gap-4 3xl:gap-10 text-[#474545] text-sm">
                {product?.recommendedFor?.map((obj) => (
                  <div key={obj?._id} className="flex items-center gap-2 3xl:text-3xl md:text-lg text-sm text-[#663634]">
                    <img className="aspect-square md:w-14 w-10" src={obj?.image?.url || null} alt="Classic" />
                    <p>{obj?.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Section*/}
            <div className="font-gothic flex flex-col sm:gap-3 gap-7  3xl:gap-5">
              <h1 className="relative text-center text-2xl before:content-[''] before:absolute before:h-[3px] before:w-10  before:left-[44%] before:-bottom-1 before:bg-gradient-to-r before:from-[#663634] before:to-[#cc6c68] before:rounded-lg  3xl:text-4xl">Pickup</h1>

              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between ">
                  <h2 className="text-sm md:text-lg  3xl:text-2xl">Expected Delivery Date</h2>
                  <h2 className=" 3xl:text-2xl text-sm md:text-lg">Locate me</h2>
                </div>
                <form className="flex border-[1px] border-[#663634] rounded-lg bg-white">
                  <input className="py-3  3xl:text-2xl px-2 w-full outline-none  rounded-lg text-sm" placeholder="Enter Pincode" />
                  <button className="bg-[#663634] text-sm text-white px-7 sm:text-lg font-bold sm:px-10 py-1 rounded-md  3xl:text-2xl ">Submit</button>
                </form>
              </div>

              <div className="bg-white flex sm:py-4 py-5 text-sm px-5 border-[1px] border-[#663634] rounded-2xl">
                <FontAwesomeIcon className="mr-5  3xl:text-2xl" icon={faTruck} />
                <div className="flex flex-col gap-3 ">
                  <h1 className=" 3xl:text-2xl">Free Shipping & Insurance</h1>
                  <h1 className="3xl:text-xl">Dispatch Status: 24-48 hours/30days </h1>
                  {/* <h1 className="underline  3xl:text-2xl">T&C Apply</h1>         */}
                </div>
              </div>
            </div>

            <div>
              {/* Placeholder */}
              <div ref={placeholderRef} className="w-full h-1"></div>
              <div className="">
                {/* Button Section */}
                <div ref={buttonRef} className="flex bottom-5 z-[100]   left-2 lg:left-[63%]  w-[95%] shadow-[8px_15px_15px_rgba(0,0,0,0.3)]  border-4 border-white rounded-2xl text-white">
                  <button onClick={handleCart} className="border-r-2 w-1/2 border-white  3xl:text-2xl bg-[#663634] rounded-l-xl hover:bg-white hover:text-black transition-all duration-500 ease-in-out group">
                    <FontAwesomeIcon icon={faLock} className="font-bold mr-2 group-hover:text-yellow-400" />
                    Add to Cart
                  </button>
                  <button className="text-xs sm:text-sm  w-1/2 flex items-center justify-center transition-all duration-500 ease-in-out bg-[#663634] hover:text-black rounded-r-xl hover:bg-[#eee0e3] 3xl:text-2xl py-1.5 group">
                    <FontAwesomeIcon icon={faVideo} className="text-lg mx-3 transition-all duration-500 group-hover:text-green-500" />
                    Schedule Video Call <br /> BOOK NOW
                  </button>
                </div>
              </div>
            </div>
            {/* Brand Carousel */}
            <div className="text-center mx-auto flex flex-col gap-5 font-gothic">
              <h1 className="text-2xl  3xl:text-4xl">Brand Advantage</h1>
              <EmblaCarousel slides={slides} />
            </div>

            {/* DropDown Section   */}
            <div className="lg:hidden flex flex-col gap-5">
              {/* Prpduct Details */}
              <div ref={productDetailsSectionMobile} className="border px-3 py-2 4xl:text-4xl border-[#663634] rounded-lg flex flex-col">
                <button onClick={() => setOpenDetails(!openDetails)} className="flex items-center justify-between w-full">
                  Product details
                  <span className={`transition ease-in-out duration-500 ${openDetails ? "" : "rotate-180"}`}>
                    <MdKeyboardArrowUp size={25} className="text-gray-500" />
                  </span>
                </button>

                <div className={`transition-all duration-500 overflow-hidden ease-in-out ${openDetails ? "max-h-[300px]" : "max-h-0"}`}>
                  <div>
                    <div className={`  border-b-[1px] flex flex-row text-gray-500 text-[16px] py-1.5  border-gray-400 justify-between`}>
                      <h1>Net Gold Weight:</h1>
                      <p>{selectedPrice?.total_gold_weight}</p>
                    </div>
                    <div className={`  border-b-[1px] flex flex-row text-gray-500 text-[16px] py-1.5  border-gray-400 justify-between`}>
                      <h1>Total Diamond Weight:</h1>
                      <p>{selectedPrice?.totalDiamondWeight}</p>
                    </div>
                    <div className={` border-b-[1px]  flex flex-row text-gray-500 text-[16px] py-1.5  border-gray-400 justify-between`}>
                      <h1>Gemstone Weight:</h1>
                      <p>{product?.gemstone_weight}</p>
                    </div>
                    <div className={`  border-b-[1px] flex flex-row text-gray-500 text-[16px] py-1.5  border-gray-400 justify-between`}>
                      <h1>Gemstone Name:</h1>
                      <p>{product?.gemstone_name}</p>
                    </div>
                    <div className={`  border-b-[1px] flex flex-row text-gray-500 text-[16px] py-1.5  border-gray-400 justify-between`}>
                      <h1>Collection:</h1>
                      <p>{product?.collection?.name}</p>
                    </div>
                    <div className={` flex flex-row text-gray-500 text-[16px] py-1.5  border-gray-400 justify-between`}>
                      <h1>Style:</h1>
                      <p>{product?.style?.name}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Price Breakup */}
              <div className="border px-3 py-2 4xl:text-4xl border-[#663634] rounded-lg flex flex-col">
                <button onClick={() => setPriceBreakup(!openPriceBreakup)} className="flex items-center justify-between w-full">
                  Price Breakup
                  <span className={` tranal ease-in-out duration-500 ${openPriceBreakup ? "" : "rotate-180"}`}>
                    <MdKeyboardArrowUp size={25} className="text-gray-500" />
                  </span>
                </button>

                <div className={`transition-all duration-500 overflow-hidden ease-in-out ${openPriceBreakup ? "max-h-[500px]" : "max-h-0"}`}>
                  <div className={`${selectedPrice?.goldprice ? "" : "hidden"} border-b-[1px] flex flex-row text-gray-500 text-[16px] py-3  border-gray-400 justify-between`}>
                    <h1>
                      {selectedPrice?.carat} {selectedColor} ({product?.total_gold_weight}g)
                    </h1>
                    <p className="flex gap-2">
                      <span className={selectedPrice?.gold_discount ? "" : "hidden"}>₹{selectedPrice?.goldPriceAfterDiscount}</span> <span className={selectedPrice?.gold_discount ? " text-nowrap" : "hidden"}> ({selectedPrice?.gold_discount}% off) </span>{" "}
                      <span className={selectedPrice?.gold_discount ? " line-through" : ""}>₹{selectedPrice?.goldprice}</span>
                    </p>
                  </div>
                  <div className={`${selectedPrice?.diamondprice ? "" : "hidden"} border-b-[1px] flex flex-row text-gray-500 text-[16px] py-3  border-gray-400 justify-between`}>
                    <h1>
                      {selectedPrice?.grade} Diamond ({selectedPrice?.totalDiamondWeight}ct)
                    </h1>
                    <p className="flex gap-2">
                      <span className={selectedPrice?.diamond_discount ? "" : "hidden"}>₹{selectedPrice?.diamondPriceAfterDiscount}</span> <span className={selectedPrice?.diamond_discount ? "text-nowrap" : "hidden"}> ({selectedPrice?.diamond_discount}% off) </span>{" "}
                      <span className={selectedPrice?.diamond_discount ? "line-through" : ""}>₹{selectedPrice?.diamondprice}</span>
                    </p>
                  </div>
                  <div className={`${product.gemstone_price ? "" : "hidden"} border-b-[1px] flex flex-row text-gray-500 text-[16px] py-3  border-gray-400 justify-between`}>
                    <h1>
                      Gemstone({selectedPrice.gemstone_weight}ct) {product?.gemstone_name}
                    </h1>
                    <p>₹{product?.gemstone_price}</p>
                  </div>
                  <div className={`${selectedPrice?.makingCharge ? "" : "hidden"} border-b-[1px] flex flex-row text-gray-500 text-[16px] py-3  border-gray-400 justify-between`}>
                    <h1>Making Charge</h1>
                    <p>₹{selectedPrice?.makingCharge}</p>
                  </div>
                  <div className={`${selectedPrice?.wastageCharge ? "" : "hidden"} border-b-[1px] flex flex-row text-gray-500 text-[16px] py-3  border-gray-400 justify-between`}>
                    <h1>Wastage Charge</h1>
                    <p>₹{selectedPrice?.wastageCharge}</p>
                  </div>
                  <div className={`${selectedPrice?.subTotal ? "" : "hidden"} border-b-[1px] flex flex-row text-gray-500 text-[16px] py-3  border-gray-400 justify-between`}>
                    <h1>SubTotal</h1>
                    <p className="flex gap-2">
                      <span className={selectedPrice?.totalAfterDiscount ? "" : "hidden"}>₹{selectedPrice?.totalAfterDiscount}</span> <span className={selectedPrice?.totalAfterDiscount ? "text-nowrap" : "hidden"}> ({selectedPrice?.discount_on_total}% off) </span>{" "}
                      <span className={selectedPrice?.discount_on_total ? "line-through" : ""}>₹{selectedPrice?.subTotal}</span>
                    </p>
                  </div>
                  <div className={`${selectedPrice?.gstAmount ? "" : "hidden"} border-b-[1px] flex flex-row text-gray-500 text-[16px] py-3  border-gray-400 justify-between`}>
                    <h1>Tax ({selectedPrice?.gst}%)</h1>
                    <p>₹{selectedPrice?.gstAmount}</p>
                  </div>
                  <div className={`${selectedPrice?.finalTotalPrice ? "" : "hidden"} flex flex-row text-gray-500 text-[16px] py-3  border-gray-400 justify-between`}>
                    <h1>Total</h1>
                    <p>₹{selectedPrice?.finalTotalPrice}</p>
                  </div>
                </div>
              </div>

              {/* Shipping */}
              <div className="border px-3 py-1.5 4xl:text-4xl border-[#663634] rounded-lg flex flex-col">
                <button onClick={() => setOpenShipping(!openShipping)} className="flex items-center 4xl:text-4xl justify-between w-full">
                  Shipping details
                  <span className={` transition ease-in-out duration-500 ${openShipping ? "" : " rotate-180"}`}>
                    <MdKeyboardArrowUp size={25} className="text-gray-500" />
                  </span>
                </button>
                <p className={`mt-2 text-sm leading-6 transition-all duration-500 overflow-hidden ease-in-out 4xl:text-3xl ${openShipping ? "max-h-[300px]" : "max-h-0"}`}>
                  The shipping is insured and free for all orders within India. The shipment will be carried out for domenstic and any product in stock within the next 24 hours after purchase. For international shipping, please get in touch with us at
                  <span
                    className="border-b border-[#663634] cursor-pointer
            ">
                    +91 98844039111
                  </span>
                  . To know more, kindly take a look at our shipping policy here.
                </p>
              </div>
              {/* Return/Exchange */}
              <div className="border px-3 py-1.5 4xl:text-4xl border-[#663634] rounded-lg flex flex-col">
                <button onClick={() => setOpenReturn(!openReturn)} className="flex items-center 4xl:text-4xl justify-between w-full">
                  Returns/Exchange
                  <span className={` transition ease-in-out duration-500 ${openReturn ? "" : " rotate-180"}`}>
                    <MdKeyboardArrowUp size={25} className="text-gray-500" />
                  </span>
                </button>
                <div className={`mt-2 text-sm leading-5 transition-all duration-500 overflow-hidden ease-in-out 4xl:text-3xl  ${openReturn ? "max-h-[300px]" : "max-h-0 "}`}>
                  <p>10-Day Return Policy: Products can be returned within 10 days of the date of purchase by customers making purchases online.</p>
                  <p className="mt-2">
                    {" "}
                    If you are not satisfied with the products and wish to return them for any reason after you receive them, you can send it back to us for an Exchange/refund of your product/money within 10 days. Returns can be made only if you satisfy the conditions given below:
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <CustomizeSideBar grades={grades} carats={carats} price={selectedPrice} sidebarMenu={sidebarMenu} selectedColor={selectedColor} onConfirm={handleSelection} />
    </div>
  );
};

export default Productdetails;
