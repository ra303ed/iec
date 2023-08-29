'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import { logo } from '@/public'
import { AiOutlineMenu, AiOutlineClose, AiOutlineUp, AiOutlineDown  } from 'react-icons/ai';

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');
    const [isOpen, setIsOpen] = useState(false);

    let menuRef = useRef();

    const handleNav = () => {
        setNav(!nav)
    }


    const transClass = isOpen
    ? "flex"
    : "hidden";

    
    
    useEffect(()=> {
        const changeColor = () => {
            if(window.scrollY >= 90 ) 
            {
                setColor('#fff')
                setTextColor('#172E08')
            }
            else
            {
                setColor('transparent')
                setTextColor('#fff')
            }
        };
        
        window.addEventListener('scroll', changeColor);
    }, []);


    // useEffect(() => {
    //     let handler (e) => {
    //         if(!menuRef.current.contains(e.target))
    //         {
    //             setIsOpen(false)
    //         }
    //     };
    //     document.addEventListener("mousedown", handler);
    // }, []);


    return (
    <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 z-10 ease-in duration-300 w-screen px-6 shadow-sm'>
        <div className='max-w-[1240px] h-20 m-auto flex justify-between items-center p-4 text-white '>
        <Link href='/'  className='text-4xl font-bold'>
            <Image
                src={logo}
                width={100}
                alt=''
                className='bg-cover'
            />
        </Link>
        <ul  style={{color: `${textColor}`}} className='hidden sm:flex'>
            <li className='p-4'>
                <Link href='/'>Home</Link>
            </li>
            <li className='p-4'
                ref={menuRef}
            >
                <Link 
                    href=''
                    className='flex gap-2 items-center  relative duration-300 ease-in-out'
                    onClick={()=> setIsOpen(!isOpen)}
                    
                >
                    Our Services
                    { isOpen 
                    ? <AiOutlineUp size={15} />
                    : <AiOutlineDown size={15} />
                    }
                </Link>
                <div className={`absolute top-14 flex flex-col justify-center bg-white py-5 px-2 text-green-900 rounded-b-md shadow-sm gap-2  ${transClass}`}>
                    <Link 
                        href='/environmental-planning' 
                        className='py-2 px-5 rounded-sm ease-in-out duration-200 hover:text-green-500 hover:bg-green-900'
                    >
                        Environmental Planning
                    </Link>
                    <Link 
                        href='/marine-conservation' 
                        className='py-2 px-5 rounded-sm ease-in-out duration-200 hover:text-green-500 hover:bg-green-900'
                    >
                        Marine Conservation
                    </Link>
                    <Link 
                        href='/engineering' 
                        className='py-2 px-5 rounded-sm ease-in-out duration-200 hover:text-green-500 hover:bg-green-900'
                    >
                        Engineering
                    </Link>
                    <Link 
                        href='/landscape-architecture' 
                        className='py-2 px-5 rounded-sm ease-in-out duration-200 hover:text-green-500 hover:bg-green-900'
                    >
                        Landscape Architecture
                    </Link>
                </div>
            </li>
            <li className='p-4'>
                <Link href='/projects'>Projects</Link>
            </li>
            <li className='p-4'>
                <Link href='/our-team'>Our Team</Link>
            </li>
            <li className='p-4'>
                <Link href='/about-us'>About Us</Link>
            </li>
            <li className='p-4'>
                <Link href='/contact-us'>Contact</Link>
            </li>
        </ul>
        {/* =========[ Mobile Button ========= */}

        <div style={{color: `${textColor}`}} onClick={handleNav} className='block sm:hidden z-10 cursor-pointer'>
            { nav ? <AiOutlineClose  size={20} /> : <AiOutlineMenu  size={20} /> }
        </div>

        {/* ========= Mobile Menu ========= */}
        <div className= {
            nav
            ? 'absolute top-0 right-0 bottom-0 flex items-center justify-center  w-full h-screen bg-green-900 text-center ease-in duration-300' 
            : 'absolute top-0 right-[-100%]  bottom-0 flex items-center justify-center  w-full h-screen  text-center ease-in duration-300 opacity-0' } >
            <ul className='flex flex-col items-center justify-center'>
                <li className='p-4 text-4xl hover:text-white/50 border-b'>
                    <Link href='#'>Home</Link>
                </li>
                <li className='p-4 text-4xl border-b'>
                <Link 
                    href=''
                    className='flex gap-2 justify-center items-center '
                >
                    Our Services
                </Link>
                <div className='p-5 gap-3 flex flex-col items-center justify-center'>
                <Link 
                        href='/environmental-planning' 
                        className='text-xl hover:text-white/50'
                    >
                        Environmental Planning
                    </Link>
                    <Link 
                        href='/marine-conservation' 
                        className='text-xl hover:text-white/50'
                    >
                        Marine Conservation
                    </Link>
                    <Link 
                        href='/engineering' 
                        className='text-xl hover:text-white/50'
                    >
                        Engineering
                    </Link>
                    <Link 
                        href='/landscape-architecture' 
                        className='text-xl hover:text-white/50'
                    >
                        Landscape Architecture
                    </Link>
                </div>
                </li>
                <li className='p-4 text-4xl hover:text-white/50 border-b'>
                    <Link href='/about-us'>About Us</Link>
                </li>
                <li className='p-4 text-4xl hover:text-white/50 border-b'>
                    <Link href='/contact-us'>Contact Us</Link>
                </li>
            </ul>
        </div>

      </div>
    </div>
  )
}

export default Navbar
