import React from "react";
// import Image from "next/image";
const HeroSection = () => {
  return (
    <div className='w-full  h-64' 
    style={{
        backgroundImage:   `url("https://images.unsplash.com/photo-1487611459768-bd414656ea10?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        backgroundSize:'cover'
    }} >
        <div className='w-full h-full flex items-center bg-purple bg-opacity-20 '>
        <div className='w-11/12 mx-auto'>
            <h1 className='xl:text-3xl lg:text-2xl md:text-xl text-xl font-semibold tracking-wide text-zinc-50 lg:mb-8 md:mb-6 sm:mb-4 mb-3 capitalize'>Placement
            </h1>
            <h1 className='text-zinc-50 md:text-sm text-xs lg:text-base capitalize xl:text-base'>Home/Placement</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
