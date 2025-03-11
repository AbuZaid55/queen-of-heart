const Orders = () => {
  return (
    <>



      {/* Details Section */}
      <div className='my-3 pb-5 font-gothic border-2 w-full border-[#663634]'>
        <div className='m-2 flex justify-between lg:flex-col lg:m-0'>
          {/* Title Section */}
          <div className='lg:border-b lg:border-[#663634] py-2 flex flex-col gap-4 font-bold text-sm lg:flex-row lg:justify-around'>
            <h1 className='text-black hidden lg:block lg:ml-2'>Orders</h1>
            <h1 className='text-black'>DATE</h1>
            <h1 className='text-black'>STATUS</h1>
            <h1 className='text-black'>TOTAL</h1>
            <h1 className='text-black hidden lg:block'>Actions</h1>
          </div>

          {/* Details */}
          <div className='flex flex-col gap-4 text-[clamp(15px,2vw,15px)] lg:flex-row lg:justify-between lg:items-center text-black'>
            <h1 className='hidden lg:block lg:ml-2'>#116320</h1>
            <h1>January 28, 2025</h1>
            <h1>Pending payment</h1>
            <h1><span className='font-bold text-black'>₹ 88,923</span> for 1 item</h1>

            {/* Button Section */}
            <div className='m-2 flex-col gap-2 hidden lg:flex'>
              <button className='bg-[#663634] cursor-default mt-1 px-7 rounded-sm py-2 border-transparent w-max text-white text-sm hover:bg-transparent hover:text-[#663634] transition-all duration-500 ease-in-out border hover:border-[#663634]'>Pay</button>
              <button className='bg-[#663634] cursor-default mt-1 px-7 rounded-sm py-2 border-transparent w-max text-white text-sm hover:bg-transparent hover:text-[#663634] transition-all duration-500 ease-in-out border hover:border-[#663634]'>View</button>
              <button className='bg-[#663634] cursor-default mt-1 px-7 rounded-sm py-2 border-transparent w-max text-white text-sm hover:bg-transparent hover:text-[#663634] transition-all duration-500 ease-in-out border hover:border-[#663634]'>Cancel</button>
            </div>
          </div>
        </div>

        {/* Button Section for Mobile */}
        <div className='m-2 flex flex-col gap-2 lg:hidden'>
          <button className='bg-[#663634] cursor-default mt-1 px-7 rounded-sm py-2 border-transparent w-max text-white text-sm hover:bg-transparent hover:text-[#663634] transition-all duration-500 ease-in-out border hover:border-[#663634]'>Pay</button>
          <button className='bg-[#663634] cursor-default mt-1 px-7 rounded-sm py-2 border-transparent w-max text-white text-sm hover:bg-transparent hover:text-[#663634] transition-all duration-500 ease-in-out border hover:border-[#663634]'>View</button>
          <button className='bg-[#663634] cursor-default mt-1 px-7 rounded-sm py-2 border-transparent w-max text-white text-sm hover:bg-transparent hover:text-[#663634] transition-all duration-500 ease-in-out border hover:border-[#663634]'>Cancel</button>
        </div>
      </div>
    </>




  );
}

export default Orders;
