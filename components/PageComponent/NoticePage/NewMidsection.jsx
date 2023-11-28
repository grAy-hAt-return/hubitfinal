import React,{useState} from 'react'
import {GrFormPrevious} from 'react-icons/gr'
import {GrFormNext} from 'react-icons/gr'

function NewMidsection() {
    const data=[
        {name:"https://images.unsplash.com/photo-1621478374422-35206faeddfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGFuaW1lfGVufDB8fDB8fHww",
        date:"Jan,11 2023 / category",
        h1:"Holiday Concern With Prithivi Jyanthi For Tommorow",
        p:"A round-the-world trip remains the world’s greatest journey. For two out of every three people, this is the ultimate travel experience, according to recent research. Three people, this is the ultimate travel experience, according to recent research. Ultimate travel experience, according to recent research.",
        },
        {name:"https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFuaW1lJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww",
        date:"Jan,11 2023 / category",
        h1:"Holiday Concern With Prithivi Jyanthi For Tommorow",
        p:"A round-the-world trip remains the world’s greatest journey. For two out of every three people, this is the ultimate travel experience, according to recent research. Three people, this is the ultimate travel experience, according to recent research. Ultimate travel experience, according to recent research.",
        },
        {name:"https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFuaW1lJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww",
        date:"Jan,11 2023 / category",
        h1:"Holiday Concern With Prithivi Jyanthi For Tommorow",
        p:"A round-the-world trip remains the world’s greatest journey. For two out of every three people, this is the ultimate travel experience, according to recent research. Three people, this is the ultimate travel experience, according to recent research. Ultimate travel experience, according to recent research.",
        },
        {name:"https://plus.unsplash.com/premium_photo-1661878091370-4ccb8763756a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFuaW1lJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww",
        date:"Jan,11 2023 / category",
        h1:"Holiday Concern With Prithivi Jyanthi For Tommorow",
        p:"A round-the-world trip remains the world’s greatest journey. For two out of every three people, this is the ultimate travel experience, according to recent research. Three people, this is the ultimate travel experience, according to recent research. Ultimate travel experience, according to recent research.",
        },
        {name:"https://images.unsplash.com/photo-1584186118422-895ef18c418d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvemVyfGVufDB8fDB8fHww",
        date:"Jan,11 2023 / category",
        h1:"Holiday Concern With Prithivi Jyanthi For Tommorow",
        p:"A round-the-world trip remains the world’s greatest journey. For two out of every three people, this is the ultimate travel experience, according to recent research. Three people, this is the ultimate travel experience, according to recent research. Ultimate travel experience, according to recent research.",
        },
        {name:"https://images.unsplash.com/photo-1627451945663-5c1daa80cb20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGRvemVyfGVufDB8fDB8fHww",
        date:"Jan,11 2023 / category",
        h1:"Holiday Concern With Prithivi Jyanthi For Tommorow",
        p:"A round-the-world trip remains the world’s greatest journey. For two out of every three people, this is the ultimate travel experience, according to recent research. Three people, this is the ultimate travel experience, according to recent research. Ultimate travel experience, according to recent research.",
        },
        {name:"https://images.unsplash.com/photo-1485575301924-6891ef935dcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJ1Y2t8ZW58MHx8MHx8fDA%3D",
        date:"Jan,11 2023 / category",
        h1:"Holiday Concern With Prithivi Jyanthi For Tommorow",
        p:"A round-the-world trip remains the world’s greatest journey. For two out of every three people, this is the ultimate travel experience, according to recent research. Three people, this is the ultimate travel experience, according to recent research. Ultimate travel experience, according to recent research.",
        },
        {name:"https://plus.unsplash.com/premium_photo-1663075817635-90ecf218ee5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3Vuc3xlbnwwfHwwfHx8MA%3D%3D",
        date:"Jan,11 2023 / category",
        h1:"Holiday Concern With Prithivi Jyanthi For Tommorow",
        p:"A round-the-world trip remains the world’s greatest journey. For two out of every three people, this is the ultimate travel experience, according to recent research. Three people, this is the ultimate travel experience, according to recent research. Ultimate travel experience, according to recent research.",
        },
        {name:"https://images.unsplash.com/photo-1566566716921-b50e82140547?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJteXxlbnwwfHwwfHx8MA%3D%3D",
        date:"Jan,11 2023 / category",
        h1:"Holiday Concern With Prithivi Jyanthi For Tommorow",
        p:"A round-the-world trip remains the world’s greatest journey. For two out of every three people, this is the ultimate travel experience, according to recent research. Three people, this is the ultimate travel experience, according to recent research. Ultimate travel experience, according to recent research.",
        },
        {name:"https://images.unsplash.com/photo-1600119330210-e7a3f5a0d079?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN1Ym1hcmluZXxlbnwwfHwwfHx8MA%3D%3D",
        date:"Jan,11 2023 / category",
        h1:"Holiday Concern With Prithivi Jyanthi For Tommorow",
        p:"A round-the-world trip remains the world’s greatest journey. For two out of every three people, this is the ultimate travel experience, according to recent research. Three people, this is the ultimate travel experience, according to recent research. Ultimate travel experience, according to recent research.",
        },
    ]

const [currentPage,setCurrentPage] = useState (1);
const [postPerPge,setPostPerPage] = useState(4);
const lastPostIndex = currentPage * postPerPge;
const firstPostIndex = lastPostIndex - postPerPge;
const currentPosts = data.slice(firstPostIndex,lastPostIndex);
const totalPost = data.length;

 let pages=[]
 for (let i=1 ; i<=Math.ceil(totalPost/postPerPge);i++){
  pages.push(i);
 }

 const handlePageClick = (pages) =>{
  setCurrentPage(pages);
};

const nextPage = () => {
  if (currentPage < pages.length+1) {
    setCurrentPage(currentPage + 1);
  }
  else {
    setCurrentPage(1);
  }
};

const prevPage = () => {
  if (currentPage > 0) {
    setCurrentPage(currentPage - 1);
  }
  else {
    setCurrentPage(pages.length+1);
  }
};
  return (
    <div className='w-full'>
        <div className='w-10/12 mx-auto flex'>
            <div className='w-3/4 h-fit'>
                {
                    currentPosts.map((val,i)=>{
                        return <div key={i} className='flex mb-10'>
                            <div className='w-2/5 h-64'
                            style={{
                                backgroundImage: `url(${val.name})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat"
                            }}
                            ></div>
                            <div className='w-3/5 pl-6 pr-16'>
                                <p className='text-sm font-light text-purple mb-2'>
                                    {val.date}
                                </p>
                                <h3 className='my-0'>
                                    {val.h1}
                                </h3>
                                <p className='my-3'>
                                    {val.p}
                                </p>
                                <button className='underline text-gray-500'>
                                    Read more
                                </button>
                            </div>
                        </div>
                    })
                }
                <div className='flex md:justify-end justify-between my-10'> 
                    <div className='flex'>
                        <button onClick={prevPage} className='md:px-3 px-1 md:py-2 bg-zinc-50 rounded '>
                            <GrFormPrevious />
                        </button>
                        <div className='w-fit md:mx-1 flex'>
                        {pages.map((item,index)=>{
                            return <button key={index} 
                            onClick={()=>handlePageClick(item)}
                            className={`px-3 mx-3 md:py-1 text-xs md:text-sm lg:text-base xl:text-base xxl:text-lg md:mx-1 rounded flex items-center justify-center hover:border-purple  border-2 ${item===currentPage? 'border-purple bg-purple text-white':'border-purple text-purple'}`}>
                            {item}
                            </button>
                        })}
                        </div>
                        <button onClick={nextPage} className='md:px-3 px-1 md:py-2 bg-zinc-50 rounded '>
                            <GrFormNext/>
                        </button>
                        <p>
                        </p>  
                    </div>
                </div>
            </div>
            <div className='w-1/4 '>
                <div className='w-full h-fit px-5 py-3 bg-mapbox rounded-2xl'>
                    <h1 className='text-2xl font-medium my-0'>
                        Newsletter
                    </h1>
                    <p className='my-3 text-sm font-medium text-neutral-700'>
                        Subscribe our newsletter to get notification new updates.
                    </p>
                    <input 
                        type="text" 
                        placeholder='Enter your Email' 
                        className='w-full p-3 my-3 bg-transparent rounded-3xl border-2 border-gray-500'
                    />
                    <button 
                        className='w-full p-3 my-5 text-center bg-purple text-white rounded-3xl border-2 border-gray-500'
                    >
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewMidsection