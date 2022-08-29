import React from "react";

const PlaceMentWorkProcess = () => {
  const PlacementArray = [
    {
      number: "01",
      name: "Enroll a Course",
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra diam praesent suscipit condimentum lacus. Egestas aliquam id cursus etiam pellentesque eu. ",
      textColor: "#A0047D",
    },
    {
      number: "02",
      name: "Complete tests",
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra diam praesent suscipit condimentum lacus. Egestas aliquam id cursus etiam pellentesque eu. ",
      textColor: "#41D3BD",
    },
    {
      number: "03",
      name: "Requets Internship",
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra diam praesent suscipit condimentum lacus. Egestas aliquam id cursus etiam pellentesque eu. ",
      textColor: "#FFC857",
    },
    {
      number: "04",
      name: "Find your job",
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra diam praesent suscipit condimentum lacus. Egestas aliquam id cursus etiam pellentesque eu. ",
      textColor: "#0197F6",
    },
  ];

  return (
    <>
      <section className="bg-[#F6F6F6] pb-14">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-main font-bold text-3xl pt-14 xs:mx-10">
            How does placement process work ?
          </h1>
          <p>20 + placement partners</p>
        </div>
        <div className="p-10 mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-4 gap-5">
          {PlacementArray.map((item, i) => {
            const { number, name, data, textColor } = item;
            return (
              <section className="bg-white rounded-lg px-5 py-3 shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-gray-200" key={i}>
                <div className="flex flex-col gap-2 ">
                  <p className="hidden text-[#41D3BD]"></p>
                  <p className="hidden text-[#FFC857]"></p>
                  <p className="hidden text-[#0197F6]"></p>
                  <h1
                    className={`text-[${textColor}] h-4 font-semibold text-[40px] mb-8`}
                  >
                    {number}
                  </h1>
                  <p className={`text-[${textColor}]`}>{name}</p>
                  <p>{data}</p>
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default PlaceMentWorkProcess;
