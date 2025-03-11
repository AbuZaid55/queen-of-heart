'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const TermsAndConditions = ({ onClose }) => {
  const modalRef = useRef(null)

  const handleClose = () => {
    gsap.to(modalRef.current, {
      opacity: 0,
      y: -50,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: onClose
    })
  }

  useGSAP(() => {
    gsap.from(modalRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: "power2.out"
    })
  }, [])

  return (
    // Overlay with semi-transparent background
    <div ref={modalRef} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]" data-lenis-prevent>
      {/* Modal container */}
      <div className="font-centuryGothic relative w-[90%] max-w-5xl max-h-[90vh] bg-white shadow-lg overflow-hidden ">
        <div 
          className="h-[90vh] overflow-y-auto font-centurygothic text-gray-700         
            [&::-webkit-scrollbar-track]:bg-gray-100 
            [&::-webkit-scrollbar-thumb]:bg-[#663634] " 
        >
          {/* Header with border bottom */}
          <div className="sticky top-0 bg-white z-10">
            <div className="flex flex-col justify-between items-center md:pt-4 px-4 md:px-8 py-2">
            <button 
                onClick={handleClose} 
                className=" p-2 self-end transition-transform  duration-300 hover:rotate-180"
              >
                <Image
                  src="/assets/eshop/output-onlinejpgtools-removebg-preview.png"
                  alt="Close"
                  width={15}
                  height={15}
                  className='3xl:w-10 3xl:h-10'
                />
              </button>
              <div className='self-start'>
                <h1 className="tracking-[2px] font-centurygothic text-[#663634] 3xl:text-4xl text-xl md:text-2xl uppercase">
                  TERMS & CONDITIONS
                </h1>
                <div className="w-24 h-[1px] bg-[#663634] mt-1"></div>
              </div>
             
            </div>
          </div>

          {/* Scrollable content */}
          <div className="px-4 py-4 md:px-8">
            <div className="leading-normal text-sm xl:text-sm  3xl:text-2xl">
              <p>By placing an order using this service you are accepting these Terms & Conditions. Please read these Terms & Conditions before placing an order.</p>
              <p className='pt-4'>By completing and submitting an electronic order form, you are making an offer to purchase goods which, if accepted by us, will result in a binding contract. Please note orders will only be dispatched once we are in receipt of 100% of your payment. We will not be liable if there is a delay, and we will not accept your order if payment is not authorized by your card payment issuer or Bank.</p>
              <p className='pt-4'>Certain steps must be followed for a contract to be formed, as described below. After you have placed your order:</p>
              <p className='pt-4'>When an order is placed by you online, you will receive a confirmation email from us. This will be our final order confirmation email which means we formally accept your order, and are obliged to complete the contract.</p>
              <p className='pt-4'>In case an order can be placed only by inquiry, we will send an email as soon as possible, to confirm which goods you have ordered for and send you the details you had requested for too. Once we receive your confirmation email to make the jewelry, we shall send you the formal order confirmation email, which means we are obliged to complete the contract post receipt of your payment.</p>
              <p className='pt-4'>We Will Not Accept Your Order If:</p>
              <ul className='px-5 list-disc pl-10 pt-4 space-y-1'>
                <li className="leading-relaxed">Your payment is not authorized</li>
                <li className="leading-relaxed">There is an error on our website regarding the price or other details of the goods</li>
                <li className="leading-relaxed">You have cancelled it in accordance with the instructions given in our Cancellation Policy</li>
                <li className="leading-relaxed">We reserve the right to refuse any order for any reason whatsoever.</li>
              </ul>

            </div>

            <h2 className='pt-4 text-[#545454] font-bold text-sm xl:text-sm 3xl:text-3xl'>Pricing And Payment:</h2>
            <ul className='pt-4 pl-10 list-disc text-sm xl:text-sm space-y-1 3xl:text-2xl'>
              <li className="leading-relaxed">Prices throughout the website are quoted in Indian Rupees (INR) and payment can only be accepted in Indian Rupees.</li>
              <li className="leading-relaxed">While we make every effort to ensure that the goods shown on our website are currently available at the price shown, we cannot guarantee that this will always be the case.</li>
              <li className="leading-relaxed">If goods you have ordered are unavailable, you will be notified as soon as possible.</li>
             
            </ul>
            <h2 className="pt-4 text-[#545454] font-bold text-sm xl:text-sm 3xl:text-3xl">Insured Shipping:</h2>
            <ul className='pt-4 pl-10  list-disc text-sm xl:text-sm space-y-1 3xl:text-2xl'>
              <li className="leading-relaxed">Khwaahish offers you FREE shipping on every order within India. Your product will be delivered safely packed and fully insured without any additional charges. We ensure that every vital step is taken before, during and after delivery of the product.</li>
              <li className="leading-relaxed">We understand your apprehension of making online purchases of jewellery. Hence we also keep track of your order until it reaches you safely.</li>

            </ul>
            <h2 className="pt-4 text-[#545454] font-bold text-sm xl:text-sm 3xl:text-3xl">Domestic Shipping:</h2>
            <ul className='pt-4 pl-10 list-disc text-sm xl:text-sm space-y-1 3xl:text-2xl'>
              <li className="leading-relaxed">Khwaahish will ship products through reputed Logistics Providers only.</li>
              <li className="leading-relaxed">Khwaahish Diamond Jewellery will ship the product within the specified delivery time.</li>
              <li className="leading-relaxed">While paying for your order, please ensure correct shipping address. Receipt/Bill will be raised in the name of sender with given shipping address. Change in address after making receipt is not possible. Therefore, request to change in the shipping address will not be entertained</li>

            </ul>
            <h2 className="pt-4 text-[#545454] font-bold text-sm xl:text-sm 3xl:text-3xl">Shipping & Returns</h2>
            <ul className='pt-4 pl-10 list-disc text-sm xl:text-sm space-y-1 3xl:text-2xl'>
              <li className="leading-relaxed">10-Day Return Policy: Products can be returned within 10 days of the date of purchase by customers making purchases online.</li>
              <li className="leading-relaxed">If you are not satisfied with the products and wish to return them for any reason after you receive them, you can send it back to us for an Exchange/refund of your product/money within 10 days. Returns can be made only if you satisfy the conditions given below:</li>
              <li className="leading-relaxed">We only ask that the product not be used and is sent back to us with the necessary certifications, invoices, packaging and in the original condition as delivered.</li>
              <li className="leading-relaxed">Products made to specific sizes, custom modifications such as Engravings/size alterations will not be eligible for a Return.</li>
              <li className="leading-relaxed">Products have to reach us without any damage during transit. Products should be properly packaged and insured. Return shipping will be arranged by Khwaahish.</li>
              <li className="leading-relaxed">Once we receive the product, we will refund your amount after deducting the shipping charges and bank transaction charges from the Invoice Value. The remaining amount will be refunded to your Bank account/Credit Card, as applicable.</li>

            </ul>
            <h2 className="pt-4 text-[#545454] font-bold text-sm xl:text-sm 3xl:text-3xl">Exchange & Upgrades</h2>
            <ul className='pt-4 pl-10 list-disc text-sm xl:text-sm space-y-1 3xl:text-2xl'>
              <li className="leading-relaxed">We have sold a great deal of merchandise over the years and hence our Exchange policy will be based on the nature of every product.</li>
              <li className="leading-relaxed">We offer an Exchange/upgrade policy on Gold & Diamond purchases made at Khwaahish. There is no Exchange value for any Colored Gemstones, Labour, taxes, duties, GST, shipping which would have been levied on the product as applicable. This means your product's current value of Gold & Diamonds will be determined by product specifications, Color & clarity grades, market conditions and current price of similar merchandise/purity grades at Khwaahish.</li>
              <li className="leading-relaxed">Khwaahish Diamond Jewellery, at times, offers exceptional and rare high value gemstones/ diamonds/ jewellery/products which will be exchanged on a case to case basis only and may not fall under general Exchange/Buyback Policy.</li>
              <li className="leading-relaxed">We offer our Exchange Policy on orders within India and in Indian Currency Only.</li>
              <li className="leading-relaxed">All final Exchange/Upgrades/Returns of Merchandise will solely be at the discretion of the management at Khwaahish, subject to market conditions and policies adopted at the prevailing at the time of Exchange., even if they are not specifically scripted/printed/listed in any of our communications.</li>

            </ul>
            <h2 className="pt-4 text-[#545454] font-bold text-sm xl:text-sm 3xl:text-3xl">Cancellation Policy</h2>
            <ul className='pt-4 pl-10 list-disc text-sm xl:text-sm space-y-1 3xl:text-2xl'>
              <li className="leading-relaxed">Cancellation requests should be given by the customer within 5 working days of the order and the refund will only be transferred to their Bank account (irrespective of the option chosen during payment) within 7 working days.</li>
              <li className="leading-relaxed">Cancellation and refund is possible if a customer has given an order request and the product making process has not yet started.</li>
              <li className="leading-relaxed">Cancellation and refund is possible if a customer has given an order request and the product making has started, there will be a debit of wastage and making charges.</li>
              <li>Cancellation and refund is possible if a customer has given an order request but order delivery is delayed.</li>
            </ul>
            <h2 className="pt-4 text-[#545454] font-bold text-sm xl:text-sm 3xl:text-3xl">Changes To Terms & Conditions:</h2>
            <ul className='pt-4 pl-10 list-disc text-sm xl:text-sm space-y-1 3xl:text-2xl'>
              <li className="leading-relaxed">We reserve the right to change these Terms & Conditions for buying goods online from time to time. If this happens, we will notify you by posting the new Terms & Conditions for buying goods online on the website. If you do not wish to be governed by the revised Terms & Conditions for buying goods online, you may opt out from placing any orders.</li>
              <li className="leading-relaxed">These Terms & Conditions for buying goods online are governed by the law of India and you and we agree to use Chennai jurisdiction if there is any dispute between us.</li>
              <li className="leading-relaxed">If any part of these Terms & Conditions for buying goods online is found to be invalid by law, the rest of them remain valid and enforceable.</li>
            </ul>
            <h2 className="pt-4 text-[#545454] font-bold text-sm xl:text-sm 3xl:text-3xl">Disclaimer</h2>
            <ul className='pt-4 pl-10 list-disc text-sm xl:text-sm space-y-1 3xl:text-2xl'>
              <li className="leading-relaxed">The price of the products is subject to change without notice due to fluctuations in the metal price. Every effort has been made to accurately reproduce the look of this product but there might be slight variations due to on-screen representation.</li>
              <li className="leading-relaxed">Orders are accepted with full payment of estimated cost and gold rate is fixed.</li>
              <li className="leading-relaxed">Orders will also be accepted with part payment as advance money. The Gold rate prevailing on the date of billing will be applicable.</li>
              <li className="leading-relaxed">Orders will be executed on time, but delays could happen due to unforeseen circumstances.</li>
              <li className="leading-relaxed">Orders may take 5 to 6 weeks for making, so, place orders accordingly.</li>
              <li className="leading-relaxed">Variation in design and weight may occur to the lowest possible extent of 5 to 10%.</li>
              <li className="leading-relaxed">Cancellation of orders will entail a cancellation charge of 3% of ordered products total estimated value.</li>
              <li className="leading-relaxed">Khwaahish may cancel orders at any point of time without assigning any reason at the Managements discretion owing to reasons best known to them.</li>
              <li className="leading-relaxed">All disputes are subject to Chennai jurisdiction.</li>
              <li className="leading-relaxed">If there are gems in the jewellery, the price of stones are subject to change as per availability in the market.</li>
            </ul>
            <h2 className="pt-4 text-[#545454] text-sm xl:text-sm 3xl:text-3xl">CERTIFICATION</h2>
            <ul className='pt-4 pl-10 list-disc text-sm xl:text-sm space-y-1 3xl:text-2xl'>
              <li className="leading-relaxed">Every diamond at Khwaahish is handpicked and graded by our in-house team of Gemologists. Also, all Solitaires are certified by world renowned gemological laboratories, such as GIA, the Gemological Institute of America, which is the world's leading and foremost authority in Diamond Grading standards and certification.</li>
              <li className="leading-relaxed">We have also gone a step further and certify every single piece of diamond jewellery (post production) with renowned laboratories. Although not mandatory, this ensures that the Quality Control process remains intact not only Pre-Production, but also Post Production of the merchandise. The laboratories also certify that all diamonds set in the jewel are 'Natural Diamonds' and are screened to detect/avoid Synthetic, Lab-grown and HPHT-treated diamonds. The 'Third-party Lab Certified Guarantee Card' is a unique Certificate for each product and is delivered with the product as a lifelong warranty.</li>
              <li className="leading-relaxed">All products are also BIS hallmarked in tune with the guidelines outlined by the Govt of India.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsAndConditions
