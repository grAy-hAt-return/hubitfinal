import Image from "next/image";
import React from "react";
import image from "../../Resources/careerpic.jpg";
const TopSection = () => {
  return (
    <>
      <div className="w-full h-full">
        <div className="relative z-10">
          <div className=" w-full h-80  bg-main ">
            <Image
              src={image}
              layout="fill"
              // objectfit="cover"
              // objectPosition={"center"}
              alt="Loading ..."
              className=" opacity-75  object-cover object-center"
            />
          </div>
          <div className="absolute top-32 sm:top-28   md:top-40 lg:top-40 xl:top-32 xxl:top-40 left-8 sm:left-20 xxl:left-28 text-white capitalize">
            <div className="font-bold text-xl md:text-3xl xl:text-3xl  xxl:text-4xl">
              co-operate training
            </div>
            <div className="Poppins text-xs md:text-sm xl:text-sm xxl:text-base mt-2">
              home/co-operating training
            </div>
          </div>
        </div>
        {/* <div className="px-4 md:px-10  lg:px-10  xl:px-10 xxl:px-10">
          <div className="md:grid  xl:grid xxl:grid grid-cols-12  h-full ">
            <div className="md:flex flex-col col-span-8 xs:w-full sm:w-full md:w-full lg:w-[60vh] xl:w-[60vh] xxl:w-9/12 xxxl:w-9/12">
              <h1 className="text-main font-bold text-lg md:text-3xl xl:text-3xl xxl:text-3xl">
                What is Corporate Training?
              </h1>
              <p className="bg-red-400 w-full text-xs md:text-base xl:text-base  xxl:text-base">
              Corporate training is exclusively for your organization. 
              Training can be delivered onsite (at your company site), or virtually for your organization. 
              Dates, times, and agenda can be tailored to your organization’s needs.
              </p>
            </div>
            <div className="xs:hidden sm:hidden  col-span-4  w-[300px] relative z-20 -mt-20">
              <Image
                src={image}
                layout="fill"
                className="object-cover  object-center"
              />
            </div>
          </div>
        </div> */}
        <div className="w-10/12 flex mx-auto">
          <div className="w-[90%] mx-auto md:w-2/4 lg:w-2/4 xl:w-2/4 xxl:w-2/4  py-6">
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-3xl xxl:text-3xl font-bold text-main">
              What is Corporate Training?
            </h1>
            <p className="text-sm md:text-base lg:text-base xl:text-base xxl:text-base font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, at amet aspernatur autem enim reiciendis ipsam fuga odit quidem, doloremque iure cumque, vitae iste? Perferendis, fugiat molestias! Sunt culpa delectus ad ipsa vitae quasi fugiat soluta saepe earum, magni tempore labore eius dicta praesentium autem libero iure molestias perspiciatis qui natus! Tempore aliquid illum consequuntur accusantium impedit doloremque? Quis saepe nostrum
            </p>
          </div>
          <div className="w-2/4 relative md:block lg:block xl:block xxl:block hidden">
            <div className="w-4/5 h-84 mx-auto relative -top-20 z-20 shadow-xl" 
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FydG9vbnxlbnwwfHwwfHx8MA%3D%3D")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition:"center"
            }}
            >
            </div>
          </div>
        </div>
        <div
          className="md:flex xl:flex xxl:flex justify-between bg-main 
        px-4 md:px-14 xl:px-14 xxl:px-24 font-bold  uppercase py-2 items-center"
        >
          <div className="text-white  text-xs md:text-sm xl:text-sm  xxl:text-sm">
           We can help you to train your employee and students to get your dream result
          </div>
          <div className="bg-yellow-400  w-fit mt-7 md:mt-0 lg:mt-0 xl:mt-0 xxl:mt-0 cursor-pointer px-5 py-2 rounded-3xl text-base capitalize font-medium ">
            contact us
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSection;
