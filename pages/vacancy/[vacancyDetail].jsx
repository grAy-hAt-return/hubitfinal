import React from "react";
import Details from "../../components/PageComponent/VacancyPage/VacancyDetail";
import Layout from "../../HOC/Layout/Layout";
const VacancyDetail = () => {
  return (
    <>
      <Layout>
        <div className=" Poppins bg-bgCol">
          {" "}
          <Details />
        </div>
      </Layout>
    </>
  );
};

export default VacancyDetail;
