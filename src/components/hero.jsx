import React from 'react'



export const Hero = () => {
  return (
    <main className='flex pt-8 justify-between items-center relative w-full px-32 mb-14'>
      <div className='max-w-96  flex flex-col gap-5  mt-20'>
        <h1 className='text-4xl font-bold'>We create <span className='text-orange-600'>solutions</span> for your business</h1>
        <p className='text-xl text-slate-500'>
            An advertising agency helps businesses promote their products or services by creating strategic and creative campaigns. It offers services like ad design, social media management, 
            and media buying. The goal is to reach the target audience and strengthen the brand image.
        </p>
        <button className='bg-orange-600 px-5 py-1 rounded-lg text-white shadow-orange-600 shadow-lg'>Get Started</button>
      </div>
      <img className='absolute pt-14 w-1/3 top-0 right-20' src="/images/image.png" alt="" />
    </main>
  )
}
