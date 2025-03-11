import { cartItems } from '@/Data/cardsData'
import Link from 'next/link'
import React from 'react'

const CartDropDown = ({setshowCartDropDown}) => {

    const shoppingBag = {
        items: cartItems,
        totalItems: cartItems.reduce((sum, item) => sum + item.quantity, 0),
        grandTotal: cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      }
      
  return (
    
    <div onMouseLeave={()=>setshowCartDropDown(false)} className='bg-[#f3e6e3] flex sm:w-96 w-72 sm:px-3 px-1  py-1 flex-col top-10 sm:top-6 gap-2 absolute -right-6 sm:right-2 rounded-lg shadow-2xl'>
      <div className='flex text-[#663634] border-b-[1px] border-gray-400 pt-2 pb-4 w-full justify-between'>
        <h1 className=''>MY SHOPPING BAG</h1>
        <p><span className='font-bold'>{cartItems.length}</span> Items</p>
      </div>
      <div>
      {cartItems.map((item,index)=>(
          <div key={index} className='flex w-full  border-b-[1px] border-gray-400'>
          {/* Image */}
          <div className='h-14 w-16'>
            <img className='h-full w-full rounded-sm object-cover ' src={item.image} alt="" />
          </div>
            {/* Text-Details */}
          <div className='w-full py-2 text-black px-2 cursor-pointer '>
             <div className='flex justify-between'>
              <h1 className='text-sm'>{item.name}</h1>
              <span>*{item.quantity}</span>
              </div> 
             <div className='flex justify-between'>
              <span className='text-sm hover:underline '>Remove</span>
              <span>₹{item.price}</span>
              </div> 
          </div>
        </div>
        ))
      }
      </div>
      <div className='flex text-[#663634] border-b-[1px] py-2 border-gray-400 justify-between'>
        <h1>Bag Subtotal:</h1>
        <h1 className='font-bold'>₹ {shoppingBag.grandTotal}</h1>
      </div>
       <Link href='/cart' className='flex items-center justify-center'>
      <button className='bg-[#663634] my-2 text-white py-2.5 px-10 rounded-lg mx-3'>VIEW SHOPPING BAG</button>
       
       </Link>
       
      </div>
  )
}

export default CartDropDown
