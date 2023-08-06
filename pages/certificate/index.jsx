// import axios from "../../UI/Axios/Axios";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import image1 from "../../components/Resources/japan.jpg";
import Router from "next/router";
import CertificateCard from "../../components/PageComponent/CertificateCard";
import TopBar1 from "../../components/Navigation/TopBar/TopBar1";
import TopBar from "../../components/Navigation/TopBar/TopBar";

function Certificate() {
  const [OurCertificateCard, setOurCertificateCard] = useState([
    {
      image: image1,
      name: "certificate of achivements",
      from: "Hub-It Institute",
      date: "20 aug,2022",
    },
    {
      image: image1,
      name: "certificate of achivements",
      from: "Hub-It Institute",
      date: "20 aug,2022",
    },
    {
      image: image1,
      name: "certificate of achivements",
      from: "Hub-It Institute",
      date: "20 aug,2022",
    },
    {
      image: image1,
      name: "certificate of achivements",
      from: "Hub-It Institute",
      date: "20 aug,2022",
    },
  ]);
  //   const getAchivementsData = () => {
  //     axios
  //       .get(`/Achivements`)
  //       .then((res) => {
  //         console.log(res);
  //         setOurAchivementsCard(res.data.result);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  //   useEffect(() => {
  //     getAchivementsData();
  //   }, []);
  //   const RedirectToAllAchievements = () => {
  //     Router.push({
  //       pathname: `/viewAllCertificate`,
  //     });
  //   };
  return (
    <div className="">
      {" "}
      <TopBar />
      <div className=" px-12 lg:px-20 bg-white pt-10">
        <div className="md:flex lg:flex xl:flex xxl:flex justify-between items-center ">
          <div className="text-2xl  text-main Poppins font-bold capitalize text-mainColor">
            our Certified students
          </div>
          {/* <div className="flex gap-5 mt-5 md:mt-0 lg:mt-0 xl:mt-0 xxl:mt-0 md:px-11 lg:px-11 xl:px-11 xxl:px-11">
            <div
              className=" p-1.5  flex items-center justify-center  bg-main w-fit rounded-full hover:cursor-pointer"
              // onClick={() => prev()}
            >
              <FaChevronLeft className="w-3 h-3  text-white" />
            </div>
            <div
              // onClick={() => next()}
              className=" p-1.5  flex items-center justify-center  bg-main w-fit rounded-full text-white  hover:cursor-pointer"
            >
              <FaChevronRight className="w-3 h-3  text-white" />
            </div>
          </div> */}
        </div>
        {OurCertificateCard.length > 0 ? (
          <div
            className={`grid grid-cols-1 gap-y-8  md:grid-cols-2 xl:grid-cols-4 xxl:grid-cols-4 md:gap-y-8
       lg:gap-y-8 xl:gap-y-0 xxl:gap-y-0 lg:grid-cols-4 pt-11  ${
         OurCertificateCard?.length > 4
           ? "  overflow-hidden  h-[890px] md:h-[840px]  "
           : " h-fit "
       }  `}
          >
            {OurCertificateCard.map((val, i) => {
              return (
                <div
                  key={i}
                  className="hover:shadow-xl hover:shadow-gray-400 my-3  transition-all ease-in-out delay-75 duration-200 w-fit mx-auto"
                >
                  <CertificateCard
                    image={val.image}
                    name={val.name}
                    from={val.from}
                    date={val.date}
                    title={val.title}
                    overview={val.overview}
                    references={val.references}
                    requirements={val.requirements}
                    id={i}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-gray-500 text-2xl flex justify-center items-center h-60 ">
            No data found
          </div>
        )}
        <div className="flex justify-center mt-5">
          <button
            onClick={() => RedirectToAllAchievements()}
            className="px-4 py-2 bg-mainColor text-white hover:bg-opacity-75 rounded-md
        hover:scale-[1.05] transition-all ease-in-out duration-300 delay-75 capitalize "
          >
            view more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
