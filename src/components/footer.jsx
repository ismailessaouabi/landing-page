import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCableCar } from '@fortawesome/free-solid-svg-icons'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


export const Footer = () => {
  return (
    <section className="flex relative w-full">

    <div className=" w-full flex justify-between px-14 py-10  mt-28  bg-polor" >


        <div className=' h-auto '>
          <div className='font-bold mb-2 text-4xl'><FontAwesomeIcon className='text-orange-600 font-bold mb-2 text-4xl' icon={faCableCar}/>Brandbuzz</div>
          <div className='flex'>
            <FaFacebook  size={30} color="#4267B2" />
            <FaTwitter size={30} color="#1DA1F2" />
            <FaInstagram size={30} color="#E1306C" />
          </div>
        </div>
        <div>
          <h1 className='text-xl font-semibold mb-2'>Company</h1>
          <p className=' text-slate-600'>About</p>
          <p className=' text-slate-600'>Contact</p>
          <p className=' text-slate-600'>Careers</p>
          <p className=' text-slate-600'>Team</p>
        </div>


        <div>
          <h1  className='text-xl font-semibold mb-2'>Designs</h1>
          <p className=' text-slate-600'>Design contests</p>
          <p className=' text-slate-600'>1-to-1 projects</p>
          <p className=' text-slate-600'>Find a designer</p>
          <p className=' text-slate-600'>Pricing</p>
        </div>

        <div>
          <h1 className='text-xl font-semibold mb-2'>Rescources</h1>
          <p className=' text-slate-600'>Become</p>
          <p className=' text-slate-600'>Blog</p>
          <p className=' text-slate-600'>Design</p>
          <p className=' text-slate-600'>Affilates</p>
        </div>

        
    </div>


  </section>
  )
}
