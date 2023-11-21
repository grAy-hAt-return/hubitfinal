import React from 'react'
import {FaUser} from 'react-icons/fa'
import {GrChat} from 'react-icons/gr'
import {IoIosArrowForward} from 'react-icons/io'
import {GrFormPrevious ,GrFormNext} from 'react-icons/gr'


function FeaturedCourse() {
    const data=
        {p1:"Featured Course",
        h1:"Become Full Stack Developer With Mern Stack",
        p2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptates eveniet at perspiciatis ea ut, aliquam perferendis possimus illum unde vel esse, alias quos consequuntur incidunt voluptatem pariatur est modi.",
        h2:"Book Now"    
    }
    const status=[
        {
        h1:"Starts in ",
        p:"20feb,2022",
        color:"bg-purple",
        textcolor:"text-white"
        },
        {
        h1:"Course price ",
        p:"Rs 20000",
        color:"bg-boxyellwo",
        textcolor:"text-black"
        },
    ]
    const popular=[
        {name:"https://images.unsplash.com/photo-1555255707-c07966088b7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJvYm90fGVufDB8fDB8fHww",
        h1:"Mobile App Development",
        category:"category :",
        description:"Short description :",
        icon1:<FaUser/>,
        number:"12456",
        icon2:<GrChat/>,
        number2:"124",
    },
        {name:"https://images.unsplash.com/photo-1555255707-c07966088b7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJvYm90fGVufDB8fDB8fHww",
        h1:"Mobile App Development",
        category:"category :",
        description:"Short description :",
        icon1:<FaUser/>,
        number:"12456",
        icon2:<GrChat/>,
        number2:"124",
    },
        {name:"https://images.unsplash.com/photo-1555255707-c07966088b7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJvYm90fGVufDB8fDB8fHww",
        h1:"Mobile App Development",
        category:"category :",
        description:"Short description :",
        icon1:<FaUser/>,
        number:"12456",
        icon2:<GrChat/>,
        number2:"124",
    },
        {name:"https://images.unsplash.com/photo-1555255707-c07966088b7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJvYm90fGVufDB8fDB8fHww",
        h1:"Mobile App Development",
        category:"category :",
        description:"Short description :",
        icon1:<FaUser/>,
        number:"12456",
        icon2:<GrChat/>,
        number2:"124",
    },
    ]
    const recomended=[
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
  return (
    <div>
        <div className='w-11/12 h-fit my-10 mx-auto flex flex-col-reverse md:flex-row lg:flex-row xl:flex-row xxl:flex-row ' 
        style={{
            backgroundColor: "#EEEAEA"
        }}>
            <div className='w-full md:w-2/4 lg:w-2/4 xl:w-2/4 xxl:w-2/4 pt-4 px-4'>
                <p className='text-sm md:text-sm lg:text-sm xl:text-sm xxl:text-base text-purple'>
                    {data.p1}
                </p>
                <h1 className='text-2xl md:text-3xl lg:text-3xl xl:text-3xl xxl:text-3xl my-2 leading-10'>
                    {data.h1}
                </h1>
                <p className='text-sm md:text-base lg:text-base xl:text-base xxl:text-base text-textGray max-w-[62ch] leading-5 font-light'>
                    {data.p2}
                </p>
                <button className='bg-purple my-5 text-xs sm:text-sm md:text-base lg:text-base xl:text-base xxl:text-base text-white font-light px-4 py-2'>
                    {data.h2}
                </button>
            </div>
            <div className='w-full md:w-2/4 lg:w-2/4 xl:w-2/4 xxl:w-2/4 py-2 px-4 mb-5 flex'>
                <div className='w-[65%] h-64 mt-4' 
                style={{
                    backgroundImage: `url("https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
                    backgroundSize:'cover',
                    backgroundPosition:'center',
                    backgroundRepeat:'no-repeat'
                }}
                >
                </div>
                <div className='w-[35%] pl-4 mt-4 flex flex-col gap-3'>
                    {status.map((val,i)=>{
                        return <div key={i} className={`${val.color} ${val.textcolor} mx-auto w-24 md:w-28 lg:w-32 xl:w-32 xxl:w-36 h-16 flex flex-col justify-center items-center `}>
                            <p className='text-xs md:text-sm lg:text-sm xl:text-sm xxl:text-base text-center font-light'>{val.h1}</p>
                            <p className='text-xs md:text-sm lg:text-sm xl:text-sm xxl:text-base text-center font-light'>{val.p}</p>
                        </div>
                    })}
                </div>
            </div>
        </div>
        <div className='w-11/12 h-fit my-10 mx-auto flex flex-col'>
            <h1 className='w-fit mx-auto my-0'>
                Our Popular Courses
            </h1>
            <div className='w-full mt-8 mb-10 flex justify-between'>
                <div className='w-[33%] h-10 pl-10 flex items-center bg-gray-300 border-b-4 border-hoverMain rounded-sm overflow-hidden'>
                    <p className='text-gray-600 capitalize'>
                        choose any course name
                    </p>
                </div>
                <div className='w-[33%] h-10 pl-10 flex items-center bg-gray-300 border-b-4 border-hoverMain rounded-sm overflow-hidden'>
                    <p className='text-gray-600 capitalize'>
                        course
                    </p>
                </div>
                <div className='w-[25%] h-10 flex relative'>
                    <input type="text" 
                        placeholder='search course'
                        className='w-full bg-hoverMain placeholder:text-white pl-5 pr-10 capitalize' />
                    <div className='w-10 h-10 flex items-center justify-center bg-main absolute top-0 right-0'>
                        <IoIosArrowForward/>
                    </div>
                </div>
            </div>
            <div className='mt-10  grid grid-cols-4 gap-10'>
                {popular.map((val,i)=>{
                    return <div key={i}>
                        <div className='w-full h-60' style={{
                            backgroundImage:`url(${val.name})`,
                            backgroundSize:"cover",
                            backgroundRepeat:"no-repeat",
                            backgroundPosition:"center",
                        }}>
                        </div>
                        <h4 className='text-center my-3'>{val.h1}</h4>
                        <div className='bg-gray-300'>
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
            <div className='w-fit mx-auto flex gap-10 my-5'>
                <button className='w-10 h-10 bg-gray-300 text-xl hover:scale-110 transition-all duration-200 ease-in-out flex justify-center items-center'><GrFormPrevious/></button>
                <button className='w-10 h-10 bg-gray-300 text-xl hover:scale-110 transition-all duration-200 ease-in-out flex justify-center items-center'><GrFormNext/></button>
            </div>
        </div>
        <div className='w-11/12 h-fit my-10 mx-auto flex flex-col'>
            <h1 className='w-fit mx-auto my-10'>
                Recommended Course
            </h1>
            <div className='grid grid-cols-4 gap-10'>
                {recomended.map((val,i)=>{
                    return <div key={i}>
                        <div className='w-full h-60' style={{
                            backgroundImage:`url(${val.name})`,
                            backgroundSize:"cover",
                            backgroundRepeat:"no-repeat",
                            backgroundPosition:"center",
                        }}>
                        </div>
                        <h4 className='text-center my-3'>{val.h1}</h4>
                        <div className='bg-gray-300'>
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
            <div className='w-fit mx-auto flex gap-10 my-5'>
                <button className='w-10 h-10 bg-gray-300 text-xl hover:scale-110 transition-all duration-200 ease-in-out flex justify-center items-center'><GrFormPrevious/></button>
                <button className='w-10 h-10 bg-gray-300 text-xl hover:scale-110 transition-all duration-200 ease-in-out flex justify-center items-center'><GrFormNext/></button>
            </div>
        </div>
    </div>
  )
}

export default FeaturedCourse