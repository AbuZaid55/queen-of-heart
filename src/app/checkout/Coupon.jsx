'use client'
import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { CHECKOUT_ASSETS } from './data';

const Coupon = ({ isVisible, onToggle }) => {
  const [couponCode, setCouponCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);
  const inputRef = useRef(null);

  useGSAP(() => {
    if (isVisible) {
      gsap.fromTo(formRef.current, 
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.5, ease: 'power2.out' }
      );
    } else {
      gsap.to(formRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in'
      });
    }

    const input = inputRef.current;
    
    const handleFocus = () => {
      gsap.to(input, {
        border: 'none',
        duration: 0.3
      });
      gsap.to(input, {
        '--placeholder-opacity': 0,
        duration: 0.3,
        ease: 'power2.inOut'
      });
    };

    const handleBlur = () => {
      gsap.to(input, {
        border: '1px solid #e5e7eb',
        duration: 0.3
      });
      gsap.to(input, {
        '--placeholder-opacity': 1,
        duration: 0.3,
        ease: 'power2.inOut'
      });
    };

    input.addEventListener('focus', handleFocus);
    input.addEventListener('blur', handleBlur);

    return () => {
      input.removeEventListener('focus', handleFocus);
      input.removeEventListener('blur', handleBlur);
    };
  }, [isVisible]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    gsap.to('.loader-overlay', {
      display: 'flex',
      opacity: 1,
      duration: 0.3
    });

    // Simulate API call
    setTimeout(() => {
      setError(`Coupon "${couponCode}" does not exist`);
      setIsLoading(false);
      
      gsap.to('.loader-overlay', {
        opacity: 0,
        display: 'none',
        duration: 0.3
      });
    }, 2000);
  };

  return (
    <>
      <div 
        ref={formRef} 
        className="overflow-hidden h-0 opacity-0 w-[80vw] border border-white  mt-4 p-6 relative"
      >
        <p className="text-[#565454] text-sm mb-4">
          If you have a coupon code, please apply it below.
        </p>
        
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="Coupon code"
              style={{ '--placeholder-opacity': 1 }}
              className="w-full p-3 border mb-5 text-sm placeholder:text-[#4F2426] outline-none [&::placeholder]:opacity-[var(--placeholder-opacity)]"
            />
            
            {error && (
              <p className="text-red-800 text-xs mb-4">{error}</p>
            )}
            
            <button
              type="submit"
              className="px-6 py-3 bg-[#5f3a3c] text-white border border-[#4F2426] text-sm font-semibold tracking-widest   
                       hover:bg-white hover:text-[#4F2426] transition-colors duration-300 "
            >
              APPLY COUPON
            </button>
          </div>
        </form>

        <div className="loader-overlay absolute inset-0 bg-white bg-opacity-50 
                      hidden items-center justify-center">
          <Image
            src={CHECKOUT_ASSETS.LOADER}
            alt="Loading..."
            width={40}
            height={40}
            className="animate-[spin_1s_linear_infinite]"
          />
        </div>
      </div>
    </>
  );
};

export default Coupon;
