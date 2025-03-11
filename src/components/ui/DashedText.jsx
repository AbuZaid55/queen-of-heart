'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

// Dashed Text accept two parameters-
// 1- Text
// 2- Styles (if it is not passed, it will falllback to default)

const DashedText = ({ text, styles }) => {
  const pathName = usePathname();
  return (
    <h4
      className={
        styles ||
        `before:content-[""] font-gothic before:h-[1px] before:w-6 before:bg-black before:absolute before:left-0 before:top-[50%] before:translate-x-[-140%] before:translate-y-[-50%] after:content-[""] after:h-[1px] after:w-6 after:bg-black after:absolute after:right-0 after:top-[50%] after:translate-x-[140%] after:translate-y-[-50%] relative text-black capitalize text-center text-wrap text-2xl 3xl:text-3xl md:max-w-[80%] md:before:w-14 md:after:w-14 typo-display` 
      }
    >
      {text}
    </h4>
  );
};

export default DashedText;
