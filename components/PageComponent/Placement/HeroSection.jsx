import React from "react";
import Image from "next/image";
const HeroSection = () => {
  return (
    <>
      <section className="">
        <div className="flex p-14 xs:p-3 sm:p-3 md:p-3 gap-6 xs:flex-col sm:flex-col md:flex-col ">
          <div className="flex flex-col  w-[50vw] xs:w-full  xs:w-full md:w-full sm:w-full mt-20 gap-2">
            <h3 className="h-2 font-normal text-sm">10+ Success Stories</h3>
            <h1 className="h-6 text-main mt-0 xs:mb-20 sm:mb-6 md:mb-6 lg:mb-20">
              What we do for your placement?
            </h1>
            <hr className="border-gray-400 mt-1 border-[0.5px] border-solid w-[73%]" />
            <p className="w-[45vw] text-[#7B7575] xs:w-full xs:w-full md:w-full sm:w-full">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias odit, repellat debitis asperiores quo ipsam facilis
              perferendis assumenda, dolores maiores ea corporis quidem iusto
              nisi, aperiam numquam distinctio similique porro. Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Impedit, accusamus.
              Dolores beatae ex eos deserunt facilis eaque aperiam quo fugit
              quibusdam laudantium, pariatur aliquid doloremque explicabo quod
              sapiente saepe magni.
            </p>
          </div>
          <div className="grid place-items-center rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1624727828618-ee42ef2ec5cf?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=414&ixid=MnwxfDB8MXxyYW5kb218MHx8c3R1ZGVudHN8fHx8fHwxNjYxNTc3ODkx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=525"
              alt=""
              className="w-[525px] h-[440px] sm:w-[80vw] sm:h-[40vh] lg:w-full lg:h-[30vh] rounded-xl lg:mt-20"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
