import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LeftBar from "./LeftBar";
import { sentOtpFunction } from "../services/Apis";
import NavBar from "../components/NavBar/NavBar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const sendOtp = async (e) => {
    e.preventDefault();

    if (email === "") {
      toast.error("Enter Your Email !");
      return;
    }

    if (!email.includes("@")) {
      toast.error("Enter Valid Email !");
      return;
    }

    setIsLoading(true);
    const data = {
      email: email,
    };

    try {
      const response = await sentOtpFunction(data);

      if (response.status === 200) {
        setIsLoading(false);
        navigate("/user/otp", { state: email });
        // Display success message after successful login
        toast.success("Login Successful");
      } else {
        toast.error(response.data.error);
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("Please Register! Before Logging In.");
    }
  };

  return (
    <>
      <NavBar />
      <div className="md:flex md:p-5 bg-black w-full h-screen justify-center relative">
        <LeftBar />
        <div className="md:w-[60vw] w-[100vw] h-[100vh] md:h-[90vh] rounded-tr-3xl rounded-br-3xl flex justify-center items-center">
          {/* <section className="flex w-[100%] justify-center  bg-[#050507] h-[100%] shadow-white  items-center md:relative md:top-[-30px] rounded-tr-3xl rounded-br-3xl "> */}
          <div className="p-16 sm:pl-10 sm:pr-10 h-[fit] pr-4 pl-4 w-fit m-2 rounded-3xl bg-[#16171c] flex flex-col overflow-hidden relative items-center   ">
            <div className="font-lobster text-white md:m-0  font-semibold text-xl">
              <h2 className="md:text-3xl text-2xl text-center font-bold m-6">
                Welcome Back, Log In
              </h2>
              <p className="text-xl text-center mb-4">
                Hi, we are glad you are back.
              </p>
            </div>
            <form className="flex flex-col gap-5">
              <div className="form_input ">
                <label htmlFor="email" className="mb-5 hidden ">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="p-2 w-full  outline-none  bg-gray-900 text-white border border-white rounded-md "
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email Address"
                />
                <p className="text-gray-400 font-sans text-center m-1  text-xs">
                  You'll receive an OTP on this email for verification.
                </p>
              </div>
              <button
                className={`p-2 bg-[#5352ec] text-white hover:bg-[#2a2a96] rounded-md w-full ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={sendOtp}
                disabled={isLoading}
              >
                {isLoading ? "Logging in...Please Wait" : "Login"}
              </button>
              <p className="text-center text-white mb-2">
                {" "}
                Don't have an account! Please
                <NavLink to="/register">
                  <span className=" border-b-2 text-white border-purple-50">
                    {" "}
                    Register{" "}
                  </span>
                </NavLink>{" "}
              </p>
            </form>
          </div>
          <ToastContainer />
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Login;
