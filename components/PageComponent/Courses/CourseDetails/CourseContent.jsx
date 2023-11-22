import React from 'react'
import { Formik,Field, ErrorMessage,Form } from 'formik'
import {HiUser} from 'react-icons/hi'
import {MdEmail} from 'react-icons/md'
import {FaPhoneAlt, FaUser} from 'react-icons/fa'
import {GrChat} from 'react-icons/gr'
import OverviewCourse from './OverviewCourse'
import Syllabus from './Syllabus'
import { useState } from 'react'

function CourseContent() {
    const related=[
        {name:"https://images.unsplash.com/photo-1627556592933-ffe99c1cd9eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHVuaXZlcnNlfGVufDB8fDB8fHww",
        h1:"Mobile App Development",
        category:"category :",
        description:"Short description :",
        icon1:<FaUser/>,
        number:"12456",
        icon2:<GrChat/>,
        number2:"124",
    },
        {name:"https://images.unsplash.com/photo-1627556592933-ffe99c1cd9eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHVuaXZlcnNlfGVufDB8fDB8fHww",
        h1:"Mobile App Development",
        category:"category :",
        description:"Short description :",
        icon1:<FaUser/>,
        number:"12456",
        icon2:<GrChat/>,
        number2:"124",
    },
    ]
    const accomplishment=[
        {name:"https://images.unsplash.com/photo-1623026167700-50a49d8f98b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGh1YnxlbnwwfHwwfHx8MA%3D%3D",
        h1:"Mobile App Development",
        nam:"Roshika Chettri",
        description:"web-design"
    },
        {name:"https://images.unsplash.com/photo-1627556592933-ffe99c1cd9eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHVuaXZlcnNlfGVufDB8fDB8fHww",
        h1:"Mobile App Development",
        nam:"Roshika Chettri",
        description:"web-design"
    },
        {name:"https://images.unsplash.com/photo-1623026167700-50a49d8f98b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGh1YnxlbnwwfHwwfHx8MA%3D%3D",
        h1:"Mobile App Development",
        nam:"Roshika Chettri",
        description:"web-design"
    },
        {name:"https://images.unsplash.com/photo-1627556592933-ffe99c1cd9eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHVuaXZlcnNlfGVufDB8fDB8fHww",
        h1:"Mobile App Development",
        nam:"Roshika Chettri",
        description:"web-design"
    },
    ]
    
    const tabs= [
        {title:"Course Overview"},
        {title:"Course Syllabus"},
    ]
    const [active,setActive]= useState ("overview");
    const Tabs = () =>{
        switch (active) {
            case "Course Overview":
                return <OverviewCourse />;
                break;
            case "Course Syllabus":
                return <Syllabus />;
                break;
        }
    }
  return (
    <div>
        <div className='w-11/12 mx-auto pt-20 flex justify-between '>
            <div className='w-[60%] pr-20'>
                <div className='w-full px-6 py-3 rounded-full overflow-hidden grid grid-cols-3 bg-gray-200'>
                    {tabs.map((val,i)=>{
                        return (
                            <div key={i}
                            className={` ${active === val.title ? "text-purple border-b-2 border-purple":""} my-0 mr-2 `}
                            onClick={()=> setActive(val.title)}
                            >
                                {val.title}
                            </div>
                        )
                    })}
                </div>
                <div>
                    {Tabs()}
                </div>
                <div className='my-10'>
                    <h4 className='text-purple'>Accomplishment</h4>
                    <div className='grid grid-cols-2 gap-8 px-8'>
                    {accomplishment.map((val,i)=>{
                            return <div key={i} className='p-7 rounded-xl border-2 shadow-lg shadow-gray-400'>
                                <div className='w-full h-60' style={{
                                    backgroundImage:`url(${val.name})`,
                                    backgroundSize:"cover",
                                    backgroundRepeat:"no-repeat",
                                    backgroundPosition:"center",
                                }}>
                                </div>
                                <h4 className=' my-3 border-b-4 pb-3 border-gray-300'>{val.h1}</h4>  
                                <div className='my-3 flex justify-between items-center'>
                                    <p>{val.nam}</p>
                                    <p className='text-purple font-medium'>{val.description}</p>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
            <div className='w-[40%] px-10'>
                <Formik
                initialValues={{
                    fullname:"",
                    email:"",
                    phonenumber:"",
                    selectedCourse:"",
                    message:"",
                }}
                >
                    {({handleSubmit})=>{
                        return <Form onSubmit={handleSubmit}>
                            <div className='bg-white border-4 shadow-xl shadow-gray-500 px-5 rounded-xl'>
                                <h3 className='mb-5 text-purple'>
                                    Quick Inquiry Form
                                </h3>
                                <div className=''>
                                    <div className='relative w-full h-12 rounded-2xl overflow-hidden'>
                                        <div className='w-12 h-12 flex items-center justify-center absolute top-0 left-0 text-4xl text-gray-600'><HiUser/></div>
                                        <input 
                                            type="text" 
                                            placeholder='Enter Your Full Name'
                                            className='bg-gray-200 w-full h-full pl-12 outline-none placeholder:text-gray-600'/>
                                    </div>
                                    <div className='my-5 relative w-full h-12 rounded-2xl overflow-hidden'>
                                        <div className='w-12 h-12 flex items-center justify-center absolute top-0 left-0 text-3xl text-gray-600'><MdEmail/></div>
                                        <input 
                                            type="text" 
                                            placeholder='Enter Your Email'
                                            className='bg-gray-200 w-full h-full pl-12 outline-none placeholder:text-gray-600'/>
                                    </div>
                                    <div className='h-12 flex justify-between items-center'>
                                        <div className='w-[25%] h-full'>
                                            <select className='w-full h-full bg-gray-200 outline-none rounded-2xl px-6 text-gray-500'>
                                                <option>+977</option>
                                                <option>+977</option>
                                                <option>+977</option>
                                                <option>+977</option>
                                            </select>
                                        </div>
                                        <div className='w-[70%] h-full relative'>
                                            <div className='w-12 h-12 flex items-center justify-center absolute top-0 left-0 text-3xl text-gray-600'><FaPhoneAlt/>
                                            </div>
                                            <input type="text" 
                                            name="phonenumber" 
                                            placeholder='Enter Your Phone Number'
                                            className='bg-gray-200 pl-12 w-full h-full outline-none rounded-2xl text-gray-500' />
                                        </div>
                                    </div>
                                    <div className='w-full h-12 my-5'>
                                        <input 
                                                type="text" 
                                                placeholder='Selected course'
                                                className='bg-gray-200 w-full h-full px-6 outline-none text-center placeholder:text-gray-600 rounded-2xl'
                                        />
                                    </div>
                                    <div className='w-full '>
                                        <textarea 
                                            type="text"
                                            placeholder='Your message..'
                                            className='bg-gray-200 w-full h-28 max-h-64 p-3 outline-none placeholder:text-gray-600 rounded-2xl capitalize'
                                        />
                                    </div>
                                    <button className='w-full h-12 bg-main text-white rounded-3xl my-10'>Submit Inquiry</button>
                                </div>
                                
                                    
                            </div>
                        </Form>
                    }}
                </Formik>
                <div className='my-20'>
                    <h3 className='w-fit  text-purple'>
                    Related Course
                    </h3>
                    <div className='grid grid-cols-1 gap-6 w-2/4 ml-6 mt-8'>
                        {related.map((val,i)=>{
                            return <div key={i}>
                                <div className='w-full h-60' style={{
                                    backgroundImage:`url(${val.name})`,
                                    backgroundSize:"cover",
                                    backgroundRepeat:"no-repeat",
                                    backgroundPosition:"center",
                                }}>
                                </div>
                                <h4 className='text-center my-3'>{val.h1}</h4>
                                <div className='bg-gray-200'>
                                    <p>{val.category}</p>
                                    <p>{val.description}</p>
                                </div>
                                <div className='my-3 flex justify-between items-center'>
                                    <div className='flex items-center'>
                                        <div>{val.icon1}</div>
                                        <p className='ml-2'>
                                            {val.number}
                                        </p>
                                    </div>
                                    <div className='flex items-center'>
                                        <div>{val.icon2}</div>
                                        <p className='ml-2'>
                                            {val.number2}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CourseContent