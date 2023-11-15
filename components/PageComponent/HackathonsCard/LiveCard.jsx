import React, { useState } from "react";
import Image from "next/image";
import image1 from "../../Resources/Japan.jpg";
function LiveCard() {
  const [Data, setData] = useState([
    {
      image: image1,
      name: "certificate of achivements",
      endTime: "Hub-IT Institute ",
      day: "6",
      hour: "18",
      min: "32",
    },
    {
      image: image1,
      name: "certificate of achivements",
      endTime: "king Institute",
      day: "9",
      hour: "10",
      min: "40",
    },
    {
      image: image1,
      name: "certificate of achivements",
      endTime: "expert Institute",

      day: "1",
      hour: "4",
      min: "10",
    },
    {
      image: image1,
      name: "certificate of achivements",
      endTime: "jhapa education institute",
      day: "4",
      hour: "7",
      min: "5",
    },
  ]);
  return (
    <div className="w-11/12 mx-auto">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4  xxl:grid-cols-4  xxxl:grid-cols-4 my-8 gap-5 ">
        {Data.map((val, i) => {
          return (
            <div
              key={i}
              // onClick={() => RedirectToNextPage()}
              className=" 
    transition-all cursor-pointer duration-300 ease-linear  w-fit mx-auto
      pb-3 rounded-lg border"
            >
              <div className="w-full overflow-hidden bg-black  hover:bg-gradient-to-t from-[#ad079c] to-[#c7ce76] borderRadiusTop">
                <Image
                  //   src={`https://cmsback.e-aribt.com/public/${image}`}
                  src={val.image}
                  height={200}
                  width={300}
                  alt="Loading ..."
                  // layout="responsive"
                  // objectFit="cover"
                  placeholder="blur"
                  blurDataURL={val.image}
                  className="borderRadiusTop  opacity-80  h-60 object-cover  "
                />
              </div>
              <div className=" px-3 flex flex-col items-centr justify-center my-3">
                  <h1 className="text-[18px] text-center my-0 Poppins capitalize font-bold  text-main">
                  {val.name}
                  </h1>
                <p className=" capitalize text-center text-gray-600  w-[275px] line-clamp-2 font-semibold text-[14px]">
                  Ends in: {val.endTime}
                </p>
                <div className=" capitalize mt-3 flex gap-5 items-center justify-center text-gray-600    ">
                  <div className="   text-gray-600  text-center ">
                    <h4 className="text-gray-400 font-normal text-[17px] my-0">days</h4>
                    <h4 className="text-[15px] my-0 font-normal"> {val.day}</h4>{" "}
                  </div>
                  <div className=" text-gray-600 text-center ">
                    {" "}
                    <h4 className="text-gray-400 text-[17px] my-0 font-normal">hours</h4>
                    <h4 className="text-[15px] my-0 font-normal"> {val.hour}</h4>{" "}
                  </div>
                  <div className="   text-gray-600 text-center   ">
                    {" "}
                    <h4 className="text-gray-400 text-[17px] my-0 font-normal">minutes</h4>
                    <h4 className="text-[15px] my-0 font-normal"> {val.min}</h4>{" "}
                  </div>
                </div>
                <div className="text-gray-500 flex justify-center font-medium  text-[12px]">
                  <button
                    className="bg-main rounded-md capitalize hover:opacity-70 xl:mt-8 hover:scale-[1.05] transition-all ease-in-out delay-75 duration-300 text-white px-8 py-2"
                  >
                    start now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LiveCard;
