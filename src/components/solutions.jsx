import React from 'react'



export const Solutions = () => {
  return (
    <section className=" relative w-full flex px-32 justify-between items-center bg-polor">
    <img className='max-w-[600px]' src="/images/img2.png" alt="" />
    <div>
      <h1  className='text-3xl font-bold mb-5 '>Simple <span className='text-orange-600 text-3xl font-bold '>Solutions</span></h1>
      <p className='text-xl font-normal mb-5 '>An advertising agency helps businesses promote their products or services by creating strategic and creative campaigns</p>
      <ul className='pl-7'>
        <li className='flex gap-3 justify-between items-center w-fit mb-3'>
          <div class="w-10 h-10 bg-orange-600 rounded-full flex justify-center text-2xl text-white items-center">1</div>
          <div className='flex flex-col'>
            <h1 className='text-xl font-bold' >Contact US</h1>
            <p className='text-xl text-slate-500'>Contact as for boost your brand</p>
          </div>
        </li>
        
        <li className='flex gap-3 justify-between items-center w-fit mb-3'>
          <div class="w-10 h-10 bg-orange-600 rounded-full flex justify-center text-2xl text-white items-center">1</div>
          <div className='flex flex-col'>
            <h1 className='text-xl font-bold' >Counsuit</h1>
            <p className='text-xl text-slate-500'>always avalable for your quiestions</p>
          </div>
        </li>

        <li className='flex gap-3 justify-between items-center w-fit mb-3'>
          <div class="w-10 h-10 bg-orange-600 rounded-full flex justify-center text-2xl text-white items-center">1</div>
          <div className='flex flex-col'>
            <h1 className='text-xl font-bold' >Place order</h1>
            <p className='text-xl text-slate-500'>Contact as for boost your brand</p>
          </div>
        </li>

        <li className='flex gap-3 justify-between items-center w-fit mb-3'>
          <div class="w-10 h-10 bg-orange-600 rounded-full flex justify-center text-2xl text-white items-center">1</div>
          <div className='flex flex-col'>
            <h1 className='text-xl font-bold' >Payment</h1>
            <p className='text-xl text-slate-500'>Contact as for boost your brand</p>
          </div>
        </li>
      </ul>
      <div>
      <button className='bg-orange-600 px-5 py-1 rounded-lg text-white shadow-orange-600 shadow-lg'>Get Started</button>
      <button className='bg-transparent border-2 border-orange-500 px-5 py-1 rounded-lg ml-6 shadow-orange-600 shadow-lg'>Get Started</button>
      </div>
    </div>
</section>

  )
}
