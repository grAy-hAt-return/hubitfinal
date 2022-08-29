import Image from "next/image";
import React from "react";
import StudentSuccessStories from "../../components/PageComponent/Placement/StudentSuccessStories";
import HeroSection from "../../components/PageComponent/Placement/HeroSection";
import Partners from "../../components/PageComponent/Placement/Partners";
import Layout from "../../HOC/Layout/Layout";
import Head from "next/head";
import PlaceMentWorkProcess from "../../components/PageComponent/Placement/PlaceMentWorkProcess";
import LastBannerOfJobs from "../../components/PageComponent/Placement/LastBannerOfJobs";
const placement = () => {
  return (
    <>
      <Head>
        <title>Placement-Hub IT</title>
      </Head>
      <Layout>
        <div className="bg-bgCol Poppins">
          <HeroSection />
          <PlaceMentWorkProcess />
          <Partners />
          <StudentSuccessStories />
          <LastBannerOfJobs />
        </div>
      </Layout>
    </>
  );
};

export default placement;
