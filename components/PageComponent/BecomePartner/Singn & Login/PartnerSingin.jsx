import React from 'react'
import image from "../../../Resources/japan.jpg"
import { Formik,Form, Field,ErrorMessage } from 'formik'
function PartnerSingin() {
    const formdata=[
        {label:"Name Of Institute",
         type:"text",
         identity:"NameOfInstitute "
        },
        {label:"Address Of Institute",
         type:"text",
         identity:"AddressOfInstitute"
        },
        {label:"Office Email",
         type:"email",
         identity:"OfficeEmail"
        },
        {label:"Contact Number",
         type:"text",
         identity:"ContactNumber"
        },
        {label:"Create a Strong Password *",
         type:"password",
         identity:"Password"
        },
    ]
  return (
    <div className='w-full flex items-center justify-center'>
        <div className='w-10/12'>
            <h1 className='w-fit border-b-4 pb-2 border-purple text-xl md:text-2xl lg:text-2xl xl:text-3xl xxl:text-3xl mt-2 my-0'>
                Sign Up To Become A Partner
            </h1>
            <div className='w-full h-fit flex flex-col items-center justify-center my-10'>
                <div className='w-[100px] sm:w-[120px] md:w-[150px] lg:w-[220px] xl:w-[260px] xxl:w-[300px] h-[60px] sm:h-[80px] md:h-[100px] lg:h-[120px] xl:h-[140px] xxl:h-[160px] '
                style={{
                    backgroundImage: `url("https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/274578238_3124516784501038_7802018382545889587_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3vr_M7oUStMAX8aM0rK&_nc_ht=scontent.fktm3-1.fna&oh=00_AfCW1G_xRW5bRvsDC2U82bWF8gcLtZrWBgjDAQ6sk-o2aQ&oe=6554AA99")`,
                    backgroundSize:"cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
                >
                </div>
                <div className=''>
                    <Formik 
                    initialValues={{
                        NameOfInstitute:"",
                        AddressOfInstitute:"",
                        OfficeEmail:"",
                        ContactNumber:"",
                        Password:"",
                    }}
                    >
                        {({handleSubmit})=>{
                            return <Form onSubmit={handleSubmit}>
                                <div className='border-2 shadow-gray-800 shadow-2xl w-[300px] md:w-[330px] lg:w-[400px] xl:w-[470px] xxl:w-[500px] px-6 md:px-8 lg:px-8 xl:px-14 xxl:px-16'>
                                    {formdata.map((val,i)=>{
                                        return <div key={i} className='flex flex-col my-6 md:my-8 lg:my-10 xxl:my-16'>
                                            <label className='text-sm md:text-base lg:text-base xl:text-base xxl:text-lg font-medium'>
                                                {val.label}
                                            </label>
                                            <Field 
                                            type={val.type}
                                            name={val.identity}
                                            className="outline-none px-2 py-1 border-b-2 border-gray-500"/>
                                        </div>
                                    })}
                                    <div className='flex items-center justify-between my-10'>
                                        <button className='w-40 h-12 text-left cursor-pointer capitalize text-sm md:text-base lg:text-base xl:text-base xxl:text-lg font-normal'>
                                            Forgort passowrd ?
                                        </button>
                                        <button className='w-20 md:w-24 lg:w-32 xxl:w-40  md:h-8 lg:h-10 xxl:h-12 text-center capitalize text-sm md:text-base lg:text-base xl:text-base xxl:text-lg font-medium text-white hover:text-purple bg-purple hover:bg-white border-purple border-2 transition-all duration-200 rounded-sm'>
                                            Next
                                        </button>
                                    </div>
                                </div>
                                
                            </Form>
                        }}
                    </Formik>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PartnerSingin