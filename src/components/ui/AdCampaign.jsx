import { queenOfHeartsArray } from "@/Data/cardsData"
import DashedText from "./DashedText"

const AdCampaign = ({adVideo}) => {
 
  return (
    <div className='mt-5  flex flex-col items-center gap-5'>
 <DashedText text={"Our Ad Campaign"}/>
 <>        
        <video className='w-full hidden sm:block h-full min-h-screen object-cover md:h-auto' muted autoPlay loop src={queenOfHeartsArray[0].landingVideo}></video> 
        {/* For Mobile */}
          <video className='w-full block  sm:hidden  h-screen object-cover md:h-auto' muted autoPlay loop src={queenOfHeartsArray[0].landingVideoMobile}></video>
        </>

  <div className="pb-2 pt-5 font-gothic">
    <div className="md:w-[80%] w-[90%]  m-auto text-center">
    <h1 className=" text-lg tracking-[0.3rem]  3xl:text-3xl">Queen Of Hearts- Chennai’s crown jewel of partywear, where lightweight doesn’t mean low on drama.</h1>
 <p className="text-gray-500 py-3 leading-6 px-7 text-[15px]  3xl:text-2xl 3xl:leading-[1.5]">With 20 years of expertise, Khwaahish now introduces Queen of Hearts - a curated galleria of lightweight fine jewellery crafted for the modern lifestyle. We believe in jewellery that speaks for itself—bold, beautiful, and effortless. Our handpicked collections are designed to make you shine, without weighing you down. At Queen Of Hearts, every piece tells a story—and that story is yours.</p>
    </div>
  </div>
     </div>
  )
}

export default AdCampaign
