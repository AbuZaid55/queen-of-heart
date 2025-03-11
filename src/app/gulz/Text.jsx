'use client'

import { useState } from "react";
const Text = () => {
  const [activeButton, setActiveButton] = useState("rings");


  return (
    <section className="font-gothic py-8 w-full bg-[#F7ECEB]  font-light p-3 md:p-6" aria-label="Jewelry Recommendations">
      <div className="max-w-7xl mx-auto   3xl:max-w-screen-2xl">
        <h2 className="text-center mt-8 md:mt-5 3xl:text-3xl  text-gray-700">
          Life is a Party, Bling in Style !
        </h2>
        <p className="text-center  mt-4 md:mt-7 w-[92%] 3xl:text-2xl 3xl:  lg:w-[90%] sm:leading-7 md:w-[98%] mx-auto leading-relaxed md:leading-relaxed tracking-wider text-gray-700">
          Discover versatile jewellery designed to slay your look- morning to
          midnight, your way. Bold, lightweight diamond jewellery that's easy to
          wear but impossible to ignore. Our collection is simple, playful and
          extremely modern – fully incorporating diamonds into everyday life
          without removing any elegance or style.
        </p>
        <p className="text-center mt-4 md:mt-7  3xl:text-2xl text-gray-700">
          Because who says chic can't be comfy?
        </p>

 


      </div>


    </section>
  );
};

export default Text;
