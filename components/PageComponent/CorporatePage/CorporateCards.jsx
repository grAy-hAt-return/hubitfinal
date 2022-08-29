import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const CorporateCards = () => {
  return (
    <>
      <div className="p-10 grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-3 gap-5 w-[65vw] sm:w-full  xs:w-[120%] md:w-full">
        {[1, 2, 3, 4].map((item, i) => {
          return (
            <div className="rounded overflow-hidden shadow-lg " key={i}>
              <img
                className="w-full"
                src="https://cdn.pixabay.com/photo/2020/05/26/17/56/student-5224089_1280.jpg"
                alt="image"
              />

              <p className="text-main font-medium text-xl mx-2 mt-3 ">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="text-[#808080] mx-2 my-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, aperiam.s Lorem ipsum dolor sit amet.
              </p>
              <p className="flex text-main m-2 cursor-pointer transition-all duration-300 hover:scale-105">
                Read More <FaAngleDoubleRight className="mt-1 ml-1" />
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CorporateCards;
