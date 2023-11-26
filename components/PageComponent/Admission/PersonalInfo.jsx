import React from 'react'
import {Form, Formik, Field,ErrorMessage} from 'formik'
import {TiUser} from 'react-icons/ti'

function PersonalInfo() {
    const formdata=[
        {label:"Full Name",
        placeholder:"Enter your Full Name",
        type:"text",
        identity:"fullName"
        },
        {label:"Address",
        placeholder:"Enter your Address",
        type:"text",
        identity:"address"
        },
        {label:"Date of Birth",
        placeholder:"Enter your Date of Birth",
        type:"date",
        identity:"dob"
        },
        {label:"Gender",
        placeholder:"Choose your Gender",
        identity:"gender",
        type:"select",
        option:[
            {name:"Choose your Gender"},
            {name:"Female"},
            {name:"Male"},
            {name:"Other"},
        ]
        },
        {label:"LEvel of Education",
        placeholder:"LEvel of Education",
        type:"select",
        identity:"levelOfEducation",
        option:[
            {name:"select"},
            {name:"Bachelore"},
            {name:"+2"},
            {name:"SEE"},
        ]
        },
        {label:"Email",
        placeholder:"Enter your Email",
        type:"email",
        identity:"email"
        },
        {label:"Phone No.",
        placeholder:"Enter your Phone No.",
        type:"text",
        identity:"phoneNo"
        },
        {label:"Gurdain's Name",
        placeholder:"Gurdain's Name",
        type:"text",
        identity:"gurdainName"
        },
        {label:"Gurdain's contact Number.",
        placeholder:"Gurdain's contact Name",
        type:"text",
        identity:"gurdainContact"
        },
        {label:"Name of School / College",
        placeholder:"Name of School / College",
        type:"text",
        identity:"NameOfSchool/College"
        },
        {label:"Select Course",
        placeholder:"Select Course",
        type:"select",
        identity:"Course",
        option:[
            {name:"Choose your Course"},
            {name:"Web"},
            {name:"Hardware"},
            {name:"Other"},
        ]
        },
        {label:"Shift:",
        placeholder:"Shift",
        type:"select",
        identity:"shift",
        option:[{name:"select"},
            {name:"Morning",},
            {name:"Day",},
            {name:" Evening",},
            ]
        },
    ]
  return (
    <div className='w-full py-5 bg-gray-100 p-3 px-5 relative rounded-lg overflow-hidden'>
        {/* <div>
            <Formik
            initialValues={{
                fullName:"",
                Address:"",
                dob:"",
                email:"",
                phoneNo:"",
                gender:"",
                levelOfEducation:"",
                gurdainName:"",
                gurdainContact:"",
                NameOfSchoolCollege:"",
                Course:"",
                gurdainName:"",
                shift:"",
            }}
            >
                {({handleSubmit})=>{
                    return <Form onSubmit={handleSubmit}>
                        <div className='w-52 h-52 flex items-center justify-center'>
                            <div className='w-full h-full rounded-full bg-red-500'></div>
                        </div>
                        <div className='w-full flex flex-wrap gap-x-11'>
                            {formdata.map((val,i)=>{
                                if(val.identity==="dob"){
                                    return <div key={i} className='w-fit flex flex-col my-2'>
                                    <label className='text-lg text-black'> 
                                        {val.label}
                                    </label>
                                    <Field  
                                        type={val.type}
                                        name={val.identity}
                                        className="w-full p-3 my-2 outline-none bg-gray-200  rounded-lg"
                                    />
                                </div>
                                }
                                else if (val.type ==="select") {
                                    return <div key={i} className={`${val.identity=== "Course" ? "w-[22%]":"w-fit"} flex flex-col my-2`}>
                                        <label>
                                            {val.label}
                                        </label>
                                        <Field as={'select'} name={val.identity} 
                                            className=" my-2 p-3 bg-gray-200 outline-none rounded-lg">
                                            {val.option.map((item,index)=>{
                                                return <option key={index} className=''>
                                                    {item.name}
                                                </option>
                                            })}
                                        </Field>
                                    </div>
                                }
                                else {
                                    return <div key={i} 
                                    className={`${val.identity==="email"? "w-[20%]":""} 
                                                ${val.identity==="phoneNo"? "w-[20%]":""} 
                                                ${val.identity==="gurdainContact"? "w-[20%]":""}  w-[48%] my-2`}>
                                        <label>
                                            {val.label}
                                        </label>
                                        <Field 
                                            type={val.type}
                                            placeholder={val.placeholder}
                                            name={val.identity}
                                            className="w-full my-2 bg-gray-200 p-3 outline-none rounded-lg"
                                        />
                                    </div>
                                }

                            })}
                        </div>
                    </Form>
                }}
            </Formik>
        </div> */}
        <div className=''>
            <div className='w-full  grid grid-cols-2'>
                <div className="flex items-center pb-3 w-full h-52 flex-col">
                <div className='w-52 mx-auto h-52 bg-gray-200 mb-3 flex items-center justify-center text-[150px] text-neutral-400'>
                    <TiUser />
                    </div>
                    <div className='flex flex-col my-2'>
                            <label className='relative inline-block cursor-pointer'>
                                <input type="file" name="photo" className='hidden bg-gray-200 py-2' />
                                Upload Photo</label>
                            
                    </div>
                </div>
                <div className='w-full h-auto flex flex-col justify-center'>
                    <div className='w-full flex flex-col my-2'>
                        <label>
                            Full Name
                        </label>
                        <input type='text' placeholder='Enter your full name' name='fullName' className='w-full my-2 bg-gray-200 p-3 outline-none rounded-lg'/>
                    </div>
                    <div className='w-full flex flex-col my-2'>
                        <label>
                            Address
                        </label>
                        <input type='text' placeholder='Enter your address' name='Address' 
                        className='w-full my-2 bg-gray-200 p-3 outline-none rounded-lg'/>
                    </div>
                </div>
            </div>
            <div className='w-full grid grid-cols-2 gap-y-5 my-2'>
                <div className='pr-5'>
                    <div className='flex gap-5'> 
                        <div className='flex flex-col w-fit'>
                            <label>
                                Gender
                            </label>
                            <select name="select" className='p-3 my-2 rounded-lg outline-none bg-gray-200'>
                                <option>select</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>other</option>
                            </select>
                        </div>
                        <div className='flex flex-col w-fit'>
                            <label>
                                Level of Education 
                            </label>
                            <select name="select" className='px-3 pr-4 py-3 my-2 rounded-lg outline-none bg-gray-200'>
                                <option>select</option>
                                <option>Bachelore</option>
                                <option>+2</option>
                                <option>SEE</option>
                            </select>
                        </div>
                        <div className='flex flex-col'>
                            <label>
                                Date fo Birth
                            </label>
                            <input type="date" name="dob" className='w-fit bg-gray-200 my-2 py-2 px-3 outline-none rounded-lg'/>
                        </div>
                    </div>
                </div>
                
                <div className='flex gap-5'>
                    <div className='w-[48%] flex flex-col'>
                        <label>
                            Email
                        </label>
                        <input type='email' placeholder='Enter your address' name='Address' 
                        className='w-full my-2 bg-gray-200 p-3 outline-none rounded-lg'/>
                    </div>
                    <div className='w-[28%] flex flex-col'>
                            <label>
                                Phone No.
                            </label>
                            <input type='text' placeholder='Phone no.' name='phoneNo' 
                            className='w-full my-2 bg-gray-200 p-3 outline-none rounded-lg'/>
                        </div>
                </div>
                <div className='flex w-full  gap-5 pr-6'>
                    <div className='w-[65%] flex flex-col'>
                        <label>
                            Gurdian Name
                        </label>
                        <input type='text' placeholder='Enter your full name' name='fullName' className='w-full my-2 bg-gray-200 p-3 outline-none rounded-lg'/>
                    </div>
                    <div className='w-[28%] flex flex-col'>
                        <label>
                            Gurdian contact
                        </label>
                        <input type='text' placeholder='Gurdain contact' name='phoneNo' 
                        className='w-full my-2 bg-gray-200 p-3 outline-none rounded-lg'/>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='flex flex-col w-fit'>
                            <label>
                                Course
                            </label>
                            <select name="select" className='w-fit py-3 my-2 rounded-lg outline-none` bg-gray-200'>
                                <option >Mernstack</option>
                                <option >Web Design</option>
                                <option >Graphic Design</option>
                                <option >Hardware repairing</option>
                                <option >Advance Chip level desktop and Laptop Repairing Course</option>
                            </select>
                        </div>
                    <div className='flex flex-col w-fit'>
                            <label>
                                Shift
                            </label>
                            <select name="select" className='px-3 pr-4 py-3 my-2 rounded-lg outline-none bg-gray-200'>
                                <option>Select</option>
                                <option>Morning</option>
                                <option>Day</option>
                                <option>Evening</option>
                            </select>
                        </div>
                </div>
            </div>
        </div>
        {/* <div className='w-full h-10 absolute top-0 -left-[490px] rotate-[135deg] bg-main'>

        </div> */}
    </div>
  )
}

export default PersonalInfo