'use client'

import { useRef, useState } from "react"
import useMarquee from "../../Data/hooks/useMarquee"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Marquee = () =>{
  const location = usePathname()
  let [animation,setAnimation] = useState()
  const marqueeRef1 = useRef()
  const marqueeRef2 = useRef()
  const marqueeRef3 = useRef()

  useMarquee(setAnimation,marqueeRef1,marqueeRef2,marqueeRef3)

  const pauseMarquee = () =>{
  animation.pause()
  }

  const resumeMarquee = () =>{
  animation.play()
  }

    return(
        <div className="bg-black flex flex-row justify-center items-center content-center md:flex-col font-gothic overflow-hidden" >
          <div className="md:w-[95%] md:py-[2px]   flex flex-col items-center md:flex-row">
          <div className="w-full md:w-auto   md:pr-5 md:pl-2 text-center bg-white 3xl:py-2 md:bg-black">
          {<a href="https://khwaahish-next.vercel.app/" target="_blank" className="ml-4 md:py-1 md:pt-1.5 text-sm 3xl:text-[25px]  text-black md:text-white  relative z-50 cursor-pointer 
    border-b border-b-transparent transition-all duration-300 ease-in-out md:hover:border-b-white  border-black b hover:border-b-black"> Visit Brand Website</a>}
          </div>
         
          
            <div onMouseOver={pauseMarquee} onMouseOut={resumeMarquee} className="relative w-full overflow-hidden flex-1 m-auto flen flex whitespace-nowrap  text-white tracking-widest select-none py-[5px] ">
            <span ref={marqueeRef1} className="inline-block text-sm 3xl:text-[22px]">We Ship Worldwide | Free Shipping Across India. For further details, Please call: <Link href="tel:919884039111" className="text-white no-underline">+91 9884039111 </Link> | We design, manufacture &amp; retail jewellery using NATURAL DIAMONDS only | All our Jewels are BIS Hallmarked &amp; Diamonds are ethically sourced &amp; certified by world-renowned Gemological Institutes.</span>
            <span ref={marqueeRef2} className="inline-block text-sm 3xl:text-[22px]">We Ship Worldwide | Free Shipping Across India. For further details, Please call: <Link href="tel:919884039111" className="text-white no-underline">+91 9884039111 </Link> | We design, manufacture &amp; retail jewellery using NATURAL DIAMONDS only | All our Jewels are BIS Hallmarked &amp; Diamonds are ethically sourced &amp; certified by world-renowned Gemological Institutes.</span>
            <span ref={marqueeRef3} className="inline-block text-sm 3xl:text-[22px]">We Ship Worldwide | Free Shipping Across India. For further details, Please call: <Link href="tel:919884039111" className="text-white no-underline">+91 9884039111 </Link> | We design, manufacture &amp; retail jewellery using NATURAL DIAMONDS only | All our Jewels are BIS Hallmarked &amp; Diamonds are ethically sourced &amp; certified by world-renowned Gemological Institutes.</span>
          </div>
          </div>
          
                    </div>
    )
}

export default Marquee