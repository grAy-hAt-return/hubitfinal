import React from 'react'
import { useState } from 'react'
import {FaAngleDown, FaAngleUp} from 'react-icons/fa'


function OverviewCourse() {
    const data=[
        {h1:"Duration:",
        detail:"3 month(100hrs)",
        color:"bg-gray-200",
        text:true
        },
        {h1:"Shifts :",
        detail:"3 month(100hrs)",
        color:"bg-gray-200",
        text:false
        },
        {h1:"Enrolled Student :",
        detail:"09:30 AM - 11:00 AM",
        color:"bg-gray-200",
        text:false
        },
        
    ]
    const [show,setShow] = useState (true);
  return (
    <div className='w-full px-2'>
        {/* <h3 className='text-purple'>Course - Overview</h3> */}
        <div className='w-full grid grid-cols-3 my-2 rounded-sm overflow-hidden'>
            {data.map((val,i)=>{
                return <div key={i} className={` ${val.color} w-full h-14 flex flex-col pl-3 justify-center text-white ${val.text ? "text-black":"text-black"}`}>
                    <h4 className='my-0'>{val.h1}</h4>
                    <p>{val.detail}</p>
                </div>
            })}
        </div>
        {/* <div className='w-[55%] h-32 rounded-2xl overflow-hidden flex flex-col text-white bg-main items-center justify-center'>
            <h4 className='my-2'>Class shift</h4>
            <p>09:30 AM - 11:00 AM</p>
            <p>09:30 AM - 11:00 AM</p>
        </div> */}
        <div className='my-10'>
            <h4 className='text-purple'>Description</h4>
            <p className={` pt-2 overflow-clip ${show ? "h-44  transition-all delay-200 duration-400 ease-in-out":"h-[500px]  transition-all delay-200 duration-500 ease-in-out"}`}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ipsa cumque exercitationem. Delectus autem nihil cumque molestias ea consectetur eos, laborum quo adipisci laudantium recusandae doloremque quis neque illo rem.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ipsa cumque exercitationem. Delectus autem nihil cumque molestias ea consectetur eos, laborum quo adipisci laudantium recusandae doloremque quis neque illo rem.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ipsa cumque exercitationem. Delectus autem nihil cumque molestias ea consectetur eos, laborum quo adipisci laudantium recusandae doloremque quis neque illo rem.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ipsa cumque exercitationem. Delectus autem nihil cumque molestias ea consectetur eos, laborum quo adipisci laudantium recusandae doloremque quis neque illo rem.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ipsa cumque exercitationem. Delectus autem nihil cumque molestias ea consectetur eos, laborum quo adipisci laudantium recusandae doloremque quis neque illo rem.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ipsa cumque exercitationem. Delectus autem nihil cumque molestias ea consectetur eos, laborum quo adipisci laudantium recusandae doloremque quis neque illo rem.
            </p>
            <button 
                onClick={()=>setShow(!show)}
                className={`capitalize underline ${show ? "block":"hidden"}`}>Read more
                <div className={``}><FaAngleDown/></div>
                </button>
        </div>
    </div>
  )
}

export default OverviewCourse