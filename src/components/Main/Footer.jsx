'use client'
import React, { useState } from "react";
import Link from "next/link";
import TermsAndConditions from '../../app/gulz/Terms-and-Conditions';
import PrivacyPolicy from '../../app/gulz/Privacy-Policy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebookF, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { usePathname } from "next/navigation";

const Footer = () => {
  const [showTerms, setShowTerms] = useState(false);
  const pathName = usePathname()
  const [showPrivacy, setShowPrivacy] = useState(false);
  const date = new Date()
  
  const bgChange = ['/','/fazza','/festara']
  
  const imageMap = {
    "/": '/assets/homeBlack.png',
    "/fazza": '/assets/Fazza-logo.svg',
    "/festara": '/assets/Festara-Logo.svg',
  }

  const imageSrc = imageMap[pathName] || "/assets/eshop/Gulz-brown.svg"; 

  return (
    <div className={`${bgChange.includes(pathName)?'bg-white border-top border-[1px] border-black text-black':'bg-[#F7ECEB] text-[#663634]'} font-gothic w-full   pt-10 `}>
      <div className="min-h-[35vh] w-[80%] lg:w-[85vw] mx-auto flex flex-col py-3 border-b border-amber-950">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 md:px-8 lg:px-0 md:space-x-10">
          <div className="flex justify-center lg:justify-start items-center mb-1 md:mb-0">
            <div className="flex justify-center items-center gap-2 ">
              <div className=" h-16 sm:w-28 3xl:h-20 lg:w-24 pr-2">
                <img src={imageSrc} alt="logo" className="w-full h-full object-contain" />
              </div>
              <Link href="/" className=" text-base sm:text-lg 3xl:text-3xl lg:text-xl xl:text-lg pl-3 border-l border-amber-950 ">
                QUEEN OF HEARTS
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center md:items-start ">
            <h1 className="text-lg sm:text-xl 3xl:text-2xl md:text-[1.1rem] text-[#4F2426] tracking-normal sm:tracking-widest font-semibold mb-2">
              Contact Us
              <span className="flex border-b-[1px] border-[#58282a] w-10 mt-1"></span>
            </h1>
            <div className="flex flex-col  items-center md:items-start gap-5">
              <div className="flex gap-1 items-center">
                <FontAwesomeIcon icon={faPhone} className="text-sm 3xl:text-2xl  sm:text-base " />
                <p className=" text-sm sm:text-[0.9rem] 3xl:text-2xl "><a href="tel:+919884039111">+91 9884039111</a></p>
              </div>
              <div className="flex gap-1 items-center">
                <FontAwesomeIcon icon={faEnvelope} className="text-sm  3xl:text-xl  sm:text-base " />
                <p className=" text-sm sm:text-[0.9rem] 3xl:text-xl "> <a href='mailto:admin@khwaahish.com'>admin@khwaahish.com</a></p>
              </div>
              <div className="flex gap-2 mt-2">
                <Link href="https://www.instagram.com/khwaahishdiamonds/?fbclid=IwAR0_UCtUEmZOzJTlxbIS5rWrWCF-1oDDlczHZU8dTUAOaVEHX2g4kbwco_A" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className="text-base 3xl:text-3xl hover:scale-105  sm:text-2xl  px-1 cursor-pointer hover:opacity-80" />
                </Link>
                <Link href="https://www.facebook.com/khwaahishdiamondschennai" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebookF} className="text-base sm:text-2xl hover:scale-105  3xl:text-3xl  px-1 cursor-pointer hover:opacity-80" />
                </Link>
                <Link href="https://www.youtube.com/channel/UCLI3kQ273vEJqY64yJ9rzDQ" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faYoutube} className="text-base sm:text-2xl hover:scale-105  3xl:text-3xl px-1 cursor-pointer hover:opacity-80" />
                </Link>
                <Link href="https://api.whatsapp.com/send?phone=919884039111&text=Hi%20Khwaahish%20Team,%20I%20am%20interested%20in%20visiting%20the%20store%20on%20an%20appointment%20basis.%20Please%20get%20in%20touch%20with%20me%20at%20the%20earliest." target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-base sm:text-2xl hover:scale-105  3xl:text-3xl px-1 cursor-pointer hover:opacity-80" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 items-center lg:items-start">
            <h1 className="text-lg sm:text-xl md:text-[1.1rem] text-[#4F2426] 3xl:text-2xl tracking-normal sm:tracking-widest font-semibold mb-2">
              Store Address
              <span className="flex border-b-[1px] border-[#58282a] w-10 mt-1"></span>
            </h1>
            <div className="flex flex-col pt-4 md:items-start items-center gap-4">
              <div className="md:flex text-center gap-1 items-center">
              <a href="https://www.google.com/maps/search/?api=1&query=Khwaahish+Jewellery" className="md:flex text-center gap-1 items-center" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLocationDot} className="text-lg 3xl:text-2xl sm:text-xl " />
                <p className=" text-sm sm:text-[0.9rem] font-semibold 3xl:text-xl">Khwaahish Diamonds</p>
                </a>
              </div>
              <p className=" text-sm sm:text-[0.89rem] text-center 3xl:text-xl sm:text-center md:text-left lg:text-left px-7 lg:px-6 tracking-widest leading-2">
                No: 53/2, C.P. Ramaswamy Road, Abiramapuram,Chennai, Tamil Nadu
                600018
              </p>
              <Link href="https://www.google.com/search?q=khwaahish%20diamonds" target="_blank" rel="noopener noreferrer" className=" text-sm sm:text-[0.95rem] cursor-pointer border-b-transparent 3xl:text-xl transition-all duration-300 hover:border-b-[1px] hover:border-[#663634] lg:px-6">Show in Google Maps</Link>
            </div>
          </div>
          <div className="flex flex-col gap-1 items-center lg:items-start">
            <h1 className="text-lg sm:text-xl md:text-[1.1rem] 3xl:text-2xl text-[#4F2426] tracking-normal sm:tracking-widest font-semibold mb-2">
              Quick Links
              <span className="flex border-b-[1px] border-[#58282a] w-10 mt-1"></span>
            </h1>
            <div className="flex flex-col items-center md:items-start gap-3">
              <p 
                className=" text-sm sm:text-[0.9rem] 3xl:text-xl cursor-pointer hover:underline"
                onClick={() => setShowPrivacy(true)}
              >
                Privacy Policy
              </p>
              <p 
                className=" text-sm sm:text-[0.9rem]  3xl:text-xl cursor-pointer hover:underline"
                onClick={() => setShowTerms(true)}
              >
                Terms & Conditions
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className = "w-[85%]  mx-auto min-h-[15vh] sm:h-[20vh] flex flex-col md:my-6 lg:my-0 lg:flex-row justify-center sm:justify-between items-center gap-4 sm:gap-0 py-4">
        <div className="h-full  w-full sm:w-7/12 lg:w-[360px] 3xl:w-1/4 flex justify-center sm:justify-start">
          <img
            className="w-full max-w-[250px] sm:max-w-none h-full object-contain"
            src="/assets/eshop/payment-logos.avif"
            alt="Payment methods"
          />
        </div>
        <p className=" font-light text-sm sm:text-base 3xl:text-xl 4xl:text-3xl text-center sm:text-right">
          © <span>{date.getFullYear()}</span>| HTML Sitemap Designed for Khwaahish, All Rights Reserved
        </p>
      </div>
      {showTerms && <TermsAndConditions onClose={() => setShowTerms(false)} />}
      {showPrivacy && <PrivacyPolicy onClose={() => setShowPrivacy(false)} />}
    </div>
  );
};

export default Footer;
