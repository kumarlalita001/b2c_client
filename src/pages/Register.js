import React, { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { registerfunction } from "../services/Apis";
import { sentOtpFunction } from "../services/Apis";
//import "../styles/mix.css";
import { countries } from "./CountryData";
import "./scrollbar.css";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import LeftBar from "./LeftBar";
import NavBar from "../components/NavBar/NavBar";
const Register = () => {
  const [bool, setBool] = useState(false);
  //const [bool, setBool] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [nameError, setNameError] = useState("");
  const [qualificationError, setQualificationError] = useState("");
  const [graduationError, setGraduationError] = useState("");
  const [courseError, setCourseError] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const navigate = useNavigate();
  const location = useLocation();

  const emailFromState = location.state && location.state.email;
  const email = useRef();
  const phoneNo = useRef();
  const userName = useRef();
  const qualification = useRef();
  const graduation = useRef();
  const course = useRef();

  // useEffect(() => {
  //   if (emailFromState) {
  //     email.current.value = emailFromState;
  //   }

  // }, [emailFromState]);

  const validateName = (name) => {
    if (!name.trim()) {
      setNameError("Name is required!");
      return false;
    }

    const re = /^[a-zA-Z\s]*$/;
    if (!re.test(name)) {
      setNameError("Please enter a valid name (only letters and spaces)!");
      return false;
    }
    setNameError("");
    return true;
  };

  const validateEmail = (email) => {
    if (!email.trim()) {
      setEmailError("Email is required!");
      return false;
    }

    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      setEmailError("Please enter a valid email address!");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePhone = (phone) => {
    if (!phone.trim()) {
      setPhoneError("Phone number is required!");
      return false;
    }

    const re = /^\+?[1-9]\d{1,10}$/;
    if (!re.test(phone)) {
      setPhoneError("Please enter a valid number!");
      return false;
    }
    setPhoneError("");
    return true;
  };

  const validateCourse = (course) => {
    if (!course.trim()) {
      setCourseError("Course is required!");
      return false;
    }

    setCourseError("");
    return true;
  };

  const validateQualification = (qualification) => {
    if (!qualification.trim()) {
      setQualificationError("Qualification is required!");
      return false;
    }

    setQualificationError("");
    return true;
  };

  const validateGraduation = (graduation) => {
    if (!graduation.trim()) {
      setGraduationError("Year of graduation is required!");
      return false;
    }

    setGraduationError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isNameValid = validateName(userName.current.value);
    const isEmailValid = validateEmail(email.current.value);
    const isPhoneValid = validatePhone(phoneNo.current.value);
    const isQualificationValid = validateQualification(
      qualification.current.value
    );
    const isGraduationValid = validateGraduation(graduation.current.value);
    const isCourseValid = validateCourse(course.current.value);

    if (
      !isNameValid ||
      !isEmailValid ||
      !isPhoneValid ||
      !isQualificationValid ||
      !isGraduationValid ||
      !isCourseValid
    ) {
      return;
    }

    const inputData = {
      fname: userName.current.value,
      email: email.current.value,
      dialCode: selectedCountryCode,
      phone: phoneNo.current.value,
      HighestQualification: qualification.current.value,
      course: course.current.value,
      Yog: graduation.current.value,
    };

    const response = await registerfunction(inputData);

    if (response.status === 200) {
      //setSubmitted (true);
      setBool(true);
      toast.success("Registration successful!");

      //navigate('/user/otp')
    } else {
      toast.error(response.response.data.error);
      //  console.log(response);
      //console.log(inputData);
    }
  };
  useEffect(() => {
    if (bool && !otpSent) {
      sendOtp();
      console.log(bool);
    }
  }, [bool, otpSent]);

  const sendOtp = async () => {
    try {
      const response1 = await sentOtpFunction({ email: email.current.value });
      if (response1.status === 200) {
        setOtpSent(true);
        navigate("/user/register", { state: email.current.value });
      } else {
        console.error("Error sending OTP:", response1.data.error);
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  // logic for phone after the 4 time otp bug fixed

  const [hide, setHide] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState({
    name: "India",
    code: "IN",
    phone: 91,
  });

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchQuery)
  );

  return (
    <>
      <NavBar />
      <div className=" md:flex md:p-5 bg-black w-full h-screen justify-center relative">
        <LeftBar />
        <div className=" md:w-[60vw] w-[100vw] h-[100vh] md:h-[90vh] rounded-tr-3xl rounded-br-3xl flex justify-center items-center">
          {" "}
          <div className="flex w-[100%] justify-center  bg-[#050507] h-[100%] shadow-white  items-center md:relative md:top-[-30px] rounded-tr-3xl rounded-br-3xl  ">
            <div className=" p-2 md:pl-10 md:pr-10 h-fit w-fit m-2 rounded-3xl bg-[#16171c] flex flex-col overflow-hidden relative items-center">
              <h2 className="font-lobster text-white mt-4 font-semibold text-xl ">
                Register
              </h2>
              <form
                onSubmit={handleSubmit}
                className="flex justify-center items-center flex-col mt-4"
              >
                <input
                  ref={userName}
                  type="text"
                  name="name"
                  id=""
                  placeholder="Enter Name*"
                  className={`sm:w-96 w-72 p-[5px] rounded-lg my-2 text-white border bg-[#16171c]  ${
                    nameError ? "border-red-500" : " border-white"
                  }`}
                  onChange={(e) => validateName(e.target.value)}
                />
                {nameError && (
                  <p className="text-red-500 self-start text-xs">{nameError}</p>
                )}

                <input
                  ref={email}
                  type="email"
                  name="email"
                  id=""
                  placeholder="Enter Email*"
                  className={`sm:w-96 w-72 p-[5px] placeholder:last:text-pink-400 text-white bg-[#16171c]  rounded-lg my-[2px] border ${
                    emailError ? "border-red-500" : "border-gray-300"
                  }`}
                  onChange={(e) => validateEmail(e.target.value)}
                />
                {emailError && (
                  <p className="text-red-500 self-start text-xs">
                    {emailError}
                  </p>
                )}

                <p className="text-gray-400 font-sans text-center   text-xs">
                  You'll receive an OTP on this email for verification.
                </p>

                <div className="select-box w-[100%] mx-auto mt-1 mb-1 border-1 border-black ">
                  <div
                    className={`sm:w-96 w-72 selected-option bg-gray-900 text-gray-400 rounded-md  overflow-hidden flex justify-between items-center m-auto border ${
                      phoneError ? "border-red-500" : " border-white"
                    } `}
                  >
                    <div
                      className="w-16 p-1 text-center cursor-pointer"
                      onClick={() => {
                        setHide((prev) => !prev);
                        handleCountrySelect(selectedCountry);
                      }}
                    >
                      <span
                        className={`iconify  mr-1`}
                        data-icon={`flag:${selectedCountry.code.toLowerCase()}-4x3`}
                      ></span>
                      <strong>+{selectedCountry.phone}</strong>
                    </div>
                    <input
                      type="tel"
                      ref={phoneNo}
                      className={`w-full  text-md p-[5px] outline-none bg-[#16171c] rounded-md  ${
                        phoneError ? "border-red-500" : ""
                      } `}
                      placeholder="Enter Phone Number*"
                      onChange={(e) => validatePhone(e.target.value)}
                    />
                  </div>
                  {phoneError && (
                    <p className="text-red-500 self-start text-xs">
                      {phoneError}
                    </p>
                  )}

                  {hide && (
                    <div className="options bg-[#16171c] rounded-b-md mt-2 absolute  mr-5 w-96">
                      <input
                        type="text"
                        className="search-box  bg-[#181e39] rounded-lg text-white  p-2 w-full outline-none"
                        placeholder="Search Country Name"
                        value={searchQuery}
                        onChange={handleSearch}
                      />
                      <ol className="max-h-80 overflow-y-auto bg-[#141723] text-gray-400 custom-scrollbar-lkm">
                        {filteredCountries.map((country) => (
                          <li
                            key={country.code}
                            className="p-3 flex justify-between items-center cursor-pointer hover:bg-blue-100 hover:text-black "
                            onClick={() => {
                              setHide(false);
                              setSearchQuery("");
                              handleCountrySelect(country);
                            }}
                          >
                            <div className="flex items-center">
                              <span
                                className={`iconify text-lg mr-2`}
                                data-icon={`flag:${country.code.toLowerCase()}-4x3`}
                              ></span>
                              <span className="country-name">
                                {country.name}
                              </span>
                            </div>
                            <strong>+{country.phone}</strong>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>

                <div className="text-black">
                  <select
                    ref={course}
                    placeholder=""
                    id=""
                    className={`sm:w-96 w-72 p-[5px] rounded-lg  bg-[#16171c] text-gray-400 my-2 border ${
                      courseError ? "border-red-500" : ""
                    } `}
                    onChange={(e) => validateCourse(e.target.value)}
                  >
                    <option
                      value=""
                      disabled
                      selected
                      className="text-white bg-[#16171c]"
                    >
                      Course*
                    </option>
                    <option value="Power Bi" className="text-white">
                      Power Bi
                    </option>
                    <option value="Tableau" className="text-white ">
                      Tableau
                    </option>
                    <option value="Basic SQL" className="text-white ">
                      Basic SQL
                    </option>
                    <option value="Advanced SQL" className="text-white ">
                      Advanced SQL
                    </option>
                    <option value="MS-Excel" className="text-white ">
                      MS-Excel
                    </option>
                    <option value="Google Sheets" className="text-white ">
                      Google Sheets
                    </option>
                  </select>
                  {courseError && (
                    <p className=" text-red-500 self-start text-xs">
                      {courseError}
                    </p>
                  )}
                </div>
                <div>
                  <select
                    ref={qualification}
                    name=""
                    id=""
                    className={`sm:w-96 w-72 p-[5px] rounded-lg  bg-[#16171c] text-gray-400 my-2 border ${
                      qualificationError ? "border-red-500" : ""
                    }`}
                    onChange={(e) => validateQualification(e.target.value)}
                  >
                    <option
                      value=""
                      disabled
                      selected
                      className="text-white  bg-gray-300"
                    >
                      Highest Qualification*
                    </option>
                    <option value="IT Graduate" className="text-white ">
                      IT Graduate
                    </option>
                    <option value="Pursuing Graduation" className="text-white ">
                      Pursuing Graduation
                    </option>
                    <option value="Non-IT Graduate" className="text-white ">
                      Non-IT Graduate
                    </option>
                  </select>
                  {qualificationError && (
                    <p className="text-red-500 self-start text-xs">
                      {qualificationError}
                    </p>
                  )}
                </div>

                <div>
                  <select
                    ref={graduation}
                    name=""
                    id=""
                    className={`sm:w-96 w-72 p-[5px]  bg-[#16171c] text-gray-400 rounded-lg my-2 border ${
                      graduationError ? "border-red-500" : ""
                    }`}
                    onChange={(e) => validateGraduation(e.target.value)}
                  >
                    <option
                      value=""
                      disabled
                      selected
                      className="text-black bg-gray-600"
                    >
                      Year of graduation*
                    </option>
                    <option value="After 2024" className="text-white">
                      After 2024
                    </option>
                    <option value="2024" className="text-white">
                      2024
                    </option>
                    <option value="2023" className="text-white">
                      2023
                    </option>
                    <option value="2022" className="text-white">
                      2022
                    </option>
                    <option value="2021" className="text-white">
                      2021
                    </option>
                    <option value="Before 2021" className="text-white">
                      Before 2021
                    </option>
                  </select>
                  {graduationError && (
                    <p className="text-red-500 self-start  text-xs">
                      {graduationError}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="sm:w-96 w-72 bg-[#5352ec]  py-[6px] rounded-lg hover:bg-[#2a2a96] mt-2"
                >
                  Register Now
                </button>
                <p className="text-white mt-4 mb-4">
                  Already have an account!{" "}
                  <NavLink to="/login">
                    <u>Login</u>
                  </NavLink>
                </p>
              </form>
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Register;
