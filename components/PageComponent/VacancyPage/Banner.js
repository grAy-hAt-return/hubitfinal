import React from "react";

const Banner = () => {
  return (
    <>
      <div className=" bg-main Poppins ">
        <div
          className='bg-[url("https://images.unsplash.com/photo-1474932430478-367dbb6832c1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=313&ixid=MnwxfDB8MXxyYW5kb218MHx8bGlicmFyeXx8fHx8fDE2NjE0OTIzNDQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1440")]
         h-[313px]   bg-cover bg-center p-20 opacity-70  grid place-content-center '
        >
          <div className="flex flex-col j gap-1 xs:ml-3">
            <h1 className="text-white xl:ml-12">
              Explore Opportunities At Hubit
            </h1>
            <div className="flex xs:flex-col sm:flex-col md:flex-col sm:gap-3 sm:items-center xs:gap-2 xs:items-center md:gap-5 md:items-center">
              <input
                type="text"
                className="xl:w-[30vw] xxl:w-[30vw] w-[60vw] xs:h-8 rounded-l-xl px-4 md:rounded-md sm:rounded md:h-10 xs:rounded"
              />
              <button className="bg-main py-2 px-6 w-48 rounded-r-lg  text-lg sm:w-44 xs:w-44  text-white  hover:shadow-[inset_13rem_0_0_0] hover:shadow-hoverMain duration-[400ms,700ms] transition-[color,box-shadow]">
                Send Message{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
