import React from "react";
import image from "../../Resources/japan.jpg";
import Image from "next/image";

function TrainingPartners() {
  const dataa = [
    { images: image },
    { images: image },
    { images: image },
    { images: image },
  ];
  return (
    <div className=" my-20 md:my-44 lg:my-44 xl:my-44 xxl:my-44">
      <div>
        <h1 className="text-center text-xl md:text-3xl xl:text-3xl   xxl:text-3xl   text-main capitalize ">
          our training partners
        </h1>

        <div className="w-fit mx-auto md:flex xl:flex xxl:flex flex-wrap  md:gap-6  lg:gap-7 xl:gap-10 xxl:gap-10 items-center justify-center md:my-16 lg:my-16  xl:my-16  xxl:my-16  px-10">
          {dataa.map((val, i) => {
            return (
              <div
                className=" w-[300px] md:w-56  lg:w-56  xl:w-56  xxl:w-56 my-4 md:my-0 xl:my-0 xxl:my-0 "
                key={i}
              >
                <Image
                  src={val.images}
                  layout="responsive"
                  // objectfit="cover"
                  // objectPosition={"center"}
                  alt="Loading ..."
                  className="   object-cover object-center"
                />{" "}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TrainingPartners;
