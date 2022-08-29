import React from "react";

const LastBannerOfJobs = () => {
  return (
    <>
      <div className="grid place-items-center py-28">
        <div className="w-[80vw] bg-main rounded-xl">
          <div className="flex sm:flex-col xs:flex-col items-center m-7">
            <div className="flex flex-col">
              <h1 className="w-[70%] sm:w-full xs:w-full text-white">
                Still looking for securing your dream job ?
              </h1>
              <p className="w-[70%] sm:w-full xs:w-full text-white font-medium text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac
                viverra mattis amet ut. Mattis sed vulputate aenean consequat
                pulvinar.
              </p>
            </div>
            <div>
              <a
                href="#"
                className="relative bg-white inline-flex items-center px-4 w-[22vw] lg:w-[27vw] sm:w-full xs:w-full xs:mt-3 sm:mt-4 h-14 overflow-hidden text-lg font-medium text-main border-2  rounded-full hover:text-white group hover:bg-gray-50"
              >
                <span className="absolute left-0 block w-full h-0 transition-all bg-hoverMain text-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease sm:hidden  xs:hidden">
                  <svg
                    className="w-5 h-5"
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
                <span className="relative font-bold text-xl">
                  Explore Our courses !
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LastBannerOfJobs;
