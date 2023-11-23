<<<<<<< HEAD
import Image from "next/image";
import imgLink from "../../../Navigation/Navitem/placementpartners";
import Link from "next/link";
const PlacementPartners = () => {
  // const Placement =[
  //   {
  //     image : ImageFirst
  //   },
  //   {
  //     image : Image1
  //   },
  //   {
  //     image : Image2
  //   },
  //   {
  //     image : Image3
  //   },
  //   {
  //     image : Image4
  //   },
  //   {
  //     image : Image5
  //   },
  // ]
  // const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className=" px-2 md:px-4 lg:px-20 xl:px-24 xxl:px-32 mt-10 flex flex-col items-center ">
      <div className="w-max  text-[#a0047d] text-lg xl:text-xl xxl:text-2xl capitalize Poppins my-10 font-bold">
        Placement Partners
      </div>
      <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-6 gap-6 my-2">
        {imgLink.map((item, i) => {
          return (
            <div key={i}>
              <div className="w-24 h-10 p-2">
                <Link href={item.path} target="_blank">
                  <Image
                    src={item.image}
                    alt="image"
                    className="cursor-pointer"
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default PlacementPartners;
=======
import Image from "next/image";
import imgLink from "../../../Navigation/Navitem/placementpartners";
import Link from "next/link";
import { useState } from "react";
const PlacementPartners = () => {
  // const Placement =[
  //   {
  //     image : ImageFirst
  //   },
  //   {
  //     image : Image1
  //   },
  //   {
  //     image : Image2
  //   },
  //   {
  //     image : Image3
  //   },
  //   {
  //     image : Image4
  //   },
  //   {
  //     image : Image5
  //   },
  // ]
  // const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [isVisible,setIsVisible] = useState(false)
  return (
    <div className=" px-2 md:px-4 lg:px-20 xxl:px-32 mt-10 flex flex-col items-center ">
      <div className="w-max my-10 ">
        <h1 className="text-[#a0047d] text-lg xl:text-xl xxl:text-2xl capitalize Poppins font-bold">
        Placement Partners
        </h1>
      </div>
      <div className={`${isVisible ? "h-fit " : "sm:h-24 md:h-32 lg:h-36 xl:h-48 overflow-hidden " } w-10/12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xxl:grid-cols-6 xl:gap-6 sm:gap-3 gap-2 my-2 `}>
        {imgLink.map((item, i) => {
          return (
            <div
                className="mx-auto w-[60%] h-24 sm:w-2/4 sm:h-24 md:w-[65%] md:h-32 lg:w-[80%] lg:h-36 xl:w-full xl:h-48 "
                key={i}
              >
                <Image
                  src={item.image}
                  layout="responsive"
                  // objectfit="cover"
                  // objectPosition={"center"}
                  quality={100}
                  alt="Loading ..."
                  className="w-full h-full object-cover object-center"
                />{" "}
              </div>
            // <div key={i}>
            //   <div className="w-full h-48 bg-black" 
            //   style={{
            //     backgroundImage: `url(${item.image})`,
            //     backgroundSize: "cover",
            //     backgroundPosition: "center",
            //     backgroundRepeat: "no-repeat"
            //   }}
            //   >
            //     {/* <Link href={item.path} target="_blank">
            //       <Image
            //         src={item.image}
            //         width={100}
            //         height={100}
            //         layout="responsive"
            //         alt="image"
            //         className="cursor-pointer object-cover object-center"
            //       />
            //     </Link> */}
            //   </div>
            // </div>
          );
        })}
      </div>
      <button 
      onClick={()=>setIsVisible(!isVisible)}
      className="hidden sm:block md:block lg:block xl:block text-base font-medium">
        <span>
        Show more
        </span>

      </button>
    </div>
  );
};
export default PlacementPartners;
>>>>>>> a909855a8a48935018c4a4bc572233757ac96f4d
