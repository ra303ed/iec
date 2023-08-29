import React from 'react'
import Image from 'next/image'
import { logoFooter } from '@/public'
import Link from 'next/link'
import { MdEmail } from 'react-icons/md'
import { FaMapMarkerAlt, FaFax } from 'react-icons/fa'
import { BsTelephoneFill } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='footer-bg bg-cover bg-center  text-white '>

            <div className='grid lg:grid-cols-3  p-20  '>
                <Link href='/' className='flex flex-col   justify-center items-center '>
                    <Image
                        src={logoFooter}
                        width={200}
                        height={100}
                        alt=''
                        className='bg-center bg-cover'
                    />
                </Link>
                
                <div className='flex flex-col gap-5  justify-center  '>
                        <h2 className='text-2xl font-bold text-green-600'>Our Services</h2>
                        <div className='flex flex-col gap-2 p-1  justify-center'>
                        <Link 
                        href='/environmental-planning' 
                        className='py-2 px-5 ease-in-out duration-200 hover:text-green-500 hover:underline'
                    >
                        Environmental Planning
                    </Link>
                    <Link 
                        href='/marine-conservation' 
                        className='py-2 px-5 ease-in-out duration-200 hover:text-green-500 hover:underline'
                    >
                        Marine Conservation
                    </Link>
                    <Link 
                        href='/engineering' 
                        className='py-2 px-5 ease-in-out duration-200 hover:text-green-500 hover:underline'
                    >
                        Engineering
                    </Link>
                    <Link 
                        href='/landscape-architecture' 
                        className='py-2 px-5 ease-in-out duration-200 hover:text-green-500 hover:underline'
                    >
                        Landscape Architecture
                    </Link>
                        </div>
                </div>

                <div className=' flex flex-col gap-3 justify-center items-start'>
                    <Link href='/contact-us' className='text-2xl font-bold text-green-600  '>Contact Us</Link>
                    <div href='/' className='flex flex-col  gap-2 p-5 '>
                        <div href='/' className='flex gap-2 items-start mb-5    '>
                            <FaMapMarkerAlt size={20} />
                            <p>
                                Unit No.10, Block A, 2nd Floor Kiarong Complex​ <br/>
                                Jalan Lebuhraya Sultan Haji Hassanal Bolkiah, BE1318 ​<br/>
                                P.O Box 2468, BSB 8674 ​<br/>
                                Bandar Seri Begawan, Brunei Darussalam
                            </p>
                        </div>
                        
                        <p className='flex items-center gap-3'>
                            <MdEmail size={20} />
                            kpibrunei@gmail.com
                        </p>
                        <p className='flex items-center gap-3'>
                            <BsTelephoneFill size={20} />
                            (673) 2444844 / 2420532
                        </p>
                        <p className='flex items-center gap-3'>
                            <FaFax size={20} />
                            (673) 2237845
                        </p>
                    </div>
                </div>


            </div>
            <div className='w-full bg-green-900 h-12 flex items-center justify-center'>
                <p className='text-sm font-semibold text-center'>Copyright 2024 © IEC. All Rights Reserved.</p>

            </div>
        </div>
    )
}
export default Footer
