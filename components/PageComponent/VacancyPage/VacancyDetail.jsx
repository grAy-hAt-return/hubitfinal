import React from "react";
import Head from "next/head";
import Link from "next/link";
import VacancyDetailPageBanner from "./VacancyDetailPageBanner";
const VacancyDetail = () => {
  return (
    <>
      <style jsx>
        {`
          .link-underline {
            border-bottom-width: 0;
            background-image: linear-gradient(transparent, transparent),
              linear-gradient(#fff, #fff);
            background-size: 0 3px;
            background-position: 0 100%;
            background-repeat: no-repeat;
            transition: background-size 1s ease-in-out;
          }
          .link-underline-skills {
            border-bottom-width: 0;
            background-image: linear-gradient(transparent, transparent),
              linear-gradient(#fff, #fff);
            background-size: 0 3px;
            background-position: 0 100%;
            background-repeat: no-repeat;
            transition: background-size 1s ease-in-out;
          }
          .link-underline-black {
            background-image: linear-gradient(transparent, transparent),
              linear-gradient(#a0047d, #a0047d);
          }

          .link-underline:hover {
            background-size: 18% 3px;
            background-position: 0 100%;
          }
          .link-underline-skills:hover {
            background-size: 6% 3px;
            background-position: 0 100%;
          }
        `}
      </style>
      <Head>
        <title>VacancyDetail</title>
      </Head>
      <VacancyDetailPageBanner />
      <section className=" ">
        <div className="flex gap-96 items-center mx-20 my-20 relative xs:flex-col sm:flex-col  xs:gap-3 sm:gap-3">
          <div className="flex flex-col">
            <h1 className="font-bold text-main text-4xl">Backend Developer</h1>
            <div className="flex gap-3 text-[#454545]">
              <p>Apply Before:</p>
              <p>
                20<sup>th</sup>April 2020
              </p>
            </div>
          </div>
          <div className=" sm:mt-14 xs:mt-14 ">
            <Link href="#">
              <a className="inline-flex absolute right-0 bottom-2 items-center justify-center w-36 h-10 text-base font-bold leading-6 text-white bg-main border border-transparent rounded-full hover:bg-hoverMain focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                Apply Now{" "}
              </a>
            </Link>
          </div>
        </div>
      </section>
      <hr />
      <div className="flex flex-col gap-10 text-xl font-semibold mx-20   pb-10 ">
        <p className="link link-underline link-underline-black cursor-pointer hover:text-main">
          About the job
        </p>
        <p className="link link-underline link-underline-black cursor-pointer hover:text-main">
          Responsibilites
        </p>
        <p className="link link-underline link-underline-black cursor-pointer hover:text-main">
          Required Qualification
        </p>
        <p className="link link-underline-skills link-underline-black cursor-pointer hover:text-main">
          Skills
        </p>
      </div>
    </>
  );
};

export default VacancyDetail;
