'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import Footer from './Footer'

import useLenis from '@/Data/hooks/useLenis'
import Header from './Header'
import CustomHeader from './CustomHeader'
import BackToTop from './FloatingActions'

const LayoutWrapper = ({children}) => {
  useLenis()

  const pathName = usePathname()  
  const customHeaderRoutes = ['/' , '/festara' , '/fazza']
  const hideFooterRoutes = pathName === '/my-account' || pathName === '/my-account/'


return (
    <>
   
   {!hideFooterRoutes && (customHeaderRoutes.includes(pathName)? <CustomHeader /> : <Header />)}
   <BackToTop/>
      {children}
   {!hideFooterRoutes && <Footer />}
    </>
)
}

export default LayoutWrapper
