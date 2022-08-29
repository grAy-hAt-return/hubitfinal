import React from "react";
import Banner from "../../components/PageComponent/VacancyPage/Banner";
import CurrentOpenings from "../../components/PageComponent/VacancyPage/CurrentOpenings";
import Layout from "../../HOC/Layout/Layout";
import Head from "next/head";
const index = () => {
  return (
    <>
      <Head>
        <title>Vacancy Hub-IT</title>
      </Head>
      <Layout>
        <div className="bg-bgCol Poppins">
          <Banner />
          <CurrentOpenings />
        </div>
      </Layout>
    </>
  );
};

export default index;
