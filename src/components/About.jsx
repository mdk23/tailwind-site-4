import React from 'react'

function About() {
  return (
    <div name='about' className='w-full my-32 '>
      <div className='max-w-[1240px] mx-auto'>
            
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Trusted by develpers across the world</h2>
                <p className='text-3xl py-6 text-gray-500 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
            
            <div className='grid md:grid-cols-3 px-2 text-center gap-4'>

                <div className='border py-8 rounded-xl shadow-xl'>
                    <p className='text-6xl font-bold text-indigo-700'>100%</p>
                    <p className='text-gray-400 mt-2'>Completion</p>
                </div>

                <div className='border py-8 rounded-xl shadow-xl'>
                    <p className='text-6xl font-bold text-indigo-700'>24/7</p>
                    <p className='text-gray-400 mt-2'>Delivery</p>
                </div>

                <div className='border py-8 rounded-xl shadow-xl'>
                    <p className='text-6xl font-bold text-indigo-700'>100K</p>
                    <p className='text-gray-400 mt-2'>Transactions</p>
                </div>

            </div>

      </div>
    </div>
  )
}

export default About
