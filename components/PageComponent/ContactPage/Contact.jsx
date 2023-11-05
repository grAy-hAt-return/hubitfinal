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
  return (
    <div className='w-10/12 mx-auto bg-mapbox'>
        <div className='grid grid-cols-4 gap-3 pt-10 px-16'>
            {data.map((val,i)=>{
                return <div key={i} className='pb-5 flex flex-col  justify-start items-center'>
                    <div className='text-4xl text-purple w-10 h-10'>{val.icon}
                    </div>
                    <h1 className='text-base my-0 text-center'>
                        {val.h1}
                    </h1>
                    <p className='text-sm my-0 text-center'>
                        {val.p}
                    </p>
                </div>
            })}
        </div>
        <div className='w-[400px] h-[600px]'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14131.43264603114!2d83.4643756!3d27.6907784!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996868839e2a553%3A0x1194302b35728cbf!2sHUB%20IT%20TRAINING%20%26%20SOLUTION%20(Computer%20Institute)!5e0!3m2!1sen!2snp!4v1699181614623!5m2!1sen!2snp"></iframe>
        </div>
    </div>
  )
}

export default Contact