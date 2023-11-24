import React from 'react'
import {IoMdCall,IoMdClock} from "react-icons/io"
import {IoLocationSharp} from "react-icons/io5"
import {GrMail} from "react-icons/gr"


function Contact() {
    const data=[
        {h1:"call us",
        icon:<IoMdCall/>,
        p:"9827494116",
        },
        {h1:"Find us",
        icon:<IoLocationSharp/>,
        p:"Butwal-09 (Ganesh Path), Milanchowk,Rupandehi Nepal",
        },
        {h1:"Open time",
        icon:<IoMdClock/>,
        p:"sun-fri",
        time:"6:00 am - 7:00 pm"
        },
        {h1:"Mail us",
        icon:<GrMail/>,
        p:"info@hubit.com.np",
        },
    ]
    const formdata=[
        {placeholder:"Full Name",
        type:"text",
        identity:"fullName",
        },
        {placeholder:"Email Address",
        type:"email",
        identity:"email",
        },
        {placeholder:"Write a Message",
        type:"text",
        identity:"message",
        }
    ]
  return (
    <div className='relative'>
        <div className='w-10/12 mx-auto py-10 relative -top-12 bg-mapbox rounded-xl shadow-lg'>
            <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xxl:grid-cols-4 gap-3 px-6 md:px-10 lg:px-12 xl:px-16 xxl:px-16 bg'>
                {data.map((val,i)=>{
                    return <div key={i} className='pb-5 flex flex-col justify-start items-center pt-3 bg-white rounded-md shadow-md'>
                        <div className='text-3xl lg:text-4xl xl:text-4xl xxl:text-4xl flex items-center justify-center text-purple w-10 h-10'>{val.icon}
                        </div>
                        <h1 className='text-sm md:text-base lg:text-lg xl:text-lg xxl:text-xl font:semibold my-0 text-center'>
                            {val.h1}
                        </h1>
                        <p className='text-xs md:text-sm lg:text-sm xl:text-sm xxl:text-sm my-0 text-center'>
                            {val.p}
                        </p>
                        <p className='text-xs md:text-sm lg:text-sm xl:text-sm xxl:text-sm my-0 text-center'>{val.time}</p>
                    </div>
                })}
            </div>
            <div className='px-5 rounded-md mt-16 mb-6'>
                <div className='px-1 py-1 w-full h-[450px] mt-5 rounded-md bg-white shadow-lg'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14131.43264603114!2d83.4643756!3d27.6907784!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996868839e2a553%3A0x1194302b35728cbf!2sHUB%20IT%20TRAINING%20%26%20SOLUTION%20(Computer%20Institute)!5e0!3m2!1sen!2snp!4v1699181614623!5m2!1sen!2snp" className='w-full h-full rounded-md '>
                </iframe>
                </div>
            </div>
        </div>
        <div className='w-10/12 mx-auto flex flex-col items-center py-10'>
            <h1 className=' text-base md:text-lg lg:text-lg xl:text-lg xxl:text-xl text-purple font-medium'>
                Message Us
            </h1>
            <p className=' text-textGray text-sm md:text-base lg:text-base xl:text-base xxl:text-base font-light'>
                You can also contact us directly by filling out this form.
            </p>
            <div className='w-full xxl:w-2/4 px-5 xl:px-12 my-6  justify-center gap-3 sm:flex md:flex lg:flex xl:flex flex-nowrap sm:flex-wrap md:flex-wrap lg:flex-wrap xl:flex-wrap'>
                {formdata.map((val,i)=>{
                    if (val.identity === "message"){
                        return <div key={i} className='w-[100%] sm:w-[99%] md:w-[87%] lg:w-[87%] xl:w-[87%]'>
                            <textarea 
                            type={val.type} 
                            placeholder={val.placeholder} 
                            id={val.identity} 
                            className=' w-full h-28 py-2 outline-none text-sm md:text-base lg:text-base xl:text-base xxl:text-base border border-textGray px-4 rounded-md'/>    
                        </div>
                    }
                        
                    else {
                        return <div key={i} className='w-[100%] sm:w-[48%] md:w-[43%] lg:w-[43%] xl:w-[43%] my-2'>
                          <input type={val.type}
                            id={val.identity}
                            placeholder={val.placeholder}
                            className={`w-full py-2 outline-none border text-sm md:text-base lg:text-base xl:text-base xxl:text-base border-textGray px-4 rounded-md`}
                            />  
                        </div>
                    }
                })}
            </div>
            <button className=' px-[4%] py-[0.8%] rounded-sm font-light bg-purple text-white hover:scale-105 transition duration-150 outline-none'>
                    Send Message
                </button>
        </div>
    </div>
  )
}

export default Contact