import React from "react";
const MidSectionNav = () => {
  return (
    <>
    
      <header className="text-gray-600">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900 cursor-pointer">All</a>
            <a className="mr-5 hover:text-gray-900 cursor-pointer">
              General<sup className="w-2 h-2 bg-gray-300 rounded px-[2px]">02</sup>
            </a>
            <a className="mr-5 hover:text-gray-900 cursor-pointer">
              Administrative
            </a>
            <a className="mr-5 hover:text-gray-900 cursor-pointer">
              classNames
            </a>
            <a className="mr-5 hover:text-gray-900 cursor-pointer">Places</a>
            <a className="mr-5 hover:text-gray-900 cursor-pointer">Training</a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default MidSectionNav;
