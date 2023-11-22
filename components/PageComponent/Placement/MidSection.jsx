import Image from "next/image";
import React from "react";
import { useState } from "react";
import { SiMicrosoft } from "react-icons/si";
const BottomSection = () => {
  const [isVisible, setIsVisible] = useState (false);
  return (
    <>
      <div className={`${isVisible ? "h-[880px]  transition-all duration-500 delay-200 ease-in-out":"h-96 transition-all duration-400 delay-200 ease-in-out"} overflow-clip grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4  xxl:grid-cols-3 gap-3  lg:gap-5 xl:gap-2 xxl:gap-2`}>
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <div
              className="w-10/12 h-fit mb-2 sm:w-full md:w-full lg:w-full mx-auto xl:w-full xxl:w-full rounded-lg pt-4 shadow-slate-600 shadow-lg group p-2 cursor-pointer"
              key={index}
            >
              <div className="w-full h-52 xl:h-80 xxl:h-52" style={{
                backgroundImage:`url("https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D")`,
                backgroundSize:"cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top",
              }}>

              </div>
              {/* <Image
                className="w-10/12  group-hover:scale-105 transition-all duration-300"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzXzIgxiHN9Ktcb5hqKCr_ezUySvhoawPrUQ&usqp=CAU"
                alt="image"
                layout="responsive"
                height="100"
                width="80"
              /> */}
              <div className="px-6 py-2">
                <h1 className="font-bold text-lg md:text-xl lg:text-xl xl:text-xl mt-0 mb-2">
                  Placement At Hubit Pvt . Ltd
                </h1>
              </div>
              <hr />
              <div className="px-6 py-2">
                <span className="inline-block px-1 py-1 text-sm font-semibold mr-2 mb-2">
                  Roshika Chettri
                </span>
                <span className=" px-1 py-1 text-sm font-semibold text-[#a0047d]  mb-2">
                  Web Design
                </span>
              </div>
            </div>
            // <div className="w-full h-94 bg-lime-200 mb-6">
            //   </div>
          );
        })}
      </div>
      <div className="w-fit mx-auto">
        <button 
        onClick={()=>setIsVisible(!isVisible)}
        className="capitalize">
          show more
        </button>
      </div>
    </>
  );
};

export default BottomSection;
