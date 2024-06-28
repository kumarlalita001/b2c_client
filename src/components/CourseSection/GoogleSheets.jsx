import ScrollToTopButton from "../ScrollTop.jsx";
import whatsapp from "../../Images/whatsapp.svg";
import googlesheet from "../../Images/googlesheet.png";
import bg from "../../Images/bg.png";
import { ChevronRight } from "react-feather";
import Lab from "../../Images/gold.png";
import Resume from "../../Images/resume.png";
import Medal from "../../Images/medal.png";
import Laptop from "../../Images/laptop.png";
import Bag from "../../Images/briefcase.png";
import GoogleSheetsSkills from "./GoogleSheetsSkills.jsx";
import { FaAward, FaBriefcase, FaFolder } from "react-icons/fa";
import NavBar from "../NavBar/NavBar.jsx";
import Footer from "../Footer/Footer.jsx";
import WhyChoose from "../WhyChoose.jsx";
import HorizontalLogoSlider from "../HorizontalLogoSlider.jsx";
import { useNavigate } from "react-router-dom";

const Card = ({ icon, title, description }) => (
  <div className="h-full md:w-[80%] w-full border-2 rounded-xl shadow-lg shadow-gray-700 md:hover:shadow-gold mx-auto hover:md:scale-105 transition duration-200 text-white bg-black relative">
    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white mx-auto translate-y-4">
      <img className="w-12 h-12" src={icon} alt="icon" />
    </div>
    <div className="p-5">
      <h2 className="font-bold text-center font-mullish md:text-2xl text-md py-5">
        {title}
      </h2>
      <p className="text-center font-mullish lg:text-lg text-md">
        {description}
      </p>
    </div>
  </div>
);

function GoogleSheets() {
  const navigate=useNavigate();
  const features = [
    {
      icon: Lab,
      title: "Unleash Your Potential",
      description:
        "Immerse yourself in our cutting-edge curriculum, meticulously designed to unleash your full potential with Google Sheet.",
    },
    {
      icon: Laptop,
      title: "Hands-on Adventure",
      description:
        "Embark on a hands-on adventure through real-world projects and interactive exercises, where you'll tackle data challenges head-on.",
    },
    {
      icon: Resume,
      title: "Expert Navigator",
      description:
        "Navigate the world of Google Sheet with confidence, guided by industry experts who are passionate about empowering your success.",
    },
    {
      icon: Medal,
      title: "Engaging Exploration",
      description:
        "Dive deep into the realm of data with our engaging learning platform, featuring quizzes, discussions, and peer collaboration.",
    },
    {
      icon: Bag,
      title: "Freedom to Soar",
      description:
        "Break free from the constraints of traditional learning schedules. With our flexible platform, you have the freedom to learn on your terms, anytime, anywhere.",
    },
  ];

  return (
    <><NavBar />
    <section className="relative  overflow-hidden mt-[20px] md:mt-0  bg-black p-1 lg:ml-5">
      <div className="relative max-w-full ">
        <div className="w-full min-h-[540px] bg-black">
          <div className="flex flex-col lg:flex-row w-full bg-black text-white relative md:p-[3rem] p-[1rem]">
            <div className="w-full">
              <h1 className="font-mullish text-5xl leading-10 font-bold max-w-[500px]">
                Google Sheets
                <br />
              </h1>
              <div className="mt-4">
                <p className="text-gold text-md">
                  {" "}
                  Unlock the full potential of Google Sheets with our
                  comprehensive online course.Whether you're <br/> a beginner or looking to enhance your skills, we've got you covered. Join
                  thousands of learners <br/> who have mastered Google Sheets with our
                  easy-to-follow lessons and practical exercises.{" "}
                </p>
              </div>

              <div className="space-y-6 mt-8">
                <div className="flex items-center gap-4">
                  <div className="icon flex items-center">
                    <FaAward />
                  </div>
                  <p>Ready to revolutionize your Google Sheets game?</p>
                </div>
                <div className="flex gap-4">
                  <div className="icon flex items-center">
                    <FaBriefcase />
                  </div>
                  <p>
                    Our MsExcel online course is your ticket to mastering the
                    art of data visualization and analysis.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="flex icon items-center">
                    <FaFolder />
                  </div>
                  <p>
                    {" "}
                    Whether you're a newbie or a seasoned data aficionado, our
                    course offers a thrilling journey towards becoming a Google Sheets powerhouse.
                  </p>
                </div>
              </div>
              <p className="mt-8 text-xl">
                #1 Join{" "}
                <span className="text-goldenrod text-2xl">The Interns</span> and
                craft your path to success within our diverse and supportive
                community.
              </p>
              <div className="cursor-pointer">
                <div onClick={()=>navigate("/Register")}className="bg-goldenrod w-full md:w-fit hover:text-black hover:bg-goldenrod transition-all duration-200 hover:scale-105 text-white py-[14px] px-[18px] mt-4 rounded-md font-mullish font-bold text-center">
                  Join Now
                  <ChevronRight className="inline-block" />
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 mx-auto my-auto xl:block hidden">
              <img
                src={googlesheet}
                alt="googlesheetimg"
                className="w-[400px] h-[400px] rounded-xl"
              />
            </div>
          </div>

          <div className="w-full text-white relative lg:p-[5rem] md:p-[3rem] p-[1rem] shadow-md text-center md:-top-10 -top-6 mt-[4rem] md:mt-0">
            <div className="relative z-10">
              <div className="flex justify-center items-center ">
                <img
                  src={bg}
                  alt=""
                  className="absolute -z-10 hidden xl:block lg:block lg:mt-10"
                />
              </div>
              <div className="flex justify-center md:col-span-3 mb-10">
                <h1 className="font-mullish text-4xl mt-2 font-bold text-center ">
                  Key Features
                </h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-1 text-center ">
                {features.slice(0, 3).map((card, index) => (
                  <div key={index}>
                    <Card
                      title={card.title}
                      description={card.description}
                      icon={card.icon}
                    />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-1 gap-4 text-center md:mt-12 mt-4">
                {features.slice(3, 5).map((card, index) => (
                  <div key={index}>
                    <Card
                      title={card.title}
                      description={card.description}
                      icon={card.icon}
                    />
                  </div>
                ))}
              </div>
              <HorizontalLogoSlider/>
            </div>
          </div>
        </div>
        <div className='w-full md:-mt-36 -mt-8'>
          <WhyChoose />
        </div>
        <GoogleSheetsSkills />
      </div>

      <ScrollToTopButton />
      <a
        href="https://api.whatsapp.com/send/?phone=918376083977&text&type=phone_number&app_absent=0"
        rel="noreferrer"
        className="fixed md:bottom-[4rem] bottom-2 md:right-5 right-3 rounded-xl shadow-3xl z-50"
        target="_blank"
      >
        <img
          src={whatsapp}
          alt="whatsappimg"
          style={{ height: "60px", width: "60px", borderRadius: "50%" }}
        />
      </a>
    </section>
    <Footer /></>
  );
}

export default GoogleSheets;
