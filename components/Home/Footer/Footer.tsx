import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='py-16 bg-[#0f0715]'>
        <div>
            <Image src='logo.png' alt='logo' width={180} height={180} className='mx-auto' />
        </div>
        <div className='flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-center md:space-x-10 text-white font-bold'>
          <div>Home.</div>
          <div>Services.</div>
          <div>Project.</div>
          <div>Reviews.</div>
          <div>Contact.</div>
        </div>
        <p className='text-white text-opacity-60 mt-6 text-center'>&copy; 2024 All Rights Reserved by Ismail Oni</p>
    </div>
  )
}

export default Footer
