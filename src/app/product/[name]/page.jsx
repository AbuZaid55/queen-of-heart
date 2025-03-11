'use client'
import React, { useEffect } from 'react'
import dynamic from 'next/dynamic';
import ProductDetails from './ProductDetails'
import "./style.css";
import { useParams, useRouter } from 'next/navigation';
// import  from '../gulz/Testimonial';

const SwiperComponent = dynamic(() => import("./Swiper"),{ssr:false});
const Testimonial = dynamic(() => import("../../gulz/Testimonial"),{ssr:false});

const colors = [
  { name: "peach", colorCode: "#F4B183" },
  { name: "silver", colorCode: "#D9D9D9" },
  { name: "gold", colorCode: "#D4AF37" },
];


const image = {
  peach:["/assets/images/image_22.png", "/assets/images/image.png", "/assets/images/image 23.png", "/assets/images/image 24.png", "/assets/images/image 25.png",'/assets/images/Rectangle 6.png'],
  silver:['/assets/images/silver1.webp','/assets/images/silver3.webp','/assets/images/silver2.webp','/assets/images/silver4.webp','/assets/images/silver5.webp','/assets/images/silver6.webp'],
  gold:['/assets/images/gold1.webp','/assets/images/gold2.webp','/assets/images/gold3.webp','/assets/images/gold4.webp','/assets/images/gold5.webp','/assets/images/Rectangle 6.png']
}

const swiperImages = ["/assets/images/image_22.png", , "/assets/images/image 23.png", "/assets/images/image 24.png", "/assets/images/image 25.png","/assets/images/image 24.png"]

const page = () => {
  const {name} = useParams()
  const router = useRouter()
  useEffect(()=>{
    if(!name){
      router.back()
    }
  },[name])
  return (
    <div className=''>
    <ProductDetails name={name} colors={colors} image={image} />
    <SwiperComponent images={swiperImages}/>
    <Testimonial/>
    </div>
  )
}

export default page
