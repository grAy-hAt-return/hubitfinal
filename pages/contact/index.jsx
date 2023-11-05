import React from "react";
import Banner from "../../components/PageComponent/ContactPage/Banner";
import Body from "../../components/PageComponent/ContactPage/Body";
import Layout from "../../HOC/Layout/Layout";
import Head from "next/head"
import Map from "../../components/PageComponent/ContactPage/Map";
import Contact from "../../components/PageComponent/ContactPage/Contact";
const index = () => {
  return (
    <>
    <Head><title>Contact Us</title></Head>
      <Layout>
        <Banner />
        <Contact/>
        {/* <Body /> */}
      </Layout>
    </>
  );
};

export default index;
