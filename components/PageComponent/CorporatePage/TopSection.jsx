import React from "react";

const TopSection = () => {
  return (
    <>
      {" "}
      <section className="bg-white ">
        <div className="flex   xs:w-full sm:w-full xs:flex-col sm:flex-col px-4 py-8 mx-6 xs:mx-2 sm:mx-4 md:mx-6     ">
          <div className=" w-[60vw] sm:w-full xs:w-full place-self-center md:w-full xs:w-full">
            <h2 className=" mb-4 text-4xl text-main leading-none md:text-xl xs:text-2xl ">
              What is Corporate Training?
            </h2>
            <p className=" mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sed
              corporis voluptas voluptatem, officiis provident perspiciatis enim
              exercitationem sapiente eligendi hic. Sequi, at voluptatibus.
              Harum numquam quasi illum animi provident.
            </p>
            <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              fuga error illum dolor incidunt eos ducimus maxime, consequatur
              ullam cupiditate? Tempore, ullam. Aspernatur dicta magnam quis
              minima quisquam iste est.
            </p>
            <ul className="space-y-1 marker:text-main list-disc list-inside text-gray-500 ">
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                quam unde voluptas exercitationem maxime assumenda!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                quam unde voluptas exercitationem maxime assumenda!
              </li>{" "}
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                quam unde voluptas exercitationem maxime assumenda!
              </li>
            </ul>
          </div>
          <div className="md:hidden xs:hidden lg:ml-10 xl:ml-10 xxl:ml-20  ">
            <img
              src="https://images.unsplash.com/photo-1461039088886-b5c863279a0e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=435&ixid=MnwxfDB8MXxyYW5kb218MHx8c3R1ZGVudHx8fHx8fDE2NjEzNDk4MDA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=392"
              alt="image"
              className="lg:mt-14  w-[394px] h-[435px] xl:mt-10 "
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default TopSection;
