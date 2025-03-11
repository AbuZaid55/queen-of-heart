'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Verification = () => {
  const route = useRouter();
  const [verifyOtp, setVerifyOtp] = useState('');

  const handleChange = (e) => {
    setVerifyOtp(e.target.value);
    console.log(verifyOtp);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (verifyOtp === '123456') {
      route.push('/my-account/dashboard');
    }
  };

  return (
    <div className='my-5'>
      <h1 className='text-lg 3xl:text-3xl'>Enter Verification code</h1>
      <input
        value={verifyOtp}
        onChange={handleChange}
        className='w-full py-3 border-[1.5px] border-[#f7eceb] rounded-md text-sm pl-3 focus:outline-none focus:border focus:border-black 3xl:text-3xl focus:shadow-[0px_5px_10px_rgba(0,0,0,0.4)]'
        type="text"
        placeholder='Enter Your verification code'
      />
      <button
        className='cursor-default mt-2 px-7 py-3 border-transparent 3xl:text-3xl text-white text-sm bg-[#663634]'
        onClick={handleLogin}
      >
        Verify Code
      </button>
      <span className='text-sm ml-4 3xl:text-3xl'>Dummy OTP - 123456</span>
    </div>
  );
};

export default Verification;
