'use client'
import { useState } from 'react'

import Otp from './Otp'
import Verification from './Verification'

const page = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [error, setError] = useState("")
  const [otpSent, setOtpSent] = useState(false)
  const [otpVerified, setOtpVerified] = useState(false)

  const handleChange = (e) => {
    setPhoneNumber(e.target.value)
    setError("")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.trim() === "") {
      setError('Please enter your phone number.')
      return
    }
    setError('')
    setOtpSent(true)
    setOtpVerified(true);

  }

 
  return (
    <div className='relative min-h-screen lg:overflow-x-hidden lg:h-screen flex w-full bg-[#f7eceb] '>
      {otpSent && <Otp number={phoneNumber} setOtpSent={setOtpSent} />}
      {/* Image-Section */}
      <div className='h-full w-2/5 hidden  lg:block '>
        <img className='w-full h-full object-cover' src='/assets/Login/Galaxy-Banner-Demo.avif' />
      </div>
      {/* Login Section */}
      <div className='flex font-gothic justify-center  lg:items-center py-10  flex-1 h-full '>
        <div className='bg-white w-11/12   3xl:w-9/12 3xl:h-[50vh] flex flex-col h- sm:w-[500px]'>
          {/* Login Image */}
          <div className='mt-4 flex justify-center items-center gap-3 sm:mt-8 '>
            <img src='/assets/Login/Gulz-Logo.svg' className='h-11 3xl:h-20 sm:h-12 lg:h-14' alt="gulz-logo" />
            <h1 className='text-[#663634] border-l-[0.5px] border-[#663624] pl-2 my-2 flex flex-col justify-center items-center text-[12px] lg:text-sm 3xl:text-3xl'>From the house of<span className='text-xl lg:text-2xl leading-[0.9] lg:leading-6 cursor-pointer'>KHWAAHISH</span></h1>
          </div>
          {/* Login Form */}
          <div className='my-24 sm:my-14 pt-1  mx-4 h-full flex flex-col justify-evenly sm:mx-12   lg:my-10'>
            <h1 className='text-xl sm:my-10 my-2 3xl:text-3xl'>Login/Register With Phone Number</h1>
            <form className='mt-5'>
              <select className='flex py-3 px-2.5 3xl:text-3xl border-[1.5px] border-[#f7eceb] rounded-md text-sm focus:outline-none focus:border focus:border-black focus:shadow-[0px_5px_10px_rgba(0,0,0,0.4)]'>
                <option value='IN'>🇮🇳 IN(+91)</option>
              </select>
              <input value={phoneNumber} className='w-full py-3 border-[1.5px] 3xl:text-3xl border-[#f7eceb] rounded-md text-sm pl-3 focus:outline-none focus:border focus:border-black focus:shadow-[0px_5px_10px_rgba(0,0,0,0.4)]' style={{ appearance: 'textfield' }} type="number" placeholder='Enter Your Phone Number' onChange={handleChange} />
              {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
              <button type='submit' className={`${otpVerified ? "bg-[#9f9f9f]" : "bg-[#663634] "} cursor-default mt-2 px-7 py-3 border-transparent text-white text-sm hover:bg-transparent 3xl:text-3xl hover:text-[#663634] transition-all duration-500 ease-in-out border hover:border-[#663634]`} onClick={handleSubmit} >Send Code</button>
              {otpVerified && <Verification/>}
            </form>
          </div>
        </div>
      </div>
    </div>


  )
}

export default page