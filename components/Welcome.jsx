import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { welcomeImg } from '@/public'

const Welcome = () => {
  return (
    <div className='mb-10 '>
        <div className='grid lg:grid-cols-2  gap-10 w-full h-full'>
            <div className='w-full h-full bg-orange-500 flex flex-col gap-10 justify-center p-10'>
                <p className='text-green-600 text-xl'>Save Environtment</p>
                <h1 className='text-7xl text-green-900 font-bold'>Welcome, To IEC</h1>
                <p className='text-sm'>
                    Professional environmental consulting services to government and private sectors, combining engineering with environmental planning to deliver cultural and natural heritage projects which meet community expectations and incorporate technological and scientific understanding.
                </p>
                <Link href='about-us' className='px-10 py-3 bg-green-900 w-fit text-white'>Read More</Link>
            </div>
            <div className='w-full h-full bg-red-300 flex justify-end items-center'>
                <Image
                    src={welcomeImg}
                    width={700}
                    height={700}
                    className='bg-cover bg-center'
                />
            </div>
        </div>
    </div>

  )
}

export default Welcome