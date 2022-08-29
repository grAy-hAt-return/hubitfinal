import Link from "next/link";
import React from "react";
import { IoMdCopy } from "react-icons/io";
import Lottie from "react-lottie";
import Badge from "../../../public/Badge..json";
const Body = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Badge,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <section className="Poppins">
        <div className=" items-center justify-center font-bold mt-5">
          <h1 className="text-center text-main font-bold text-[40px] h-10">
            Our Library
          </h1>
          <h3 className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
        </div>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 gap-5">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, i) => {
            return (
              <div className="rounded-md overflow-hidden shadow-lg bg-white" key={i}>
                <div className="relative">
                  <img
                    className="h-[217px] w-full  "
                    src="https://images.unsplash.com/photo-1563121167-bed76ebfa389?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=217&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFwdG9wfHx8fHx8MTY2MTQ5MTA1MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=282"
                    alt="image"
                  />
                  <div className="absolute top-0 right-0 w-12 h-10 bg-main rounded-sm">
                    <Lottie options={defaultOptions} width={40} height={35} />
                  </div>
                  <h2 className="text-white absolute bottom-0 left-1 h-6  font-medium text-lg ml-1">
                    Graphics Designer
                  </h2>
                </div>

                <div className="py-1 px-3">
                  <h1 className="title-font text-lg font-semibold mb-3">
                    Learn AI for Beginner{" "}
                  </h1>
                  <hr />
                  <div className="flex items-center mt-3 mb-2">
                    <img
                      className="w-10 h-10 object-cover rounded-full"
                      alt="image"
                      src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
                    />
                    <div className="pl-2 flex items-center gap-24">
                      <div className="font-medium flex gap-1">
                        <p>Kisan </p>
                        <p>Mahat</p>
                      </div>
<<<<<<< HEAD
                      <div className="text-gray-600 text-xs">
                        <p>20</p>

=======

                      <div className="text-gray-600 text-xs flex gap-1">
                        {" "}
                        <IoMdCopy className="mt-[2px]" />
                        <p className="text-[#454545]">20</p>
>>>>>>> 20075d0 (Some Pages Added)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Body;
