'use client'
import Link from 'next/link'
import React, { useRef } from 'react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const PrivacyPolicy = ({ onClose }) => {
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
      <div className="font-centuryGothic relative w-[90%] max-w-5xl max-h-[90vh] bg-white shadow-lg overflow-hidden">
        <div 
          className="h-[90vh] overflow-y-auto font-centurygothic text-gray-700            
            [&::-webkit-scrollbar-track]:bg-gray-100 
            [&::-webkit-scrollbar-thumb]:bg-[#663634] 
            "
        >
          {/* Header with border bottom */}
          <div className="sticky top-0 bg-white z-10">
            <div className="flex flex-col  justify-between items-center md:pt-4 px-4 md:px-8 py-2">
            <button 
                onClick={handleClose} 
                className="p-2 self-end transition-transform duration-300 hover:rotate-180"
              >
                <Image
                  src="/assets/eshop/output-onlinejpgtools-removebg-preview.png"
                  alt="Close"
                  width={15}
                  height={15}
                  className='3xl:w-10  '
                />
              </button>
              <div className=' self-start'>
                <h1 className="tracking-[2px] font-centurygothic text-[#663634] text-xl md:text-2xl 3xl:text-3xl uppercase">
                  PRIVACY POLICY
                </h1>
                <div className="w-24 h-[1px] bg-[#663634] mt-1"></div>
              </div>
            
            </div>
          </div>

          {/* Scrollable content */}
          <div className="px-4 py-4 md:px-8">
            {/* policy div */}
            <p className="pt-2 leading-relaxed text-sm xl:text-sm 3xl:text-2xl">Thank you for visiting Khwaahish Diamonds. We value the trust you place in us, and therefore we insist upon the highest standards for secure transactions and customer information privacy. This online Privacy Policy discloses Khwaahish Diamonds information practices for this Website and subscriber/membership-based services, including the type of information being collected, method of information collection, use of such information, and sharing such information with third parties. By visiting Khwaahish Diamonds, you expressly consent to our use and disclosure of your personal information in any manner described in this Privacy Policy. If you do not agree to these terms, please exit this page and you may not access or use the Website. This Privacy Policy extends to both "Users" (who visit the Website but do not transact business on the Website) as well as "Members" (who are registered and authorized by the Website to transact business on the Website).</p>
           
            <h2 className="pt-3 font-bold leading-relaxed text-sm xl:text-sm 3xl:text-2xl">Collection of Personal Information</h2>
            <p className="pt-4 leading-relaxed text-sm xl:text:sm 3xl:text-2xl">By accepting this privacy policy, you authorize Khwaahish Diamonds to collect, store and use any information that you enter on our website or provide us in some other way. To enable you to become a member or subscriber of our Website, we need your basic personal information like your name, address, email address, and phone number. We assure you that at no time will this information be sold nor shared with parties not associated with us.</p>
      
             <h2 className="pt-3 font-bold 3xl:text-2xl">IP Address</h2>
             <p className="pt-4 leading-relaxed text-sm xl:text:sm 3xl:text-2xl">When you visit our Website, Khwaahish Diamonds collects your IP address, among other details, to help diagnose problems with its server, to administer and tune the operation of its website, analyze trends, track traﬃc patterns, gather demographic information for aggregate use, and track the date and duration of each session within the Website. Your IP address may also be used in combination with your personal information to prevent fraud or abuse, customize your shopping experience, improve our Website, customer service, products, and promotional eﬀorts, and understand your preferences, patterns, and interests.</p>
      
      
       <h2 className="pt-3 font-bold leading-relaxed text-sm xl:text-sm 3xl:text-2xl">Data Collection Devices, Such as Cookies and Web Beacons</h2>
       <p className="pt-4 leading-relaxed text-sm xl:text:sm 3xl:text-2xl">Khwaahish Diamonds collects data through cookies and other monitoring technologies to enhance your browsing and shopping experience on our website. "Cookies" are small pieces of information that are stored by your browser on your computer's hard drive to collect information about your activities on our Website. We may authorize third parties to use cookies and other monitoring technologies to compile information about the use of the Website or interaction with advertisements that appear on the Website. We do have access or control over these cookies. We do not link the information we store in cookies to any personally identiﬁable information you submit while on our Website. We use session ID cookies and persistent cookies. A session ID cookie expires when you close your browser.A persistent cookie remains on your hard drive for an extended period of time. You are always free to decline cookies if your browser permits (You can remove persistent cookies by following directions provided in your Internet browser's "help" ﬁle); although, by declining the use of cookies you may not be able to use certain features on the Website.</p>
      
       <h2 className="pt-3 font-bold leading-relaxed text-sm xl:text-sm 3xl:text-2xl">Use of Information Collected</h2>
       <p className="pt-4 leading-relaxed text-sm xl:text:sm 3xl:text-2xl">All personal information that we collect from our customers is used to improve our relevance to you and to enhance your shopping experience with us. Khwaahish Diamonds owns all the information collected via the Website. As applicable, the information collected shall be used to contact you, to provide the products that you have ordered or requested. Additionally, we may send you (via email or other means) oﬀerings of products or services and update you on all the special oﬀers available on the Website. This information may also be used to monitor and improve the Website; calculate the number of visitors; to know the geographical locations of the visitors and demographics, visitors' preferences, interests, and behavior & Website usage statistics which we may share with our sponsors, advertisers or other third-party marketing partners. When you contact Khwaahish Diamonds through any means such as chat/email, Khwaahish Diamonds reserves the right to include your email ID for marketing communications. You can unsubscribe from such communications anytime you wish to do so.</p>
      
      
       <h2 className="pt-3 font-bold leading-relaxed text-sm xl:text-sm 3xl:text-2xl">Use of our website images or product images</h2>
       <p className="pt-4 leading-relaxed text-sm xl:text:sm 3xl:text-2xl">All our website and product images are copyright protected. You should not use any of our images without our prior consent. Any unauthorized use of our images will be considered as copyright infringement.</p>
      
       <h2 className="pt-3 font-bold leading-relaxed text-sm xl:text-sm 3xl:text-2xl">Sharing of Information</h2>
        <p className="pt-4 leading-relaxed text-sm xl:text:sm 3xl:text-2xl">Any personal information, if collected, will be passed on to our trusted partners and service providers who will need to have access to the information upon placing an order. We use trusted third-party service providers to perform certain services on our behalf, including shipping, payment processing, data storage/management, web hosting, web analytics, fulﬁlment, assembly, marketing, mailing, emailing, etc. These service providers only receive personal information if such information is needed to perform their function(s), and they are not authorized to use any personal information for any other purpose(s) other than the purpose(s) deﬁned by Khwaahish Diamonds.</p>
       
       <h2 className="pt-3 font-bold leading-relaxed text-sm xl:text-sm 3xl:text-2xl">Business Transfer</h2>
        <p className="pt-4 leading-relaxed text-sm xl:text:sm 3xl:text-2xl">Your personal information may be disclosed as part of any merger, sale of company assets, or acquisition, as well as in the event of insolvency, bankruptcy, or receivership, in which case, personal information would be transferred as one of the business assets of the Company.</p>
       
       <h2 className="pt-3 font-bold leading-relaxed text-sm xl:text-sm 3xl:text-2xl">Comments</h2>
        <p className="pt-4 leading-relaxed text-sm xl:text:sm 3xl:text-2xl">We value your comments, feedback, and testimonials, which help us improve our Website, products, and services. By making such submissions, you assign your rights in the submissions to us.</p>
       
       <h2 className="pt-3 font-bold leading-relaxed text-sm xl:text-sm 3xl:text-2xl">Third Party Personal Information</h2>
        <p className="pt-4 leading-relaxed text-sm xl:text:sm 3xl:text-2xl">If you use our referral service to tell a friend about our jewellery and Website, we will request your friend's email address. We will send your friend a one-time email inviting him or her to visit the Website. Khwaahish Diamonds stores this information for the sole purpose of sending this one-time email and tracking the success of our referral program. We also provide you with the opportunity to share a product or your wish list with a friend. If you choose to do so, we will request your friend's email address in order to send them a one-time email featuring the product or your wish list.</p>
       
       <h2 className="pt-3 font-bold leading-relaxed text-sm xl:text-sm 3xl:text-2xl">Security</h2>
        <p className="pt-4 leading-relaxed text-sm xl:text:sm 3xl:text-2xl">Khwaahish Diamonds is committed to the protection of the personally identiﬁable information you share with us. We utilize a combination of physical and electronic security technologies, procedures, and organizational measures to help protect your personally identiﬁable information from unauthorized access, use, or disclosure. When we transfer sensitive personal information (for example, credit card information) over the Internet, we protect it using Secure Sockets Layer (SSL) encryption technology. Our site has stringent security measures in place to protect the loss, misuse, and alteration of the information under our control. Once we have your information, and it is in our possession, we adhere to strict guidelines to protect it against unauthorized access. While we strive to safeguard your personal information once we receive it, no transmission of data over the Internet or any other public network can be guaranteed to be 100% secure, and, accordingly, we cannot guarantee or warrant the security of any information you disclose or transmit to us.</p>
           
        <h2 className="pt-3 font-bold leading-relaxed text-sm xl:text-sm 3xl:text-2xl">Phishing</h2>
         <p className="pt-4 leading-relaxed text-sm xl:text:sm 3xl:text-2xl">Our website <Link href="https://khwaahish-999.web.app/" className="text-[#663634]">khwaahish.com</Link> is not directed toward children and does not sell products for purchase by children. Khwaahish Diamonds does not knowingly collect personal information from anyone under the age of eighteen.</p>    
           
         <h2 className="pt-3 font-bold leading-relaxed text-sm xl:text-sm 3xl:text-2xl">Links</h2>
          <p className="pt-4 leading-relaxed text-sm xl:text:sm mb-10 3xl:text-2xl">This website may contain links that may lead you to other Websites. Please note that once you leave our Website, you will be subjected to the privacy policy of the other Website and this privacy policy will no longer apply. BY USING THIS WEBSITE, YOU SIGNIFY YOUR AGREEMENT TO THE TERMS OF THIS PRIVACY POLICY. Khwaahish Diamonds RESERVES THE RIGHT, IN OUR SOLE DISCRETION, TO CHANGE, MODIFY AND / OR DELETE PORTIONS OF THE TERMS OF THIS PRIVACY POLICY AT ANY TIME. If you have any questions about this Privacy Policy, please feel free to CONTACT US via the links at the bottom of the Website or write to us at Ashwin@khwaahish.com. ALL MATTERS OF DISPUTE ARE SUBJECT TO THE JUDICIARY OF CHENNAI.</p>   
         
         </div>
        
         </div>
         
         
       
       </div>
     </div>
   )
 }
 
 export default PrivacyPolicy
  