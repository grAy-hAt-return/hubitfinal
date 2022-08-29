import React from "react";
import CorporateCards from "./CorporateCards";
import SideContactForm from "./SideContactForm";
const CorporateTrainingListGrid = () => {
  return (
    <>
      <h1 className="text-main mx-10  sm:mx-5">
        Our Latest Coroporate Trainings
      </h1>
      <div className="flex sm:flex-col xs:flex-col md:flex-col bg-[#FFFFF7] ">
        <CorporateCards />
        <SideContactForm />
      </div>
    </>
  );
};

export default CorporateTrainingListGrid;
