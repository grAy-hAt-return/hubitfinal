import React from "react";
import TopSection from "../../components/PageComponent/CorporatePage/TopSection";
import Layout from "../../HOC/Layout/Layout";
import Head from "next/head";
import CorporateTrainingListGrid from "../../components/PageComponent/CorporatePage/CorporateTrainingListGrid";
const index = () => {
  return (
    <>
      <Head>
        <title>Corporate Training - Hub IT</title>
      </Head>
      <Layout>
        <div className="Poppins">
          <TopSection />
          <CorporateTrainingListGrid />{" "}
        </div>
      </Layout>
    </>
  );
};

export default index;
