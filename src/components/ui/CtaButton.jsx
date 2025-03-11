import React from 'react'

const CtaButton = ({text}) => {
  return (
    <button className="px-[30px] py-[5px] bg-[#b2872d] border border-solid border-[#b2872d] text-[15px] tracking-[0.2px] leading-6 cursor-pointer hover:bg-white hover:text-black hover:border text-white rounded-3xl uppercase transition-all duration-500 font-thin">{text}</button>
  )
}

export default CtaButton
