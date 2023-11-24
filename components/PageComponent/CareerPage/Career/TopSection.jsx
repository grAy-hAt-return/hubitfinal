import Image from "next/image";
import React from "react";
import backGround from "../../../Resources/bg.png";
import { AiOutlineArrowDown } from "react-icons/ai";
function Career() {
  return (
    <>
      {/* <div
        className="flex flex-col items-center justify-center md:items-start lg:items-start xl:items-start xxl:items-start xxxl:items-start p-5 md:p-20 xl:p-20 xxl:p-20 xxxl:p-20  gap-y-5   w-full  "
        style={{
          position: "relative",
          height: "250px",
          background: `url(${backGround.src})`,
        }}
      >
        <div className="">
          <div className="text-2xl Poppins font-bold capitalize">
            {" "}
            check certificate
          </div>
          <div className="text-sm Poppins capitalize">
            home/check certificte
          </div>
        </div> */}
        {/* <div className="flex items-center gap-1 w-fit border-2 border-black px-5 rounded-full py-1">
          <button className=" w-fit h-fit     text-lg Poppins">
            View Vacancy
          </button>
          <AiOutlineArrowDown />
        </div> */}
      {/* </div> */}

      <div className='bg-[#FACC15] w-full relative h-36 sm:h-52 md:h-52 lg:h-60 xl:h-60 xxl:h-64 overflow-hidden'>
            <div className='w-10/12 mx-auto mt-6 sm:mt-10 md:mt-14 lg:mt-14 xl:mt-[3%] xxl:mt-14'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-4xl xxl:text-5xl capitalize my-0'>
                  Career Support Hub
                </h1>
                <p className="text-sm md:text-base lg:text-base xl:text-lg xxl:text-xl">
                  Home / Career
                </p>
            </div>
            <div className='bg-white absolute -left-3 -bottom-16 xxl:-bottom-20 w-[120%] h-20 sm:h-24 md:h-24 lg:h-28 xl:h-28 xxl:h-32 rotate-[4deg]'>
            </div>
        </div>
    </>
  );
}

export default Career;
