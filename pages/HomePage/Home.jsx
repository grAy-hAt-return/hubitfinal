import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import Icons from "../../components/Navigation/Navitem/iconitem";
import teacher from "../../public/teacher.png";
import Image from "next/image";

function Home() {
  return (
    <>
      <div className="flex flex-col lg:flex-row xl:flex-row xxl:flex-row h-[calc(100vh-50px)] w-full justify-center items-center bg-gradient-to-t from-[#f0f0f0] to-white">
        <div className="h-max lg:w-1/2 xl:w-1/2 xxl:w-1/2 w-full md:px-8 lg:pl-20 xl:pl-24 px-4">
          <div className="flex">
            {Icons.map((icon, index) => {
              return (
                <div
                  key={index}
                  className="h-6 w-6 rounded-full bg-transparent flex justify-center items-center border border-[#A0047D] mr-2"
                >
                  <span className="text-[#A0047D] cursor-pointer text-base">
                    {icon.icon}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="font-bold text-xl text-[#A0047D] mb-1">
            Best Training Institute in Nepal
          </div>
          <div className="text-xs text-gray-700">
            With the aim of making Nepal as an IT hub of the whole world, HUB IT
            Training Institute is always one step forward in providing the IT
            skills based training. We provide you the best trainers specialized
            in their field with many years of experience. We are happy to
            welcome you in our Hub IT family.
          </div>
          <div className="flex mt-6">
            <button
              className={
                "border-[1.5px] border-[#A0047D] rounded-full mr-6 px-2 py-[5px] text-sm text-main hover:scale-105 transition-all ease-in-out duration-150"
              }
            >
              Explore More...
            </button>
            <div className="flex h-max items-center cursor-pointer hover:scale-105 transition-all ease-in-out duration-150">
              <AiFillPlayCircle className="text-[#a0047d] text-4xl" />
              <span className="font-sm text-[#a0047d] ml-2">Watch Now</span>
            </div>
          </div>
        </div>
        <div className="h-max w-full mt-8 md:mt-4 lg:mt-0 xl:mt-0 mx-auto lg:w-1/2 xl:w-1/2">
          <div className="relative">
            <div className="relative  h-[300px] sm:h-[360px] md:h-[420px] lg:h-[420px] xl:h-[440px] w-full sm:w-[550px] md:w-[600px] md:mx-auto sm:mx-auto">
              <Image
                src={teacher}
                alt={"teacher"}
                layout="fill"
                priority
              ></Image>
            </div>
            <div className="bg-white shadow-[0px_1px_10px_1px_black] h-20 absolute top-[50%] left-[22%]  w-[220px] ">
              <div className="h-full w-full  relative">
                <div className=" h-full w-full flex flex-col justify-center px-4 ml-3">
                  <div className="text-[10px] font-bold text-[#a0047d]">
                    Featured Course
                  </div>
                  <div className="text-[12px] font-bold text-black">
                    Become a Full Stack Developer with MERN Stack
                  </div>
                </div>
                <div className="absolute h-8 w-8 rounded-full top-[calc(50%-16px)] left-[-16px] bg-yellow-600 ">
                  {/* <Image
                    src={logo}
                    alt={"logo"}
                    layout="fill"
                    priority
                    className="rounded-full"
                  ></Image> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
