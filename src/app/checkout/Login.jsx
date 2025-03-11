'use client'
import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { CHECKOUT_ASSETS } from './data'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Otp = ({ number, setOtpSent }) => {
  const buttonRef = useRef(null);

  useGSAP(() => {
    gsap.from(buttonRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
      ease: "back.out"
    });
  }, []);

  const handleClick = () => {
    setOtpSent(false)
  }

  return (
    <div className='fixed inset-0 bg-black/40 z-50 font-gothic'>
      <div className='flex flex-col justify-around items-center w-11/12 bg-white h-72 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] sm:w-[480px] sm:h-[270px] rounded-lg p-4'>
        <div className='text-[#4F2426]'>
          <FontAwesomeIcon icon={faCheck} style={{border:"4px solid #4F2426", padding:"13px 15px", borderRadius:"100%", color:'#4F2426', fontSize:'50px'}}/>
        </div>
        <h1 className='text-center font-bold text-2xl'>OTP sent to +91{number}</h1>
        <button 
          ref={buttonRef}
          onClick={handleClick} 
          className='px-8 py-1.5 bg-[#4F2426] text-white hover:bg-white hover:text-[#4F2426] hover:border hover:border-[#4F2426] transition-colors duration-300'
        >
          Ok
        </button>
      </div>
    </div>
  )
}

const Verification = ({ setVerified, setLoading }) => {
  const buttonRef = useRef(null);

  useGSAP(() => {
    gsap.from(buttonRef.current, {
      x: -50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    });
  }, []);

  const [verifyOtp, setVerifyOtp] = useState('');

  const handleVerify = (e) => {
    e.preventDefault();
    if (verifyOtp === '789456') {
      setLoading(true);
      setTimeout(() => {
        setVerified(true);
        setLoading(false);
      }, 1500);
    }
  };

  return (
    <div className='my-5'>
      <h1 className='text-lg'>Enter Verification code</h1>
      <input
        value={verifyOtp}
        onChange={(e) => setVerifyOtp(e.target.value)}
        className='w-full py-3 border-[1.5px] border-[#f7eceb] rounded-md text-sm pl-3 focus:outline-none focus:border focus:border-black focus:shadow-[0px_5px_10px_rgba(0,0,0,0.4)]'
        type="text"
        placeholder='Enter Your verification code'
      />
      <button
        ref={buttonRef}
        className='mt-2 px-7 py-3 border-transparent text-white text-sm bg-[#4F2426] hover:bg-white hover:text-[#4F2426] hover:border hover:border-[#4F2426] transition-colors duration-300'
        onClick={handleVerify}
      >
        Verify Code
      </button>
      <span className='text-sm ml-4 block sm:inline-block mt-2 sm:mt-0'>Dummy OTP - 789456</span>
    </div>
  );
};

const Login = () => {
  const sendCodeButtonRef = useRef(null);
  
  useGSAP(() => {
    gsap.from(sendCodeButtonRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    });
  }, []);

  const [phoneNumber, setPhoneNumber] = useState('')
  const [error, setError] = useState("")
  const [showOtpModal, setShowOtpModal] = useState(false)
  const [otpSent, setOtpSent] = useState(false)
  const [verified, setVerified] = useState(false)
  const [loading, setLoading] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState({ code: 'IN', dialCode: '+91' })

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.trim() === "") {
      setError('Please enter your phone number.')
      return
    }
    setError('')
    setShowOtpModal(true)
    setOtpSent(true)
  }

  if (verified) {
    return (
      <div className="w-[38vw] mt-4 p-4">
        <h1 className="text-[#4F2426] text-xl tracking-[0.2em] mb-2 p-4 font-semibold">
          LOGIN/REGISTER WITH PHONE NUMBER
        </h1>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="fixed inset-0 bg-white/50 flex items-center justify-center z-50">
        <Image
          src={CHECKOUT_ASSETS.LOADER}
          alt="Loading"
          width={24}
          height={24}
          className="animate-spin rotate-180"
        />
      </div>
    )
  }

  return (
    <div className="w-full md:w-[38vw] mt-4 p-4">
      <h1 className="text-[#4F2426] text-lg md:text-xl tracking-[0.2em] mb-2 p-2 md:p-4 font-semibold text-center md:text-left">
        LOGIN/REGISTER WITH PHONE NUMBER
      </h1>

      <div className="flex flex-col lg:flex-row md:flex-col gap-5 mb-4">
        <div className="relative">
          <div
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-[120px] sm:w-[130px] md:w-[135px] lg:w-[138px] xl:w-full p-2 sm:p-4 bg-white border flex items-center justify-between cursor-pointer rounded-md"
          >
            <div className="flex items-center gap-2 w-full">
              <div className="relative h-5 w-5 md:h-4 md:w-4 lg:h-4 lg:w-4 xl:w-5 xl:h-5">
                <Image 
                  src={CHECKOUT_ASSETS.INDIA_FLAG} 
                  alt={selectedCountry.code}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-sm sm:text-xs lg:text-base">{selectedCountry.code} ({selectedCountry.dialCode})</span>
            </div>
            <FontAwesomeIcon icon={faChevronDown} className="text-[#4F2426]" />
          </div>
          {dropdownOpen && (
            <div className="absolute lg:w-[300px] xl:w-full bg-white border mt-1 rounded-md z-10 shadow-lg">
              <div 
                className="p-2 sm:p-4 hover:bg-gray-100 flex items-center gap-2 cursor-pointer"
                onClick={() => {
                  setSelectedCountry({ code: 'IN', dialCode: '+91' });
                  setDropdownOpen(false);
                }}
              >
                <Image
                  src={CHECKOUT_ASSETS.INDIA_FLAG}
                  alt="IN"
                  width={24} 
                  height={16}
                />
                <span className="text-sm sm:text-base">IN (+91)</span>
              </div>
            </div>
          )}
        </div>
        
        <input
          type="tel"
          placeholder="Enter Your Phone Number"
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value)
            setError("")
          }}
          className="p-3 border rounded-md text-xs xl:text-sm sm:text-xs w-4/5 lg:w-3/5 "
        />
      </div>

      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      
      {!otpSent ? (
        <button
          ref={sendCodeButtonRef}
          onClick={handleSubmit}
          className="w-36 md:w-40 font-semibold text-sm tracking-wider bg-[#4F2426] text-white px-6 py-3 hover:bg-white hover:text-[#4F2426] hover:border hover:border-[#4F2426] transition-colors duration-300"
        >
          SEND CODE
        </button>
      ) : (
        <Verification setVerified={setVerified} setLoading={setLoading} />
      )}

      {showOtpModal && <Otp number={phoneNumber} setOtpSent={setShowOtpModal} />}
    </div>
  )
}

export default Login
