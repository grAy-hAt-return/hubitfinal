import React from 'react'

const SideContactForm = () => {
  return (
    <>
      <div className="w-30 mt-3  xs:ml-10 sm:ml-12 md:ml-14 mb-3 ">
        <h2 className="text-main font-medium text-2xl h-4 md:w-full xs:text-lg">
          Interested In Training
        </h2>
        <p className="text-[#808080]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="mb-6 mt-6">
          <input
            inputMode="text"
            placeholder="Organization Name"
            className=" xl:w-full xxl:w-full  rounded-lg border-2 border-gray-300 border-solid  p-3 outline-none  focus-visible:shadow-none focus:border-primary placeholder:text-[#808080]  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  xs:w-full  w-[90%] "
          />
        </div>
        <div className="mb-6 mt-6">
          <input
            inputMode="text"
            placeholder="Email Address"
            className="  xl:w-full xxl:w-full  rounded-lg border-2 border-gray-300 border-solid  p-3 outline-none  focus-visible:shadow-none focus:border-primary  placeholder:text-[#808080]  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 xs:w-full  w-[90%] "
          />
        </div>
        <div className="mb-6 mt-6">
          <textarea
            rows={5}
            placeholder="Write a message..."
            className=" xl:w-full xxl:w-full  rounded-lg border-2 border-gray-300 border-solid  p-3 outline-none  focus-visible:shadow-none focus:border-primary  placeholder:text-[#808080]  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 xs:w-full  w-[90%] "
          />
        </div>
        <button className="bg-main py-2 px-6 w-48 xs:w-52   rounded-[100px] text-lg sm:w-44 first-letter:mb-5  text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-hoverMain duration-[400ms,700ms] transition-[color,box-shadow] ">
          Send Message{" "}
        </button>
      </div>
    </>
  );
}

export default SideContactForm
