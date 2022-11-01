import React from 'react'

import { CheckedCircleIcon } from '../Icons'
function Pricing() {
  return (
    <div name='pricing' className='w-full text-white my-12'>
       <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>

       <div className='max-w-[1240px] mx-auto py-12'>
            
            <div className='text-center py-4 text-slate-300'>
                <h2 className='text-3xl font-bold uppercase'>Pricing</h2>
                <h3 className='text-5xl font-bold text-white py-8'>The right price for your research.</h3>
                <p className='text-3xl'>
                    On the other hand, we denounce with righteous indignation and dislike men who 
                    are so beguiled and demoralized by the charms of pleasure of the moment
                </p>
            </div>

            {/*********CARD CONTAINER************* */}
           <div className='grid md:grid-cols-2'>
                {/*********INICIO CARD************* */}
                <div className='bg-white text-slate-800 m-4  p-8 first-letter rounded-xl shadow-2xl relative   '>
                   <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
                   <div> 
                      <p className='flex text-6xl font-bold py-4 '> $49 
                      <span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span> </p>  
                    </div>
                    <p className='text-xl py-8 text-slate-500'> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
                    
                    <div  className='text-xl'> 
                        <p className='flex py-4'> 
                            <div className='text-green-600 mr-5'> <CheckedCircleIcon /> </div> 
                            Lorem Ipsum is simply dummy text 
                        </p>
                        
                        <p className='flex py-4'> 
                            <div className='text-green-600 mr-5'> <CheckedCircleIcon /> </div> 
                            Lorem Ipsum is simply dummy text 
                        </p>

                        <p className='flex py-4'> 
                            <div className='text-green-600 mr-5'> <CheckedCircleIcon /> </div> 
                            Lorem Ipsum is simply dummy text 
                        </p>

                        <p className='flex py-4'> 
                            <div className='text-green-600 mr-5'> <CheckedCircleIcon /> </div> 
                            Lorem Ipsum is simply dummy text 
                        </p>
                        <button className='w-full py-4 my-4'>Get Started</button>
                    </div>  
                </div>
                {/*********FIM CARD************* */}

                {/*********INICIO CARD************* */}
                <div className='bg-white text-slate-800 m-4  p-8 first-letter rounded-xl shadow-2xl relative   '>
                   <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Premium</span>
                   <div> 
                      <p className='flex text-6xl font-bold py-4 '> $99 
                      <span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span> </p>  
                    </div>
                    <p className='text-xl py-8 text-slate-500'> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
                    
                    <div  className='text-xl'> 
                        <p className='flex py-4'> 
                            <div className='text-green-600 mr-5'> <CheckedCircleIcon /> </div> 
                            Lorem Ipsum is simply dummy text 
                        </p>
                        
                        <p className='flex py-4'> 
                            <div className='text-green-600 mr-5'> <CheckedCircleIcon /> </div> 
                            Lorem Ipsum is simply dummy text 
                        </p>

                        <p className='flex py-4'> 
                            <div className='text-green-600 mr-5'> <CheckedCircleIcon /> </div> 
                            Lorem Ipsum is simply dummy text 
                        </p>

                        <p className='flex py-4'> 
                            <div className='text-green-600 mr-5'> <CheckedCircleIcon /> </div> 
                            Lorem Ipsum is simply dummy text 
                        </p>
                        <button className='w-full py-4 my-4'>Get Started</button>
                    </div>  
                </div>
                {/*********FIM CARD************* */}

           </div> 

       </div>
    </div>
  )
}

export default Pricing