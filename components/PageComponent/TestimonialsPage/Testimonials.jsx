import React from "react";
import { GoQuote } from "react-icons/go";

const Testimonials = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <div className="flex flex-col gap-12">
          {[1, 2, 3, 4].map((item, i) => {
            return (
              <div className="flex gap-10 xs:shadow-lg sm:shadow-lg md:shadow-lg  rounded-lg border-2 border-solid border-gray-400 mx-3 p-3 xl:border-0 xxl:border-0 xs:flex-col sm:flex-col md:flex-col xs:gap-3" key={i}>
                <div className="relative grid place-content-center xs:mx-3">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=342&ixid=MnwxfDB8MXxyYW5kb218MHx8Z2lybHx8fHx8fDE2NjIxMDU1MTM&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=495"
                    alt="image"
                    className="rounded-lg"
                  />
                  <div className="absolute -top-5 -right-5 xs:right-0 xs:top-0  w-12 h-12 bg-main rounded-[50%] xs:rounded-lg grid place-items-center">
                    <GoQuote className="text-white w-6 h-6" />{" "}
                  </div>
                </div>
                <div className="flex flex-col gap-2 xs:gap-5 w-[47vw] xs:w-full sm:w-full md:w-full ">
                  <h1 className="text-2xl font-bold h-5  xs:h-10">
                    Helped me to improve my productivity
                  </h1>
                  <p className="text-[#454545] font-medium text-sm xs:w-full md:w-full sm:w-full w-[35vw] xs:text-xs px-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    id faucibus nulla facilisis consectetur pretium venenatis
                    proin. Facilisis sed dictum sit lectus odio purus sit
                    pretium. Sit eget vitae, venenatis at volutpat. Cras nunc
                    platea eget ornare malesuada congue nunc, scelerisque.
                    Accumsan in bibendum praesent arcu nibh.pretium. Sit eget
                    vitae, venenatis at volutpat. Cras nunc platea eget ornare
                    malesuada congue nunc, scelerisque. Accumsan in bibendum
                    praesent arcu nibh.
                  </p>
                  <p className="mt-auto">Susmita Acharya</p>
                  <p>Hubit Student, web design</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
