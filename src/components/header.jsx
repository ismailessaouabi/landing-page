import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCableCar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'



export const Header = () => {
  return (
  <header className=" fixed z-50 w-full bg-white shadow-black shadow-md 
                      flex justify-between items-center py-5 px-32">

    <div className='flex gap-1 items-center cursor-pointer'>
      <FontAwesomeIcon className='text-orange-600 font-bold text-3xl ' icon={faCableCar} />
      <h2 className='text-1xl font-bold'>BrandBuzz</h2>
    </div>

    <ul className="flex gap-14">
      <Link to="/" className='text-orange-600 font-semibold  cursor-pointer '>Home</Link>
      <Link to='/about' className='font-semibold cursor-pointer'>About US</Link>
      <li className='font-semibold cursor-pointer'>Contact Us</li>
      <li className='font-semibold cursor-pointer'>Services</li>
      <li className='font-semibold cursor-pointer'>Blog</li>
    </ul>

    <button className='bg-orange-600 px-5 py-1 rounded-lg text-white  shadow-orange-600 shadow-lg'>Sign Up</button>
  </header>
  )
}
