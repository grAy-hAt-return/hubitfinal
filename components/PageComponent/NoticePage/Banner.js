import React from "react";
// import Image from "next/image";
// import image from "../../Resources/practice.jpg";
const Banner = () => {
  return (
    <>
      <div className="w-full h-full">
        {/* <div className="relative z-10">
          <div className=" w-full h-80  bg-main ">
            <Image
              src={image}
              layout="fill"
              // objectfit="cover"
              // objectPosition={"center"}
              alt="Loading ..."
              className=" opacity-75  object-cover object-center"
            />
          </div>
          <div className="absolute top-32 sm:top-28   md:top-40 lg:top-40 xl:top-32 xxl:top-40 left-8 sm:left-20 text-white capitalize">
            <div className="font-bold text-xl md:text-3xl xl:text-3xl  xxl:text-3xl">
              notice
            </div>
            <div className="Poppins text-xs md:text-sm xl:text-sm  xxl:text-sm mt-2">
              home / notice
            </div>
          </div>
        </div> */}
        <div className='bg-[url("https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHN0YWZmJTIwZGVza3xlbnwwfHwwfHx8MA%3D%3D")] bg-cover bg-center bg-no-repeat w-full relative h-36 sm:h-52 md:h-56 lg:h-60 xl:h-60 xxl:h-64 overflow-hidden'>
            <div className='w-10/12 mx-auto text-white mt-6 sm:mt-10 md:mt-14 lg:mt-14 xl:mt-[6%] xxl:mt-20'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-4xl xxl:text-5xl capitalize my-0'>
                  Notice
                </h1>
                <p className='text-sm md:text-base lg:text-base xl:text-lg xxl:text-xl'>
                  Home/Notice
                </p>
            </div>
            <div className='bg-white absolute -left-3 -bottom-16 xxl:-bottom-20 w-[120%] h-20 sm:h-24 md:h-24 lg:h-28 xl:h-28 xxl:h-32 rotate-[4deg]'>
            </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
