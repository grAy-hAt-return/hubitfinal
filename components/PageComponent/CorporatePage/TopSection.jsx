import React from "react";

const TopSection = () => {
  return (
    <>
      <div className="flex gap-60 ">
        <div className="flex flex-col  xs:w-full sm:w-full md:w-full lg:w-[60vh] xl:w-[60vh] xxl:w-[60vh] xxxl:w-[60vh]">
          <h1 className="text-main font-bold">What is Corporate Training?</h1>
          <p>
          Corporate training refers to the process of providing specialized education and development programs to employees within a company or organization. It is designed to enhance their skills, knowledge, and competencies, with the ultimate goal of improving individual and organizational performance. Corporate training programs can cover a wide range of topics and can be delivered through various methods such as workshops, seminars, online courses, mentoring, on-the-job training, and more.
          </p>
        </div>
        <div className="xs:hidden sm:hidden lg:w-[30vw] xl:w-[30vw] xxl:w-[30vw]">
          <image src="./image1.jpg" alt="loading" />
        </div>
      </div>
    </>
  );
};

export default TopSection;
