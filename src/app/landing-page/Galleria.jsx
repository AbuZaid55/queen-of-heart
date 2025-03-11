import Image from 'next/image'
import React, { useRef, useEffect } from 'react'

const Galleria = () => {
  const galleriaRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      const modal = document.getElementById('imageModal')
      const modalImage = document.getElementById('modalImage')
      if (modal && modalImage) {
        modalImage.style.maxHeight = `${window.innerHeight * 0.9}px`
        modalImage.style.maxWidth = `${window.innerWidth * 0.9}px`
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section ref={galleriaRef} className="font-gothic text-center w-full h-auto flex-col sm:py-3 md:py-10 lg:py-12">
      {/* Header Section */}
      <div className="flex items-center justify-center mb-3 sm:mb-4 md:mb-6 lg:mb-8">
        <hr className="w-4 sm:w-6 md:w-8 lg:w-16 h-0.5 bg-gray-700 border-0 rounded" />
        <span className="text-sm lg:text-2xl  3xl:text-4xl sm:text-base md:text-lg lg:text-container text-gray-700 mx-2 sm:mx-3 md:mx-4">
          THE GALLERIA
        </span>
        <hr className="w-4 sm:w-6 md:w-8 lg:w-16 h-0.5 bg-gray-700 border-0 rounded" />
      </div>

      {/* Description */}
      <p className="text-xs sm:text-sm md:text-base 3xl:text-2xl  text-gray-800 mb-2 sm:mb-3 md:mb-4 tracking-wide px-2 sm:px-4 md:px-0">
        Khwaahish Diamond Jewellery, Chennai
      </p>
      <p className="text-[10px] sm:text-xs md:text-[15px] 3xl:text-2xl lg:leading-[25px] text-gray-500 tracking-wide px-4 sm:px-8 md:px-16 lg:px-72 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
        Located in the heart of Chennai, Queen Of Hearts, Jewels Galleria, brings the finest accessible
        diamond jewellery to life. Explore curated collections in a space designed for luxury and
        personalised service.
      </p>

      {/* Image Section */}
      <div className="relative w-full max-w-[95vw]  3xl:h-[70vh]  sm:max-w-[90vw] md:max-w-6xl mx-auto px-2 sm:px-4 md:px-8 lg:px-0">
        <Image
          src="/assets/Khwaahish-Store-img.jpg"
          alt="Khwaahish Galleria"
          width={1920}
          height={1080}
          className="w-full max-w-full sm:max-w-5xl h-[80vw] sm:h-[400px] md:h-[520px] 3xl:h-[70vh]  lg:h-[35rem] mx-auto border-2 sm:border-4 md:border-6 lg:border-8 border-gray-100 cursor-pointer transition-transform duration-300"
          onClick={() => document.getElementById('imageModal').classList.remove('hidden')}
        />

        {/* Modal */}
        <div
          id="imageModal"
          className="hidden fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm z-[9999] flex items-start justify-center p-2 sm:p-4 md:p-6 lg:p-8"
        >
          <div className="relative w-full h-full flex items-start justify-center pt-[5vh]">
            <Image
              id="modalImage"
              src="/assets/Khwaahish-Store-img.jpg"
              alt="Khwaahish Galleria"
              fill
              className="max-w-[95%] sm:max-w-[90%] max-h-[90vh] object-contain cursor-zoom-in transition-all duration-300"
              onClick={(e) => {
                const img = e.target;
                if (img.classList.contains('zoomed')) {
                  img.style.transform = 'scale(1)';
                  img.classList.remove('zoomed');
                  img.classList.add('cursor-zoom-in');
                  img.classList.remove('cursor-zoom-out');
                } else {
                  img.style.transform = 'scale(2)';
                  img.classList.add('zoomed');
                  img.classList.remove('cursor-zoom-in');
                  img.classList.add('cursor-zoom-out');
                }
              }}
              onMouseMove={(e) => {
                const img = e.target;
                if (img.classList.contains('zoomed')) {
                  const rect = img.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const xPercent = (x / rect.width) * 100;
                  const yPercent = (y / rect.height) * 100;
                  img.style.transformOrigin = `${xPercent}% 0%`; // Always zoom from top
                }
              }}
              onTouchMove={(e) => {
                if (e.touches.length === 2) {
                  e.preventDefault();
                  const touch1 = e.touches[0];
                  const touch2 = e.touches[1];
                  const dist = Math.hypot(
                    touch2.pageX - touch1.pageX,
                    touch2.pageY - touch1.pageY
                  );
                  const img = e.target;
                  img.style.transform = `scale(${dist / 100})`;
                }
              }}
            />

            {/* Modal Buttons */}
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 flex space-x-1 sm:space-x-2 md:space-x-3">
              {/* Zoom Button */}
              <button
                className="p-1 sm:p-1.5 md:p-2 bg-white/90 hover:bg-white rounded-full transition-colors"
                onClick={() => {
                  const img = document.getElementById('modalImage');
                  if (img.classList.contains('zoomed')) {
                    img.style.transform = 'scale(1)';
                    img.classList.remove('zoomed');
                  } else {
                    img.style.transform = 'scale(2)';
                    img.classList.add('zoomed');
                  }
                }}
              >
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              {/* Fullscreen Button */}
              <button
                className="p-1 sm:p-1.5 md:p-2 bg-white/90 hover:bg-white rounded-full transition-colors"
                onClick={() => {
                  const elem = document.getElementById('modalImage');
                  if (!document.fullscreenElement) {
                    elem.requestFullscreen().catch(console.error);
                  } else {
                    document.exitFullscreen();
                  }
                }}
              >
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  />
                </svg>
              </button>

              {/* Share Button */}
              <button
                className="p-1 sm:p-1.5 md:p-2 bg-white/90 hover:bg-white rounded-full transition-colors"
                onClick={() => {
                  if (navigator.share) {
                    navigator
                      .share({
                        title: 'Khwaahish Galleria',
                        text: 'Check out our beautiful jewelry store!',
                        url: window.location.href,
                      })
                      .catch(console.error);
                  } else {
                    navigator.clipboard.writeText(window.location.href)
                      .then(() => alert('Link copied to clipboard!'))
                      .catch(console.error);
                  }
                }}
              >
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
              </button>

              {/* Close Button */}
              <button
                className="p-1 sm:p-1.5 md:p-2 bg-white/90 hover:bg-white rounded-full transition-colors"
                onClick={() => {
                  const modal = document.getElementById('imageModal');
                  const img = document.getElementById('modalImage');
                  img.style.transform = 'scale(1)';
                  img.classList.remove('zoomed');
                  modal.classList.add('hidden');
                }}
              >
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Galleria