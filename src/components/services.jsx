import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSearch  , faAd  ,faAppleWhole ,faCalendar} from '@fortawesome/free-solid-svg-icons'



export const Services = () => {
  return (
    <section className="flex flex-col mb-24 ">
    <div className="flex flex-col items-center gap-6 mb-5">
      <h1  className='text-4xl font-bold'>We provide Best <span className='text-orange-600'>Services</span></h1>
      <p className='text-xl text-slate-500 max-w-[500px] text-center'>An advertising agency helps businesses promote their products or services by creating strategic and creative campaigns</p>
    </div>
    <div className=' flex justify-around flex-wrap gap-3 px-32  '>
      <div className=" relative flex p-6 shadow-lg shadow-slate-700 rounded-lg overflow-hidden w-[300px]">
        <div className=' absolute top-0 left-0 flex justify-center items-center 
                          w-20 h-20 bg-orange-400 rounded-br-2xl  '>
          <FontAwesomeIcon className='text-2xl' icon={faSearch} />       
        </div>
        <div className='mt-16'>
          <h1 className='text-xl font-semibold'>Seo/Sem</h1>
          <p className='mb-2 '>"Boost your website's visibility and rankings with expert SEO strategies tailored to drive organic traffic and engagement."</p>
          <button className='bg-orange-600 px-5 py-1 rounded-lg text-white shadow-orange-600 shadow-lg'>Get Started</button>

        </div>
       
      </div>
      <div className=" relative flex p-6 shadow-lg shadow-slate-700 rounded-lg overflow-hidden w-[300px]">
        <div className=' absolute top-0 left-0 flex justify-center items-center 
                          w-20 h-20 bg-orange-400 rounded-br-2xl  '>
          <FontAwesomeIcon className='text-2xl' icon={faAd} />       
        </div>
        <div className='mt-16'>
          <h1 className='text-xl font-semibold'>Markenting</h1>
          <p className='mb-2 '>Marketing is the strategic process of promoting, selling, and distributing products or services to meet customer needs and drive business growth.</p>
          <button className='bg-orange-600 px-5 py-1 rounded-lg text-white shadow-orange-600 shadow-lg'>Get Started</button>

        </div>
       
      </div>
      <div className=" relative flex p-6 shadow-lg shadow-slate-700 rounded-lg overflow-hidden w-[300px]">
        <div className=' absolute top-0 left-0 flex justify-center items-center 
                          w-20 h-20 bg-orange-400 rounded-br-2xl  '>
          <FontAwesomeIcon className='text-2xl' icon={faAppleWhole} />       
        </div>
        <div className='mt-16'>
          <h1 className='text-xl font-semibold'>Appel</h1>
          <p className='mb-2 '>Apple is a globally renowned technology company known for its innovative products like the iPhone, Mac, and Apple Watch.</p>
          <button className='bg-orange-600 px-5 py-1 rounded-lg text-white shadow-orange-600 shadow-lg'>Get Started</button>

        </div>
       
      </div>
      <div className=" relative flex p-6 shadow-lg shadow-slate-700 rounded-lg overflow-hidden w-[300px]">
        <div className=' absolute top-0 left-0 flex justify-center items-center 
                          w-20 h-20 bg-orange-400 rounded-br-2xl  '>
          <FontAwesomeIcon className='text-2xl' icon={faCalendar} />       
        </div>
        <div className='mt-16'>
          <h1 className='text-xl font-semibold'>Php</h1>
          <p className='mb-2 '>PHP is a widely-used open-source scripting language designed for web development, enabling dynamic content and server-side functionality.</p>
          <button className='bg-orange-600 px-5 py-1 rounded-lg text-white shadow-orange-600 shadow-lg'>Get Started</button>

        </div>
       
      </div>

    </div>
  </section>
  )
}
