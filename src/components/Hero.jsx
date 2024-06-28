import backdot from "../Images/image.png";
import featureImg from "../Images/featureimage.jpg";
import LightImg from "../Images/light.png";
import ScrollToTopButton from "./ScrollTop";
import whatsapp from "../Images/whatsapp.svg";
// import bgimg from '../Images/bgimg.webp'
import LightImg1 from "../Images/light.png";
import minstry from "../Images/minstry.webp";
import msme from "../Images/msme.svg";
import nsdc from "../Images/nsdc.webp";
import { useNavigate } from "react-router-dom";

import { FaAward, FaBriefcase, FaFolder } from "react-icons/fa";

function HeroSection() {
  const navigate = useNavigate();
  const login = (e) => {
    navigate("/Register");
  };

  return (
    <section className="relative  mt-[20px] overflow-hidden p-1">
      <img
        src={backdot}
        alt="backgroundDotImage"
        width="233"
        loading="lazy"
        height="167"
        className="absolute top-[21rem] right-[60px] rotate-180 hidden lg:block"
      />

      <div className="absolute w-full h-[80%] -z-10 bg-black" />
      <div className="relative w-11/12 max-w-[1280px] mx-auto pt-4 flex flex-col lg:flex-row items-center">
        <div className="w-full min-h-[520px] md:py-6">
          <div className="w-full text-white">
            <h1 className="font-mullish font-bold w-[90%] text-start  text-3xl ">
              Embrace curiosity, ignite knowledge, and unlock your limitless
              potential through learning with
              <span className="text-goldenrod"> The Interns</span>
            </h1>
            <h3 className="font-mullish mt-4 opacity-80">
              Become a top 1% professional in{" "}
              <span className="font-bold text-xl">Data Science , SQL</span> and{" "}
              <span className="text-xl font-bold">Excel</span>
            </h3>

            <div className="space-y-6 mt-8">
              <div className="flex gap-4">
                <div className="icon flex items-center">
                  <FaAward />
                </div>
                <p>
                  Learn Tableau, Power BI, SQL and become Top 1% expert in Data
                  Analytics.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="icon flex items-center">
                  <FaBriefcase />
                </div>
                <p>Curriculum designed and delivered by Industry experts.</p>
              </div>
              <div className="flex gap-4">
                <div className="icon flex items-center">
                  <FaFolder />
                </div>
                <p>
                  Build projects that contain detailed knowledge of your data.
                </p>
              </div>
            </div>

            <div className="space-x-4 ">
              <button
                onClick={login}
                className="bg-goldenrod w-full md:w-40 text-white py-[14px] px-[18px] mt-8 rounded-md font-mullish font-bold hover:bg-goldenrod transition-all duration-200 hover:scale-105"
              >
                Schedule a Call
              </button>
            </div>
          </div>
          <img
            src={LightImg}
            alt="backgroundLightImage"
            loading="lazy"
            className="absolute -bottom-[280px] -right-[100px] w-[200px] hidden rotate-180 lg:block md:hidden -z-10"
          />

          <img
            src={LightImg1}
            alt="backgroundLightImage"
            loading="lazy"
            className="absolute -bottom-[310px] -left-[100px] w-[200px] hidden rotate-270 lg:block md:hidden -z-10"
          />
          {/* Adjust the positioning */}
        </div>
        <div className="flex justify-end md:w-[50%] w-[90%]">
          <img
            src={featureImg}
            alt="img"
            className="md:block hidden rounded-xl md:-mt-14 lg:mt-0 -mt-8 w-full"
          />
        </div>
      </div>

      <div className="text-white py-10 px-4 rounded-xl text-center mt-12 border-2 border-white hover:shadow-gold shadow-lg mb-6 transition-all duration-200 bg-black max-w-[1080px] mx-auto">
        <div className="flex text-center justify-normal flex-col ">
          <h1 className="font-mullish text-center text-3xl leading-[1.2] font-extrabold md:block">
            Welcome to{" "}
            <span className="text-goldenrod text-3xl">The Interns</span> :
            Empowering Futures
          </h1>
          <p className="font-mullish space-x-2 mb-8 text-lg pt-4">
            The Interns, where we believe in nurturing the growth of students
            and shaping them into the leaders of tomorrow. At The Interns, we
            are committed to providing the best online courses that empower
            individuals with the skills and knowledge they need to excel in
            their careers.
          </p>
        </div>
      </div>

      <div className="text-white pt-14 p-2">
        <h1 className="text-center font-mullish font-bold text-3xl">
          Recognized By
        </h1>
        <div className="bg-white py-10 px-4 rounded-xl text-center mt-8 border-2 border-white hover:shadow-gold shadow-lg mb-6 transition-all duration-200 max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row justify-evenly items-center gap-8 lg:gap-1">
            <div className="relative">
              <img src={minstry} alt="ministryimg" style={{ height: "60px" }} />
              <div className="absolute top-0 right-[-5.5rem] h-full w-[2px] bg-goldenrod hidden xl:block"></div>
            </div>
            <div className="relative">
              <img src={msme} alt="msmeimg" style={{ height: "60px" }} />
              <div className="absolute top-0 right-[-6.5rem] h-full w-[2px] bg-goldenrod hidden xl:block"></div>
            </div>
            <div className="relative">
              <img src={nsdc} alt="nsdcimg" style={{ height: "60px" }} />
            </div>
          </div>
        </div>
      </div>

      <ScrollToTopButton />
      <a
        href="https://api.whatsapp.com/send/?phone=918376083977&text&type=phone_number&app_absent=0"
        rel="noreferrer"
        className="fixed md:bottom-[4rem] bottom-2 md:right-5
            right-3 rounded-xl shadow-3xl z-50"
        target="_blank"
      >
        <img
          src={whatsapp}
          alt="whatsappimg"
          style={{ height: "60px", width: "60px", borderRadius: "50%" }}
        />
      </a>
    </section>
  );
}

export default HeroSection;
