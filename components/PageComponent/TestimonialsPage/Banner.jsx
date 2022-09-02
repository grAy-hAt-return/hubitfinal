import React from "react";

const Banner = () => {
  return (
    <>
      <div className=" bg-main">
        <div
          className='bg-[url("https://images.unsplash.com/photo-1474932430478-367dbb6832c1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=313&ixid=MnwxfDB8MXxyYW5kb218MHx8bGlicmFyeXx8fHx8fDE2NjE0OTIzNDQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1440")]
         h-[313px]   bg-cover bg-center p-20 opacity-70  '
        >
          <div className="flex justify-center items-center flex-col ">
            <h1 className="text-4xl font-bold text-white h-1 ">
              Testimonails{" "}
            </h1>
            <br />
            <p className="text-sm font-medium text-white ">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
