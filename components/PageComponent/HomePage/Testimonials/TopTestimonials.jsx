import React,{useState} from 'react'
import Grid from './Grid'
import Video from './Video'
import WhatClientsSays from '../../AboutPage/What ClientsSays/WhatClientsSays';

function TopTestimonials() {
    const tabs= [
        {title:"Regular"},
        {title:"Facebook"},
        {title:"Google"},
        {title:"Video"},
    ]
    const [active,setActive]= useState ("video");
    const Tabs = () =>{
        switch (active) {
            case "Video":
                return <Video />
                break;
            case "Regular":
                return 
                break;
            case "Google":
                return 
                break;  
        }
    }
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
        {/* <div className='w-10/12 mx-auto flex gap-5'> 
            {tabs.map((val,i)=>{
                return <button key={i}
                className={` ${active === val.title ? "text-white bg-purple border-b-2 border-purple":""} my-0 py-3 text-center cursor-pointer`}
                onClick={()=> setActive(val.title)}
                >
                    <h3 className='text-base md:text-lg lg:text-xl xl:text-xl xxl:text-2xl text-neutral-800 my-0 hover:text-purple border-b-2 border-neutral-800 hover:border-main font-medium'>{val.title}</h3>
                </button>
            })}
        </div> */}

        {/* <div>
            {Tabs()}    
        </div> */}
        <WhatClientsSays status="hidden"/>
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

