'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { CHECKOUT_ASSETS } from './data';

const YourOrder = ({ formData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [shipping, setShipping] = useState('Enter your address to view shipping options');

  // Extract values with default empty strings to ensure consistent types
  const { country = '', state = '', pincode = '' } = formData || {};

  useEffect(() => {
    // Trigger loading state on any change to these fields
    setIsLoading(true);
    setShipping('');
    
    const timer = setTimeout(() => {
      if (country && state && formData?.pincode) {
        setShipping('Free shipping');
      } else if (country || state || formData?.pincode) {
        setShipping('There are no shipping options available. Please ensure that your address has been entered correctly, or contact us if you need any help.');
      } else {
        setShipping('Enter your address to view shipping options');
      }
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [country, state, pincode, formData?.street]);

  return (
    <>
      <h1 className="text-[#4F2426] text-lg md:text-xl tracking-[0.2em] mb-2 font-semibold py-2 text-center">
        YOUR ORDER
      </h1>

      <div className="border border-white p-4 lg:w-[40vw] xl:w-full md:w-[40vw] relative">
        {isLoading && (
          <div className="absolute inset-0 bg-white/50 z-10" />
        )}
        
        {/* Headers */}
        <div className="flex justify-between pb-2 px-4">
          <span className="text-black text-[1.1rem]">PRODUCT</span>
          <span className="text-black text-[1.1rem]">SUBTOTAL</span>
        </div>

        {/* Product Details */}
        <div className="py-4">
          <div className="flex flex-col">
            <div className="flex items-start gap-4">
              <div className="relative w-[90px] h-[90px]">
              <Image 
                src={CHECKOUT_ASSETS.SOLITAIRE} 
                alt="Solitaire Ring" 
                fill
                className="object-cover"
              />
              </div>
             
            </div>
            
            <div className="space-y-2 flex justify-between items-start">
              <div >
                <p className="font-medium text-[0.8rem] py-2 text-gray-700 max-w-[170px] ">0.25 ct Elevated Glory Solitaire Diamond Ring × 1</p>
                <div className="flex justify-between items-center">
                <div className="space-y-1 text-sm text-gray-600 px-7 mr-[5vw] sm:mr-64 lg:mr-0 xl:mr-0 md:mr-0">
                  <p className="font-semibold text-base">Select Gold Color: </p><p>Rose gold</p>
                  <p className="font-semibold text-base">Select Gold Purity: </p><p>18K</p>
                  <p className="font-semibold text-base">Select Diamond Grade: </p><p>SI-GH</p>
                  <p className="font-semibold text-base">Select Ring Size:</p><p> 12</p>
                </div>
                <span className="text-gray-700 whitespace-nowrap text-[0.9rem] ml-[25vw] md:ml-16 lg:ml-36 xl:ml-64">₹ 86,011</span>
                </div>
              </div>
             
            </div>
            
          </div>
        </div>

        {/* Totals */}
        <div className="space-y-4 pt-4 px-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-800">SUBTOTAL</span>
            <span className="text-gray-700 text-[0.9rem]">₹ 86,011</span>
          </div>

          <div className="flex justify-between items-center relative">
            <span className="text-gray-800 mr-28">SHIPPING</span>
            <div className="flex items-center gap-2">
              {isLoading && (
                <Image
                  src={CHECKOUT_ASSETS.LOADER}
                  alt="Loading"
                  width={20}
                  height={20}
                  className="animate-spin rotate-180 z-20"
                />
              )}
              <span className="z-20 text-gray-700 text-[0.8rem] md:ml-8 lg:ml-16 xl:ml-0">{shipping}</span>
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <span className="text-gray-800">TOTAL</span>
            <span className="text-gray-700 text-[0.9rem]">₹ 86,011</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourOrder;

