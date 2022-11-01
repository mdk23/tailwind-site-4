import React from 'react'
import { useState } from 'react'
import {Link,animateScroll as scroll} from 'react-scroll'

function Navbar() {
  
    const [nav,setNav]=useState(false);
     
    const handleClick=()=>{
        setNav(!nav);
    }

    const handleClose=()=>{
        setNav(!nav);
    }

    return (
    
    <div className=' w-screen h-[80px] z-10 bg-zinc-200 fiexd drop-shadow-xl'>
        <div className='flex justify-between px-2 items-center w-full h-full'>

            <div className='flex items-center'>
                <h1 className='text-3xl mr-4 font-bold sm:text-4xl'>BRAND</h1>
                
                <ul className='hidden md:flex '>
                  
                   <li> <Link to="home" smooth={true} offset={50} duration={2000}> Home </Link>  </li>
                   <li> <Link to="about" smooth={true} offset={-50} duration={2000}> About </Link> </li>
                   <li> <Link to="support" smooth={true} offset={-50} duration={2000}> Support </Link> </li>
                   <li> <Link to="platform" smooth={true} offset={0} duration={2000}> Platforms </Link></li>
                   <li> <Link to="pricing" smooth={true} offset={50} duration={2000}> Pricing </Link></li> 
                </ul>
            </div>

            <div className='hidden md:flex pr-4'> 
                <button className='border-none bg-transparent text-black mr-4'> Sign In</button>
                <button className='px-8 py-3'> Sign Up</button> 
            </div>
        
            <div className='md:hidden mr-4' onClick={()=>handleClick()}>
                { !nav ?
                
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                    </svg>
                :
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                }
                
            </div>

        </div>

        {/***** DROP DOWN MENU *****/}

        <div className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
            <ul>
             <li className='border-b-2 border-zinc-300 w-full'> <Link onClick={handleClose} to="home" smooth={true} offset={50} duration={2000}> Home </Link>  </li>
             <li className='border-b-2 border-zinc-300 w-full'> <Link onClick={handleClose} to="about" smooth={true} offset={-50} duration={2000}> About </Link> </li>
             <li className='border-b-2 border-zinc-300 w-full'> <Link onClick={handleClose} to="support" smooth={true} offset={-50} duration={2000}> Support </Link> </li>
             <li className='border-b-2 border-zinc-300 w-full'> <Link onClick={handleClose} to="platform" smooth={true} offset={0} duration={2000}> Platforms </Link></li>
             <li className='border-b-2 border-zinc-300 w-full'> <Link onClick={handleClose} to="pricing" smooth={true} offset={50} duration={2000}> Pricing </Link> </li> 
                <div className='flex flex-col my-4'>
                    <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
                    <button className='px-8 py-3'>Sign Up</button>
                </div> 
            </ul>
        </div>

    </div>
    
    
  )
}

export default Navbar