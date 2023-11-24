import React from "react";
import Image from "next/image";

function OurTeamCard({ image, as, name }) {
  return (
    <div
      className="shadow-xl shadow-gray-400 hover:scale-105 
    transition-all cursor-pointer duration-300 ease-linear  w-fit  
     capitalize pb-2 rounded-lg"
    >
      <div className="w-60 xxl:w-64 h-48 xxl:h-52 hover: borderRadiusTopHover">
        <Image
          src={image}
          height={45}
          width={60}
          alt="Loading ..."
          layout="responsive"
          objectFit="cover"
          className="borderRadiusTop"
        />
      </div>
      <div className="px-4 flex flex-col items-center justify-center">
        <h1 className="Poppins font-semibold my-1  text-gray-700 text-[16px]">{name}</h1>
        <p className="text-gray-400 mt-0 text-[14px]">{as}</p>
      </div>
    </div>
  );
}

export default OurTeamCard;
