import next from 'next';
import React from 'react'
import { useState } from 'react'
import {MdOutlinePlayCircleFilled} from  "react-icons/md"

function Video() {
    const datas=[
        {course:"Graphic Design",
        user:"Jon dee",
        title:"I learned best course",
        name:"https://plus.unsplash.com/premium_photo-1661778950943-5685b06dd8f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW50cm9kdWN0aW9ufGVufDB8fDB8fHww",},
        {course:"Graphic Design",
        user:"Jon dee",
        title:"I learned easy course",
        name:"https://plus.unsplash.com/premium_photo-1661778950943-5685b06dd8f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW50cm9kdWN0aW9ufGVufDB8fDB8fHww",},
        {course:"Graphic Design",
        user:"Jon dee",
        title:"I learned crazy course",
        name:"https://plus.unsplash.com/premium_photo-1661778950943-5685b06dd8f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW50cm9kdWN0aW9ufGVufDB8fDB8fHww",},
        {course:"Graphic Design",
        user:"Jon dee",
        title:"I learned crazy course",
        name:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGVhcm5pbmd8ZW58MHx8MHx8fDA%3D",},
        {course:"Graphic Design",
        user:"Jon dee",
        title:"I learned crazy course",
        name:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGVhcm5pbmd8ZW58MHx8MHx8fDA%3D",},
        {course:"Graphic Design",
        user:"Jon dee",
        title:"I learned crazy course",
        name:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGVhcm5pbmd8ZW58MHx8MHx8fDA%3D",},
        {course:"Graphic Design",
        user:"Jon dee",
        title:"I learned crazy course",
        name:"https://images.unsplash.com/photo-1513258496099-48168024aec0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGVhcm5pbmd8ZW58MHx8MHx8fDA%3D",},
        {course:"Graphic Design",
        user:"Jon dee",
        title:"I learned crazy course",
        name:"https://images.unsplash.com/photo-1513258496099-48168024aec0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGVhcm5pbmd8ZW58MHx8MHx8fDA%3D",},
        {course:"Graphic Design",
        user:"Jon dee",
        title:"I learned crazy course",
        name:"https://images.unsplash.com/photo-1513258496099-48168024aec0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGVhcm5pbmd8ZW58MHx8MHx8fDA%3D",},
        {course:"Graphic Design",
        user:"Jon dee",
        title:"I learned crazy course",
        name:"https://images.unsplash.com/photo-1521714161819-15534968fc5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGxlYXJuaW5nfGVufDB8fDB8fHww",},
        {course:"Graphic Design",
        user:"Jon dee",
        title:"I learned crazy course",
        name:"https://images.unsplash.com/photo-1521714161819-15534968fc5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGxlYXJuaW5nfGVufDB8fDB8fHww",},
        {course:"Graphic Design",
        user:"Jon dee",
        title:"I learned crazy course",
        name:"https://images.unsplash.com/photo-1521714161819-15534968fc5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGxlYXJuaW5nfGVufDB8fDB8fHww",},
        {course:"Graphic Design",
        user:"Jon dee",
        title:"I learned crazy course",
        name:"https://images.unsplash.com/photo-1521714161819-15534968fc5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGxlYXJuaW5nfGVufDB8fDB8fHww",},
    ]

    const [currentPage,setCurrentPage] = useState(1);
    const [postPerPage,setPostPerPage] = useState(6);
    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPosts = datas.slice(firstPostIndex,lastPostIndex);
    const totalPost = datas.length;
    const totalpage = Math.ceil(totalPost/postPerPage);
    const lastpage = Math.ceil(totalPost/postPerPage);
    let pages=[] 
    // const pagedata=  pages.length;
    for (let i=1 ; i<Math.ceil(totalPost/postPerPage);i++){
        pages.push(i);
    }

    const handlePageClick = (pages) =>{
        setCurrentPage(pages);
    }
    
    const nextpage = () =>{
        if(currentPage < pages.length+1){
            setCurrentPage(currentPage + 1);
        }else{
            setCurrentPage(1);
        }
    }

    const prevPage = () =>{
        if (currentPage > 1){
            setCurrentPage (currentPage-1);
        }
        else{
            setCurrentPage(pages.length+1)
        }
    }
  return (
    <div className='w-10/12 mx-auto my-10'>
        <div className='w-full grid grid-cols-3 gap-5'>
            {currentPosts.map((val,i)=>{
                return <div key={i} className='flex flex-col p-1 mb-3'>
                    <div className='w-full h-56 rounded-lg overflow-clip relative'>
                        <img src={val.name} alt="video" className='w-full h-full object-cover object-center'/>
                        <div className='w-fit h-fit text-4xl flex items-center justify-center bg-white rounded-full  absolute top-1/2 left-1/2 hover:scale-105 hover:bg-purple transition-all duration-200'>
                                <MdOutlinePlayCircleFilled/>
                            </div>
                    </div>
                    <div className='flex gap-2 mt-3 place-item-center'>
                        <div className='w-12 h-12 rounded-full overflow-hidden '>
                            <img src={val.name} alt="image" className='w-full h-full object-cover object-center'/>
                        </div>
                        <div className=''>
                            <h3 className='my-0 font-semibold'>
                                {val.title}
                            </h3>
                            <div className='flex gap-10'>
                                <h4 className='my-0 font-semibold text-gray-400'>
                                    {val.user}
                                </h4>
                                <h4 className='my-0 font-semibold text-main'>
                                    {val.course}
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
        <div className='w-full flex items-end justify-center my-5 gap-5'>
            <button 
            onClick={prevPage}
            className={`${currentPage === 1 ? "hidden":"block"} w-28 py-2 rounded-md bg-main hover:scale-110 text-white`}>Previous</button>
            <button 
            onClick={nextpage}
            className={`${currentPage === lastpage ? "hidden":"block"} w-28 py-2 rounded-md bg-main hover:scale-110 text-white`}>Next</button>
        </div>
    </div>
  )
}

export default Video