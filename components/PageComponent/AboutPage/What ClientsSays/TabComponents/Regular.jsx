import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import {ImQuotesLeft} from 'react-icons/im'

function Regular({ clientDetails, StartValue, EndValue, prev, next }) {
  return (
    <div>
      <div className="flex justify-center  items-center px-8">
        <div
          className=" bg-gray-100 p-0.5 rounded-full text-main cursor-pointer"
          onClick={() => prev(clientDetails)}
        >
          <MdKeyboardArrowLeft className="w-6 h-6" />
        </div>
        <div className="w-11/12 h-11/12 md:h-[20vh] lg:h-[20vh] xl:w-11/12 xxl:w-11/12">
          <div
            className="grid gap-2  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-4 xxl:gap-5 px-2"
          >
            {clientDetails?.slice(StartValue, EndValue)?.map((val, i) => {
              return (
                <div key={i} className="w-10/12 flex flex-col h-fit mx-auto sm:w-full md:w-full lg:w-full xl:w-full xxl:w-full rounded-md shadow-gray-500 shadow-lg px-5 pt-3 my-5 pb-3">
                  {/* <div
                    className="w-20 h-20 absolute left-8 top-5 border-2 lg:w-12 xl:w-20 xxl:w-20
                 border-white rounded-full "
                  >
                    <Image
                      src={val.image}
                      height={70}
                      width={70}
                      alt="Loading ..."
                      layout="responsive"
                      objectFit={"cover"}
                      className="rounded-full "
                    />
                  </div> */}
                  {/* testing lai height fit rakhya chu hai */}
                  {/* <div className="  h-32 w-9/12 mx-auto rounded-2xl px-16 py-3 text-center bg-slate-200 ">
                    <div className="text-main Poppins font-medium capitalize text-sm md:text-sm lg:text-xl xl:text-xl xxl:text-xl">
                      {val.name}
                    </div>
                    <div className="text-sm my-.5 font-medium capitalize">
                      {val.title}
                    </div>
                    <div className="text-xs h-16 text-gray-600 pb-4 w-full overflow-scroll info ">
                      {val.description}
                    </div>
                  </div> */}

                        <div className="flex w-full justify-between">
                        <div className='flex items-end'>
                            <ImQuotesLeft className='text-3xl xxl:text-4xl text-[#767676]'/>
                        </div>
                        <div className='w-20 xxl:w-24 h-20 xxl:h-24 rounded-full'
                        // style={{
                        //     backgroundImage: `url(${val.name})`,
                        //     backgroundSize: "cover",
                        //     backgroundRepeat: "no-repeat",
                        //     backgroundPosition: "center"
                        // }}
                        >
                          <Image
                      src={val.image}
                      height={70}
                      width={70}
                      alt="Loading ..."
                      layout="responsive"
                      objectFit={"cover"}
                      className="rounded-full "
                    />
                        </div>
                        </div>
                    
                        <p className='text-sm xxl:text-base pt-2 w-full text-justify xl:max-w-[30ch]'>
                            {val.description}
                        </p>
                        <div className='flex flex-row items-center sm:items-start md:items-start lg:items-start xl:items-start xxl:items-start justify-between sm:flex-col md:flex-col lg:flex-col xl:flex-col xxl:flex-col'>
                        <h5 className='xxl:text-base sm:mt-4 md:mt-4 lg:mt-4 xl:mt-4 xxl:mt-5 my-0 text-purple font-semibold'>
                            {val.name}
                        </h5>
                        <h4 className='my-0 xxl:text-lg font-semibold'>
                            Course : {val.title}
                        </h4>
                    </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className=" bg-gray-100 p-0.5 rounded-full text-main cursor-pointer"
          onClick={() => next(clientDetails)}
        >
          <MdKeyboardArrowRight className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}

export default Regular;
