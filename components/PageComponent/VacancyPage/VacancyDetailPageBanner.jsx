import React from "react";

const VacancyDetailPageBanner = () => {
  const image =
    "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=341&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29kZXx8fHx8fDE2NjE0NDY5NTg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1244";
  return (
    <>
      <div
        className=" Poppins relative xl:mx-20 xxl:mx-24 xs:mx-2 sm:mx-3 md:mx-4 lg:mx-10 rounded-b-xl  "
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "341px",
        }}
      >
        <div className="w-40 h-40 ">
          <img
            src="/circledHubitLogo.svg"
            className="absolute -bottom-11  left-6 bg-white rounded-[50%]  "
            alt="hello"
          />
        </div>
      </div>
    </>
  );
};

export default VacancyDetailPageBanner;
