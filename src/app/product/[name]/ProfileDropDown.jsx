import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import { faClipboard,faRightFromBracket    } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
const ProfileDropDown = ({setShowProfileDropdown}) => {
  return (
   <div  onMouseLeave={()=>setShowProfileDropdown(false)}  className='shadow-2xl text-[#663634] rounded-lg w-auto absolute right-2  bg-[#f2e5e3] pr-20 py-2'>
       <div className='flex p-3'>
         <img src="/assets/icon/user.png" className='h-10' alt="" />
         <div className='px-2'>
         <h1 className='text-xl'>Hi, User</h1>
         <p>email@gmail.com</p>
         </div>
       </div>
       <ul className='pl-6'>
         <Link href='/my-account/orders'>
         <li className='py-1 hover:text-[#be5551]'><FontAwesomeIcon className='pr-4' icon={faClipboard} /> My Orders</li>      
         </Link>
         <Link href='/my-account/edit-account'>      
         <li className='py-1 hover:text-[#be5551]'><FontAwesomeIcon className='pr-4' icon={faUser} />Edit Profile</li>
         </Link>
         
         <Link href='/gulz'>
         <li className='py-1 hover:text-[#be5551]'><FontAwesomeIcon className='pr-3' icon={faRightFromBracket} /> Log Out</li>      
         </Link>
       </ul>
       </div> 
  )
}

export default ProfileDropDown
