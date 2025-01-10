import React from 'react'

export const Our = () => {
  return (
    <section className="flex justify-between items-center px-[100px]">
      <div className='max-w-[400px]'>
        <h1 className=' mb-5 text-3xl font-bold'>Our <span className='text-3xl  font-bold text-orange-500'>Agency</span> </h1>
        <p className='text-xl text-slate-600 mb-3'>We believe in the power of data. Our analytics-driven approach allows us to make informed Decisions and optimize your marketing efforts for maximum ROI. Let's turn your data into actionable insights.
           Tailored Solutions for Your Business.</p>
        <button className='bg-orange-600 px-5 text-white font-semibold py-2 rounded-md shadow-md shadow-orange-500'>Learn more</button>
      </div>
      <img className='max-w-[500px]' src="/images/img3.png" alt="" />
    </section>
  )
}
