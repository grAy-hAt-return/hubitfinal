import React from "react";

import SideIconBox from "./SideIconBox";
import Form from "./Form";
const Body = () => {

  return (
    <>
      <div className=" px-5 py-24 mx-auto flex xs:flex-col sm:flex-col md:flex-col  gap-36 md:gap-24 items-center">
        <SideIconBox />
        <Form />
      </div>
    </>
  );
};

export default Body;
