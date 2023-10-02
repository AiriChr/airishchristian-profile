'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Nav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav)
  }

  return (

    <div className='fixed w-full h-15 shadow-xl z-[100] bg-[#ecf0f3]' >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Image src='/assets/navLogo.png' alt='/' width='90'height='15'/>
        <div>
          <ul className='hidden md:flex '>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Project</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
            </Link>
          </ul>
        </div>

        <div onClick={handleNav} className='md:hidden'>
          <AiOutlineMenu size={25}/>
        </div>      
      </div>
    <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
      <div className={
        nav 
        ? 'md:hiddedn fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
        : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
      }>
        <div>
          <div className='flex w-full items-center justify-between'>
            <Image src='/assets/navLogo.png' width='87' height='35' alt='/'/>
            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
              <AiOutlineClose />
            </div>
          </div>
          <div className='border-b border-gray-300 my-4'>
            <p className='w-[85%] md:w-[90] py-4'>Let's build something remarkable together</p>
          </div>
        </div>
        <div className='py-4 flex flex-col'>
          <ul className='uppercase'>
            <Link href='/'>
              <li className='py-4 text-sm'>Home</li>
            </Link>
            <Link href='/'>
              <li className='py-4 text-sm'>About</li>
            </Link>
            <Link href='/'>
              <li className='py-4 text-sm'>Skills</li>
            </Link>
            <Link href='/'>
              <li className='py-4 text-sm'>Project</li>
            </Link>
            <Link href='/'>
              <li className='py-4 text-sm'>Contact</li>
            </Link>
          </ul>
          <div className='pt-20'>
            <p className='uppercase tracking-widest text-[#5651e5]'>Let's Connect</p>
            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-10'>
                <FaLinkedinIn />
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-10'>
                <FaGithub />
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-10'>
                <AiOutlineMail />
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-10'>
                <BsFillPersonLinesFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Nav;