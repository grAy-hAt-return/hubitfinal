import React from "react";
import MidSectionNav from "./MidSectionNav";
import NoticeList from "./NoticeList";
import Pagination from "./Pagination";

const MidSection = () => {
  return (
    <>
      <MidSectionNav />
      <NoticeList />
      <Pagination />
    </>
  );
};

export default MidSection;
