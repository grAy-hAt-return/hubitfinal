import React from "react";

const NavSections = () => {
  return (
    <>
      <div className="grid place-content-center">
        {" "}
        <h1 className="font-semibold text-4xl h-5 xs:text-xl px-2">
          What our customers are saying ?
        </h1>
      </div>
      <header className="text-gray-600 mb-4 text-2xl font-medium">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-main cursor-pointer">All</a>
            <a className="mr-5 hover:text-main cursor-pointer">Facebook </a>
            <a className="mr-5 hover:text-main cursor-pointer">Google</a>
            <a className="mr-5 hover:text-main cursor-pointer">Video Reviews</a>
          </nav>
        </div>
      </header>{" "}
    </>
  );
};

export default NavSections;
