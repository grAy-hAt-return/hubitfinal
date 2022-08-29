import React from "react";

const Pagination = () => {
  return (
    <>
      <div className="flex flex-col items-center py-12">
        <div className="flex  items-center text-[#7B7575] p-1">
          <div className="h-10 w-10 mr-1 flex justify-center items-center bg-[#D9D9D9]  cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-chevron-left w-6 h-6"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </div>
          <div className="flex h-9 font-medium rounded-full  ">
            <div className="w-9 h-9 flex justify-center items-center   cursor-pointer leading-5 p-2 transition duration-150 ease-in  hover:bg-main hover:text-white  hover:rounded ">
              1
            </div>
            <div className="w-9 h-9 flex justify-center items-center   cursor-pointer leading-5 bg-main p-2 transition duration-150 ease-in  text-white rounded   ">
              2
            </div>
            <div className="w-9 h-9 flex justify-center items-center   cursor-pointer leading-5 p-2 transition duration-150 ease-in hover:bg-main hover:text-white  hover:rounded    ">
              3
            </div>
            <div className="w-9 h-9 flex justify-center items-center   cursor-pointer leading-5 p-2 transition duration-150 ease-in    ">
              ...
            </div>
            <div className="w-9 h-9 flex justify-center items-center   cursor-pointer leading-5 p-2 transition duration-150 ease-in  hover:bg-main hover:text-white  hover:rounded   ">
              12
            </div>
          </div>
          <div className="h-10 w-10 ml-1 flex justify-center items-center   cursor-pointer bg-[#D9D9D9]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-chevron-right w-6 h-6"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
