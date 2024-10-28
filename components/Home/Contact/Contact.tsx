import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

const Contact = () => {
  return (
    <div className='py-16 bg-[#050709]'>
        <div className='grid grid-cols-1 xl:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center gap-10 mt-10'>
            {/* Contact Form  */}
            <div data-aos='fade-left' data-aos-anchor-placement='top-center'>
                <ContactForm />
            </div>
            {/* Contact Info  */}
            <div data-aos='fade-right' data-aos-delay='100' data-aos-anchor-placement='top-center' className='xl:mx-auto'>
                <ContactInfo />
            </div>
        </div>
    </div>
  )
}

export default Contact