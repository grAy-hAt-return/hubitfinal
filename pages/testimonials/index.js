import React from "react";
import Banner from "../../components/PageComponent/TestimonialsPage/Banner";
import Pagination from "../../components/PageComponent/TestimonialsPage/Pagination";
import Testimonials from "../../components/PageComponent/TestimonialsPage/Testimonials";
import Layout from "../../HOC/Layout/Layout";
import Head from "next/head";
import NavSections from "../../components/PageComponent/TestimonialsPage/NavSections";
const index = () => {
  return (
    <>
      <Head>
        <title>Testimonials</title>
      </Head>
      <Layout>
        <div className="Poppins bg-bgCol">
          <Banner />
          <NavSections />
          <Testimonials />
          <Pagination />
        </div>
      </Layout>
    </>
  );
};

export default index;
