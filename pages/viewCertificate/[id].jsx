import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Logo from "../../components/Resources/japan.jpg";
import Image from "next/image";
import RightSideCertificateData from "../../components/PageComponent/RightSideCertificateData";
import LeftSideCertificateData from "../../components/PageComponent/LeftSideCertificateData";
import TopBar from "../../components/Navigation/TopBar/TopBar";
import Footer from "../../HOC/footer/footer";
function ViewAchivements() {
  const router = useRouter();
  const [ID, setID] = useState("");
  const [Data, setData] = useState([]);

  console.log(router);
  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
      setID(id);
    }
  }, [router.isReady, router.query]);
  //   const getSingleAchivementsData = () => {
  //     axios
  //       .get(`/Achivements/${ID}`)
  //       .then((res) => {
  //         console.log(res);
  //         setData(res.data.result);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  //   useEffect(() => {
  //     getSingleAchivementsData();
  //   }, []);
  console.log(Data);
  return (
    <div className="bg-[#EBF9FF]">
      {/* <TopHeading /> */}
      <TopBar />

      <div className="">
        <div className="h-64 bg-black bg-opacity-90 flex justify-center items-center">
          <Image
            // src={`https://cmsback.e-aribt.com/public/${Data[ID]?.image}`}
            src={Logo}
            alt="Loading"
            height={200}
            width={900}
            // className="w-[98.5%] h-60 object-cover "
            className=" h-60 object-cover opacity-80 "
          />
        </div>
      </div>

      <div className="px-8 my-12 grid grid-cols-12">
        <div className="col-span-8">
          <LeftSideCertificateData
            overview={Data[ID]?.overview}
            requirements={Data[ID]?.requirements}
            references={Data[ID]?.references}
            title={Data[ID]?.title}
          />
        </div>
        <div className="col-span-4">
          {" "}
          <RightSideCertificateData />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ViewAchivements;
