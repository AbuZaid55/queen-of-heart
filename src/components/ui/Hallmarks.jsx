'use client'

import CertificationMarquee from './CertificationMarquee';
import { certifications } from "../../Data/cardsData"
import CtaButton from './CtaButton';
import { usePathname } from 'next/navigation';


const Hallmarks = () => {
  const pathname = usePathname()

  return (
    <div className={`bg-gray-50 text-gray-500 flex flex-col items-center gap-4 py-8 -mt-3`}>
      <span className='max-w-[1280px] text-center text-[15px] font-normal 3xl:text-[25px]  leading-[1.8] tracking-[1.3px] md:max-w-[80%] px-10'>
        All our jewels are BIS Hallmarked and studded with natural diamonds certified by International Gemmological Institutes.
      </span>
      <CertificationMarquee slides={certifications} options={{ loop: true }} />
      {/* <CtaButton text={"About Us"}/> */}
    </div>
  );
};

export default Hallmarks;
