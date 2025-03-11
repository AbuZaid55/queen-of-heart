import React from 'react'

function DashboardPage() {
  return (
    <div className=' font-gothic p-2 '>
      <h1 className='text-black font-bold 3xl:text-2xl'>Welcome to Khwaahish Diamonds!</h1>
      <p className='mt-4 leading-6 tracking-wider 3xl:text-xl'>
        We&apos;re thrilled to have you back with us. Thank you for choosing Khwaahish Diamonds.
        Your continued support means the world to us. Feel free to explore your account and
        take advantage of the exclusive Diamond jewels designed just for you. From your
        account dashboard you can view your{' '}
        <span className='cursor-pointer underline font-bold text-[#663624]'>
          recent orders,
        </span>{' '}
        manage your{' '}
        <span className='cursor-pointer underline font-bold text-[#663624]'>
          billing address,
        </span>{' '}
        and{' '}
        <span className='cursor-pointer underline font-bold text-[#663624]'>
          edit your password and account details.
        </span>
      </p>
      <p className='mt-4 leading-6 tracking-wider 3xl:text-xl'>
        Need assistance or have any questions? Our dedicated customer support team is here to
        help. Simply click on the &quot;
        <span className='cursor-pointer underline font-bold text-[#663624]'>Contact Us</span>
        &quot; link, and we&apos;ll be happy to assist you.
      </p>
      <p className='mt-4 leading-6 tracking-wider 3xl:text-xl'>Happy shopping!</p>
    </div>
  )
}

export default DashboardPage