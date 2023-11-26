import React from 'react'
import {FaJava, FaPython, FaNodeJs, FaScrewdriver, FaReact,FaAndroid} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {SiAdobephotoshop} from 'react-icons/si'
import {TbUserSearch} from 'react-icons/tb'

import { Formik,Field,ErrorMessage,Form } from 'formik'
function Hire() {
    const skillLogo=[
        {h1:"java",
        icon:<FaJava/>,
        color:"text-black",
        },
        {h1:"Python",
        icon:<FaPython/>,
        color:"text-python"
        },
        {h1:"Script Writer",
        icon:<IoLogoJavascript/>,
        color:"text-js"
        },
        {h1:"Node.Js",
        icon:<FaNodeJs/>,
        color:"text-node"
        },
        {h1:"Mobile And Printer Repairing",
        icon:<FaScrewdriver/>,
        color:"text-mobile"
        },
        {h1:"Graphics",
        icon:<SiAdobephotoshop/>,
        color:"text-graphic"
        },
        {h1:"Web Design",
        icon:<FaReact/>,
        color:"text-web"
        },
        {h1:"Android",
        icon:<FaAndroid/>,
        color:"text-android"
        },
    ]
    
    const courses=[
        {lable:"Graphic Designing",
        type:"radio",
        identity:"graphicDesign"
        },
        {lable:"web Designing",
        type:"radio",
        identity:"webDesigning"
        },
        {lable:"BackEnd Development",
        type:"radio",
        subdata: [
            {label:"PHP, Lavarel",
            type:"radio",
            identity:"PHPLavarel"},
            {label:"Python With Django",
            type:"radio",
            identity:"PythonWithDjango"},
            {label:"Node JS",
            type:"radio",
            identity:"NodeJS"},
        ]
        },
        {lable:"Data Base",
        type:"radio",
        subdata: [
            {label:"SQL",type:"radio",
            identity:"SQL"},
            {label:"Oracle",type:"radio",
            identity:"Oracle"},
        ]
        },
        {lable:"Hardware Expert",
        type:"radio",
        subdata: [
            {label:"Basic Hardware and Networkinig",type:"radio",
            identity:"BasicHardwareandNetworkinig"},
            {label:"Printer Repairing",type:"radio",
            identity:"PrinterRepairing"},
            {label:"chip Level Repairing",type:"radio",
            identity:"chipLevelRepairing"},
        ]
        },
        {lable:"Engineering Drawing",
        type:"radio",
        identity:"EngineeringDrawing"
        },
        {lable:"Software Development",
        type:"radio",
        subdata: [
            {label:"Python",type:"radio",
            identity:"Python"},
            {label:"Java",type:"radio",
            identity:"Java"},
            {label:"Java",type:"radio",
            identity:"Java"},
            {label:"NET",type:"radio",
            identity:"NET"},
        ]
        },
        {lable:"Job Types",
        type:"radio",
        subdata: [
            {label:"chip Level Repairing",type:"radio",
            identity:"chipLevelRepairing"},
            {label:"chip Level Repairing",type:"radio",
            identity:"chipLevelRepairing"},
            {label:"chip Level Repairing",type:"radio",
            identity:"chipLevelRepairing"},
        ]
        },

    ]
    const formdata=[
        {placeholder:"Full Name",
        identity:"fullName",
        type:"text"
        },
        {placeholder:"Company Name",
        identity:"companyName",
        type:"text"
        },
        {placeholder:"Email Address",
        identity:"email",
        type:"email"
        },
        {placeholder:"Contact Number",
        identity:"contactNumber",
        type:"text"
        },
    ]
  return (
    <div>
        <div className='w-10/12 mx-auto pt-10'>
            <div>
                <div className='flex items-end'>
                    <h1 className='my-0 font-medium text-3xl'>
                        Hire your desired skilled individual
                    </h1>
                    <div className='text-5xl w-fit h-fit relative flex items-center justify-center text-main'>
                        <TbUserSearch/>
                    </div>
                </div>
                <p className='pr-10 mt-3 mb-5 text-neutral-800'>
                Discover exceptional talent at HUB IT.Access a curated pool of skilled professionals ready to elevate your projects and initiatives.
                </p>
            </div>
            <div className='grid grid-cols-2'>
                <div className='px-10'>
                    <h4 className='text-purple'>
                        Courses
                    </h4>
                    <Formik
                    initialValues={{
                        graphicDesign:"" ,
                        webDesigning:"" ,
                        PHPLavarel:"" ,
                        PythonWithDjango:"",
                        NodeJS:"" ,
                        SQL:"" ,
                        Oracle:"" ,
                        BasicHardwareandNetworkinig:"" ,
                        PrinterRepairing:"" ,
                        chipLevelRepairing:"" ,
                        EngineeringDrawing:"" ,
                        Python:"" ,
                        Java:"" ,
                        NET:"" ,
                    }}
                    >
                        {({handleSubmit})=>{
                            return <Form>
                                {courses.map((val,i)=>{
                                    if(!val.subdata){
                                        return <div key={i} 
                                                className='my-4'>
                                            <Field 
                                            type={val.type}
                                            name={val.identity}
                                            className="mr-2"/>
                                            <label className='text-lg font-medium'>
                                                {val.lable}
                                            </label>
                                        </div>
                                    }
                                    else{
                                        return <div key={i} className='my-4'>
                                            <Field 
                                            type={val.type}
                                            name={val.identity}
                                            className="mr-2"/>
                                            <label className='text-lg font-medium'>
                                                {val.lable}
                                            </label>
                                            {val.subdata.map((item,index)=>{
                                               return <div key={index} className='pl-6 my-2'>
                                                <Field 
                                                    type={item.type}
                                                    name={item.identity}
                                                    className="mr-2"/> 
                                                <label className='text-gray-500'>
                                                    {item.label}
                                                </label> 
                                               </div>
                                            })}
                                        </div>
                                    }
                                })}
                            </Form>
                        }}
                    </Formik>
                    <div className='w-fit my-5'>
                        <button className='w-44 h-10 text-center  rounded-3xl cursor-pointer bg-purple text-white border-2 border-purple mr-3  hover:bg-white hover:text-purple transition-all duration-300 hover:scale-110'>
                            Filter tallent
                        </button>
                        <button className='w-44 h-10 text-center rounded-3xl cursor-pointer bg-white border-2 text-purple border-purple hover:bg-purple hover:text-white transition-all duration-300 hover:scale-110'>
                            Reset
                        </button>
                    </div>
                </div>
                <div>
                    <h4 className='text-purple'>
                        Skill Generated
                    </h4>
                    <div className='grid grid-cols-2 gap-8'>
                        {skillLogo.map((val,i)=>{
                            return <div key={i} className='w-full h-48 flex flex-col items-center justify-center shadow-xl shadow-gray-300 rounded-md'>
                                <div className={`w-32 h-28 flex items-center justify-center text-8xl ${val.color}`}>
                                    {val.icon}
                                </div>
                                <h5 className={`${val.color} my-0 max-w-[15ch] text-center`}>
                                    {val.h1}
                                </h5>
                            </div>
                        })}
                    </div>
                </div>
            </div> 
            <div className='flex my-10'>
                <div className='w-2/4  border-r-8 pl-5 pr-2 relative border-boxyellwo'>
                        <div className='w-full h-full  bg-[url("https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fG1vbml0b3J8ZW58MHx8MHx8fDA%3D")] bg-no-repeat bg-center bg-cover blur-[2px]'
                        >
                        </div>
                        <div className='w-full h-full flex items-center absolute top-0 right-3'>
                            <h1 className='text-[36px] w-full text-right my-0 px-3 text-shadow text-shadow-lg text-white capitalize '>Secure top-tier <br/> talent swiftly! <br/> Complete the form <br/> for a rapid response!</h1>
                        </div>
                </div>
                <div className='w-2/4 h-fit px-10 mx-auto'>
                    <Formik 
                    initialValues={{
                        fullName:"",
                        companyName:"",
                        email:"",
                        contactNumber:"",
                    }}
                    >
                        {({handleSubmit})=>{
                            return <Form>
                                {formdata.map((val,i)=>{
                                    return <div key={i} className='my-5'>
                                        <Field 
                                        type={val.type}
                                        name={val.identity}
                                        placeholder={val.placeholder}
                                        className="w-full px-3 py-2 rounded-md border-2 border-purple"/>
                                    </div>
                                })}
                            </Form>
                        }}
                    </Formik>
                </div>         
            </div>
        </div>
    </div>
  )
}

export default Hire