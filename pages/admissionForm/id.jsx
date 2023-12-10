import React, {useState} from 'react'
import {FaCrown, FaUserTie} from "react-icons/fa"
import {GiNetworkBars} from "react-icons/gi"
import {GrFormNextLink,GrFormPreviousLink} from "react-icons/gr"
import PersonalInfo from '../../components/PageComponent/Admission/PersonalInfo'
import Layout from "../../HOC/Layout/Layout";
import FormReveiw from '../../components/PageComponent/Admission/FormReveiw'

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
    {title:"Personal Information"},
    {title:"Payment"},
    {title:"Form Review"},
]
const [active,setActive]= useState (0);
const Tabs = () =>{
    if (active === 0){
      return <PersonalInfo />;
    }
    else if (active === 1){
      return <div>Payment section</div>;
    }
    else {
      return <FormReveiw />;
    }
}
  
  const previous = () =>{
    if (active <= tabs.length-1){
      return setActive(active-1);
    }
  }
  const next = () =>{
    if (active < tabs.length-1){
      return setActive(active+1);
    }
  }
  return (
    <div>
      <Layout>
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
        <h3 className='w-fit mx-auto my-0'>
          STUDENT ENROLLMENT REGISTRATION FROM
        </h3>
        <div className='w-10/12 mx-auto'>
          <div className='w-9/12 mx-auto rounded-full overflow-hidden grid grid-cols-3 bg-gray-200 my-5'>
                {tabs.map((val,i)=>{
                    return (
                        <div key={i}
                        className={`${i=== active? "bg-main text-white":""} my-0 font-medium py-2 text-center`}
                        // onClick={()=> setActive(val.title)}
                        >
                            {val.title}
                        </div>
                    )
                })}
          </div>
          <div className=''>
            {Tabs(active)}
          </div>
          <div className='w-full flex justify-center gap-5'>
            <button 
            onClick={()=>previous()}
            className={`${active=== 0 ? "hidden":"block"} w-32 py-[.8%] bg-main text-white rounded-lg outline-none cursor-pointer`}>
              Previous
            </button>
            <button 
            onClick={()=>next()}
            className='w-32 py-[.8%] bg-main text-white rounded-lg outline-none cursor-pointer hover:scale-110 transition-all duration-300'>
              Next
            </button>
          </div>
          {/* <PersonalInfo/> */}
        </div>
      </div>
      </Layout>
    </div>
  )
}

export default id