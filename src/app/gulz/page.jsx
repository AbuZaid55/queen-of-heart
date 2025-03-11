'use client'
import dynamic from "next/dynamic";
import Text from "./Text";
import Hero from "./Hero";
import Styles from "./Styles"

// Lazy Loaded Components
const  Recommendation = dynamic(()=>import('@/app/gulz/Recommendation'))
const  Collection = dynamic(()=>import('@/app/gulz/Collection'))
const  Slider = dynamic(()=>import('@/app/gulz/Slider'))
const  Trending = dynamic(()=>import('@/app/gulz/Trending'))
const  Benifit = dynamic(()=>import('@/app/gulz/Benifit'))
const  Testimonial = dynamic(()=>import('@/app/gulz/Testimonial'))
const  Footer = dynamic(()=>import('@/components/Main/Footer'))


const Gulz = () => {
  return (
    <div>
      <Hero/>
      <Text/>
      <Recommendation/>
      <Styles/>
      <Collection />
      <Slider/>
      <Trending />
      <Benifit />
      <Testimonial /> 
      
    </div>
  )
}

export default Gulz
