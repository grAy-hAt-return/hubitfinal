import Image from "next/image";
import React from "react";
// import image from "../../Resources/designnoBg.png";
const MidSection = () => {
  const dataa = [
    { name: "https://plus.unsplash.com/premium_photo-1682787494765-44d02d12f5be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "velapaltem accustyions imperials" },
    { name: "https://plus.unsplash.com/premium_photo-1682787494765-44d02d12f5be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "velapaltem accustyions imperials" },
    { name: "https://plus.unsplash.com/premium_photo-1682787494765-44d02d12f5be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "velapaltem accustyions imperials" },
  ];
  const status = [
    { numbers: 28, title: "training accomplished" },
    { numbers: 28, title: "training running" },
    { numbers: 28, title: "upcoming training " },
    // { numbers: 28, title: "training completed" },
  ];
  return (
    <div>
      <div>
        <div className="mt-20">
          <h1 className="text-center text-xl md:text-3xl xl:text-3xl xxl:text-3xl font-bold text-main capitalize ">
            what we do
          </h1>
          <p className="mx-auto text-sm md:text-base lg:text-base xl:text-base xxl:text-base text-center md:w-7/12 xl:w-7/12 xxl:w-7/12  text-gray-600">
          We design a course for your employee or students according to organization need or as per their syllablus of universities
          </p>
        </div>
        <div className="w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-3 gap-10 place-items-center my-5 md:my-16 px-4 md:px-10">
          {dataa.map((val, i) => {
            return (
              <div className="relative md:my-0 w-full rounded-sm overflow-hidden" key={i}>
                <div className={`w-full h-56 relative`}
                style={{
                  backgroundImage: `url(${val.name})`,
                  backgroundPosition:"center",
                  backgroundRepeat:"no-repeat",
                  backgroundSize:"cover"
                }}
                >
                  <div className="w-full bg-main bg-opacity-70 absolute bottom-0">
                    <div className="w-full bg-white bg-opacity-25">
                      <p className="w-full text-center text-white text-xs xl:text-sm xxl:text-sm py-3">
                        Lorem ipsum dolordolordolor. 
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div
                  className="absolute  bottom-0 bg-[#ff1cd9] bg-opacity-40 w-full text-white
                  py-2 px-2 capitalize text-center text-xs md:text-base xl:text-base  xxl:text-base"
                >
                  {val.title}
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h1 className="text-center text-xl md:text-3xl lg:text-3xl xl:text-3xl xxl:text-3xl text-main capitalize mt-10 md:mt-28 lg:mt-28  xl:mt-28  xxl:mt-28  ">
          our training status
        </h1>
        <p className="mx-auto text-sm md:text-base lg:text-base xl:text-base xxl:text-base text-center w-5/6 md:w-7/12 lg:w-7/12 xl:w-7/12 xxl:w-7/12 px-10  text-gray-600">
          Take a glancet the status of our classes. Choose your courses, let us
          know your time and we will fit you in therequired schedule.
        </p>
        <div className="w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 px-16 lg:px-4 md:px-10 my-8 place-items-center">
          {status.map((val, i) => {
            return (
              <div
                key={i}
                className="bg-main rounded-xl w-full h-40 flex items-center justify-center text-white
               opacity-70 text-xl capitalize  flex-col  "
              >
                <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-3xl xxl:text-4xl my-2">{val.numbers}</h1>
                <h1 className="text-sm md:text-sm lg:text-base xl:text-base xxl:text-base font-semibold"> {val.title}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MidSection;
