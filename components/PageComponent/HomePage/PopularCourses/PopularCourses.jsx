import React, { useState, useEffect, useRef } from "react";
import { GiGraduateCap } from "react-icons/gi";
import Image from "next/image";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/router";
import axios from "../../../UI/Axios/Axios";
function PopularCourses({ card, value }) {
  const router = useRouter();
  console.log(router);
  const [course, setCourse] = useState([]);
  const [category, setCategory] = useState([]);

  const getCourse = () => {
    try {
      axios
        .get("/course")
        .then((res) => {
          console.log(res);
          setCourse(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  //get category
  const getCategory = () => {
    try {
      axios
        .get("/category")
        .then((res) => {
          console.log(res);
          console.log(res.data.data, "bnsbnffskj");
          setCategory(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCourse();
    getCategory();
  }, []);

  let courseName = [];
  {
    course.map((val, i) => {
      courseName.push({
        id: val.id,
        course_name: val.course_name,
        // category_name: val.category_name,
      });
      return <div key={i}>{val.course_name}</div>;
    });
  }
  console.log(courseName);
  let categoryName = [];
  {
    category.map((val, i) => {
      categoryName.push({
        id: val._id,
        category_name: val.category_name,
      });
      return <div key={i}>{val.category_name}</div>;
    });
  }
  console.log(categoryName);
  const options = [
    {
      id: "0",
      course_name: "choose any course name",
      apikey: "course_names",
    },
    {
      id: "1",
      category_name: "choose course category",
      apikey: "course_categories",
    },
    ...courseName,
    ...categoryName,
  ];

  const option = [
    {
      id: "0",
      category_name: "choose course category",
      apikey: "course_categories",
    },

    ...categoryName,
  ];

  const color = (c) => {
    switch (c) {
      case "programming":
        return "text-blue-500";
      case "account & finance":
        return "text-green-600";
      case "Basic Computer":
        return "text-[#a0047d]";
      case "Graphic Designing":
        return "text-orange-500";
      case "default":
        return "text-black";
    }
  };

  // for multiplesearchfilter
  const handleFilter = (e) => {
    return e.filter((option) => {
      return (
        option.course_name.toLowerCase().includes(e.target.value.toLowerCase()),
        option.category_name
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      );
    });
  };

  const [slide, setSlide] = useState(false);
  let currentPageRef = useRef(0);

  const [counter, setCounter] = useState(1);
  const [pagination, setPagination] = useState(
    value === "onlyTag"
      ? {
          // start: 0,
          end: 4,
        }
      : {
          // start: 0,
          end: 8,
          pageCount: [],
        }
  );

  // logic starts for slicing card for dynamic numbers
  let EndValue = counter * pagination.end;
  let StartValue = EndValue - pagination.end;
  // perPageChange
  let PageChange = Math.ceil(card.length / pagination.end);
  // setCounter ko increment and decrement login implementation

  const prev = () => {
    // console.log(StartValue, EndValue, counter, card);
    let counterDecrement = counter > 1 ? counter - 1 : PageChange;
    setCounter(counterDecrement);
    value === "onlyTag"
      ? (currentPageRef.current.style.animation = "prevPage 1s forwards")
      : "";
  };
  const next = () => {
    // console.log(StartValue, EndValue, counter, card.length);
    let counterIncrement = counter < PageChange ? counter + 1 : 1;
    setCounter(counterIncrement);
    value === "onlyTag"
      ? (currentPageRef.current.style.animation = "nextPage 1s forwards")
      : "";
  };

  const HandleMultipleLoopPerClick = () => {
    for (let i = 1; i <= PageChange; i++) {
      pagination.pageCount.push(i);
    }
  };
  const handleClick = (val) => {
    setCounter(val);
  };

  useEffect(() => {
    let interval = setTimeout(() => {
      if (value === "onlyTag") {
        currentPageRef.current.style.animation = "nextpage .5s forwards";
        next();
      }
    }, 3000);
    return () => clearTimeout(interval);
  });

  return (
    <div className="overflow-hidden">
      <div
        className={`flex flex-col justify-between ${
          value === "onlyTag"
            ? "px-4 md:px-8 lg:px-12 xl:px-14 xxl:px-16"
            : "p-0"
        } `}
      >
        {value === "onlyTag" ? (
          <div className=" flex flex-col justify-between items-center">
            {" "}
            <div className="bg-main rounded-full mt-10 p-1">
              <GiGraduateCap className="text-2xl xl:text-3xl xxl:text-4xl text-white" />
            </div>
            <div className="text-lg xl:text-xl xxl:text-2xl my-1 capitalize Poppins font-bold">
              our popular courses
            </div>
            <div className="capitalize Poppins  bg-gray-100 font-semibold px-4 py-1.5 mt-2  rounded-full text-[8px] xl:text-[10px] xxl:text-xs  text-gray-800 cursor-pointer">
              explore more courses
            </div>
          </div>
        ) : value === "courses" ? (
          ""
        ) : (
          ""
        )}
        {value === "onlyTag" ? (
          <div className="flex px-5 justify-center  gap-2  ">
            <div>
              <FaChevronLeft
                onClick={() => {
                  prev();
                }}
                color="white"
                className="w-5 h-5 md:h-6 md:w-6 xxl:h-6 xxl:w-6  p-1.5 flex items-center justify-center
                  bg-main rounded-full mr-2 hover:cursor-pointer"
              />
            </div>
            <div>
              <FaChevronRight
                onClick={() => {
                  next();
                }}
                color="white"
                className="w-5 h-5 md:h-6 md:w-6 xxl:h-6 xxl:w-6 p-1.5  flex items-center justify-center  bg-main rounded-full hover:cursor-pointer"
              />
            </div>
          </div>
        ) : (
          ""
        )}

        {value === "onlyTag" ? (
          <div
            onAnimationEnd={() => {
              if (currentPageRef.current) {
                currentPageRef.current.style.animation = "";
              }
            }}
            ref={currentPageRef}
            className={` pb-5 grid grid-cols-1 mt-8 md:mb-8   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
         xl:grid-cols-4 xxl:grid-cols-4 gap-5 w-[70%] sm:w-[80%] md:w-full lg:w-full xl:w-full mx-auto`}
          >
            {card?.slice(StartValue, EndValue)?.map((val, i) => {
              return (
                <Link
                  key={i}
                  href={{
                    pathname: `/OurCourses/${val._id}`,
                    // query: {
                    //   image: `https://hubitbackend.onrender.com/${val.image}`,
                    //   description: val.description,
                    // },
                  }}
                >
                  <div
                    className="shadow-lg h-[400px]  pb-4 w-full  
              overflow-hidden rounded-md shadow-gray-400 flex flex-col justify-centre  cursor-pointer"
                  >
                    <div 
                      className="h-60 relative"
                      // style={{
                      //   backgroundImage: `url(${val.image})`,
                      //   backgroundSize: "cover",
                      //   backgroundRepeat: "no-repeat",
                      // }}
                    >
                      <Image
                        src={`${val.image}`}
                        alt="image"
                        layout="fill"
                        className=""
                      />
                    </div>
                    <div className="flex flex-col h-2/6 pt-2">
                      <div className="px-2 Poppins capitalize h-max">
                        <div
                          className={`py-1 xs:py-2 ${color(
                            val.course_category
                          )} text-sm bg-main text-white w-fit px-4  rounded-sm 
                           xxl:text-sm  font-light`}
                        >
                          <p>{val.course_category}</p>
                        </div>
                        <div
                          className="font-semibold w-full
                         h-max line-clamp-2 text-xs xl:text-sm
                          xxl:text-base "
                        >
                          <h1 className="text-xl p-0 pt-1 m-0 font-semibold">
                            {" "}
                            {val.course_name}
                          </h1>
                        </div>
                        {/* <div className="line-clamp-2 pt-3  ">
                      {val.description}
                    </div> */}
                      </div>
                    </div>
                    <div className="ml-2 py-1 xs:py-2">
                          <span
                            className="text-gray-500 text-[12px]
                           xl:text-[11px] xxl:text-sm"
                          >
                            Duration :
                          </span>
                          <span
                            className="text-[12px] 
                           xxl:text-sm mx-1"
                          >
                            {val.duration} months
                          </span>
                      </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div
            className="grid grid-cols-1  md:mb-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3
       xl:grid-cols-3 xxl:grid-cols-3 gap-5 w-full"
          >
            {card?.slice(StartValue, EndValue).map((val, i) => {
              return (
                <Link
                  key={i}
                  href={{
                    pathname: `/OurCourses/${val._id}`,
                  }}
                >
                  <div
                    className="shadow-lg h-fit  pb-4 w-full  
              overflow-hidden rounded-md shadow-gray-400 flex flex-col justify-centre  cursor-pointer"
                  >
                    <div
                      className="h-60  bg-white relative"
                      style={{
                        backgroundImage: `url(${val.image})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      {/* <img src={val.image} alt={"images"}
                         className="h" /> */}
                    </div>
                    <div className="flex h-2/6 items-center pt-2">
                      <div className="px-2 Poppins capitalize h-max">
                        <div
                          className={`py-1 xs:py-2 ${color(
                            val.course_category
                          )} text-sm bg-main text-white w-fit px-4  rounded-sm 
                           xxl:text-sm  font-light`}
                        >
                          {val.course_category}
                        </div>
                        <div
                          className="font-semibold w-full
                         h-max line-clamp-2 text-xs xl:text-sm
                          xxl:text-base "
                        >
                          <h1
                            className="p-0 pt-1 m-0 font-semibold w-full
                         h-max line-clamp-1 text-xs xl:text-sm
                          xxl:text-base "
                          >
                            {" "}
                            {val.course_name}
                          </h1>
                        </div>
                        <div className="py-1 xs:py-2">
                          <span
                            className="text-gray-500 text-[12px]
                           xl:text-[11px] xxl:text-sm"
                          >
                            Duration :
                          </span>
                          <span
                            className="text-[12px] 
                           xxl:text-sm mx-1"
                          >
                            {val.duration} months
                          </span>
                        </div>
                        {/* <div className="line-clamp-2 pt-3  ">
                      {val.description}
                    </div> */}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
      {value === "courses" ? (
        <div className=" flex gap-3 px-16 my-8">
          {pagination.pageCount.length === 0 && HandleMultipleLoopPerClick()}
          <div
            className=" px-4 py-2  flex items-center justify-center  bg-gray-300  hover:cursor-pointer"
            onClick={() => prev()}
          >
            <FaChevronLeft className="w-5 h-5  text-white" />
          </div>
          <div className="flex gap-3">
            {pagination.pageCount.map((val, i) => {
              return (
                <div
                  onClick={() => handleClick(val)}
                  key={i}
                  className={` w-14  h-14 flex items-center hover:bg-main hover:text-white text-lg ${
                    counter === val ? "bg-main text-white" : " bg-gray-200 "
                  } justify-center   hover:cursor-pointer`}
                >
                  {val}
                </div>
              );
            })}
          </div>
          <div
            onClick={() => next()}
            className=" px-4  flex items-center justify-center  bg-gray-300 text-white  hover:cursor-pointer"
          >
            <FaChevronRight className="w-5 h-5  text-white" />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default PopularCourses;
