

const Checkout = () => {
  return (
    <div className="h-full w-full px-5 sm:px-10 lg:px-20">
      {/* Head */}
      <div className=" h-20 w-full flex items-center justify-center text-[#663634] text-[28px] font-normal leading-[34.33px] uppercase tracking-[0.32em]">
        <h1>CHECKOUT</h1>
      </div>

      {/* Product */}
      <div className="w-full border-2 border-white mb-3">
        {/* Product Head */}
        <div className="mt-5 px-10  items-center justify-between md:flex md:block hidden">
          <h2 className="text-[#663634]">PRODUCT</h2>
          <div className="rightside flex items-center gap-20">
            <h2 className="text-[#663634]">QTY</h2>
            <h2 className="text-[#663634]">TOTAL&apos;S</h2>
          </div>
        </div>

        {/* Product Content */}
        <div className="mt-5 px-10 ">
          <p className="text-[#474545] text-[13px]">
            0.15 & 0.20 ct Irresistible Radiance Solitaire Diamond Necklace
          </p>

          <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full mt-5">
            {/* Left Side (on mobile, centered) */}
            <div className="space-y-2 text-center md:text-left">
              <h1 className="text-[#080000] font-bold text-[16px] leading-[25.49px]">
                Select Gold Color:
                <span className="text-[#474545] font-normal text-[15px]">
                  &nbsp; Rose Gold
                </span>
              </h1>
              <h1 className="text-[#080000] font-bold text-[16px] leading-[25.49px]">
                Select Gold Purity :
                <span className="text-[#474545] font-normal text-[15px]">
                  &nbsp; 18K
                </span>
              </h1>
              <h1 className="text-[#080000] font-bold text-[16px] leading-[25.49px]">
                Select Diamond Grade:
                <span className="text-[#474545] font-normal text-[15px]">
                  &nbsp; SI - GH
                </span>
              </h1>
            </div>

            {/* Right Side (on mobile, h3 tags will be stacked) */}
            <div className="flex justify-between md:flex-row items-start md:items-end gap-5 md:gap-20 mt-3 md:mt-0">
              <h3 className="text-[#474545]  text-[15px] md:text-left font-bold sm:font-normal">
                1*
              </h3>
              <h3 className="text-[#474545] text-[15px] md:text-right font-bold sm:font-normal">
                &#8377; 88,923
              </h3>
            </div>
          </div>

          {/* Subtotal */}
          <div className="flex justify-between items-start w-full mt-7">
            <div className="space-y-2">
              <h1 className="text-[#474545] text-[15px] leading-[19.12px] font-bold sm:font-normal">
                SUBTOTAL:
              </h1>
            </div>
            <div className="flex items-end gap-20">
              <h3 className="text-[#474545] font-normal text-[15px]">
                &#8377; 88,923
              </h3>
            </div>
          </div>

          {/* Shipping */}
          <div className="flex justify-between items-start w-full mt-7">
            <div className="space-y-2">
              <h1 className="text-[#474545] text-[15px] leading-[19.12px] font-bold sm:font-normal">
                SHIPPING:
              </h1>
            </div>
            <div className="flex items-end gap-20">
              <h3 className="text-[#474545] font-normal text-[15px]">
                Free Shipping
              </h3>
            </div>
          </div>

          {/* Payment Method */}
          <div className="justify-between items-start w-full mt-7 hidden md:flex">
            <div className="space-y-2">
              <h1 className="text-[#474545] text-[15px] leading-[19.12px] font-bold sm:font-normal">
                PAYMENT METHOD:
              </h1>
            </div>
            <div className="flex items-end gap-20">
              <h3 className="text-[#474545] font-normal text-[15px]">
                CCAvenue
              </h3>
            </div>
          </div>

          {/*  Total*/}
          <div className="flex justify-between items-start w-full mt-7 mb-5">
            <div className="space-y-2">
              <h1 className="text-[#474545] text-[15px] leading-[19.12px] font-bold sm:font-normal">
                Total:
              </h1>
            </div>
            <div className="flex items-end gap-20">
              <h3 className="text-[#474545] font-bold text-[15px]">
                &#8377; 88,923
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="w-full  bg-white mt-5 pb-5 mb-10">
        {/* Header */}
        <div className="px-10 flex items-center gap-5">
          <h1 className="text-[#663634] mt-5">CCAvenue</h1>
          <img
            className="h-12 w-40 mt-5"
            src="/assets/images/ccavenue.png"
            alt="image"
          />
        </div>

        {/* Speech Bubble */}
        <div className="bg-[#663634] mx-10 mt-5 mb-10 relative">
          <div className="absolute top-[-20px] left-[20px] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-transparent border-b-[10px] border-b-[#663634]" />
          <p className="text-white text-[14px] flex items-center pt-4 pb-4 pl-5">
            Pay securely by Credit or Debit card or internet banking through
            CCAvenue Secure Servers.
          </p>
        </div>

        <hr className="border-t-[1px] border-t-[#D1D5DB] shadow-[0_4px_4px_0_rgba(0,0,0,0.1)] hidden md:block" />

        <div className="px-10 ">
          <p className="text-[14px] text-[#474545] mt-2 md:mt-3">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our Privacy policy.
          </p>
          <div className="flex flex-col md:items-end items-start mt-5">
            <button className="px-6 py-2 bg-[#663634] text-white cursor-pointer text-[14px] leading-[19px]">
              PAY FOR ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
