// import { data } from "autoprefixer";
import React from "react";
import { BsPeopleFill, BsShareFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { ImPriceTags } from "react-icons/im";

function HowWeWork() {
  const data = [
    {
      icon: <BsPeopleFill />,
      title: "create a team",
      description:
        "Our team at the HIGPL has a comprehensive list of highly skilled and experienced professionals, dedicated to providing students with the latest and most up-to-date training and support they need to succeed in the field of technology.",
    },
    {
      icon: <IoMail />,
      title: "add inbox",
      description:
        "We at HIGPL also have an inbox system for our students and staff to communicate, to ensure better coordination, quick responses to any queries or concerns and to provide a more efficient support system because we are available any time you need us.",
    },
    {
      icon: <ImPriceTags />,
      title: "create tags",
      description:
        "Creating tags is an organizational method at HIGPL for grouping similar topics, courses and resources together for easy navigation and searchability. Boost the overall productivity of us and our connected individuals.",
    },
    {
      icon: <BsShareFill />,
      title: "share the work load",
      description:
        "At the HIGPL, we believe in fair sharing of workload among team members to ensure efficient use of resources, and to provide a better learning experience for students. We believe in  “efficient that team is builds efficient company”.",
    },
  ];
  return (
    <div className="px-5 lg:px-20 xl:px-20 xxl:px-20">
      <div>
        <div className="text-2xl text-center  text-main Poppins font-bold capitalize">
          <h1>how we work</h1>
        </div>

        <div className="text-sm  w-7/12  text-center mx-auto  mt-5 text-gray-400   capitalize">
          <p>
          At the Hub IT Training Institute, we believe in a collaborative approach to 
          learning. We work closely with our students and staff to understand their needs and
          tailor our training and resources to meet those needs. We use a variety of teaching
          methods, including hands-on exercises, lectures, and group discussions to ensure that
          our students have a well-rounded learning experience. This provides us the
          advantage to be people's choice and be industry lending. We not only teach
          but also give you a job as per your skill and ability. We extremely 
          that we are not “shovel sellers ” Additionally, we are committed to staying
          up-to-date with the latest developments in the field of technology and
          regularly update our curriculum to reflect these changes.

          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-12">
        <div className=" col-span-">
          <div>
            {data.map((val, i) => {
              return (
                <div key={i} className="flex gap-5 my-20 capitalize">
                  <div className=" text-2xl w-fit h-fit p-2  text-main">
                    {val.icon}
                  </div>
                  <div>
                    <div className="my-1 Poppins text-lg">{val.title}</div>
                    <div className="my-1  text-sm text-gray-500">
                      {val.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* <div>pics & videos</div> */}
      </div>
    </div>
  );
}

export default HowWeWork;
