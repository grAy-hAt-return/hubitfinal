import React from 'react'
import Grid from './Grid'

function TopTestimonials() {
  return (
    <div className='w-full'>
        <div className='bg-[#FACC15] w-full relative h-36 sm:h-52 md:h-56 lg:h-60 xl:h-60 xxl:h-64 overflow-hidden'>
            <div className='w-10/12 mx-auto mt-6 sm:mt-10 md:mt-14 lg:mt-14 xl:mt-[3% xxl:mt-16'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-4xl xxl:text-5xl capitalize my-0'>
                    What our Student say
                </h1>
                <p className='text-sm md:text-base lg:text-base xl:text-lg xxl:text-xl'>
                    Home/Testimonials
                </p>
            </div>
            <div className='bg-white absolute -left-3 -bottom-16 xxl:-bottom-20 w-[120%] h-20 sm:h-24 md:h-24 lg:h-28 xl:h-28 xxl:h-32 rotate-[4deg]'>
            </div>
        </div>
        <div>
            <Grid/>
        </div>
        <div className='bg-[#FACC15] w-full relative h-36 sm:h-52 md:h-56 lg:h-60 xl:h-60 xxl:h-64 overflow-hidden mt-10'>
            <div className='w-[95%] sm:w-[85%] md:w-[80%] lg:w-[70%] xl:w-[70%] xxl:w-[75%] mx-auto mt-10 sm:mt-16 md:mt-16 lg:mt-20 xl:mt-20 xxl:mt-28 px-3 md:px-8 lg:px-9 xl:px-10 xxl:pt-2 flex flex-row md:justify-between lg:justify-between xl:justify-between xxl:justify-between items-center'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-4xl xxl:text-5xl capitalize w-80 xxl:w-fit'>
                        Want to give some Feedback?
                    </h1>
                    <button className='w-32 md:w-40 lg:w-40 xl:w-40 h-10 text-sm md:text-base lg:text-base xl:text-lg xxl:text-xl bg-purple rounded-3xl text-white'>
                        Submit
                    </button>
            </div>
            <div className='bg-white absolute -top-10 w-[120%] h-20 md:h-24 lg:h-28 xl:h-28 xxl:h-32 rotate-[4deg]'>
            </div>
        </div>
    </div>
  )
}

export default TopTestimonials

