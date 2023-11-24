import React from 'react'
import {HiClipboardCheck} from 'react-icons/hi'

function FormReveiw() {
    const formdata=[
        {title:"Full name",
        data:"jacobb",
        },
        {title:"Address",
        data:"Kalikanagar",
        },
        {title:"Email",
        data:"jakaj@gmail.com",
        },
        {title:"Phone No.",
        data:"+977 981234567",
        },
        {title:"Date of Birth",
        data:"1914-10-12",
        },
        {title:"Gender",
        data:"male",
        },
        {title:"Level of Education",
        data:"SEE",
        },
        {title:"Gurdian Name",
        data:"Hari sir",
        },
        {title:"Gurdian Contact",
        data:"+977 981234567",
        },
        {title:"Course",
        data:"Hardware Repairing",
        },
        {title:"Shift",
        data:"Day",
        },
    ]
  return (
    <div>
        <div className='flex items-center justify-center'>
            <div className='text-6xl text-boxyellwo'>
                <HiClipboardCheck/>
            </div>
            <h3 className='my-5 font-medium text-center'>
                Before finalizing, please review your submitted form for any errors.
            </h3>
        </div>
        <div className='flex justify-between w-full my-10 py-10 overflow-clip pr-16 bg-gray-100 p-5 rounded-lg shadow-lg shadow-gray-400 border'>
            <div className='w-[18%] h-auto bg-cyan-200'></div>
            <div className='w-[78%] grid grid-cols-4 gap-3'>
                {formdata.map((val,i)=>{
                    return <div key={i} className='flex flex-col justify-center'>
                        <h1 className='my-0 text-lg font-medium mr-2'>{val.title}:</h1>
                        <p>{val.data}</p>
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default FormReveiw