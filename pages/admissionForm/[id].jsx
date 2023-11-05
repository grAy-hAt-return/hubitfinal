import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState, useEffect } from "react";
import Layout from "../../HOC/Layout/Layout";
import Image from "next/image";
import bg from "../../public/images/Rectangle 35.png";
import * as Yup from "yup";

import {FaCrown, FaUserTie} from "react-icons/fa"
import {GiNetworkBars} from "react-icons/gi"
import {GrFormNextLink,GrFormPreviousLink} from "react-icons/gr"



// import { BiVial } from "react-icons/bi";
// import RulesAndRegulations from "../../components/PageComponent/RulesAndRegulations/RulesAndRegulations";
//import NameOfCourseToEnroll from "../../components/PageComponent/NameOfCourseToEnroll/NameOfCourseToEnroll";
import axios from "../../components/UI/Axios/Axios";
import Paymentmethods from "./paymentmethods";
function AdmissionForm() {
  const [first, setFirst] = useState("");
  const [course, setCourse] = useState([]);
  const [clickedCheckBox, setClickedCheckBox] = useState(false);
  const getCourse = () => {
    try {
      axios
        .get(`/course`)
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
  useEffect(() => {
    getCourse();
  }, []);
  let courseName = [];
  {
    course.map((val, i) => {
      courseName.push({ id: val.id, course_name: val.course_name });
      return <div key={i}>{val.course_name}</div>;
    });
  }

  const admissionForm = [
    {
      label: "full name:",
      name: "name",
      type: "text",
      apikey: "full_name",
      placeholder: " Enter your full name",
    },
    {
      label: "address:",
      name: "address",
      type: "text",
      apikey: "address",
      placeholder: " Address",
    },

    {
      label: "date of birth:",
      name: "dateOfBirth",
      type: "date",
      apikey: "dob",
    },
    {
      label: "email:",
      name: "email",
      type: "email",
      apikey: "email",
      placeholder: "Email ",
    },

    {
      label: "phone no:",
      name: "phone",
      type: "text",
      apikey: "phone_no",
      placeholder: "E.g:9878765432 ",
    },
    {
      label: "gender:",
      name: "gender",
      apikey: "gender",
      as: "select",
      genderOptions: [],
    },
    {
      label: "level of education:",
      apikey: "level_of_education",
      as: "radio",
      Gender: [
        {
          label: "slc",
          type: "radio",
          apikey: "level_of_education",
          value: "slc",
        },
        {
          label: "+2",
          type: "radio",
          apikey: "level_of_education",
          value: "+2",
        },
        {
          label: "bachelor",
          type: "radio",
          apikey: "level_of_education",
          value: "bachelor",
        },
        {
          label: "master",
          type: "radio",
          apikey: "level_of_education",
          value: "master",
        },
      ],
    },
    {
      grid: [
        {
          label: "guardians_name:",
          name: "guardianName",
          type: "text",
          apikey: "guardians_name",
          placeholder: "Enter your guardian name ",
        },

        {
          label: "guardian_number:",
          name: "guardianNumber",
          type: "text",
          apikey: "guardians_phone_no",
          placeholder: "Enter your guardian number ",
        },
        {
          label: " name of school/college:",
          name: "collegeOrSchoolName",
          type: "text",
          apikey: "school_or_clg_name",
          placeholder: "School/college name ",
        },
      ],
    },
  ];

  const genderOptions = [
    {
      value: "select your gender",
    },
    {
      value: "male",
    },
    {
      value: "female",
    },
    {
      value: "other",
    },
  ];

  const SelectData = [
    {
      as: "select",
      apikey: "course_names",
      options: [
        {
          id: "0",
          course_name: "choose any course name",
          //   apikey: "course_names",
        },
        ...courseName,
      ],
    },

    {
      label: "shift(Time):",
      apikey: "shifts",
      Shift: [
        {
          label: "Morning",
          type: "radio",
          apikey: "shifts",
          value: "morning",
        },
        {
          label: "Mid Day",
          type: "radio",
          apikey: "shifts",
          value: "midday",
        },
        {
          label: "Day",
          type: "radio",
          apikey: "shifts",
          value: "day",
        },
      ],
    },
  ];

  const FormImage = [
    {
      type: "file",
      apikey: "image",
      //   placeholder: "image ",
    },
  ];
  // append code
  const postFormData = (e) => {
    try {
    } catch (error) {}
  };
  // const handleChange = (e) => {
  //   console.log(e.target.files);
  // };

  const AdmissionFormSchema = Yup.object().shape({
    full_name: Yup.string()
      .min(2, "Too Short!")
      .max(25, "Too Long!")
      .matches(
        /^[a-zA-Z0-9\s]*$/,
        "Username can only contain letters, numbers, and whitespace"
      )
      .required("Required"),
    address: Yup.string().required("Required"),
    dob: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    guardians_name: Yup.string().required("Required"),
    guardians_phone_no: Yup.string().required("Required"),
    phone_no: Yup.string().required("Required"),
    // level_of_education: Yup.string().required("Required"),
    school_or_clg_name: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    course_names: Yup.string(),
    description: Yup.string(),
    // shifts: Yup.string().required("Required"),
    image: Yup.string().required("Required"),
  });
  const Submit = (e) => {
    //alert("sds");
    console.log(e, "e.target");
    try {
      const formData = new FormData();
      formData.append("full_name", e.full_name);
      formData.append("address", e.address);
      formData.append("file", e.image);
      formData.append("dob", e.dob);
      formData.append("email", e.email);
      formData.append("phone_number", e.phone_no);
      formData.append("gender", e.gender);
      formData.append("level_of_education", e.level_of_education);
      formData.append("guardians_name", e.guardians_name);
      formData.append("guardians_phone_number", e.guardians_phone_no);
      formData.append("course_names", e.course_names);
      formData.append("shifts", e.shifts);
      formData.append("school_or_clg_name", e.school_or_clg_name);
      axios
        .post("/onlineform/files", formData)
        .then((res) => {
          if (res.status === 200) {
            //   toast.success("Form added successfullty");
            alert("Form added successfullty");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {}
  };
  const visibleInfo=[
    {h1:"Full Name"},
    {h1:"Email"},
    {h1:"Phone Number"},
    {h1:"Academic Level"},
    {h1:"Selected Option"},
    {h1:"Payment Option"},
    {h1:"Amount"},
    {h1:"Remarks"},
  ]
  const headings=[
    {h1:"become a professional",
     icon:<FaUserTie/> ,
     color:"text-professional" 
    },
    {h1:"master your skills",
     icon:<FaCrown/>  ,
     color:"text-crown" 
    },
    {h1:"Learn from developers",
     icon:<GiNetworkBars/> ,
     color:"text-level"  
    },
  ]
  return (
    <Layout>
      <div className='w-full h-52 md:h-56 lg:h-60 xl:h-64' 
        style={{
            backgroundImage:`url("https://images.unsplash.com/photo-1487611459768-bd414656ea10?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top',
            backgroundSize:'cover'
        }} >
          <div className='relative w-full h-full flex flex-col items-center bg-purple bg-opacity-20 '>
            <div className='w-11/12 mx-auto'>
                <h1 className='xl:text-3xl lg:text-2xl md:text-xl text-xl font-bold tracking-wide text-zinc-50 lg:mb-8 md:mb-6 sm:mb-4 mb-3 capitalize'>Student Admission form 
                </h1>
                <p className='w-[75ch] font-light text-zinc-50 md:text-sm text-xs lg:text-base xl:text-base'>
                  Enter your admission information below to admit for their interested IT Course at their comfort, we have made available the Online Admission Form below!                 
                </p>
                <p className="font-light text-zinc-50 md:text-sm text-xs lg:text-base xl:text-base mt-3">Home/Admission Form</p>
                <button className="my-3 px-[3%] py-[0.8%] rounded-3xl bg-boxyellwo text-neutral-800 text-sm font-medium"> 
                  View Form
                </button>
            </div>
            <div className="absolute bottom-2 right-2 flex h-fit w-fit">
              {headings.map((val,i)=>{
                return <div key={i} className="flex items-end mx-2">
                  <div className={`${val.color} h-fit mx-1 text-lg md:text-xl lg:text-xl xl:text-2xl mb-0 pb-0`}>
                    {val.icon}
                  </div>
                  <h1 className="md:text-sm text-xs capitalize my-0 font-light text-white">
                    {val.h1}
                  </h1>
                </div>
              })}
            </div>
          </div>
      </div>
      <div className="px-2">
        <div className="  rounded-t-2xl">
          <div className="flex flex-col w-full justify-center items-center pb-5 pt-16 gap-2">
            <div className=" w-full   Poppins  text-center uppercase text-xl  text-black font-medium">
              {" "}
              student enrollment registration form:
            </div>
            {/* <div className="text-xs Poppins capitalize ">
              <p>
                Fill out the form carefully for registration. All Asterisks (*)
                fields are mandatory to fill-up.
              </p>
            </div> */}
            <div className="flex bg-[#EEEAEA] py-2 px-4 rounded-lg text-xs gap-8 mt-5 Poppins">
              <button>Personel Information</button>
              <button>Payment Option</button>
              <button>Review Details</button>
            </div>
          </div>
          <div className="ml-8 md:ml-24 lg:ml-20 xl:ml-48 mt-10">
            <p className="text-purple text-sm md:text-base lg:text-lg xl:text-lg font-medium">
              Personel Information
            </p>
          </div>
          <Formik
            initialValues={{
              name: "",
              address: "",
              phone_no: "",
              dob: "",
              guardians_name: "",
              guardians_phone_no: "",
              email: "",
              gender: "",
              level_of_education: "",
              school_or_clg_name: "",
              image: "",
              shifts: "",
              course_names: "",
              description: "",
            }}
            validationSchema={AdmissionFormSchema}
            onSubmit={(values, { resetForm }) => {
              // console.log(values);
              //   alert(5);
              Submit(values);
              resetForm();
              postFormData(values);
            }}
          >
            {({ errors, touched, handleSubmit, values, setFieldValue }) => (
              <div>
                <Form onSubmit={handleSubmit}>
                  <div className="flex flex-col  px-7 mb-16">
                    <div className={`  flex justify-center  `}>
                      {FormImage.map((val, i) => {
                        let AllImage = val.apikey;
                        return (
                          <div key={i}>
                            <div className=" capitalize font-semibold text-lg text-gray-700">
                              <label
                                className="cursor-pointer "
                                htmlFor={val.apikey}
                              >
                                {val.label}
                              </label>
                            </div>
                            <div className="w-44 md:w-48 lg:w-52 xl:w-56 ">
                              <label
                                htmlFor={val.apikey}
                                className={`cursor-pointer`}
                              >
                                <Image
                                  objectFit="cover"
                                  objectPosition={"top"}
                                  src={
                                    values[val.apikey]
                                      ? URL.createObjectURL(values[AllImage])
                                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSeH9llEv5AAEqHYkOwwIjcJa0VFPVERRUuw&usqp=CAU"
                                  }
                                  alt="Loading ..."
                                  layout="responsive"
                                  height={150}
                                  width={150}
                                  className="m-auto h-60 laptop:h-80 rounded-lg "
                                  //onChange={handleChange}
                                />
                              </label>
                            </div>
                            <div className="flex justify-center">
                              {" "}
                              <label
                                htmlFor={val.apikey}
                                className="text-sm md:text-base lg:text-base xl:text-base capitalize cursor-pointer border-none outline-none text-black font-medium "
                              >
                                choose your profile
                              </label>
                            </div>
                            <div className="hidden">
                              <input
                                name={val.apikey}
                                id={val.apikey}
                                type={val.type}
                                accept={val.accept}
                                onChange={(e) => {
                                  let file = e.target.files[0];
                                  console.log(file, AllImage);
                                  setFieldValue(AllImage, e.target.files[0]);
                                }}
                              />
                            </div>
                            <div
                              className={`${
                                errors[val.apikey] && touched[val.apikey]
                                  ? "bg-red-100 my-2"
                                  : ""
                              } text-red-400 py-1 px-2 text-xs rounded-lg text-center font-medium`}
                            >
                              {errors[val.apikey] && touched[val.apikey]
                                ? errors[val.apikey]
                                : ""}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 col-start-3 md:px-10 xl:px-40 mt-5">
                      {admissionForm.map((val, i) => {
                        if (val.as === "select") {
                          return (
                            <div>
                              <div
                                key={i}
                                className="flex col-span-5 flex-col  h-14  gap-3  "
                              >
                                <div className="  px-2  capitalize Poppins text-sm  w-fit flex  items-center">
                                  {val.label}
                                </div>
                                <div>
                                  <div>
                                    <div className=" flex   px-1 h-full items-center justify-center ">
                                      <Field
                                        as={val.as}
                                        value={val.value}
                                        name={val.apikey}
                                        className=" w-full bg-[#EEEAEA] rounded-lg     px-4 py-3  "
                                      >
                                        {genderOptions?.map((val, i) => {
                                          return (
                                            <option
                                              key={i}
                                              value={val.value}
                                              className="w-full p-2  bg-slate-200 text-slate-600"
                                            >
                                              {val?.value}
                                            </option>
                                          );
                                        })}
                                      </Field>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div
                                className={`text-red-400  ${
                                  errors[val.apikey] && touched[val.apikey]
                                    ? " my-5  bg-red-100"
                                    : ""
                                }  px-1 py-1 text-xs text-center rounded-lg font-medium`}
                              >
                                {errors[val.apikey] && touched[val.apikey]
                                  ? errors[val.apikey]
                                  : ""}
                              </div>
                            </div>
                          );
                        }

                        if (val.Gender) {
                          return (
                            <div>
                              <div className="flex col-span-5 flex-col  h-14  gap-3  ">
                                <div className="  px-2  capitalize Poppins text-sm  w-fit flex  items-center">
                                  {val.label}
                                </div>
                                <div className="flex  gap-5   ">
                                  {val.Gender.map((val, i) => {
                                    return (
                                      <div key={i} className=" ">
                                        <div className=" flex   px-1 h-full items-center justify-center ">
                                          <div className="w-full ">
                                            <Field
                                              type={val.type}
                                              value={val.value}
                                              name={val.apikey}
                                              className=" w-full  checked:bg-main   px-4 py-3  "
                                            />
                                          </div>
                                          <div className="w-fit ml-2 ">
                                            <div className="  capitalize w-fit Poppins text-sm text-gray-500 flex justify-center  items-center">
                                              <label>{val.label}</label>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                              <div
                                className={`text-red-400 ${
                                  errors[val.apikey] && touched[val.apikey]
                                    ? " bg-red-100 my-2"
                                    : ""
                                }  px-1.5 py-1 text-center rounded-lg text-xs font-medium`}
                              >
                                {errors[val.apikey] && touched[val.apikey]
                                  ? errors[val.apikey]
                                  : ""}
                              </div>
                            </div>
                          );
                        } else {
                          if (val.grid) {
                            return val.grid.map((val, i) => {
                              return (
                                <div key={i} className="b  w-full">
                                  <div className="flex flex-col gap-3  ">
                                    <div className="w-fit">
                                      <div className="  px-2 h-full capitalize text-sm Poppins w-fit flex  items-center">
                                        <label>{val.label}</label>
                                      </div>{" "}
                                    </div>
                                    <div className="w-full">
                                      <Field
                                        type={val.type}
                                        placeholder={val.placeholder}
                                        name={val.apikey}
                                        className=" w-full bg-[#EEEAEA] rounded-lg   px-4 py-3  "
                                      />
                                    </div>
                                  </div>
                                  <div
                                    className={`text-red-400  ${
                                      errors[val.apikey] && touched[val.apikey]
                                        ? " bg-red-100 my-2"
                                        : ""
                                    }  px-2 py-1 text-xs text-center rounded-lg font-medium`}
                                  >
                                    {errors[val.apikey] && touched[val.apikey]
                                      ? errors[val.apikey]
                                      : ""}
                                  </div>
                                </div>
                              );
                            });
                          } else {
                            return (
                              <>
                                <div key={i} className=" ">
                                  <div className="flex flex-col gap-3 ">
                                    <div className="w-fit">
                                      <div className="  px-2 h-full capitalize text-sm Poppins  w-fit flex  items-center">
                                        <label>{val.label}</label>
                                      </div>{" "}
                                    </div>
                                    <div className="w-full">
                                      <Field
                                        type={val.type}
                                        placeholder={val.placeholder}
                                        name={val.apikey}
                                        className=" w-full bg-[#EEEAEA] rounded-lg  px-4 py-3  "
                                      />
                                    </div>
                                  </div>
                                  <div
                                    className={`text-red-400  ${
                                      errors[val.apikey] && touched[val.apikey]
                                        ? " my-2  bg-red-100"
                                        : ""
                                    }  px-2 py-1 text-xs  text-center rounded-lg font-medium`}
                                  >
                                    {errors[val.apikey] && touched[val.apikey]
                                      ? errors[val.apikey]
                                      : ""}
                                  </div>
                                </div>
                              </>
                            );
                          }
                        }
                      })}

                      {/* for images or document */}
                    </div>
                    <div className="">
                      <div className=" mt-10 mb-7 px-40">
                        <div className="  ">
                          <div className="grid grid-cols-2 gap-6 justify-between  ">
                            {SelectData.map((val, i) => {
                              if (val.Shift) {
                                return (
                                  <div className="">
                                    <div className="">
                                      <div className="">{val.label}</div>
                                      <div className=" flex gap-4 items-center">
                                        {val.Shift.map((val, i) => {
                                          return (
                                            <div
                                              className="flex gap-2 "
                                              key={i}
                                            >
                                              <div className="capitalize text-sm Poppins text-gray-500">
                                                {val.label}
                                              </div>
                                              <Field
                                                type={val.type}
                                                value={val.value}
                                                name={val.apikey}
                                                className="w-4 bg-red-700"
                                              />
                                            </div>
                                          );
                                        })}
                                      </div>
                                    </div>

                                    <div
                                      className={`text-red-400  ${
                                        errors[val.apikey] &&
                                        touched[val.apikey]
                                          ? " my-2  bg-red-100"
                                          : ""
                                      }  px-1 py-1 text-xs font-medium`}
                                    >
                                      {errors[val.apikey] &&
                                      touched[val.apikey] ? (
                                        <div>{errors[val.apikey]}</div>
                                      ) : null}
                                    </div>
                                  </div>
                                );
                              } else {
                                return (
                                  <div className="">
                                    <Field
                                      as={"select"}
                                      name={val.apikey}
                                      className=" w-full bg-[#EEEAEA] Poppins text-sm  capitalize px-4 py-3
                                                     rounded-md outline-none border-none"
                                    >
                                      {val?.options?.map((val, i) => {
                                        console.log(val);

                                        return (
                                          <option key={i}>
                                            {val?.course_name}
                                          </option>
                                        );
                                      })}
                                    </Field>

                                    <div
                                      className={`text-red-400  ${
                                        errors[val.apikey] &&
                                        touched[val.apikey]
                                          ? " my-2  bg-red-100"
                                          : ""
                                      }  px-2 py-1 text-xs font-medium`}
                                    >
                                      {errors[val.apikey] &&
                                      touched[val.apikey] ? (
                                        <div>{errors[val.apikey]}</div>
                                      ) : null}
                                    </div>
                                  </div>
                                );
                              }
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Form>
              </div>
            )}
          </Formik>
          <div className="ml-8 md:ml-24 lg:ml-20 xl:ml-48  mt-10">
            <p className="text-purple text-sm md:text-base lg:text-lg xl:text-lg font-medium">
              Payment Option
            </p>
          </div>
          <Paymentmethods/>
          <div className="ml-8 md:ml-24 lg:ml-20 xl:ml-48  mt-10">
            <h1 className="text-purple text-sm md:text-base lg:text-lg xl:text-lg font-medium">
              Form Detail
            </h1>
          </div>
          <div className="ml-8 md:ml-24 lg:ml-20 xl:mx-52 my-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3">
              {visibleInfo.map((val,i)=>{
                return <div key={i} className="">
                  <h1 className="text-base md:text-lg lg:text-lg xl:text-lg mb-1 font-normal text-black">
                    {val.h1}
                  </h1>
                  <p className="pr-2 text-sm md:text-base lg:text-base xl:text-base text-[#706D6D]">safal</p>
                </div>
              })}
          </div>
          <div className="flex justify-between ">
            <div className=" items-center Poppins mb-5 px-44   text-gray-600 mt-5">
              <div className="flex gap-3 items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 "
                  onClick={() =>
                    setClickedCheckBox(!clickedCheckBox)
                  }
                />
                <div className="text-xs Poppins font-regular capitalize">
                  I agree to the
                  <button className="text-main capitalize mx-1">
                    {" "}
                    terms and conditions
                  </button>
                  of this company
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-[320px] h-10 mx-auto my-10">
            <button className=" w-36 bg-purple rounded-3xl flex justify-center items-center">
              <GrFormPreviousLink className="mr-2"/>
              <p>Previous</p>
            </button>
            <button className="w-36 bg-boxyellwo rounded-3xl flex justify-center items-center">
              <p>Next</p>
              <GrFormNextLink className="ml-2"/>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AdmissionForm;
