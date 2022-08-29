import React from "react";
import Image from "next/image";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";
const NoticeDetailPage = () => {
  return (
    <>
      <div className="flex flex-col gap-0 items-center justify-center pb-10">
        <div className="mt-10">
          {" "}
          <Image
            src="https://t2.uc.ltmcdn.com/en/posts/9/7/7/what_to_wear_for_holi_color_festival_9779_orig.jpg"
            width={300}
            height={300}
            className="hover:scale-105 transition-all duration-300 pt-10 "
          />
        </div>

        <div>
          <h1 className=" poppins h-7 text-[#454545] xs:text-xl font-medium">
            Upcoming Holiday for festive
          </h1>
        </div>
        <div>
          <p className="text-[#7B7575]">20th April, 2021</p>
        </div>
        <div className="w-[70vw] pt-2 grid place-items-center text-[#808080]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            sapiente maiores, facilis voluptatum saepe soluta fugiat, dolores
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nam
            eveniet quia ducimus itaque temporibus corporis natus dicta cumque
            nostrum!
          </p>
        </div>
        <div className="flex gap-3 mt-10 ">
          <AiFillFacebook className="w-7 hover:scale-110 transition-all duration-300 cursor-pointer h-7 text-main" />
          <FaWhatsappSquare className="w-7 hover:scale-110 transition-all duration-300 cursor-pointer h-7 text-main" />
          <AiFillLinkedin className="w-7 hover:scale-110 transition-all duration-300 cursor-pointer h-7 text-main" />
        </div>
        <h1 className="text-main font-bold mt-3 text-xl">Share this notice</h1>
      </div>
    </>
  );
};

export default NoticeDetailPage;
