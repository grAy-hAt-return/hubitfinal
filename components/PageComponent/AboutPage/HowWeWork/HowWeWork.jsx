// import { data } from "autoprefixer";
import React from "react";
import { BsPeopleFill, BsShareFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { ImInsertTemplate, ImPriceTags } from "react-icons/im";
import Image from "next/image";
import ImageFirst from '../../../Resources/working_photo.png';

function HowWeWork() {
  const data = [
    {
      color_1:"#A0047D",
      text_color:"#FFFFFF",
      color_2:"#7D0061",
      icon: <BsPeopleFill />,
      title: "create a team",
      description:
        "Our team at the HIGPL has a comprehensive list of highly skilled and experienced professionals, dedicated to providing students with the latest and most up-to-date training and support they need to succeed in the field of technology.",
    },
    {
      color_1:"#EEEAEA",
      text_color:"#000000",
      color_2:"#BDBBBB",
      icon: <IoMail />,
      title: "add inbox",
      description:
        "We at HIGPL also have an inbox system for our students and staff to communicate, to ensure better coordination, quick responses to any queries or concerns and to provide a more efficient support system because we are available any time you need us.",
    },
    {
      color_1:"#EEEAEA",
      text_color:"#000000",
      color_2:"#BDBBBB",
      icon: <ImPriceTags />,
      title: "create tags",
      description:
        "Creating tags is an organizational method at HIGPL for grouping similar topics, courses and resources together for easy navigation and searchability. Boost the overall productivity of us and our connected individuals.",
    },
    {
      color_1:"#A0047D",
      text_color:"#FFFFFF",
      color_2:"#7D0061",
      icon: <BsShareFill />,
      title: "share the work load",
      description:
        "At the HIGPL, we believe in fair sharing of workload among team members to ensure efficient use of resources, and to provide a better learning experience for students. We believe in  “efficient that team is builds efficient company”.",
    },
  ];
  const working = [
    {
      image : ImageFirst
    }
  ]
  return (
    <div className="px-5 lg:px-20 xl:px-20 xxl:px-20">
      <div>
        <div className="text-2xl text-center  text-main Poppins font-bold capitalize">
          how we work
        </div>

        <div className="text-xs text-regular Poppins  w-5/6  text-center mx-auto  mt-5 text-gray-400   capitalize">
          <p>
          At the Hub IT Training Institute, we believe in a collaborative approach to 
          learning. We work closely with our students and staff to understand their needs and
          tailor our training and resources to meet those needs.Additionally, we are committed to staying
          up-to-date with the latest developments in the field of technology and
          regularly update our curriculum to reflect these changes.
          </p>
        </div>
        
          {
            
            working.map((val,i)=>{
              return( <div className="relative w-40 h-40 mx-auto my-6 ">
                       <Image src={val.image} className='' layout="fill"/>
                       </div>
              )
            })
            
          }
        
        
      </div>
      
        <div>
          <div className=" grid grid-cols-2 mx-auto w-5/6  place-items-center  " >
            {data.map((val, i) => {
              return (
                <div key={i} className="flex flex-col my-5 h-32 w-96 capitalize rounded-lg p-3 " 
                style={{background:val.color_1,
                        color:val.text_color
                }}>
                  <div className="flex w-fit items-center  gap-2  p-2 rounded-lg" style={{background:val.color_2}}>
                  <div className=" text-lg w-fit h-fit   ">
                    {val.icon}
                  </div>
                  <div className="flex Poppins text-md" >{val.title}</div>
                  </div>
                  <div>
                    
                    <div className="my-1  text-[10px] Poppins ">
                      {val.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
  
  );
}

export default HowWeWork;
