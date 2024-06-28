import React from "react";
import pencil from "../../Images/pencil.png";
import Assist from "../../Images/Assist.svg";
import commaimg from "../../Images/commaimg.webp";
import { handleMouseLeave, handleMouseMove } from "../CardAnimate";
import HorizontalLogoSlider from "./../HorizontalLogoSlider";
import { useState } from "react";


const Card = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="card h-full w-full border-2 rounded-xl shadow-lg shadow-gray-700 md:hover:shadow-gold mx-auto cursor-pointer flex flex-col" onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove}>
      <img src={commaimg} alt="commaimg" className="absolute ml-4 mt-4 md:ml-2 md:mt-2" style={{ height: "20px", widows: "20px" }} />
      <h2 className="p-auto font-bold text-center font-mullish md:text-2xl text-xl py-5">{title}</h2>
      <p className="p-3 text-center font-mullish lg:text-lg flex-1">{description}</p>
    

      <style jsx>{`
        .card {
          perspective: 1000px;
          backface-visibility: hidden;
          transition: transform 0.5s ease-in;
          transform: rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg));
          border: 2px solid rgb(var(--red, 255), var(--green, 255), var(--blue, 255)); /* Adjust border color */
        }
      `}</style>
    </div>
  );
};

function HowWeAssistu() {
  const cards = [
    {
      title: "Data Analytics",
      description: "Learn the fundamentals of data analytics with our comprehensive courses. Gain hands-on experience with popular tools like Power Bi and Tableau to analyze data and derive valuable insights. Develop your analytical skills and enhance your career prospects in the field of data analytics."
    },
    {
      title: "SQL",
      description: "Develop your SQL skills with our comprehensive courses. Learn how to write queries to retrieve, update, and manipulate data stored in relational databases. Master advanced SQL concepts such as joins, subqueries, and stored procedures to become a proficient database developer."
    },
    {
      title: "Spreadsheet",
      description: "Master the art of spreadsheet management with our comprehensive courses. Learn how to create, format, and analyze data using popular spreadsheet software like Microsoft Excel and Google Sheets. Develop your skills in data visualization, formula writing, and data analysis to become a proficient spreadsheet user."
    }
  ];

  return (
    <div className="max-w-[1080px] flex flex-col justify-center items-center mx-auto p-2">
      <div className="pt-5 relative md:mt-[4rem] mt-[1rem]">
        <div className="flex justify-center md:col-span-3 mb-10 text-white">
          <h1 className="font-mullish text-2xl md:text-3xl mt-10 font-bold text-center">Courses we Provided at <span className="interns md:text-4xl text-3xl font-bold text-goldenrod">The Interns </span></h1>
        </div>
        <img src={pencil} className="w-16 h-16 -z-10 bg-cover animate-moveUpDown hidden md:block absolute top-14 left-3 lg:left-[6rem]" alt="pencilanimation" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-10 text-center text-white">
          {cards.slice(0, 3).map((content, index) => (
            <div key={index}>
              <Card title={content.title} description={content.description} />
            </div>
          ))}
        </div>
        <div className="absolute hidden md:block md:top-[5rem] lg:top-0 md:-right-0 lg:right-2 lg:-translate-y-8 md:-translate-y-[5.5rem] lg:block">
          <img
            src={Assist}
            alt="assisimg"
            loading="lazy"
            className="animated -z-10 lg:w-[140px] lg:h-[130px] md:h-[110px] md:w-[110px]"
          />
        </div>
      </div>
      <HorizontalLogoSlider />
    </div>
  );
}

export default HowWeAssistu;

