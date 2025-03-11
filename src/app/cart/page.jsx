import React from "react";
import CartItem from "./Cartitem";

const CartPage = () => {
  return (
    <>
      <div className=" bg-[#F7ECEB] min-h-screen">
        {/* <h1 className="bg-red-300">CART</h1> */}
        <CartItem/>
      </div>
    </>
  );
};
export default CartPage;
