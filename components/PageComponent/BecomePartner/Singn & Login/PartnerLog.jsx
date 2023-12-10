import React from 'react'
// import image from "../../../Resources/japan.jpg"
import hub from "../../../Resources/Hub.png"
import hubbbg from "../../../Resources/hubBg.png"
import hubbg from "../../../Resources/Icons/hubbg.svg"
import { Formik,Form, Field,ErrorMessage } from 'formik'
import {BsTriangle} from 'react-icons/bs'
import {RiComputerLine} from 'react-icons/ri'
import {SiMicrosoftexcel, SiMicrosoftoffice, SiMicrosoftword, SiMicrosoftpowerpoint, SiMicrosoftoutlook} from 'react-icons/si'
import {FaReact, FaHtml5, FaCss3, FaPython} from 'react-icons/fa'
// import {python} from '../../../Resources/Icons/python.svg'


function PartnerLog() {
    const formdata=[
        {label:"Email",
         type:"email",
         identity:"email"
        },
        {label:"Password",
         type:"passwrod",
         identity:"password"
        }
    ]
  return (
    <div className='w-full h-screen'>
        <div className='w-full h-full relative flex items-center justify-center overflow-clip'>
            <div className='w-4/6 h-4/6 mx-auto flex relative z-10 rounded-md overflow-clip shadow-purple shadow-lg'>
                <div className='w-10/12 md:w-2/5 lg:w-2/5 xl:w-2/5 xxl:w-2/5 h-full relative bg-gradient-to-b text-zinc-50 from-violet-900 from-70% via-purple via-10% to-pink-600 to-20%'>
                    <Formik 
                    initialValues={{
                        email:"",
                        passowrd:"",
                    }}
                     className='w-full h-full'>
                        {({handleSubmit})=>{
                            return <Form onSubmit={handleSubmit}>
                                <div className='w-full h-full   xxl:px-5 border-0 py-5'>
                                <h1 className='w-full h-full font-bold  text-center text-xl md:text-2xl lg:text-2xl xl:text-3xl xxl:text-3xl my-0'>
                                        Log in
                                    </h1>
                                    <div className='my-10'>
                                    {formdata.map((val,i)=>{
                                        return <div key={i} className='flex flex-col my-6 md:my-8 lg:my-10 xxl:mb-10'>
                                            <label className='text-sm md:text-base lg:text-base xl:text-base xxl:text-lg font-medium mb-2'>
                                                {val.label}
                                            </label>
                                            <Field 
                                            type={val.type}
                                            name={val.identity}
                                            className="outline-none px-2 rounded-md py-2 border-b-2 border-gray-500 text-black"/>
                                        </div>
                                    })}
                                    </div>
                                    <div className='flex items-center justify-between mt-24'>
                                        <button className='w-40 h-12 text-left cursor-pointer capitalize text-xs md:text-sm lg:text-sm xl:text-sm xxl:text-sm font-medium hover:underline'>
                                            Forgort passowrd ?
                                        </button>
                                        <button className='w-16 md:w-20 lg:w-24 xxl:w-28  md:h-8 lg:h-10 xxl:h-10 text-center capitalize text-sm md:text-base lg:text-base xl:text-base xxl:text-base font-medium text-white hover:text-purple bg-purple hover:bg-white border-purple border-2 transition-all duration-200 rounded-sm'>
                                            Next
                                        </button>
                                    </div>
                                </div>
                                
                            </Form>
                        }}
                    </Formik>
                </div>
                <div className='hidden w-0 md:block lg:block xl:block xxl:block md:w-3/5 lg:w-3/5 xl:w-3/5 xxl:w-3/5 h-0 md:h-full lg:h-full xl:h-full xxl:h-full bg-[url(https://scontent.fbwa1-1.fna.fbcdn.net/v/t39.30808-6/274578238_3124516784501038_7802018382545889587_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=J2-LVuWn8QcAX83zkM6&_nc_ht=scontent.fbwa1-1.fna&oh=00_AfATvdeVpLspAwpwz63Ea6F-iioXb4nPaAqck_NtU4vVzw&oe=657A3D59)] bg-cover bg-center bg-no-repeat'>
                </div>
            </div>
            
            {/* <div className='w-40 h-40 bg-red-500 absolute top-5 left-32'> */}
            <div className='w-full h-full absolute top-0 bg-gradient-to-br from-purple from-40% via-white via-20% to-purple to-40%'>
            </div>
            <div className='w-[500px] h-2/3 bg-purple bg-opacity-40 shadow-xl shadow-purple absolute top-52 -right-52 rotate-45'>
            </div>
            <div className='w-96 h-20 bg-gradient from-purple  shadow-xl shadow-purple absolute top-52 left-10 rotate-45'>
            </div>
            <div className='w-96 h-20   shadow-xl shadow-purple absolute top-52 right-10 rotate-45'>
            </div>
            <div className='w-52 h-52  rounded-full bg-gradient-to-t from-purple to-white animate-spin-slow shadow-xl shadow-purple absolute -bottom-20 left-10 rotate-45'>
            </div>
            <div className='w-20 h-20   shadow-xl shadow-purple absolute bottom-20 left-96 rotate-45'>
            </div>
            <div className='w-20 h-20  shadow-xl shadow-purple absolute top-20 left-96 rotate-180 text-5xl font-bold text-purple'>
            </div>
            <div className='w-20 h-20 absolute bottom-8 right-2/4 flex justify-center items-center text-8xl animate-spin-slow transition-all duration-500 delay-300 text-purple'>
                    <BsTriangle/>
            </div>
            <div className='w-20 h-20 absolute top-8 right-96 flex justify-center items-center text-8xl animate-swing transition-all duration-500 delay-300 text-purple'>
                <RiComputerLine />
            </div>
            <div className='w-fit h-fit absolute top-96 right-10 flex justify-center items-center text-5xl animate-spin-slow transition-all duration-500 delay-300 text-cyan-200'>
                <FaReact />
            </div>
            <div className='w-fit h-fit absolute top-96 left-10 flex justify-center items-center text-5xl animate-swing transition-all duration-500 delay-300 text-orange-400'>
                <FaHtml5 />
            </div>
            {/* <div className='w-fit h-fit absolute flex justify-center items-center text-6xl animate-motion transition-all duration-500 delay-300 text-zinc-50'>
                <FaCss3 />
            </div> */}
            <div className='w-fit h-fit absolute flex justify-center items-center text-6xl animate-motion transition-all duration-500 delay-300 text-zinc-50'>
                <FaCss3 />
            </div>
            <div className='w-fit h-fit absolute top-10 left-1/4 flex justify-center items-center text-5xl animate-spinopp transition-all duration-500 delay-300 text-cyan-600'>
                <FaPython />
            </div>
            <div className='w-fit h-fit absolute top-10 right-10 flex flex-col justify-center items-center text-5xl animate-scale transition-all  text-cyan-600'>
                <div className='text-3xl flex text-center text-orange-400'><SiMicrosoftoffice/>Office</div>
                <div className='flex gap-2'> 
                <div className='text-green-500 text-3xl'><SiMicrosoftexcel/></div>
                <div className='text-blue-500 mt-2 text-3xl'><SiMicrosoftword/></div>
                <div className='text-red-500 mt-3 text-3xl'><SiMicrosoftpowerpoint/></div>
                <div className='text-cyan-500 text-3xl'><SiMicrosoftoutlook/></div>
                </div>
            </div>
            <div className='w-fit h-fit absolute bottom-10 right-1/4 flex justify-center items-center text-5xl animate-bounce transition-all duration-500 delay-300 text-cyan-600'>
                <h3 className='my-0 text-lg text-amber-400 font-mono italic'>Gr@phic <span>Design</span></h3>
            </div>
                {/* here  */}
            {/* </div> */}

        </div>
    </div>
  )
}

export default PartnerLog