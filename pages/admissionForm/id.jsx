import React, {useState} from 'react'
import {FaCrown, FaUserTie} from "react-icons/fa"
import {GiNetworkBars} from "react-icons/gi"
import {GrFormNextLink,GrFormPreviousLink} from "react-icons/gr"
import PersonalInfo from '../../components/PageComponent/Admission/PersonalInfo'

function id() {
  const headings=[
    {h1:"become a professional",
     icon:<FaUserTie/> ,
     color:"text-professional" 
    },
    {h1:"master your skills",
     icon:<FaCrown/>  ,
     color:"text-crown" 
    },
    {h1:"Learn from developers",
     icon:<GiNetworkBars/> ,
     color:"text-level"  
    },
  ]
  const tabs= [
    {title:"Personel Information"},
    {title:"Payment Option"},
    {title:"Form Reviews"},
]
const [active,setActive]= useState ("PersonelInfo");
const Tabs = () =>{
    switch (active) {
        case "Course Overview":
            return <PersonalInfo/>;
            break;
        case "Course Syllabus":
            return 
            break;
        case "Course Reviews":
            return 
            break;
    }
}
  return (
    <div>
      <div className='w-full h-52 md:h-56 lg:h-60 xl:h-64 xxl:h-64 relative' 
        style={{
            backgroundImage:`url("https://images.unsplash.com/photo-1635048424329-a9bfb146d7aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHM1fGVufDB8fDB8fHww")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top',
            backgroundSize:'cover'
        }} >
          <div className='relative w-full h-full flex flex-col items-center bg-purple bg-opacity-20 '>
            <div className='w-11/12 mx-auto'>
                <h1 className='xxl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-xl font-bold tracking-wide text-zinc-50 lg:mb-8 md:mb-6 sm:mb-4 mb-3 capitalize'>Student Admission form 
                </h1>
                <p className='w-[75ch] font-light text-zinc-50 md:text-sm text-xs lg:text-base xl:text-base xxl:text-lg'>
                  Enter your admission information below to admit for their interested IT Course at their comfort, we have made available the Online Admission Form below!                 
                </p>
                <p className="font-light text-zinc-50 md:text-sm text-xs lg:text-base xl:text-base xxl:text-base mt-3">Home/Admission Form</p>
                <button className="my-3 px-[3%] py-[0.8%] rounded-3xl bg-boxyellwo text-neutral-800 text-sm font-medium"> 
                  View Form
                </button>
            </div>
            <div className="absolute bottom-2 right-2 flex h-fit w-fit">
              {headings.map((val,i)=>{
                return <div key={i} className="flex items-end mx-2">
                  <div className={`${val.color} h-fit mx-1 text-lg md:text-xl lg:text-xl xl:text-2xl mb-0 pb-0`}>
                    {val.icon}
                  </div>
                  <h1 className="md:text-sm text-xs capitalize my-0 font-light text-white">
                    {val.h1}
                  </h1>
                </div>
              })}
            </div>
          </div>
      </div>
      <div className='w-full my-10'>
        <h1 className='w-fit mx-auto my-3'>
          STUDENT ENROLLMENT REGISTRATION FROM
        </h1>
        <h3 className='w-fit mx-auto my-0 uppercase'>
          Fill out the form carefully for registration. All Asterisks (*) fields are mandatory to fill-up.
        </h3>
        <div className='w-10/12 mx-auto'>
          <div className='w-9/12 mx-auto rounded-full overflow-hidden grid grid-cols-3 bg-gray-200 my-10'>
                {tabs.map((val,i)=>{
                    return (
                        <div key={i}
                        className={` ${active === val.title ? "text-white bg-purple border-b-2 border-purple":""} my-0 font-medium py-3 text-center cursor-pointer`}
                        onClick={()=> setActive(val.title)}
                        >
                            {val.title}
                        </div>
                    )
                })}
          </div>
          {/* {Tabs()} */}
          <PersonalInfo/>
        </div>
      </div>
    </div>
  )
}

export default id