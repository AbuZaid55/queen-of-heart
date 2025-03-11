import React from 'react'
import Image from 'next/image'
import { CHECKOUT_ASSETS } from './data'

const PlaceOrder = () => {
  return (
    <div className="w-full md:w-[38vw] mt-4 p-4 md:p-10 bg-white mb-14">
      <div className="flex items-center gap-4 mb-4">
        <span className="text-gray-800 text-[0.8rem]">CCAvenue</span>
        <Image 
          src={CHECKOUT_ASSETS.CCAVENUE_LOGO}
          alt="CCAvenue Logo"
          width={100}
          height={30}
        />
      </div>

      <div className="bg-[#5a2a2d] text-white p-4 rounded-md mb-4 relative text-[0.8rem]">
        <div className="absolute -top-2 left-12 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-[#5a2a2d]"></div>
        Pay securely by Credit or Debit card or internet banking through CCAvenue Secure Servers.
      </div>

      <p className="text-[0.8rem] text-gray-600 mb-4">
        Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our Privacy policy.
      </p>

      <div className="flex justify-start md:justify-end">
        <button className="w-36 md:w-40 bg-[#5a2a2d] text-white px-1 py-4 hover:bg-white hover:text-[#4F2426] hover:border hover:border-[#4F2426] font-semibold tracking-wider text-sm">
          PLACE ORDER
        </button>
      </div>
    </div>
  )
}

export default PlaceOrder
