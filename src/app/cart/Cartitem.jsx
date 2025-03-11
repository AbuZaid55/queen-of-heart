"use client";
import React, { useState } from "react";
import EmptyCart from "./EmptyCart";
const cartData = [
  {
    id: 1,
    name: "0.15 & 0.20 ct Irresistible Radiance Solitaire Diamond Necklace",
    color: "Rose Gold",
    purity: "18K",
    diamondGrade: "SI-GH",
    RingSize: "12",
    price: "72369",
    Quantity: "1",
    img: "/assets/cart.png",
  },
  {
    id: 2,
    name: "0.15 & 0.20 ct Irresistible Radiance Solitaire Diamond Necklace",
    color: "Rose Gold",
    purity: "18K",
    diamondGrade: "SI-GH",
    RingSize: "12",
    price: "72369",
    Quantity: "1",
    img: "/assets/cart.png",
  },
];

const CartItem = () => {
  const [cart, setCart] = useState(cartData);

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <div className="lg:px-20 lg:py-20 bg-[#F7ECEB] pt-28 sm:pt-4">
      {cart.length > 0 && (
        <h1 className="font-gothic text-center text-[28px] leading-10 text-[#663634] tracking-[7px] font-normal pt-20">
          CART
        </h1>
      )}

      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="p-6 rounded-lg bg-[#F7ECEB] flex flex-col sm:pt-24">
          <div className="overflow-x-auto bg-white hidden md:block px-4 py-5 w-full">
            <table className="w-full border-collapse min-w-[700px]  hidden  md:table ">
              <thead className="">
                <tr className="border-b font-gothic">
                  <th className="text-left pl-36 text-[#474545]  text-base md:uppercase py-2 px-2 sm:px-4 leading-6 tracking-[2px] font-semibold ">
                    Product
                  </th>
                  <th className="text-left text-[#474545]  text-base leading-6 md:uppercase tracking-[2px] font-semibold py-2 px-2 sm:px-4">
                    Price
                  </th>
                  <th className="text-left text-[#474545] text-base py-2 px-2 md:uppercase sm:px-4 leading-6 tracking-[2px] font-semibold">
                    Quantity
                  </th>
                  <th className="text-left text-[#474545] text-base leading-6 md:uppercase tracking-[2px] font-semibold py-2 px-2 sm:px-4">
                    SubTotal
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {cart.map((cartItem) => (
                  <tr
                    key={cartItem.id}
                    className="border-b  text-xs sm:text-sm"
                  >
                    <td className="py-4 flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6 px-2 sm:px-4">
                      <button
                        className="remove-item text-[#c31800] text-lg cursor-pointer"
                        onClick={() => removeItem(cartItem.id)}
                      >
                        &times;
                      </button>
                      <img
                        src={cartItem.img}
                        alt="Necklace"
                        className="w-12 h-12 sm:w-16 sm:h-16 object-cover border rounded hidden sm:block"
                      />
                      <div className="flex flex-col gap-y-1">
                        <a className="text-sm text-[#663634] cursor-pointer hover:underline leading-6 font-gothic font-normal">
                          {cartItem.name}
                        </a>
                        <p className="pb-2 pt-4 pl-10">
                          <span className="font-semibold text-[#474545] font-gothic text-sm leading-6 tracking-normal">
                            Select Gold Color:
                          </span>{" "}
                          {cartItem.color}
                        </p>
                        <p className="pb-2 pl-10">
                          <span className="font-semibold text-[#474545] font-gothic text-sm leading-6 tracking-normal">
                            Select Gold Purity:
                          </span>{" "}
                          {cartItem.purity}
                        </p>
                        <p className="pb-2 pl-10">
                          <span className="font-semibold text-[#474545] font-gothic text-sm leading-6 tracking-normal">
                            Select Diamond Grade:
                          </span>{" "}
                          {cartItem.diamondGrade}
                        </p>
                        <p className="pb-2 pl-10">
                          <span className="font-semibold text-[#474545] font-gothic text-sm leading-6 tracking-normal">
                            Select Ring Size:
                          </span>{" "}
                          {cartItem.RingSize}
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-2 sm:px-4 text-[#000000] text-base tracking-normal leading-5 font-bold">
                      ₹ {cartItem.price}
                    </td>
                    <td className="py-4 px-2 sm:px-4 text-[#474545] font-gothic text-base leading-6 font-normal">
                      {cartItem.Quantity}
                    </td>
                    <td className="py-4 px-2 sm:px-4 text-[#000000] text-base tracking-normal leading-5 font-bold">
                      ₹ {Number(cartItem.price) * Number(cartItem.Quantity)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Mobile View */}
          <div className="md:hidden w-[100%]">
            {cart.map((cartItem) => (
              <div key={cartItem.id} className="border-b p-4 text-sm bg-white">
                <div className="flex flex-col gap-y-4 justify-between items-start mb-2">
                  <button
                    className="text-[#c31800] text-lg cursor-pointer mr-1"
                    onClick={() => removeItem(cartItem.id)}
                  >
                    &times;
                  </button>

                  <span className=" text-[#663634]">
                    <span className="text-black"> Product: </span>{" "}
                    {cartItem.name}
                  </span>

                  <p className="pb-2 pt-4 pl-10">
                    <span className="font-semibold text-[#474545] font-gothic text-sm leading-6 tracking-normal">
                      Select Gold Color:
                    </span>{" "}
                    {cartItem.color}
                  </p>
                  <p className="pb-2 pl-10">
                    <span className="font-semibold text-[#474545] font-gothic text-sm leading-6 tracking-normal">
                      Select Gold Purity:
                    </span>{" "}
                    {cartItem.purity}
                  </p>
                  <p className="pb-2 pl-10">
                    <span className="font-semibold text-[#474545] font-gothic text-sm leading-6 tracking-normal">
                      Select Diamond Grade:
                    </span>{" "}
                    {cartItem.diamondGrade}
                  </p>
                  <p className="pb-2 pl-10">
                    <span className="font-semibold text-[#474545] font-gothic text-sm leading-6 tracking-normal">
                      Select Ring Size:
                    </span>{" "}
                    {cartItem.RingSize}
                  </p>
                </div>
                <div className="flex justify-between py-3 mb-1">
                  <span className="font-extralight">Price:</span>
                  <span className="font-bold">₹ {cartItem.price}</span>
                </div>
                <div className="flex justify-between mb-1 py-3">
                  <span className="font-extralight">Quantity:</span>
                  <span className="font-bold">{cartItem.Quantity}</span>
                </div>
                <div className="flex justify-between mb-1 py-3">
                  <span className="font-extralight">Subtotal:</span>
                  <span className="font-bold">
                    ₹ {Number(cartItem.price) * Number(cartItem.Quantity)}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 bg">
            <div className="flex flex-col items-center sm:gap-3 sm:flex-row">
              <input
                type="text"
                placeholder="Coupon code"
                className="border px-3 sm:px-6 py-3 w-[40vw] sm:w-full md:w-48 text-[#663634]"
              />
              <button className="bg-[#663634] hover:bg-white hover:text-[#663634] hover:border border-[#663634] text-white px-6 sm:px-6 py-3">
                APPLY COUPON
              </button>
            </div>
            <button className="sm:justify-self-end bg-[#9f9f9f] hover:bg-white hover:text-[#9f9f9f] border-2 hover:border-[#9f9f9f] text-white px-6 py-3 w-max">
              UPDATE CART
            </button>
          </div>

          {/* Cart Totals Section */}
          <div className="pt-10 py-2 rounded-lg lg:w-[40vw] lg:self-end">
            <h2 className="mb-4 text-[#663634] font-gothic leading-6 font-bold text-xl tracking-wide">
              CART TOTALS
            </h2>
            <div className="border bg-white px-4 py-2">
              <div className="grid grid-cols-12 py-2 items-center">
                <span className="col-span-4 text-[#474545] font-gothic text-base leading-6 tracking-wide font-semibold md:uppercase">
                  Subtotal
                </span>
                <span className="font-bold col-span-8 sm:text-start text-end tracking-normal text-base leading-5 text-[#000000] font-gothic">
                  ₹ 118,671
                </span>
              </div>
              <div className="border-t py-4 grid grid-cols-12 items-center">
                <span className="col-span-4 text-[#474545] font-gothic text-base leading-6 tracking-wide font-semibold md:uppercase">
                  Shipping
                </span>
                <div className="pt-2 text-sm text-end sm:text-start col-span-8 ">
                  <p className="pb-2 text-[#474545] font-gothic text-xs leading-5 tracking-normal font-normal">
                    Free shipping
                  </p>
                  <p className="pb-2 text-[#474545] font-gothic text-xs leading-5 tracking-normal font-normal">
                    Shipping to{" "}
                    <span className="text-[#000000] font-gothic text-xs leading-3 tracking-normal font-bold">
                      Tamil Nadu.
                    </span>
                  </p>
                  <button className="text-[#663634] flex justify-self-end sm:justify-self-start items-center pt-1 ">
                    Change address <span className="ml-1">🛒</span>
                  </button>
                </div>
              </div>
              <div className="border-t pt-4 grid grid-cols-12 font-semibold items-center">
                <span className="col-span-4 text-[#474545] font-gothic text-base leading-6 tracking-wide font-semibold md:uppercase">
                  Total
                </span>
                <span className="col-span-8 text-end sm:text-start tracking-normal text-base leading-5 text-[#000000] font-gothic font-bold">
                  ₹ 118,671
                </span>
              </div>
            </div>
            <button className=" bg-[#663634] my-5  transition-all duration-500 ease-in-out hover:bg-white hover:text-[#663634] hover:border border-[#663634] text-white py-3 px-6 text-center w-max">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
