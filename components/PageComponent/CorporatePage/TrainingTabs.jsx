import React, { useState } from "react";
import { IoArrowDown } from "react-icons/io5";
import { MdArrowLeft } from "react-icons/md";
import TrainingAccomplished from "./TrainingTabs/TrainingAccomplished";
import TrainingRunning from "./TrainingTabs/TrainingRunning";
import UpcomingTraining from "./TrainingTabs/UpcomingTraining";

function TrainingTabs() {
  const [ActiveTab, setActiveTab] = useState("training accomplished");
  const Tabs = [
    { title: "training accomplished" },
    { title: "training running" },
    { title: "upcoming training" },
  ];
  const handleClick = (title) => {
    setActiveTab(title);
  };
  let mod;
  switch (ActiveTab) {
    case "training accomplished":
      mod = <TrainingAccomplished />;
      break;
    case "training running":
      mod = <TrainingRunning />;
      break;
    case "upcoming training":
      mod = <UpcomingTraining />;
      break;
    default:
      break;
  }

  const [isVisible,setIsVisible] = useState(false)
  return (
    <div className=" w-full mx-auto md:my-0 my-5">
      <div className="w-10/12 mx-auto">
        <div
          className={`md:flex xl:flex xxl:flex  gap-5 items-center capitalize mt-14 md:mt-28 xl:mt-28 xxl:mt-28  `}
        >
          {Tabs.map((val, i) => {
            return (
              <div key={i}>
                <button
                  onClick={() => handleClick(val.title)}
                  className={`${
                    ActiveTab === val.title
                      ? "text-main  border-b py-1 border-main"
                      : ""
                  } capitalize font-medium my-2 md:my-0  xl:my-0 xxl:my-0  outline-none`}
                >
                  {/* {val.title} */}
                  {val.title}
                </button>
              </div>
            );
          })}
        </div>
        <div className={`${isVisible ? 'lg:h-fit xl:h-fit ':'h-94 md:h-[385px] lg:h-[410px] xl:h-[430px] overflow-y-scroll md:overflow-hidden lg:overflow-hidden xl:overflow-hidden'} no-scrollbar py-2`}>{mod}</div>{" "}
        <button 
        onClick={()=>setIsVisible(!isVisible)}
        className="hidden md:visible lg:visible xl:visible md:flex lg:flex xl:flex w-fit mx-auto items-center justify-center cursor-pointer capitalize">
          <div className="">show more</div>
          <div className="">
            <MdArrowLeft className="h-9 w-9 rotate-[270deg]" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default TrainingTabs;
