import Image from 'next/image'
import img1 from '../../../public/assets/whishlist/shimmerimg.png'

const EmptyWishlist = () => {
  return (
 
<div className="bg-white w-full h-screen flex justify-center items-center ">
  <div className="bg-white flex flex-col gap-y-4 px-6">
    
    {/* Image */}
    <div className="flex justify-center">
      {/* <img src={img1} className="object-contain" alt="Shimmer Image" /> */}
      <Image
      src={img1}
     
      alt="Picture of the author"
      className='object-contain '
    />
    </div>

    {/* Text */}
    <div className="font-centurygothic text-center w-full flex flex-col gap-y-4">
      <div className="">
        <h2 className="text-[#663634] leading-4 tracking-normal font-normal text-sm sm:text-base">
          YOUR WISHLIST IS EMPTY!
        </h2>
      </div>
      <div className="">
        <p className="text-[#333333] text-sm ">
          You have not added any products to your wishlist.
        </p>
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <button className=" min-w-fit px-6 py-3 text-sm leading-4  text-[#515D5B]  bg-[#F5F5F5] rounded">
          GO TO SHOP
        </button>
      </div>
    </div>

  </div>
</div>




  )
}

export default EmptyWishlist
