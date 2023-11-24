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
        " Establish a cohesive unit at HUB IT, merging diverse talents to synergize and tackle challenges collectively.",
    },
    {
      color_1:"#EEEAEA",
      text_color:"#000000",
      color_2:"#BDBBBB",
      icon: <BsShareFill />,
      title: "share the work load",
      description:
        "Foster efficiency by distributing tasks within the team, ensuring a balanced and collaborative approach to project execution.",
    },
    {
      color_1:"#EEEAEA",
      text_color:"#000000",
      color_2:"#BDBBBB",
      icon: <IoMail />,
      title: "add inbox",
      description:
        "Streamline communication and task management with an integrated inbox, centralizing information for seamless team collaboration.",
    },
    {
      color_1:"#A0047D",
      text_color:"#FFFFFF",
      color_2:"#7D0061",
      icon: <ImPriceTags />,
      title: "create tags",
      description:
        "Enhance organization and categorization by implementing tags, facilitating easy identification and retrieval of specific information within projects.",
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
        <h1 className="xxl:text-3xl text-xl text-center  text-main Poppins font-bold capitalize">
          how we work
        </h1>

        <div className="text-xs xxl:text-base font-normal text-regular Poppins  w-5/6  text-center mx-auto  mt-5 text-gray-400   capitalize">
          <p className="w-9/12 mx-auto">
         HUB IT, we work collaboratively, leveraging diverse talents to deliver cutting-edge IT solutions and training. Our approach is dynamic, ensuring innovation and excellence in every endeavor.
          </p>
        </div>
        
          {
            
            working.map((val,i)=>{
              return( <div key={i} className="relative w-48 md:w-52 lg:w-56 h-48 md:h-52 lg:h-56 xl:w-60 xxl:w-64 xl:h-60 xxl:h-64 mx-auto my-6 ">
                       <Image src={val.image} alt='' className='' layout="fill"/>
                       </div>
              )
            })
            
          }
      </div>
        <div>
          <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2 mx-auto w-5/6  place-items-center" >

            {data.map((val, i) => {
              return (
                <div key={i} className="flex flex-col my-5 h-36 md::h-36 lg:h-36 xl:h-36 w-[85%] lg:max-w-[40ch] xl:max-w-[60ch] capitalize rounded-lg p-3 " 
                style={{background:val.color_1,
                        color:val.text_color
                }}
                >
                  <div className="flex w-fit items-center  gap-2  p-2 rounded-lg" style={{background:val.color_2}}>
                  <div className=" text-lg w-fit h-fit   ">
                    {val.icon}
                  </div>
                  <h1 className="flex Poppins text-base py-0 my-0" >{val.title}</h1>
                  </div>
                  <div>
                    <p className="my-2 text-sm font-light md:text-[14px] lg:text-[14px] xl:text-[14px] Poppins ">
                      {val.description}
                    </p>
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
