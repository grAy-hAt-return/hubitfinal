import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FiMail } from "react-icons/fi";
import { BiTime } from "react-icons/bi";
const SideIconBox = () => {
  const contact = [
    {
      title: "Call us",
      text: "9821420682 , 9812345679",
      icon: (
        <BsFillTelephoneFill className="text-white w-10 h-10 xs:w-14 xs:h-14 md:w-18 md:h-18   lg:w-14 lg:h-14 bg-main rounded-[50%] p-2" />
      ),
    },
    {
      title: "Find us",
      text: "Butwal, Milanchowk",
      icon: (
        <GoLocation className="text-white w-10 h-10   xs:w-14 xs:h-14  md:w-18 md:h-18   lg:w-14 lg:h-14  bg-main rounded-[50%] p-2" />
      ),
    },
    {
      title: "Mail us",
      text: "hubit@gmail.com",
      icon: (
        <FiMail className="text-white w-10 h-10 xs:w-14 xs:h-14  md:w-18 md:h-18   lg:w-14 lg:h-14  bg-main rounded-[50%] p-2 " />
      ),
    },
    {
      title: "Available time",
      text: "Sun-Fri, 9:00 am - 6:00 pm",
      icon: (
        <BiTime className="text-white w-10 h-10 xs:w-14 xs:h-14  md:w-18 md:h-18    lg:w-14 lg:h-14   bg-main rounded-[50%] p-2" />
      ),
    },
  ];
  return (
    <>
      <div className="sm:w-full xs:w-full lg:w-[40vw] md:w-[80vw]  xl:w-[40vw] xxl:w-[40vw] rounded-xl overflow-hidden sm:mr-10 p-10 flex flex-col items-center justify-center  md:mr-10 ">
        {contact.map((item, i) => {
          const { title, text, icon } = item;
          return (
            <div
              className="flex gap-8 bg-white rounded-lg w-[25vw] h-[15vh] mx-10 my-5 p-4 items-center sm:w-full xs:w-full md:w-full md:h-[10vh] shadow-lg hover:scale-105 transition-all duration-300 xs-text-xs "
              key={i}
            >
              {icon}{" "}
              <div className="flex-col ">
                <p className="sm:text-2xl lg:text-3xl text-sm font-medium">
                  {title}
                </p>

                <p className="sm:text-xl lg:text-2xl text-sm font-medium  text-[#454545]">
                  {text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SideIconBox;
