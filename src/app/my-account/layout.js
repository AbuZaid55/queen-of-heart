'use client';
import React from 'react';
import DashBoardBar from './dashboard/DashBoardBar';
import { usePathname } from 'next/navigation';
import Header from '../../components/Main/Header';
import Footer from '../../components/Main/Footer';



export default function MyAccountLayout({ children }) {
  const pathName = usePathname();
  const isLoginPage = pathName === '/my-account';

  return (
    <div className={`bg-[#F7ECEB] ${isLoginPage ? 'antialiased p-0 min-h-screen ' : ''}`}>
      {isLoginPage ? (
        <>{children}</>
      ) : (
        <>
          <Header/>
          {/* <div className='h-44 md:h-20'></div> */}
        <div className='min-h-screen relative flex justify-center items-center'>
          <div className="h-auto w-screen  py-40 lg:py-56">
            <div className='lg:w-[80%]  w-[95%]  bg-white mx-auto px-3 py-[20px]  lg:flex lg:flex-row gap-2 flex flex-col'>
            <DashBoardBar />
            {children}
            </div>
          </div>
        </div>
        <Footer/>
        </>

      )}
    </div>
  );
}
