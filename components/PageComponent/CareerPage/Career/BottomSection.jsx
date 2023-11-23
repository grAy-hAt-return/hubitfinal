<<<<<<< HEAD
import React from "react";
import Image from "next/image";
import backGround_2 from "../../../Resources/frame_1.png";
function BottomSection() {
  return (
    <div className="relative ">
      <div
        className="flex items-end  text-white text-3xl Poppins p-5 md:px-20 xl:px-20 xxl:px-20 xxxl:px-20 gap-10  w-full  "
        style={{
          position: "relative",
          height: "250px",
          background: `url(${backGround_2.src})`,
        }}
      >
        Need More help?
      </div>
      <div className=" -mt-24 right-3  xxl:-mt-12 absolute xl:right-64 xxl:right-64">
        <button className="rounded-3xl px-5 py-2 bg-yellow-400 Poppins">
          contact us
        </button>
      </div>
    </div>
  );
}

export default BottomSection;
=======
import React from "react";
import Image from "next/image";
import backGround_2 from "../../../Resources/frame_1.png";
function BottomSection() {
  return (
    // <div className="relative ">
    //   <div
    //     className="flex items-end  text-white text-3xl Poppins p-5 md:px-20 xl:px-20 xxl:px-20 xxxl:px-20 gap-10  w-full  "
    //     style={{
    //       position: "relative",
    //       height: "250px",
    //       background: `url(${backGround_2.src})`,
    //     }}
    //   >
    //     Need More help?
    //   </div>
    //   <div className=" -mt-24 right-3  xxl:-mt-12 absolute xl:right-64 xxl:right-64">
    //     <button className="rounded-3xl px-5 py-2 bg-yellow-400 Poppins">
    //       contact us
    //     </button>
    //   </div>
    // </div>
    <div>
      <div className='bg-purple w-full relative h-36 sm:h-52 md:h-56 lg:h-60 xl:h-60 xxl:h-64 overflow-hidden mt-10'>
            <div className='w-[95%] sm:w-[85%] md:w-[80%] lg:w-[80%] xl:w-[80%] xxl:w-[80%] mx-auto mt-16 sm:mt-16 md:mt-16 lg:mt-28 xl:mt-24 xxl:mt-28 px-3 md:px-8 lg:px-9 xl:px-10 xxl:pt-2 flex flex-row md:justify-between lg:justify-between xl:justify-between xxl:justify-between items-center'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-4xl xxl:text-5xl capitalize w-80 text-white xxl:w-fit'>
                        Need more help?
                    </h1>
                    <button className='w-32 md:w-40 lg:w-40 xl:w-40 h-10 text-sm md:text-base lg:text-base xl:text-lg xxl:text-xl bg-[#FACC15] rounded-3xl text-black'>
                        Submit
                    </button>
            </div>
            <div className='bg-white absolute -top-10 w-[120%] h-20 md:h-24 lg:h-28 xl:h-28 xxl:h-32 rotate-[4deg]'>
            </div>
        </div>
    </div>
    
  );
}

export default BottomSection;
>>>>>>> a909855a8a48935018c4a4bc572233757ac96f4d
