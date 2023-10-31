import React from 'react'
import {RiBookMarkLine} from 'react-icons/ri'


function BookmarkIndex() {
    const data=[
        {h1:"Top Courses",
        p:"Our training and certification courses are designed for IT and business professionals across all industries, and cover an array of subjects including technologies, IT topics (cloud, cybersecurity, AI, DevOps , Data analytics, Hardware ,Mobile repairing & more), and personal development and productivity "},
        {h1:"Certified Instructor",
        p:"Our training and certification courses are designed for IT and business professionals across all industries, and cover an array of subjects including technologies, IT topics (cloud, cybersecurity, AI, DevOps , Data analytics, Hardware ,Mobile repairing & more), and personal development and productivity "},
        {h1:"Book and Libraries",
        p:"Our training and certification courses are designed for IT and business professionals across all industries, and cover an array of subjects including technologies, IT topics (cloud, cybersecurity, AI, DevOps , Data analytics, Hardware ,Mobile repairing & more), and personal development and productivity "},
    ]
  return (
    <div className='flex items-center justify-center py-10 bg-white'>
        <div className='w-[95%] grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1  grid-cols-1 py-5'>
            {data.map((val,i)=>{
                return <div key={i} className={`${i===1 ? 'xl:border-x-2 lg:border-x-2' : ""} xl:px-11 lg:px-11 px-4 pb-5`}>
                        <div className='px-1 flex items-center justify-start'>
                            <RiBookMarkLine className='text-2xl text-purple'/>
                            <h1 className='text-lg font-semibold ml-2'>
                                {val.h1}
                            </h1>
                        </div>
                        <p className='xl:max-w-[35ch] lg:max-w-[35ch] w-full leading-5 xl:text-base lg:text-base md:text-base sm:text-sm text-xs xl:font-normal lg:font-normal md:font-normal font-medium xl:text-left lg:text-left text-justify'>
                            {val.p}
                        </p>
                </div>
            })}
        </div>
    </div>
  )
}

export default BookmarkIndex