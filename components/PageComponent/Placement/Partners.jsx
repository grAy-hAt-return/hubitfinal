import React from "react";
import { SiMicrosoft } from "react-icons/si";

const Partners = () => {
  return (
    <>
      <div className="flex justify-center items-center pt-10 px-20 w-full xl:w-[60vw] xxl:w-full sm:w-full xs:w-full md:w-full lg:w-full xl:mx-2  xxl:mx-3  flex-col xl:ml-60 gap-4">
        <div className=" text-main text-xl xl:text-xl xxl:text-2xl capitalize  font-bold">
          Our Placement Partners
        </div>
        <div className="w-full flex flex-row flex-wrap gap-10  items-center justify-center  pb-20">
          {[1, 2, 3, 4, 5, 6].map((item) => {
            return (
              <div
                key={item}
                className="flex flex-row h-max items-center py-1 px-2 border border-gray-500 shadow-md "
              >
                <span className="text-base xl:text-lg xxl:text-xl">
                  <SiMicrosoft />
                </span>
                <span className="ml-2 text-xs xl:text-sm xxl:text-base">
                  Microsoft
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Partners;
