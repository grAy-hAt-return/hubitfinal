import { BsCheckLg , BsPersonCircle } from "react-icons/bs";
import { MdModelTraining, MdLibraryBooks, MdOutlineContentPaste } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import {BsPersonBoundingBox} from "react-icons/bs"
const WhyHub = () => {
  let data = [
    { 
      
      icon: <BsCheckLg/>,
      title: "Comprehensive Resources:",
      color:"#5A5ECA",
      description:
        "HUB IT offers an extensive library covering the entire spectrum of IT training and solutions, ensuring a comprehensive learning experience.",
    },
    {
      icon: <MdModelTraining/>,
      color:"#F2C351",
      title: "Support after training",
      description:
        "As I.T is upgraded every second our student needs support for new upgrade,we provide support after training also",
    },
    {
      icon: <BsPersonBoundingBox/>,
      color:"#1FA67A",
      title: "Personality Development training",
      description: "We not only provide skill,we create P.D of students by HR professionals",
    },
    {
      icon: <MdOutlineContentPaste />,
      color:"#1FA67A",
      title: "Updated Syllablus",
      description:
        "Designed syllablus focusing the sector as need of industries demand in which our students can compete.",
    },

    {
      icon: <GiTeacher />,
      title: "Highly experience instructor",
      color:"#F2C351",
      description:
        "Instructors are highly qualified active professional",
    },
    {
      icon: <MdLibraryBooks />,
      color:"#5A5ECA",
      title: "Expertise at the Core:",
      description:
        "Benefit from HUB IT's core of expertise, where seasoned professionals contribute to shaping the next generation of IT enthusiasts through guidance and excellence. ",
    },
  ];

  return (
    <div className="px-4 md:px-8 lg:px-20 xl:px-24 xxl:w-10/12 mx-auto w-full h-max my-16 Poppins">
      <div className="flex flex-col lg:flex-col xl:flex-col xxl:flex-col w-full h-max gap-7 items-center justify-center">
        <div className="flex justify-center  w-full lg:w-2/6 xl:w-2/6 xxl:w-2/6 ">
          <div className="w-max text-lg md:text-xl lg:text-xl xl:text-3xl xxl:text-[33px]  capitalize Poppins font-bold">
            Why Choose
            <span className="w-max p-1 text-[#a0047d] text-lg md:text-xl lg:text-xl xl:text-3xl xxl:text-[33px] capitalize Poppins font-bold text-justify ">
             HUBIT
          </span>
          </div>
          
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 xs:grid-cols-1 lg:grid-cols-3 xl:grid-cols-2 xxl:grid-cols-3 gap-x-10 gap-y-12 w-full lg:w-[100%] xl:w-5/6 xxl:w-full">
          {data.map((item,i) => {
            return (
              <div key={i}>
                <div className="flex gap-5 ">
                  <div className={`p-3 mt-2 text-white h-full rounded-full text-2xl xxl:text-lg`} style={{
                    background:item.color
                  }}>
                    {item.icon}
                  </div>
                  <div className="h-full w-full flex flex-col ">
                  <div className=" xxl:text-base w-full h-fit">
                    <h1 className=" text-xl font-medium">{item.title}</h1>
                  </div>
                  <div className="w-full h-full text-left pr-4 text-sm lg:text-base xl:text-base xxl:text-base text-gray-500">
                    {item.description}
                  </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default WhyHub;
