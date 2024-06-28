import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { userVerify } from "../services/Apis";
import LeftBar from "./LeftBar";
import NavBar from "../components/NavBar/NavBar";

const RegisterOtp = () => {
  const location = useLocation();
  //const email = location.state && location.state.email;

  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();

    if (otp === "") {
      toast.error("Enter Your OTP");
    } else if (!/^[0-9]{6}$/i.test(otp)) {
      toast.error("Enter Valid OTP (6 digits)");
    } else {
      const data = {
        otp,
        email: location.state,
      };

      try {
        const response = await userVerify(data);
        if (response.status === 200) {
          localStorage.setItem("userdbtoken", response.data.userToken);
          toast.success(response.data.message);
          setTimeout(() => {
            //navigate("/dashboard");
            navigate("/");
          }, 5000);
        } else {
          toast.error(response.response.data.error);
          console.log(data);
        }
      } catch (error) {
        console.error("Error while verifying OTP:", error);
      }
    }
  };

  return (
    // <div className="w-[100%] h-[100%] text-white">

    <>
      <NavBar />
      <div className="md:flex md:p-5">
        <LeftBar />
        <div className=" md:w-[60vw] w-[100vw] h-[100vh] text-white relative md:h-[90vh] items-center">
          {/* // <div className="flex w-[60vw] bg-[#949eff]  h-screen relative left-[100%]  items-center"> */}
          <section className="flex justify-center h-[100%] shadow-black shadow-lg  rounded-tr-3xl rounded-br-3xl items-center w-full ">
            <div className="p-16 m-5 bg-[#16171c] text-white   rounded-2xl flex flex-col gap-5  ">
              <div className="text-center text-2xl">
                <h1>Please Enter Your OTP Here </h1>
              </div>
              <form>
                <div className="">
                  <label htmlFor="otp" className="p-2 hidden text-xl">
                    OTP
                  </label>
                  <input
                    type="text"
                    name="otp"
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter Your OTP"
                    className="sm:w-96 w-70 p-2 my-2 bg-[#16171c] rounded-md w-full border border-white outline-none"
                  />
                  <p className="text-gray-400 font-sans text-center text-xs">
                    *Please check your mail for entering the OTP
                  </p>
                </div>
                <button
                  className="p-2 mt-2 bg-[#5352ec] hover:bg-[#2a2a96] w-full rounded-md"
                  onClick={registerUser}
                >
                  Submit
                </button>
              </form>
            </div>
            <ToastContainer />
          </section>
        </div>
      </div>
    </>
  );
};

export default RegisterOtp;
