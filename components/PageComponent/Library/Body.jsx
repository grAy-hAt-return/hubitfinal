// import Link from "next/link";
// import Image from "next/image";
import React from "react";


import { TbAlertTriangle } from "react-icons/tb";
const Body = () => {
  const data=[
    {h1:"Learn AI for beginner",
      h2:"Kisan Mahat",
      name:"https://images.unsplash.com/photo-1531907700752-62799b2a3e84?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VwZXIlMjBoZXJvfGVufDB8fDB8fHww",
      name2:"https://images.unsplash.com/photo-1531907700752-62799b2a3e84?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VwZXIlMjBoZXJvfGVufDB8fDB8fHww"
    },
    {h1:"Learn AI for beginner",
      h2:"Gangeshowr",
      name:"https://images.unsplash.com/photo-1531907700752-62799b2a3e84?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VwZXIlMjBoZXJvfGVufDB8fDB8fHww",
      name2:"https://images.unsplash.com/photo-1531907700752-62799b2a3e84?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VwZXIlMjBoZXJvfGVufDB8fDB8fHww"
    },
    {h1:"Learn AI for beginner",
      h2:"Amrit hency",
      name:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fHww",
      name2:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fHww"
    },
    {h1:"Learn AI for beginner",
      h2:"Harry ",
      name:"https://images.unsplash.com/photo-1615109398623-88346a601842?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
      name2:"https://images.unsplash.com/photo-1615109398623-88346a601842?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {h1:"Learn AI for beginner",
      h2:"Nana pateykar ",
      name:"https://images.unsplash.com/photo-1615109398623-88346a601842?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
      name2:"https://images.unsplash.com/photo-1615109398623-88346a601842?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {h1:"Learn AI for beginner",
      h2:"Salman Khan",
      name:"https://images.unsplash.com/photo-1615109398623-88346a601842?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
      name2:"https://images.unsplash.com/photo-1615109398623-88346a601842?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {h1:"Learn AI for beginner",
      h2:"Rajnikant",
      name:"https://images.unsplash.com/photo-1615109398623-88346a601842?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
      name2:"https://images.unsplash.com/photo-1615109398623-88346a601842?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {h1:"Learn AI for beginner",
      h2:"Biraj Bhatta",
      name:"https://images.unsplash.com/photo-1615109398623-88346a601842?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
      name2:"https://images.unsplash.com/photo-1615109398623-88346a601842?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
    },
  ]
  // const dataa = [
  //   {
  //     images: image,
  //     name: "nischal karki",
  //     topic: "learn AI for begineer",
  //     numbers: "10",
  //   },
  //   {
  //     images: image,
  //     name: "nischal karki",
  //     topic: "learn python for begineer",
  //     numbers: "1",
  //   },
  //   {
  //     images: image,
  //     name: "nischal karki",
  //     topic: "learn javascript for begineer",
  //     numbers: "3",
  //   },
  //   {
  //     images: image,
  //     name: "nischal karki",
  //     topic: "learn photoshop for begineer",
  //     numbers: "5",
  //   },
  //   {
  //     images: image,
  //     name: "nischal karki",
  //     topic: "learn data Science for begineer sss sss ss",
  //     numbers: "8",
  //   },
  //   {
  //     images: image,
  //     name: "nischal karki",
  //     topic: "learn AI for begineer",
  //     numbers: "10",
  //   },
  //   {
  //     images: image,
  //     name: "nischal karki",
  //     topic: "learn data Science for begineer sss sss ss",
  //     numbers: "8",
  //   },
  //   {
  //     images: image,
  //     name: "nischal karki",
  //     topic: "learn AI for begineer",
  //     numbers: "10",
  //   },
  //   {
  //     images: image,
  //     name: "nischal karki",
  //     topic: "learn python for begineer",
  //     numbers: "1",
  //   },
  //   {
  //     images: image,
  //     name: "nischal karki",
  //     topic: "learn data Science for begineer sss sss ss",
  //     numbers: "8",
  //   },
  //   {
  //     images: image,
  //     name: "nischal karki",
  //     topic: "learn javascript for begineer",
  //     numbers: "3",
  //   },
  //   {
  //     images: image,
  //     name: "nischal karki",
  //     topic: "learn photoshop for begineer",
  //     numbers: "5",
  //   },
  //   {
  //     images: image,
  //     name: "nischal karki",
  //     topic: "learn AI for begineer",
  //     numbers: "10",
  //   },
  //   {
  //     images: image,
  //     name: "nischal karki",
  //     topic: "learn data Science for begineer sss sss ss",
  //     numbers: "8",
  //   },
  //   {
  //     images: image,
  //     name: "nischal karki",
  //     topic: "learn java for begineer",
  //     numbers: "26",
  //   },
  // ];
  return (
    <>
    <div className="w-full h-auto relative">
    <div className='w-full h-64' 
    style={{
        backgroundImage:  `url("https://images.unsplash.com/photo-1487611459768-bd414656ea10?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        backgroundSize:'cover'
    }} >
        <div className='w-full h-full flex items-center bg-purple bg-opacity-20 '>
        <div className='w-10/12 mx-auto'>
            <h1 className='w-fit xxl:text-5xl xl:text-4xl lg:text-3xl md:text-xl text-xl font-semibold tracking-wide text-zinc-50 lg:mb-8 md:mb-6 sm:mb-4 mb-3 capitalize'>Library
            </h1>
            <p></p>
            {/* <h1 className='w-fit text-zinc-50 md:text-sm text-xs lg:text-base capitalize xl:text-base xxl:text-base'></h1> */}
        </div>
      </div>
    </div>
      <section className="my-10">
        <div className=" items-center justify-center  xl:mt-16 xxl:mt-16">
          <h1 className="text-center text-main font-bold text-xl md:text-3xl lg:text-3xl xl:text-3xl xxl:text-3xl">
            Our Library
          </h1>
          <h3 className="text-center text-base font-medium text-gray-600 w-7/12 mx-auto">
          Explore a wealth of knowledge at HUB IT's Library section, offering a diverse range of IT solutions, notes, PDF files, and tutorials for comprehensive learning and training.
          </h3>
        </div>
    <div className="w-full h-auto relative">
    <div className="w-10/12 my-5 mx-auto py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols- xxl:grid-cols-4 gap-4 xxl:gap-x-8">
      {data.map((val,i)=>{
        return <div key={i} className="w-full mb-3 shadow-xl rounded">
          <div className="w-full h-48" 
          style={{
            backgroundImage:   `url(${val.name})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize:'cover'
          }}>
          </div>
          <div className="px-3">
            <h1 className="text-base font-medium border-b border-gray-300 w-full  pb-1">
              {val.h1}
            </h1>
          </div>
          <div className="flex px-3 items-center mb-2">
            <div className="w-10 h-10 mr-3 overflow-hidden rounded-full" 
            style={{
              backgroundImage: `url(${val.name2})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize:'cover'
            }}>
            </div>
            <h1 className="text-sm font-medium">{val.h2}</h1>
          </div>
        </div>
      })}
    </div>
    <div className="absolute top-0 left-0 right-0 w-full h-screen backdrop-blur-md  bg-black bg-opacity-25 flex justify-center items-center">
      <div className="w-2/6 py-5 px-3 flex flex-col items-center justify-center rounded-md bg-gradient-to-tr from-yellow-200 to-yellow-300 shadow-lg shadow-yellow-300 text-black relative text-lg font-medium">
        <div className="w-fit h-fit  text-purple text-6xl"><TbAlertTriangle/></div>
        <span>
        You need to login to get access into the Library.
        </span>
        
      </div>

    </div>
    </div>
        {/* <div>
          <div className="p-10  md:flex xl:flex xxl:flex  flex-wrap gap-x-5 gap-y-10 w-full items-center my-16 ">
            {dataa.map((val, i) => {
              return (
                <div
                  key={i}
                  className="shadow-xl shadow-[#aeadad] cursor-pointer 
            hover:scale-105 transition-all ease-in-out duration-200 delay-75 
             w-[300px] md:w-[250px] xl:w-[250px] xxl:w-[250px] my-6 xl:my-0 xxl:my-0  "
                >
                  <div className="w-[300px] md:w-[250px] xl:w-[250px] xxl:w-[250px]  ">
                    <Image
                      src={val.images}
                      layout="responsive"
                      // objectfit="cover"
                      // objectPosition={"center"}
                      alt="Loading ..."
                      className="   object-cover object-center"
                    />{" "}
                  </div>
                  <div className="px-4  mt-4 capitalize text-sm line-clamp-1 w-11/12 ">
                    {val.topic}
                  </div>
                  <div className="w-11/12 h-[1px] bg-gray-300 my-4 mx-auto"></div>
                  <div className="flex justify-between items-center px-4 pb-3">
                    <div className="w-10 h-10 bg-gray-300  rounded-full">
                      <Image
                        src={val.images}
                        layout="responsive"
                        // objectfit="cover"
                        width={100}
                        height={100}
                        alt="Loading ..."
                        className=" object-cover rounded-full object-center"
                      />{" "}
                    </div>
                    <div className="capitalize text-sm">{val.name}</div>
                    <div className="flex items-center gap-2">
                      <div className="text-lg">
                        <IoMdCopy />
                      </div>
                      <div className="text-sm">{val.numbers}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}
      </section>
      
    </div>
    </>
  );
};

export default Body;
