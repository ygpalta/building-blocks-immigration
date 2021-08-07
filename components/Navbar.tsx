import React, { useState } from 'react';


export default function Navbar () {
    const [active, setActive] = useState(false);

    const handleClick = () => {
      setActive(!active);
    };
    return (
      <div>
          <nav className='static flex items-center flex-wrap theme p shadow-lg '>

          <a href='/' className='inline-flex items-center p mr-4 '>
          <img 
              src="/logo.png" 
              width="64" height="64" 
              alt="Logo" />
            <span className='flex logo px-2 text-lg md:text-3xl h-4 item-center align-center text-white font-bold uppercase tracking-wide'>
            {/* <span className='logo text-xl tracking-wide'> */}
               Building Blocks IMMIGRATION
             </span>
          </a>

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

                    
                <a href='/' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-red-900 hover:text-white '>
                    Home
                </a>




                <a href='/about' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-red-900 hover:text-white'>
                    About Us
                </a>




                <a href='/visas/study-permit-post-graduate-work-permit' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-red-900 hover:text-white'>
                    Study
                </a>




                <a href='/visas/work-permit-lmia' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-red-900 hover:text-white'>
                    Work
                </a>



                <a href='/visas/visitor-visa' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-red-900 hover:text-white'>
                    Visit
                </a>



                <a href='https://casecloud.ca/form/formshare?formId=6c9bda54-6459-4e25-b321-26368a535c0f&siteId=CCP20211497' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-red-900 hover:text-white'>
                    Assessment
                </a>



                <a href='/contact' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-red-900 hover:text-white'>
                    Contact Us
                </a>


            </div>
            
        </div>
          </nav>
      </div>
    )
  }
