import React from "react";
import ImageSlider from "./ImageSlider";
import promise from "../Images/promise.png";
import touch from "../Images/touch.svg";
import Footer from "./Footer/Footer";

function GetInTouch() {
  const images = [
    "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=450&h=550&dpr=1",
    "https://images.pexels.com/photos/389818/pexels-photo-389818.jpeg?auto=compress&cs=tinysrgb&w=450&h=550&dpr=1",
    "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=450&h=550&dpr=1",
  ];

  // Array of paragraph content
  const paragraphContent = [
    "Ready to hire top talent for your SQL, Advanced SQL, MS Excel, Power BI, or Tableau projects? Contact us today to discuss your requirements, and let us help you find the perfect candidate for your team.",
  ];

  return (
    <>
      <div className="p-2 w-full md:mt-0 -mt-[3rem]">
        <div className="max-w-xl mx-auto my-4 rounded-xl md:max-w-5xl mt-[8rem] border-l-2 border-b-4 relative text-white">
          <img
            src={touch}
            alt="getintouchimg"
            loading="lazy"
            className=" absolute -translate-x-24 -translate-y-[6.6rem] lg:-right-[6rem] md:-right-[5rem] lg:w-[160px] lg:h-[180px] md:h-[160px] md:w-[160px] hidden md:block "
          />
          <div className="flex flex-col">
            <img
              src={promise}
              alt="promiseimg"
              loading="lazy"
              style={{ height: "100px", width: "100px" }}
              className="absolute opacity-100 lg:block lg:left-[15rem] xl:left-[17rem] xl:block md:block md:left-[10rem] hidden bg-white rounded-bl-xl rounded-br-xl "
            />
            <h1 className="tracking-wide font-mullish text-2xl md:text-3xl font-bold m-8 text-center">
              Get In Touch
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-2">
            <div className="my-auto">
                <div className="font-mullish text-lg md:mt-0 -mt-6">
                {paragraphContent.map((paragraph, index) => (
                  <p key={index} className=" px-4">
                    {paragraph}
                  </p>
                ))}
                <button className="mt-5 md:mx-3 text-white font-bold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-110 bg-goldenrod w-full md:w-40">
                <a href="mailto:admission@theinterns.org.in">Hire Now</a>
                </button>
              </div>
            </div>
            <div className="md:shrink-0 mb-4 mx-auto">
              <ImageSlider images={images} />
            </div>
          </div>
        </div>
    </div>
    <Footer/>
    </>
  );
}

export default GetInTouch;
