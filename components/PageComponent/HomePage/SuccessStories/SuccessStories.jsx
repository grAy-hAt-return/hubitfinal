import React from "react";
import SuccessStudentCard from "./SuccessStudentCard";
function SuccessStories() {
  const successStudentCard = [
    {
      image: "/images/japan.jpg",
      position: "mid-level web developer",
      placement: "placement at hub it pvt.ltd",
      name: "rasikha gyawali",
      as: "web design",
    },
    {
      image: "/images/japan.jpg",
      position: "mid-level web developer",
      placement: "placement at hub it pvt.ltd",
      name: "Somu magar",
      as: "Pro. UI/UX Designer ",
    },
    {
      image: "/images/japan.jpg",
      position: "mid-level web developer",
      placement: "placement at hub it pvt.ltd",
      name: "Gangeshwor Yadav",
      as: "Python",
    },
    {
      image: "/images/japan.jpg",
      position: "mid-level web developer",
      placement: "placement at hub it pvt.ltd",
      name: "Amrit Hero",
      as: "Graphic",
    },
  ];
  return (
    <div className=" mt-16 lg:mt-16 xl:mt-16 xxl:my-16 lg:mb-14 xl:mb-14 xxl:mb-14">
      <div className="text-sm md:text-xl lg:text-2xl xl:text-2xl xxl:text-2xl text-center text-main Poppins">
        <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl xxl:text-[33px] font-bold capitalize">
          some of our students success stories
        </h2>
      </div>
      <div
        className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-y-8
       lg:gap-y-8 xl:gap-y-0 xl:gap-x-16 xxl:gap-x-16 xxl:gap-y-0 lg:grid-cols-3 xl:grid-cols-4 
       xxl:grid-cols-4 pt-16 w-10/12 mx-auto"
      >
        {successStudentCard.map((val, i) => {
          return (
            <div key={i} className="mb-8">
              <SuccessStudentCard
                image={val.image}
                position={val.position}
                placement={val.placement}
                name={val.name}
                as={val.as}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SuccessStories;
