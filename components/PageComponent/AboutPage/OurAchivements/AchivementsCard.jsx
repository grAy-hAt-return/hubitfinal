import React from "react";
import Image from "next/image";

function AchivementsCard({ image, name, from, date }) {
  return (
    <div
      className=" 
    transition-all cursor-pointer duration-300 ease-linear w-fit rounded-lg mb-10 "
    >
      <div className="w-60 h-48 ">
        <Image
          src={image}
          height={48}
          width={60}
          alt="Loading ..."
          layout="responsive"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={image}
          className="borderRadiusTop  "
        />
      </div>
      <div className=" px-4 flex  flex-col items-center justify-center mb-4">
        <h1 className=" mb-0 Poppins capitalize font-medium text-gray-800 text-[16px]">
          {name}
        </h1>
        <p className="text-gray-600 font-medium text-[14px]">
          From: {from}
        </p>
        <p className="text-gray-500 font-regular capitalize text-[12px]">
          {date}
        </p>
      </div>
    </div>
  );
}

export default AchivementsCard;
