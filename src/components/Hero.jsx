import React from 'react'
import bgImg from '../assets/cyber-bg.png';
import {UploadIcon,DataBaseIcon,ServerIcon,PaperAirplaneIcon}  from '../Icons'; 

function Hero() {
  return (
    <div name='home' className='w-full h-screen bg-zinc-200 flex   flex-col justify-between'>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
              <p  className='text-2xl'>Unique Sequencing & Production</p>
              <h1 className='py-3 text-5xl font-bold md:text-7xl'>Clound Management</h1>
              <p className='text-2xl'>This is our Tech Brand </p>
              
              <button className='py-3 px-6 sm:w-[80%] my-4'>Get Started</button>  
            </div>

            <div> 
              <img src={bgImg} alt='/' className=''/>
            </div>

            <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[-5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl
            text-center shadow-2xl'>
              <p>Data Services</p>
              <div className='flex justify-between flex-wrap px-4'>
                <p className='flex px-4 py-2 gap-1'> <UploadIcon />  App Security </p>
                <p className='flex px-4 py-2 gap-1'><DataBaseIcon />  Dashboard Design </p>
                <p className='flex px-4 py-2 gap-1'><ServerIcon /> Cloud Data </p>
                <p className='flex px-4 py-2 gap-1'><PaperAirplaneIcon/> API</p>
              </div>
            </div>
          
        
      </div>    
    </div>
  )
}

export default Hero