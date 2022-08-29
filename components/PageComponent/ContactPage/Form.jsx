import React from "react";

const Form = () => {
  return (
    <>
      <div className="lg:w-1/2 md:w-1/2 xs:ml-10 sm:ml-10 md:ml-10 bg-white  flex flex-col  w-[40vw] sm:w-full xs:w-full md:py-8 mt-8 md:mt-0 shadow-xl rounded-xl p-10 mr-10">
        <h2 className="text-main text-2xl mb-1 font-bold">Message Us </h2>
        <p className="leading-relaxed mb-5 font-normal text-[#7B7575] text-sm xs:ml-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="relative mb-4">
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
            placeholder="Full Name"
          />
        </div>
        <div className="relative mb-4">
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Email Address"
          />
        </div>
        <div className="relative mb-4">
          <textarea
            id="message"
            name="message"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            placeholder="Write a Message"
          />
        </div>
        <button className="bg-main py-2 px-6 w-48   rounded-[100px] text-lg sm:w-44 xs:w-44  text-white  hover:shadow-[inset_13rem_0_0_0] hover:shadow-hoverMain duration-[400ms,700ms] transition-[color,box-shadow]">
          Send Message{" "}
        </button>
      </div>
    </>
  );
};

export default Form;
