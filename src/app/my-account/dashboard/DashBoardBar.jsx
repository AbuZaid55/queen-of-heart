'use client'

import Link from 'next/link'
import React, { useState } from 'react'


function dashBoard() {
    const [active, setactive] = useState('Dashboard')

    //This is a mockup for the dashboard menu items. Replace it with your actual menu items.
    const textofDash = [{
        name: 'Dashboard',
        link: '/my-account/dashboard'
    }, {
        name: 'Orders',
        link: '/my-account/orders'
    }, {
        name: 'Addresses',
        link: '/my-account/edit-address'
    }, {
        name: 'Account Details',
        link: '/my-account/edit-account'
    }, {
        name: 'My wishlist',
        link: '/my-account/my-wishlist'
    }, {
        name: 'Logout',
        link: '/'
    }
    ]



    return (
        <>
            <div className=" lg:w-[240px] w-[95%]    p-1  text-[14px]">
                {textofDash.map((item, i) => (
                    <div key={i}> <Link href={item.link}>
                        <button
                            onClick={() => setactive(item.name)}
                            className={`${active == item.name ? " bg-[#663634] text-white border-[#663634] " : "bg-[#fcfcfc] border-[#efefef] text-black"} text-nowrap  text-left px-2 py-3 border border-[#efefef] lg:w-[240px] w-[95%]   hover:bg-[#663634] hover:text-white`}
                        >{item.name}
                        </button></Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default dashBoard