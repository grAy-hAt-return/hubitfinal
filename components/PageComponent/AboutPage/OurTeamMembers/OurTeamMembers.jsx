import React from "react";
// import ../../../../public/images"/images/japan.jpg" from "";
import OurTeamCard from "./OurTeamCard";
function OurTeamMembers() {
  const OurTeamMembersCard = [
    {
      image: "/images/japan.jpg",
      position: "mid-level web developer",
      placement: "placement at hub it pvt.ltd",
      name: "Kisan Mahat",
      as: "full-stack developer",
    },
    {
      image: "/images/japan.jpg",
      position: "mid-level web developer",
      placement: "placement at hub it pvt.ltd",
      name: "Adarsh Kunwar",
      as: "front-end developer",
    },
    {
      image: "/images/japan.jpg",
      position: "mid-level web developer",
      placement: "placement at hub it pvt.ltd",
      name: "himal fullel",
      as: "MERN fullstack Developer",
    },
    {
      image: "/images/japan.jpg",
      position: "mid-level web developer",
      placement: "placement at hub it pvt.ltd",
      name: "himal fullel",
      as: "MERN fullstack Developer",
    },
  ];
  return (
    <div className="py-16">
      <div className="flex flex-col gap-5">
        <div className="xxl:text-3xl text-2xl  text-center  text-main Poppins font-bold capitalize">
          Our Teams Members
        </div>

        <p className="Poppins xxl:text-base font-normal text-xs leading-6   w-4/6  text-center mx-auto   text-gray-400">
        {/* Our team at HUB IT comprises dedicated and skilled professionals, pooling 
        their expertise to drive excellence in the IT landscape. Together, we form a dynamic force committed to providing top-notch solutions and training for a tech-savvy future. */}
        {/* At HUB IT, our skilled team is dedicated to driving IT excellence. We provide 
        top-notch solutions and training for a tech-savvy future. */}
          HUB IT's dedicated team drives IT excellence, offering top-notch solutions and training for a tech-savvy future.
        </p>
      </div>
      <div
        className="w-11/12 mx-auto  place-content-center place-items-center grid grid-cols-1 gap-y-8  md:grid-cols-2 md:gap-y-8
       lg:gap-y-8 xl:gap-y-0  xxl:gap-y-0 lg:grid-cols-3 xl:grid-cols-4
       xxl:grid-cols-4 px-14 pt-11"
      >
        {OurTeamMembersCard.map((val, i) => {
          return (
            <div key={i}>
              <OurTeamCard image={val.image} name={val.name} as={val.as} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurTeamMembers;
