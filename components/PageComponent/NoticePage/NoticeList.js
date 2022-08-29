import Link from "next/link";
import React from "react";

const NoticeList = () => {
  const btnText = [
    {
      btn1: "General",
      btn2: "New",
    },
    {
      btn1: "Administrative",
      textColor: "yellow",
    },
    {
      btn1: "Graphics Class",
      textColor: "main",
    },
    {
      btn1: "General",
      btn2: "New",
    },
  ];
  return (
    <>
      <div classNameName="flex flex-col gap-2 items-center justify-center ">
        {btnText.map((item, i) => {
          return (
            <>
              <Link key={i} href="/notice/noticeDetail">
                <div
                  className="bg-[#FAFAFA] rounded-lg flex items-center mx-auto border-b-2 pb-10  border-gray-200 w-[95vw] xl:w-[60vw] xxl:w-[60vw] lg:w-[80vw] cursor-pointer hover:scale-105 transition-all duration-300 "
                  key={i}
                >
                  <div className=" sm:mr-10 inline-flex items-center justify-center   flex-shrink-0">
                    <img
                      src="https://wallpaperaccess.com/full/8044061.jpg"
                      alt=""
                      className="ml-10 mt-10  rounded-lg   h-[83px] w-[83px]"
                    />
                  </div>
                  <div className="flex flex-col items-start xl:pt-10">
                    <div className="flex gap-5 xs:flex-col xs:gap-1 xs:ml-6 xl:ml-8 justify-center items-center ">
                      <p className="ml-4 font-medium  xs:mt-3 sm:mt-5 text-[##7B7575] text-sm">
                        10<sup>th</sup> April 2021
                      </p>
                      <p className="hidden text-yellow"></p>
                      <button
                        className={
                          item.textColor
                            ? `bg-white hover:scale-105 transition-all duration-400  text-${item.textColor} border-2 border-solid border-gray-50 px-1 shadow-md`
                            : `bg-white hover:scale-105 transition-all duration-400  text-[#A0E9DE] border-2 border-solid border-gray-50 px-1 shadow-md`
                        }
                      >
                        {item.btn1}
                      </button>
                      {item.btn2 && (
                        <button className="bg-main hover:scale-105 transition-all duration-400  text-white text-xs px-2 shadow-md xs:h-7">
                          {item.btn2}
                        </button>
                      )}
                    </div>
                    <div className="ml-8 h-12">
                      <h2 className="xs:text-sm font-medium text-3xl  text-[#454545] h-4">
                        Upcoming Holiday For festive
                      </h2>
                    </div>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};

export default NoticeList;
