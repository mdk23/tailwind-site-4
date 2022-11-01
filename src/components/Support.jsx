import React from 'react'
import {PhoneIcon,ArrowIcon,SupportIcon,ChipIcon}  from '../Icons'; 

import spImg from '../assets/support.png';


function Support() {
  return (
    <div name='support' className='w-full mt-24'>

        <div className='w-full h-[700px] bg-gray-900/90 absolute '>
            <img className='w-full h-full object-cover mix-blend-overlay' src={spImg} alt='/'/>
        </div>
          
        <div className='max-w-[1240px] mx-auto text-white relative '>
            <div className='px-4 py-12'>
              <h2 className=' text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
              <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
              <p className='py-4 text-3xl text-slate-300 '>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, 
                by injected humour, or randomised words which don't look even slightly believable. 
              </p>
            </div>

                       
            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
              
              {/*********** INICIO CARTAO ************/}
              <div className=' bg-white rounded-lg shadow-2xl'>
                  <div className='p-8'>
                      
                      <div className='w-16 p-4 bg-indigo-700 text-white rounded-lg mt-[-4rem] '>
                      <PhoneIcon/>
                      </div>
                      
                      <h3 className='font-bold text-2xl my-4'>Sales</h3>
                      <p className='text=gray-600 text-xl'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                       
                      </p>
                  </div>
                  
                  <div className='flex items-center gap-2 pl-8 py-2 text-indigo-600 font-bold'> 
                      <p> Contact Us </p> <ArrowIcon/> 
                  </div>
              </div>
              {/*********** FIM CARTAO ************/}

              {/*********** INICIO CARTAO ************/}
              <div className=' bg-white rounded-lg shadow-2xl'>
                  <div className='p-8'>
                      
                      <div className='w-16 p-4 bg-indigo-700 text-white rounded-lg mt-[-4rem]'>
                      <SupportIcon/>
                      </div>
                      
                      <h3 className='font-bold text-2xl my-4'>Technical Support</h3>
                      <p className='text=gray-600 text-xl'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, 
                      and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
                      </p>
                  </div>
                  
                  <div className='flex items-center gap-2 pl-8 py-2 text-indigo-600 font-bold'> 
                      <p> Contact Us </p> <ArrowIcon/> 
                  </div>
              </div>
              {/*********** FIM CARTAO ************/}

              {/*********** INICIO CARTAO ************/}
              <div className=' bg-white rounded-lg shadow-2xl'>
                  <div className='p-8'>
                      
                      <div className='w-16 p-4 bg-indigo-700 text-white rounded-lg mt-[-4rem]'>
                      <ChipIcon/>
                      </div>
                      
                      <h3 className='font-bold text-2xl my-4'>Media Queries</h3>
                      <p className='text=gray-600 text-xl'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
                      Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero
                      </p>
                  </div>
                  
                  <div className='flex items-center gap-2 pl-8 py-2 text-indigo-600 font-bold'> 
                      <p> Contact Us </p> <ArrowIcon/> 
                  </div>
              </div>
              {/*********** FIM CARTAO ************/}

            </div>
        
        </div>
    </div>
  )
}

export default Support