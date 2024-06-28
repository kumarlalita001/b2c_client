import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { userVerify } from "../services/Apis";
import { sentOtpFunction } from "../services/Apis";
import LeftBar from "./LeftBar";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

const Otp = () => {
  const location = useLocation();

  //console.log(location.state);
  // // Sending OTP
  // const sendOtp = async () => {
  //   try {
  //     const response = await sentOtpFunction(email);
  //     if (response.status === 200) {
  //       console.log("OTP sent successfully");
  //     } else {
  //       console.log("Failed to send OTP",email);
  //     }
  //   } catch (error) {
  //     console.error("Error while sending OTP:", error);
  //   }
  // };

  // // Call the sendOtp function when the component mounts
  // useEffect(() => {
  //   sendOtp();
  // }, []); // Empty dependency array ensures this effect runs only once

  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();

    if (otp === "") {
      toast.error("Enter Your OTP");
    } else if (!/[^a-zA-Z]/.test(otp)) {
      toast.error("Enter Valid OTP");
    } else if (otp.length < 6) {
      toast.error("OTP Length should be minimum 6 digits");
    } else {
      const data = {
        otp: otp,
        email: location.state,
      };

      try {
        const response = await userVerify(data);
        console.log("i am here");
        if (response.status === 200) {
          localStorage.setItem("userdbtoken", response.data.userToken);
          toast.success(response.data.message);
          setTimeout(() => {
            //navigate("/dashboard");
            navigate("/");
          }, 5000);
        } else {
          toast.error(response.response.data.error);
          //console.log(response.response);
          //console.log(data);
        }
        // navigate("/dashboard");
      } catch (error) {
        console.error("Error while verifying OTP:", error);
      }
    }
  };

  return (
    // <div className="w-[100%] h-[100%] flex text-white">
    <>
      <NavBar />
      <div className="md:flex md:p-5 ">
        <LeftBar />
        <div className=" md:w-[60vw] w-[100vw] h-[100vh]  relative md:h-[90vh] bg-white items-center">
          <section className="flex justify-center bg-black  shadow-black shadow-lg items-center w-full h-full p-1">
            <div className="flex justify-center flex-col bg-[#16171c] items-center h-[50%] rounded-3xl p-16 overflow-hidden">
              <div className="text-center text-white w-80 text-2xl my-2">
                <h1>Please Enter Your OTP Here</h1>
              </div>
              <form className="">
                <div className="">
                  <label htmlFor="otp" className="p-2 hidden text-xl">
                    OTP
                  </label>
                  <input
                    type="text"
                    name="otp"
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter Your OTP"
                    className="sm:w-96 w-72 p-2 my-2 bg-[#16171c] text-white rounded-md border border-gray-600 outline-none"
                  />
                  <p className="text-gray-400 font-sans text-center   text-xs">
                    *Please check your mail for entering the OTP
                  </p>
                </div>
                <button
                  className="p-2 mt-2 text-white bg-[#5352ec] hover:bg-[#2a2a96] w-full rounded-md"
                  onClick={loginUser}
                >
                  Submit
                </button>
              </form>
            </div>
            <ToastContainer />
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Otp;
