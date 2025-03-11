const OrderDetails = () => {
  return (
    
  <>
      {/* Details Section */}
      <div className='lg:flex-1 lg:mx-5'>
        <h1 className='text-black 4xl:text-2xl'>
          Orders #<span className='font-bold'>116325</span> was placed on <span className='font-bold'>January 28, 2025</span> and is currently <span className='font-bold'>Pending payment.</span>
        </h1>
        <h1 className='font-bold my-3 4xl:text-2xl '>Order Details</h1>
        <div className='font-gothic border-2 w-full border-[#663634]'>
          <div className='flex py-3 font-bold justify-between border-b border-[#663634]'>
            <h1 className='px-2 4xl:text-2xl'>Product</h1>
            <h1 className='px-2 4xl:text-2xl'>Total</h1>
          </div>
          {/* Item Details */}
          <div className='flex border-b border-[#663634] items-center '>
            <div className='px-2 text-[clamp(13px,2vw,15px)] w-8/12 flex flex-col gap-2 py-3 4xl:text-2xl'>
              <h1>
                0.15 & 0.20 Irresistible Radiance Solitaire Diamond Necklace{' '}
                <span className='font-bold text-black'>* 1</span>
              </h1>
              <h1 className='text-black font-bold'>
                Select Gold Color: <span className='text-[#663634] font-light'>Rose Gold</span>
              </h1>
              <h1 className='text-black font-bold'>
                Select Gold Purity: <span className='text-[#663634] font-light'>18k</span>
              </h1>
              <h1 className='text-black font-bold'>
                Select Diamond Grade: <span className='text-[#663634] font-light'>SI-GH</span>
              </h1>
            </div>
            <h1 className='font-bold text-black text-right pr-2 flex-1 4xl:text-2xl'>₹88,923</h1>
          </div>
          {/* SubTotal */}
          <div className='flex py-3 justify-between border-b border-[#663634] 4xl:text-2xl'>
            <h1 className='px-2 text-black'>SUBTOTAL :</h1>
            <h1 className='px-2 text-black font-bold'>₹ 88,923</h1>
          </div>
          {/* Shipping */}
          <div className='flex py-3 justify-between border-b border-[#663634] 4xl:text-2xl'>
            <h1 className='px-2 text-black'>SHIPPING :</h1>
            <h1 className='px-2 text-black'>Free Shipping</h1>
          </div>
          {/* Payment */}
          <div className='flex py-3 justify-between border-b 4xl:text-2xl border-[#663634]'>
            <h1 className='px-2 text-black'>PAYMENT METHOD :</h1>
            <h1 className='px-2 text-black'>CCAvenue</h1>
          </div>
          {/* Total */}
          <div className='flex py-3 justify-between 4xl:text-2xl'>
            <h1 className='px-2 text-black'>Total :</h1>
            <h1 className='px-2 text-black font-bold'>₹ 88,923</h1>
          </div>
        </div>
        <div className="4xl:text-2xl">
          <h1 className='text-2xl my-5'>Billing Address</h1>
          <h2 className='text-black'>Usaid</h2>
          <h2 className='text-black'>Sweet Street</h2>
          <h2 className='text-black'>Uttar Pradesh, 226001</h2>
          <h2 className='text-black'>919580514154</h2>
          <h2 className='text-black'>gifaji@gmail.com</h2>
        </div>
      </div>
      </>
  
  )
}

export default OrderDetails
