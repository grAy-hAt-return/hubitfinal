import React from "react";
import { GoLocation } from "react-icons/go";
import { AiOutlineCalendar } from "react-icons/ai";
import Link from "next/link";
const CurrentOpenings = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col Poppins">
        <h1 className="text-center text-main font-bold  h-6">
          Current Openings
        </h1>
        <p className="text-[#808080] ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          blanditiis tenetur ipsam hic voluptates minima. Molestiae?
        </p>
        {[1, 2, 3, 4].map((item, i) => {
          return (
            <div
              className="border-2 border-solid border-gray-300 rounded-lg px-5 py-3 mb-7 mt-5 w-[60vw] xs:w-[95vw] sm:w-[95vw] md:w-[95vw] group bg-white"
              key={i}
            >
              <div className="flex items-center  sm:gap-28 xxl:gap-78 xl:gap-72 lg:gap-44 md:gap-48  xxl:gap-72 ">
                <div className="flex flex-col ">
                  <h1 className="group-hover:scale-105 font-semibold  transition-all duration-300">
                    Backend Developer
                  </h1>
                  <div className="flex gap-5 text-[#454545]">
                    <div className="flex gap-1 xs:flex-col">
                      <GoLocation className="mt-1" />
                      Butwal, <p>Rupandehi</p>
                    </div>
                    <div className="flex gap-1 xs:flex-col  ">
                      <AiOutlineCalendar className="mt-1" />
                      <div>Deadline:</div>
                      <p className="w-[88px]">2022-5-10</p>
                    </div>
                  </div>
                </div>
                <Link href="/vacancy/vacancyDetail">
                  <a className="relative p-1 px-6 w-36 rounded-lg  h-10 sm:w-32 xs:w-28  text-white   inline-flex bg-main items-center justify-center  py-3 overflow-hidden font-medium t transition duration-300 ease-out border-2  shadow-md  xs:h-20 sm:h-20 md:h-12 lg:h-14 xs:mt-10 cursor-pointer ">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 xl:p-2 -translate-x-full bg-hoverMain group-hover:translate-x-0 ease  p-2">
                      Click 
                      <svg
                        className="ml-1 w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full lg:w-[10vw] h-fulltransition-all duration-300 transform group-hover:translate-x-full ease sm:p-2 xs:p-3 h-10 ">
                      View Details{" "}
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CurrentOpenings;
