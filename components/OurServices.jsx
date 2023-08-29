import React from 'react'
import Image from 'next/image'
import { planning, Engineering, Marine, landscape } from '@/public'
import Link from 'next/link'

const OurServices = () => {
    return (
    <div className='flex flex-col items-center px-10 py-20 '>
        <h1 className='text-5xl font-bold text-green-900'>Our Professional Services</h1>
        <div className='grid xl:grid-cols-4 md:grid-cols-3  grid-rows-1 py-20 gap-10 '>

            <div href='/' className='flex flex-col  bg-white shadow-md  '>
                <div className='overflow-hidden'>
                    <Image
                        src={planning}
                        width={500}
                        height={300}
                        alt=''
                        className='bg-cover bg-center hover:scale-105 ease-in duration-200'
                    />
                </div>
                <div className='flex flex-col py-10  items-center gap-4'>
                    <p className=' text-center  text-2xl font-semibold'>Environmental Planning</p>
                    <Link 
                        href='/'
                        className='px-10 py-2 border w-fit text-green-900 hover:bg-green-900 hover:text-white ease-linear duration-200 '
                    >
                        Learn More
                    </Link>
                </div>
    
            </div>

            <div className='flex flex-col gap-1 bg-white shadow-md  '>
                <div className='overflow-hidden'>
                    <Image
                        src={Marine}
                        width={500}
                        height={300}
                        alt=''
                        className='bg-cover bg-center hover:scale-105 ease-in duration-200'
                    />
                </div>
                <div className='flex flex-col py-10  items-center gap-4'>
                    <p className=' text-center  text-2xl font-semibold'>Marine Conservation</p>
                    <Link 
                        href='/'
                        className='px-10 py-2 border w-fit text-green-900 hover:bg-green-900 hover:text-white ease-linear duration-200 '
                    >
                        Learn More
                    </Link>
                </div>
            </div>

            <div href='/' className='flex flex-col gap-1 bg-white shadow-md  '>
                <div className='overflow-hidden'>
                    <Image
                        src={Engineering}
                        width={500}
                        height={300}
                        alt=''
                        className='bg-cover bg-center hover:scale-105 ease-in duration-200'
                    />
                </div>
                <div className='flex flex-col py-10  items-center gap-4'>
                    <p className=' text-center  text-2xl font-semibold'>Engineering</p>
                    <Link 
                        href='/'
                        className='px-10 py-2 border w-fit text-green-900 hover:bg-green-900 hover:text-white ease-linear duration-200 '
                    >
                        Learn More
                    </Link>
                </div>
            </div>
            <div href='/' className='flex flex-col gap-1 bg-white shadow-md  '>
                <div className='overflow-hidden'>
                    <Image
                        src={landscape}
                        width={500}
                        height={300}
                        alt=''
                        className='bg-cover bg-center hover:scale-105 ease-in duration-200'
                    />
                </div>
                <div className='flex flex-col py-10  items-center gap-4'>
                    <p className=' text-center  text-2xl font-semibold'>	
                        Landscape Architecture
                    </p>
                    <Link 
                        href='/'
                        className='px-10 py-2 border w-fit text-green-900 hover:bg-green-900 hover:text-white ease-linear duration-200 '
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    </div>
    )
}

export default OurServices
