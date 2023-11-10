import React from 'react'
import {RiBookMarkLine} from 'react-icons/ri'


function BookmarkIndex() {
    const data=[
        {h1:"Top Courses",
        p:"Our training and certification courses are designed for IT and business professionals across all industries, and cover an array of subjects including technologies, IT topics (cloud, cybersecurity, AI, DevOps , Data analytics, Hardware ,Mobile repairing & more), and personal development and productivity."},
        {h1:"Certified Instructor",
        p:"Embark on excellence with Certified Instructors at HUB IT Training, guiding you through infrastructure intricacies and fostering mastery in teaching and problem-solving. Gain a holistic understanding of IT dynamics, from cybersecurity to collaborative teamwork. Access a curated solution library for seamless alignment with industry needs. Under our guidance, embrace continuous development, shaping into a future-ready IT professional."},
        {h1:"Book and Libraries",
        p:"Explore a wealth of knowledge in HUB IT's vast library, spanning IT training and solutions. Our curated resources cater to enthusiasts and professionals, offering a comprehensive guide. Delve into HUB IT infrastructure intricacies, effective teaching strategies, and cutting-edge innovations. With a commitment to continuous learning, our library positions HUB IT as a hub of excellence for those seeking to stay ahead in the dynamic IT landscape."},
    ]
  return (
    <div className='flex items-center justify-center py-10 bg-white'>
        <div className='w-[95%] xxl:w-10/12 grid xxl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1  grid-cols-1 py-5'>
            {data.map((val,i)=>{
                return <div key={i} className={`${i===1 ? ' xxl:px-5 xxl:border-x-4 xl:border-x-2 lg:border-x-2' : ""} xl:px-11 lg:px-11 px-4 pb-5`}>
                        <div className='px-1 flex items-center justify-start'>
                            <RiBookMarkLine className='text-2xl text-purple'/>
                            <h1 className='text-lg font-semibold ml-2'>
                                {val.h1}
                            </h1>
                        </div>
                        <p className='xl:max-w-[35ch] lg:max-w-[35ch] w-full xxl:text-base xl:text-base lg:text-base md:text-base sm:text-sm text-xs xxl:font-normal xl:font-normal lg:font-normal md:font-normal font-medium  text-justify '>
                            {val.p}
                        </p>
                </div>
            })}
        </div>
    </div>
  )   
}

export default BookmarkIndex