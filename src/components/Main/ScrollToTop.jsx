import { usePathname } from "next/navigation"
import { useEffect } from "react"

const ScrollToTop = () => {
  const pathName = usePathname()
  useEffect(()=>{
  window.scrollTo({
    top:0,
    behavior:'smooth'
  })
 },[pathName])
   return null
}

export default ScrollToTop