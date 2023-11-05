import React from 'react'

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
  return (
    <div>
        <div className='w-11/12 h-fit my-10 mx-auto flex flex-col-reverse md:flex-row lg:flex-row xl:flex-row ' 
        style={{
            backgroundColor: "#EEEAEA"
        }}>
            <div className='w-full md:w-2/4 lg:w-2/4 xl:w-2/4 pt-4 px-4'>
                <p className='text-sm md:text-sm lg:text-sm xl:text-sm text-purple'>
                    {data.p1}
                </p>
                <h1 className='text-2xl md:text-3xl lg:text-3xl xl:text-3xl my-2 leading-10'>
                    {data.h1}
                </h1>
                <p className='text-sm md:text-base text-textGray max-w-[62ch] leading-5 font-light'>
                    {data.p2}
                </p>
                <button className='bg-purple my-5 text-xs sm:text-sm md:text-base lg:text-base xl:text-base text-white font-light px-4 py-2'>
                    {data.h2}
                </button>
            </div>
            <div className='w-full md:w-2/4 lg:w-2/4 xl:w-2/4 py-2 px-4 mb-5 flex'>
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
                        return <div key={i} className={`${val.color} ${val.textcolor} mx-auto w-24 md:w-28 lg:w-32 xl:w-32 h-16 flex flex-col justify-center items-center `}>
                            <p className='text-xs md:text-sm lg:text-sm xl:text-sm text-center font-light'>{val.h1}</p>
                            <p className='text-xs md:text-sm lg:text-sm xl:text-sm text-center font-light'>{val.p}</p>
                        </div>
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedCourse