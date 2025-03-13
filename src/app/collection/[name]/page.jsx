"use client";

import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import CardsOne from "../../../components/Product/CardsOne";
import Image from "next/image";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import api from "@/utils/api";
import getPrices from "@/utils/getPrices";
import { SyncLoader } from "react-spinners";

const page = () => {
  //  Menu bars
  const [isCategoryOpen, setCategoryOpen] = useState(false);
  const [isPriceOpen, setPriceOpen] = useState(false);
  const [isRecommendationOpen, setRecommendationOpen] = useState(false);
  const [newArrival, setNewArrival] = useState(false);
  const [trending, setTrending] = useState(false);
  const [bestSeller, setBestSeller] = useState(false);
  const [isWhatsNewOpen, setWhatsNewOpen] = useState(false);
  const [collectionData, setCollectionData] = useState({});
  const [recommendedList, setRecommendedList] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [productList, setProductList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const { name: collectionName } = useParams();
  const name = collectionName.replaceAll("-", " ");
  const params = useSearchParams();
  const recommendedParams = params.get("recommended")?.split(",") || [];

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const itemPerPage = 4;

  const router = useRouter();

  const paramsString = new URLSearchParams(params.toString());

  const [priceFilter, setPriceFilter] = useState("LowToHigh");
  const [categoryId, setCategoryId] = useState("");

  // Refs to track clicks outside the menu
  const categoryRef = useRef(null);
  const priceRef = useRef(null);
  const recommendationRef = useRef(null);
  const whatsNewRef = useRef(null);
  const loadingRef = useRef(loading);
  const hasMoreItem = useRef(productList.length < totalRecords ? true : false);

  // Handle filter selection
  const handleFilterClick = (type, value) => {
    value = value.toLowerCase();
    if (type === "recommended") {
      let currentValues = paramsString.get(type)?.split(",") || [];
      if (currentValues.includes(value)) {
        currentValues = currentValues.filter((v) => v !== value);
      } else {
        currentValues.push(value);
      }
      if (currentValues.length > 0) {
        paramsString.set(type, currentValues.join(","));
      } else {
        paramsString.delete(type);
      }
      router.push(`?${paramsString.toString()}`, { scroll: false });
    }
  };

  const getCollection = async () => {
    if (!name) return;
    try {
      const res = await api.get(`/store/eshop/collections/get-collection-by-name/${name}`);
      const data = res.data;
      setCollectionData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProduct = async () => {
    if (!collectionData?._id || loading) return;
    setLoading(true);
    let recommendedIds = [];
    recommendedList.map((recommended) => {
      if (recommendedParams.includes(recommended?.name.toLowerCase())) {
        if (!recommendedIds.includes(recommended._id)) {
          recommendedIds.push(recommended._id);
        }
      }
    });
    try {
      const res = await api.post("/store/eshop/products/get-products", { collection: collectionData._id,category:categoryId, recommendedId: recommendedIds, trending: trending, best_seller: bestSeller, new_arrival: newArrival, page: page, limit: itemPerPage });
      const data = await res.data;
      const updatedData = data?.products?.map((product) => ({
        ...product,
        price: getPrices(product)[0]?.finalTotalPrice || 0,
      }));
      const sortedProducts = [...updatedData].sort((a, b) => (priceFilter === "HighToLow" ? (b.price || 0) - (a.price || 0) : (a.price || 0) - (b.price || 0)));
      if (page === 1) {
        setProductList(sortedProducts);
      } else {
        setProductList([...productList, ...sortedProducts]);
      }
      setCategoryList(data?.categories);
      setRecommendedList(data?.recommendeds);
      setTotalRecords(data?.totalRecords);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  // Price menu
  const handleCategoryClick = () => {
    setCategoryOpen(true);
    setPriceOpen(false);
    setRecommendationOpen(false);
    setWhatsNewOpen(false);
  };

  // Price menu
  const handlePriceClick = () => {
    setPriceOpen(true);
    setCategoryOpen(false);
    setRecommendationOpen(false);
    setWhatsNewOpen(false);
  };

  // Recommendation menu
  const handleRecommendationClick = () => {
    setRecommendationOpen(true);
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
    setNewArrival(false);
    setTrending(false);
    setBestSeller(false);
    setCategoryId('')
    router.push("?", { scroll: false });
  };

  const handleInfiniteScroll = () => {
    const footer = document.getElementById("footerHeight");
    const footerHeight = footer ? footer.offsetHeight : 0;

    const scrollPosition = window.innerHeight + document.documentElement.scrollTop;
    const scrollThreshold = document.documentElement.scrollHeight - footerHeight;

    if (scrollPosition >= scrollThreshold && !loadingRef.current && hasMoreItem.current) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    getCollection();
  }, [name]);
  useEffect(() => {
    setPage(1);
    getProduct();
  }, [collectionData, recommendedParams.length,categoryId, newArrival, bestSeller, trending, page]);
  useEffect(() => {
    const updatedProductList = productList.map((product) => ({
      ...product,
      price: getPrices(product)[0]?.finalTotalPrice || 0,
    }));
    const sortedProducts = [...updatedProductList].sort((a, b) => (priceFilter === "HighToLow" ? (b.price || 0) - (a.price || 0) : (a.price || 0) - (b.price || 0)));

    setProductList(sortedProducts);
  }, [priceFilter]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      setTimeout(() => {
        if (categoryRef.current && !categoryRef.current.contains(event.target)) {
          setCategoryOpen(false);
        }
        if (priceRef.current && !priceRef.current.contains(event.target)) {
          setPriceOpen(false);
        }
        if (recommendationRef.current && !recommendationRef.current.contains(event.target)) {
          setRecommendationOpen(false);
        }
        if (whatsNewRef.current && !whatsNewRef.current.contains(event.target)) {
          setWhatsNewOpen(false);
        }
      }, 100);
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleInfiniteScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleInfiniteScroll);
    };
  }, []);
  useEffect(() => {
    loadingRef.current = loading;
    hasMoreItem.current = productList.length < totalRecords ? true : false;
  }, [loading, hasMoreItem]);

  return (
    <div className="pb-20  h-full w-full px-5 sm:px-10 lg:px-0    bg-[#f7eceb] font-gothic">
      <div className=" pt-10   lg:px-20">
        <div className="flex  flex-col md:flex-row justify-between items-center md:pt-28 py:20 pt-32 mb-10">
          {/* Left Side - Image */}
          <div className="right w-full md:w-1/2 flex justify-center  md:mt-5">
            <Image src={collectionData?.image?.url || "/"} alt={collectionData?.name || ""} width={1200} height={1200} priority={true} className="w-full h-auto rounded-lg object-cover md:w-[80%] md:max-w-full" />
          </div>

          {/* Right Side - Text Content */}
          <div className="left   w-full 4xl:w-[40%] md:w-1/2 flex flex-col justify-center text-center md:text-left mb-5">
            <h1 className="text-xl 4xl:w-full lg:w-[80%] text-center sm:text-2xl md:text-3xl 4xl:text-5xl 3xl:text-4xl text-[#663634] uppercase tracking-[0.32em]">{collectionData?.name}</h1>
            <p className=" text-justify mt-5 text-[14px] lg:text-[17px] text-gray-600 3xl:text-2xl 3xl:leading-[1.5] 4xl:leading-[1.6] 4xl:w-full 4xl:text-3xl w-full lg:w-[80%] mx-auto lg:mx-0 lg:leading-[1.5] leading-[2] tracking-[0.04em]">{collectionData?.description}</p>
          </div>
        </div>
      </div>

      {/* Below Section (Category, Price, etc.) */}
      <div className="flex items-center w-[85%] m-auto gap-5 text-[#663634]">
        {/* Price with additional options when clicked */}
        <h4 onClick={handleCategoryClick} ref={categoryRef} className={`flex items-center justify-center text-[13px] 3xl:text-xl cursor-pointer hover:font-bold ${isPriceOpen ? "font-bold" : ""}`}>
          Category <MdKeyboardArrowDown />
        </h4>
        {isCategoryOpen && (
          <div className="absolute flex mt-20 gap-5 bg-white p-2 text-[13px] px-5 shadow-md cursor-pointer">
            {categoryList.map((category) => (
              <p
                key={category?._id}
                onClick={() => {
                  categoryId === category?._id ? setCategoryId("") : setCategoryId(category?._id);
                }}
                className={`${categoryId === category?._id ? "font-bold" : ""}`}>
                {category?.name}
              </p>
            ))}
          </div>
        )}

        {/* Price with additional options when clicked */}
        <h4 onClick={handlePriceClick} ref={priceRef} className={`flex items-center justify-center text-[13px] 3xl:text-xl cursor-pointer hover:font-bold ${isPriceOpen ? "font-bold" : ""}`}>
          Price <MdKeyboardArrowDown />
        </h4>
        {isPriceOpen && (
          <div className="absolute flex mt-20 gap-5 bg-white p-2 text-[13px] px-5 shadow-md cursor-pointer">
            <p
              onClick={() => {
                setPriceFilter("LowToHigh");
              }}
              className={`${priceFilter === "LowToHigh" ? "font-bold" : ""}`}>
              Low To High
            </p>
            <p
              onClick={() => {
                setPriceFilter("HighToLow");
              }}
              className={priceFilter === "HighToLow" ? "font-bold" : ""}>
              High To Low
            </p>
          </div>
        )}

        {/* Recommendation with additional options when clicked */}
        <h4 onClick={handleRecommendationClick} className={`flex items-center justify-center text-[13px] 3xl:text-xl cursor-pointer hover:font-bold ${isRecommendationOpen ? "font-bold" : ""}`} ref={recommendationRef}>
          Recommendation <MdKeyboardArrowDown />
        </h4>
        {isRecommendationOpen && (
          <div className="absolute flex mt-20 gap-5 bg-white p-2 text-[13px] px-5 shadow-md cursor-pointer">
            {recommendedList.map((recommended) => (
              <p onClick={() => handleFilterClick("recommended", recommended?.name)} key={recommended?._id} className={recommendedParams.includes(recommended?.name?.toLowerCase()) ? "font-bold" : ""}>
                {recommended?.name}
              </p>
            ))}
          </div>
        )}

        {/* What's New with additional options when clicked */}
        <h4 onClick={handleWhatsNewClick} className={`flex items-center justify-center text-[13px] 3xl:text-xl cursor-pointer hover:font-bold ${isWhatsNewOpen ? "font-bold" : ""}`} ref={whatsNewRef}>
          What's New <MdKeyboardArrowDown />
        </h4>
        {isWhatsNewOpen && (
          <div className="absolute flex mt-20 gap-5 bg-white p-2 text-[13px] px-5 shadow-md cursor-pointer">
            <p
              onClick={() => {
                setNewArrival(!newArrival);
              }}
              className={newArrival ? "font-bold" : ""}>
              New Arrival
            </p>
            <p
              onClick={() => {
                setTrending(!trending);
              }}
              className={trending ? "font-bold" : ""}>
              Trending
            </p>
            <p
              onClick={() => {
                setBestSeller(!bestSeller);
              }}
              className={bestSeller ? "font-bold" : ""}>
              Best Seller
            </p>
          </div>
        )}

        {/* Clear Button */}
        <h4 className="flex items-center justify-center text-[13px] 3xl:text-xl cursor-pointer hover:font-bold" onClick={handleClick}>
          <RxCross2 />
          Clear
        </h4>

        {/* Right Side Products Counts */}
        <div className="flex items-center text-[13px] ml-0 3xl:text-xl md:ml-auto text-left md:text-right">
          <h4>Showing {totalRecords} Products</h4>
        </div>
      </div>

      <div className=" w-[85%] m-auto">
        {/* Cards section 1 */}
        <div className=" w-[95%] mx-auto mt-16">
          <div className={` ${recommendedParams.length > 0 || categoryId || trending || bestSeller || newArrival ? "" : "hidden"} flex gap-2 border text-[13px] 3xl:text-xl w-fit px-2 text-[#663634] border-[#663634]`}>
            Showing Result For:
            {categoryList.map((category) => {
              if (categoryId === category._id) {
                return (
                  <p key={category?._id}>
                    {category?.name}
                    <span
                      onClick={() => {
                        setCategoryId('')
                      }}
                      className="cursor-pointer hover:font-semibold ml-1">
                      X
                    </span>
                  </p>
                );
              }
              return null; 
            })}
            {recommendedParams.map((recommended, i) => (
              <p className={recommended ? "" : "hidden"} key={i}>
                {recommended}{" "}
                <span
                  onClick={() => {
                    handleFilterClick("recommended", recommended);
                  }}
                  className="cursor-pointer hover:font-semibold ml-1">
                  X
                </span>
              </p>
            ))}
            <p className={newArrival ? "" : "hidden"}>
              New Arrival{" "}
              <span
                onClick={() => {
                  setNewArrival(false);
                }}
                className="cursor-pointer hover:font-semibold ml-1">
                X
              </span>
            </p>
            <p className={trending ? "" : "hidden"}>
              Trending{" "}
              <span
                onClick={() => {
                  setTrending(false);
                }}
                className="cursor-pointer hover:font-semibold ml-1">
                X
              </span>
            </p>
            <p className={bestSeller ? "" : "hidden"}>
              Best Seller
              <span
                onClick={() => {
                  setBestSeller(false);
                }}
                className="cursor-pointer hover:font-semibold ml-1">
                X
              </span>
            </p>
          </div>
          <div className="m-auto relative w-[85vw] ">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {productList.map((product, i) => (
                <CardsOne key={i} product={product} />
              ))}
            </div>
            <p className="flex items-center justify-center w-full mt-5">{loading && <SyncLoader color="#663634" />}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
