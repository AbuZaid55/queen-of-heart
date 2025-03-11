'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { CHECKOUT_ASSETS } from './data'
import Billing from './Billing'
import YourOrder from './YourOrder'
import Login from './Login'
import PlaceOrder from './PlaceOrder'
import Coupon from './Coupon'
const Page = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [isErrorLoading, setIsErrorLoading] = useState(false);
  const [isCouponVisible, setIsCouponVisible] = useState(false);

  const handleFormDataChange = (newFormData, newErrors) => {
    setIsErrorLoading(true);
    setTimeout(() => {
      setFormData(newFormData);
      setErrors(newErrors);
      setIsErrorLoading(false);
    }, 500);
  };

  const getErrorMessage = (field, error) => {
    if (field === 'pincode' && error) {
      return 'Billing PIN Code is not a valid postcode / ZIP';
    }
    return 'This is a required field';
  };

  return (
    <div className="min-h-screen bg-[#F7ECEB] font-gothic">
      <div className="flex flex-col items-center justify-center pt-32">
        <h1 className="text-[#4F2426] text-4xl tracking-[0.2em] mb-8 text-center px-4">
          CHECKOUT
        </h1>
        
        <div className="bg-[#f9f5f5] w-[95%] md:w-[80vw] min-h-[8vh] rounded-md border border-[#4F2426] flex items-center px-4 mb-4">
          <div>
            <div className="w-7 h-7 rounded-full border-[0.3vw] border-[#4F2426] flex items-center justify-center">
              <FontAwesomeIcon 
                icon={faInfoCircle} 
                className="text-[#4F2426]"
                style={{ width: '18px', height: '18px' }}
              />
            </div>
          </div>
          <span className="text-[#4F2426] p-1 text-xs">Have a coupon?</span>
          <button
            onClick={() => setIsCouponVisible(!isCouponVisible)} 
            className="ml-2 text-[#4F2426] underline hover:text-opacity-90 text-xs font-semibold"
          >
            Click here to enter your code
          </button>
        </div>

        <Coupon isVisible={isCouponVisible} onToggle={() => setIsCouponVisible(!isCouponVisible)} />

        {Object.keys(errors).some(key => errors[key]) && (
          <div className="bg-[#f9f5f5] w-[95%] md:w-[80vw] rounded-md border border-[#4F2426] p-4 mb-4 relative">
            {isErrorLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50">
                <Image
                  src={CHECKOUT_ASSETS.LOADER}
                  alt="Loading"
                  width={24}
                  height={24}
                  className="animate-spin rotate-180"
                />
              </div>
            )}
            <div className="flex items-center">
              <div className="w-7 h-7 rounded-full border-[0.3vw] border-[#4F2426] flex items-center justify-center rotate-180">
                <FontAwesomeIcon 
                  icon={faInfoCircle} 
                  className="text-[#4F2426]"
                  style={{ width: '18px', height: '18px' }}
                />
              </div>
              <span className="text-[#4F2426] font-semibold ml-2">
                The following problems were found:
              </span> 
            </div>
            <ul className="list-disc ml-8 mt-2">
              {Object.entries(errors).map(([field, error]) => (
                error && (
                  <li key={field} className="text-[#4F2426] text-sm">
                    {getErrorMessage(field, error)}
                  </li>
                )
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-col md:flex-row w-[95%] md:w-[80vw] gap-8">
          <div className="w-full md:flex-1">
            <Billing onFormDataChange={handleFormDataChange} />
          </div>
          <div className="w-full md:flex-1">
            <YourOrder formData={formData} />
            <Login />
            <PlaceOrder />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
