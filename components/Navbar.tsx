import Link from 'next/link'
import Image from 'next/Image'
import React, { ReactElement, useState } from 'react';

interface Props {
  transparent?:boolean
}

export default function Navbar () {
    const [active, setActive] = useState(false);

    const handleClick = () => {
      setActive(!active);
    };
    return (
      <div>
          <nav className='static m-0.5 flex items-center flex-wrap theme rounded-lg p shadow-lg '>
          <Link href='/'>
          <a className='inline-flex items-center p mr-4 '>
          <Image 
              src="/logo.png" 
              width="64" height="64" 
              alt="Logo" />
            <span className='flex logo px-2 text-xl md:text-3xl h-4 item-center align-center text-white font-bold uppercase tracking-wide'>
            {/* <span className='logo text-xl tracking-wide'> */}
               Building Blocks IMMIGRATION
             </span>
          </a>
        </Link>
        <button className=' inline-flex p hover:bg-red-900 rounded lg:hidden text-white ml-auto hover:text-white outline-none' onClick={handleClick}>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
         {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
         <div
          className={`${ active ? '' : 'hidden' }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
            <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                <Link href='/'>
                    
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-red-900 hover:text-white '>
                    Home
                </a>
                </Link>


                <Link href='about'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-red-900 hover:text-white'>
                    About Us
                </a>
                </Link>


                <Link href='study-in-canada'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-red-900 hover:text-white'>
                    Study
                </a>
                </Link>


                <Link href='work-in-canada'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-red-900 hover:text-white'>
                    Work
                </a>
                </Link>

                <Link href='visit-canada'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-red-900 hover:text-white'>
                    Visit
                </a>
                </Link>

                <Link href='review'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-red-900 hover:text-white'>
                    Assesment
                </a>
                </Link>

                <Link href='visit-canada'>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-red-900 hover:text-white'>
                    Contact Us
                </a>
                </Link>

            </div>
            
        </div>
          </nav>
      </div>
    )
  }