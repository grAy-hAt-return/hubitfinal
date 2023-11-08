import React,{useState} from 'react'
import {ImQuotesLeft} from 'react-icons/im'

function Grid() {
    const data=[
        {name:"https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGl0JTIwc3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D",
         p:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, ipsum voluptas repellendus quas quam doloribus dignissimos iusto!",
         h1:"Somu Don",
         Course: "Graphic"
        },
        {name:"https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGl0JTIwc3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D",
         p:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, ipsum voluptas repellendus quas quam doloribus dignissimos iusto!",
         h1:"Somu Don",
         Course: "Graphic"
        },
        {name:"https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGl0JTIwc3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D",
         p:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, ipsum voluptas repellendus quas quam doloribus dignissimos iusto!",
         h1:"Somu Don",
         Course: "Graphic"
        },
        {name:"https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGl0JTIwc3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D",
         p:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, ipsum voluptas repellendus quas quam doloribus dignissimos iusto!",
         h1:"Somu Don",
         Course: "Graphic"
        },
        {name:"https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGl0JTIwc3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D",
         p:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, ipsum voluptas repellendus quas quam doloribus dignissimos iusto!",
         h1:"Somu Don",
         Course: "Graphic"
        },
        {name:"https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGl0JTIwc3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D",
         p:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, ipsum voluptas repellendus quas quam doloribus dignissimos iusto!",
         h1:"Somu Don",
         Course: "Graphic"
        },
        {name:"https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGl0JTIwc3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D",
         p:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, ipsum voluptas repellendus quas quam doloribus dignissimos iusto!",
         h1:"Somu Don",
         Course: "Graphic"
        },
        {name:"https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGl0JTIwc3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D",
         p:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, ipsum voluptas repellendus quas quam doloribus dignissimos iusto!",
         h1:"Somu Don",
         Course: "Graphic"
        },
        {name:"https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGl0JTIwc3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D",
         p:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, ipsum voluptas repellendus quas quam doloribus dignissimos iusto!",
         h1:"Somu Don",
         Course: "Graphic"
        },
    ]
    const heading=[
        {h1:"Regular"},
        {h1:"Facebook"},
        {h1:"Google"},
    ]
    const [isVisible, setIsVisible]= useState(false);
  return (
    <div className=''>
        <div className='w-10/12 mx-auto flex gap-5'>
            {heading.map((val,i)=>{
                return <button key={i}>
                    <h3 className='text-base md:text-lg lg:text-xl xl:text-xl text-neutral-800 my-0 hover:text-purple font-medium'>{val.h1}</h3>
                </button>
            })}
        </div>
        <div className={`${isVisible ? " " : "h-64 sm:h-[350px] md:h-[350px] lg:h-[350px] xl:h-[350px]  overflow-y-scroll sm:overflow-hidden md:overflow-hidden lg:overflow-hidden xl:overflow-hidden"} w-11/12 mx-auto mt-20 mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-2`}>
            {data.map((val,i)=>{
                return <div key={i} className='w-10/12 mx-auto sm:w-full md:w-full lg:w-full xl:w-full rounded-md shadow-gray-500 shadow-lg px-5 py-3 my-5'>
                    <div className='flex justify-between'>
                        <div className='flex items-end'>
                            <ImQuotesLeft className='text-3xl text-[#767676]'/>
                        </div>
                        <div className='w-20 h-20 rounded-full'
                        style={{
                            backgroundImage: `url(${val.name})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center"
                        }}
                        >
                        </div>
                    </div>
                    <p className='text-sm w-[90%] xl:max-w-[30ch]'>
                        {val.p}
                    </p>
                    <div className='flex flex-row items-center sm:items-start md:items-start lg:items-start xl:items-start justify-between sm:flex-col md:flex-col lg:flex-col xl:flex-col'>
                        <h5 className='mt-0 sm:mt-4 md:mt-4 lg:mt-4 xl:mt-4 my-0 text-purple font-semibold'>
                            {val.h1}
                        </h5>
                        <h4 className='my-0 font-semibold'>
                            Course : {val.Course}
                        </h4>
                    </div>
                </div>
            })}
        </div>
        <div className='hidden sm:block md:block lg:block xl:block w-fit mx-auto'>
            <button 
            onClick={()=>setIsVisible(!isVisible)}
            className='text-sm md:text-base lg:text-base xl:text-base '>
                Show more
            </button>
        </div>
        
    </div>
  )
}

export default Grid