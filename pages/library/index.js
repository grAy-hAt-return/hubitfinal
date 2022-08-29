import React from "react";
import Layout from "../../HOC/Layout/Layout";
import Body from "../../components/PageComponent/Library/Body";
import Banner from "../../components/PageComponent/Library/Banner";
const index = () => {
  return (
    <>
      <Layout>
        <div className="bg-bgCol">
          <Banner />
          <Body />
        </div>
      </Layout>
    </>
  );
};

export default index;
