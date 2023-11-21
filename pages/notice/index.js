import React from "react";
import Banner from "../../components/PageComponent/NoticePage/Banner";
import MidSection from "../../components/PageComponent/NoticePage/MidSection";
import Layout from "../../HOC/Layout/Layout";
import NewMidsection from "../../components/PageComponent/NoticePage/NewMidsection";
const index = () => {
  return (
    <>
      <Layout>
        <Banner />
        {/* <MidSection /> */}
        <NewMidsection/>
      </Layout>
    </>
  );
};

export default index;
