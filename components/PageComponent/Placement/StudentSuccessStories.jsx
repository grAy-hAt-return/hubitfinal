import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const BottomSection = () => {
  return (
    <>
      <div className="grid place-items-center xs:mx-8 py-6">
        <h1 className="text-main font-bold text-3xl">
          Some of our students success stories
        </h1>
      </div>
      <div className="w-full xs:w-[80vw] xs:mx-10 md:w-[90vw] lg:[80vw] xl:w-[80vw] xl:mx-32">
        <Swiper
          loop={true}
          width={278}
          modules={[Navigation]}
          className="mySwiper"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  className="rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 p-1 mx-2 shadow-md"
                  key={index}
                >
                  <div className="relative">
                    <img
                      className="w-full  transition-all duration-300 "
                      src="https://images.unsplash.com/photo-1517842536804-bf6629e2c291?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=233&ixid=MnwxfDB8MXxyYW5kb218MHx8c3R1ZGVudHx8fHx8fDE2NjE1NzkyMDI&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=272"
                      alt="image"
                    />
                    <p
                      className="absolute text-xs font-semibold -bottom-2 bg-[#0468A0] text-white rounded-md shadow-md ml-2 
                    py-[2px] px-1"
                    >
                      Mid-level Web Developer
                    </p>
                  </div>
                  <h1 className="font-semibold  text-sm mb-2 px-2 py-3">
                    Placement At Hubit Pvt . Ltd
                  </h1>

                  <hr />
                  <div className="flex gap-8 px-2 py-3">
                    <p className="text-[#454545] text-sm font-semibold">
                      Roshika Chettri
                    </p>
                    <p className="text-main text-xs font-semibold">
                      Web Design
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default BottomSection;
