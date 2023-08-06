import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
// import ToolBar1 from "../../Navigation/Toolbar/ToolBar1";
function CertificateCard({
  image,
  name,
  from,
  date,
  id,
  title,
  overview,
  references,
  requirements,
}) {
  const router = useRouter();
  const RedirectToNextPage = () => {
    router.push({
      pathname: `viewCertificate/${id}`,
      // query: {
      //   overview: overview,
      //   requirements: requirements,
      //   references: references,
      //   title: title,
      //   image: image,
      // },
    });
  };

  return (
    <div
      onClick={() => RedirectToNextPage()}
      className=" 
    transition-all cursor-pointer duration-300 ease-linear  w-fit   
      pb-5 rounded-lg"
    >
      <div className="w-full  overflow-hidden bg-black  hover:bg-gradient-to-t from-[#ad079c] to-[#c7ce76] borderRadiusTop">
        <Image
          //   src={`https://cmsback.e-aribt.com/public/${image}`}
          src={image}
          height={200}
          width={300}
          alt="Loading ..."
          // layout="responsive"
          // objectFit="cover"
          placeholder="blur"
          blurDataURL={image}
          className="borderRadiusTop  opacity-80  h-60 object-cover  "
        />
      </div>
      <div className=" px-3 flex flex-col items-centr justify-center my-6  ">
        <div className="Poppins capitalize font-bold  text-main  text-[18px]">
          {name}
        </div>
        <div className=" capitalize text-gray-600  w-[275px] line-clamp-2 h-11 font-semibold text-[14px]">
          From: {from}
        </div>
        <div className="text-gray-500  line-clamp-1 font-medium capitalize text-[12px]">
          {date}
        </div>
      </div>
    </div>
  );
}

export default CertificateCard;
