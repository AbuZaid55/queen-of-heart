'use client'
import Image from 'next/image'

const Hero = () => {
  return (
    <div>
      <div className="hidden md:block relative w-screen h-full max-w-full min-h-[50vw] sm:h-[150vw] md:h-[50vw] lg:h-screen object-cover">
        <Image
          src='/assets/eshop/headerPc.avif'
          alt="Hero Desktop"
          fill
          sizes='100vw'
          className="object-left-top object-cover"
          priority
        />
      </div>

      <div className="md:hidden relative w-screen h-full max-w-full min-h-[80vh] sm:h-[140vw] md:h-[50vw] lg:h-[40vw] xl:h-[50vw] object-cover">
        <Image 
          src='/assets/eshop/header.avif'
          alt="Hero Mobile"
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-left-top object-cover "
          priority
        />
      </div>
    </div>
  )
}

export default Hero
