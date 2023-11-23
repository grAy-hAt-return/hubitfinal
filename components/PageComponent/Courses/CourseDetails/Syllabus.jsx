import React, { useState } from 'react'
import {FaAngleDown, FaAngleUp} from 'react-icons/fa'

function Syllabus() {
    const headings=[
        {h1:"Adobe Photoshp",
        subdata:[
            {name:"chap-1"},
            {name:"chap-2"},
            {name:"chap-3"},
            {name:"chap-4"},
            {name:"chap-5"},
        ]
        },
        {h1:"Figma",
        subdata:[
            {name:"figma-1"},
            {name:"fingma-2"},
        ]
        },
        {h1:"html",
        subdata:[
            {name:"chap-1"},
            {name:"chap-2"},
            {name:"chap-3"},
            {name:"chap-4"},
            {name:"chap-5"},
            {name:"chap-5"},
            {name:"chap-5"},
        ]
        },
        {h1:"CSS",
        subdata:[
            {name:"chap-1"},
            {name:"chap-2"},
            {name:"chap-2"},
            {name:"chap-2"},
            {name:"chap-2"},
            {name:"chap-2"},
            {name:"chap-2"},
            {name:"chap-3"},
            {name:"chap-4"},
            {name:"chap-5"},
        ]
        },
        {h1:"Java Script",
        subdata:[
            {name:"js-1"},
            {name:"js-2"},
            {name:"js-3"},
            {name:"js-4"},
            {name:"js-5"},
        ]
        },
        {h1:"Bonus- BootStrap-5",
        subdata:[
            {name:"Bonus-1"},
            {name:"Bonus-2"},
            {name:"Bonus-3"},
            {name:"Bonus-4"},
            {name:"Bonus-5"},
            {name:"Bonus-5"},
            {name:"Bonus-5"},
            {name:"Bonus-5"},
        ]
        },
        {h1:"With Deployment",
        subdata:[
            {name:"Deployment-1"},
            {name:"Deployment-2"},
            {name:"Deployment-3"},
            {name:"Deployment-4"},
            {name:"Deployment-5"},
        ]
        },
    ]
    const [isVisible,setIsVisible] = useState (false);
  return (
    <div>
        {/* <h3 className='text-purple'>Course - Syllabus</h3> */}
        <div className='w-full h-fit'>
            {headings.map((val,i)=>{
                return <div key={i} className='h-fit  w-full border-b-4 '>
                    <div onClick={()=>setIsVisible(!isVisible)}
                    className='cursor-pointer w-full h-12 flex items-center justify-between'>
                        <h4 className='font-medium '>{val.h1}</h4>
                        <div className='w-12 h-12 flex items-center justify-center py-2'><FaAngleDown/></div>
                    </div>
                    {isVisible && (
                        <div className='w-full h-fit px-20'>
                        {val.subdata.map((item,index)=>{
                            return <div key={index} className='w-full h-12'>
                                <h4 className='font-normal text-gray-500 my-0'>
                                    {item.name}
                                </h4>
                            </div>
                        })}
                    </div>
                    )}
                </div>
            })}
        </div>
    </div>
  )
}

export default Syllabus