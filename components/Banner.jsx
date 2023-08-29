import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

const Banner = () => {
  return (
    <>
      <div className='bg-black/40 top-0 left-0 bottom-0 right-0 w-full h-full ' />
    <div className='custom-bg bg-cover bg-center bg-fixed h-screen flex flex-col justify-center items-center '>
    <div className='flex flex-col justify-center items-center text-white md:px-20 px-10 py-10 lg:gap-20 gap-10' >
      <h1 className='md:text-7xl text-4xl text-center font-bold '>Integrated Environmental Consultants Sdn. Bhd</h1>
      <div className='flex lg:flex-row flex-col items-center justify-center lg:gap-10 gap-4'>
        <p>PLANNING</p>
        <p>ENVIRONMENTAL</p>
        <p>ENGINEERING</p>
        <p>LANDSCAPE ARCHITECTURE</p>
      </div>
      <Link 
        href='/'
        className='lg:px-10 lg:py-4 px-5 py-3 bg-white/50 flex gap-2 items-center hover:bg-white/20'
      >
        Learn More
        <FiArrowRight size={20} />
      </Link>
    </div>
  </div>
  </>
  )
}

export default Banner
