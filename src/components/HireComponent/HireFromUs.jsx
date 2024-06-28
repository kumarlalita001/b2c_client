import hire from '../../Images/hire.svg'
import ScrollToTopButton from "../ScrollTop";
import whatsapp from "../../Images/whatsapp.svg";
import { ChevronRight } from 'react-feather';
import NavBar from '../NavBar/NavBar';

function HeroSection() {
  return (
    <>
      <NavBar/>
      <section className="relative overflow-hidden p-1 font-mullish text-lg">
      <div className="absolute w-full h-[80%] bg-black" />
      <div className="relative w-11/12 max-w-[1280px] mx-auto pt-4 flex flex-col lg:flex-row">
        <div className="w-full py-12">
          <div className="lg:w-[80%] w-full text-white">
            <h1 className="font-mullish text-goldenrod font-bold w-[90%] text-start md:text-5xl text-4xl">
              Hire From Us
            </h1>
            <div className="space-y-6 mt-8">
                <p className='leading-7'>
                  Looking to build a team of highly skilled professionals in SQL, Advanced SQL, MS Excel, Power BI, or Tableau? At The Interns (Nurturing Interns Private Limited), we offer a pool of talented individuals who have mastered these technologies and are ready to contribute to your projects. Our candidates undergo rigorous training and practical exercises to ensure they are proficient in their respective fields. Whether you need short-term consultants or long-term team members, we can help you find the right fit.
                </p>
            </div>

            <div className="space-x-4 ">
              <button className="bg-goldenrod w-full md:w-40 text-white py-[14px] px-[18px] mt-8 rounded-md font-mullish font-bold hover:bg-goldenrod transition-all duration-200 hover:scale-105">
                <a href="mailto:admission@theinterns.org.in">Hire Now</a> <ChevronRight className='inline'/>
              </button>
            </div>
          </div>
        </div>
        <div className="flex lg:mt-0 md:w-[60%] w-[80%] mx-auto flex-shrink">
          <img
            src={hire}
            alt="hireimg"
            className=" w-full"
          />
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
    </>
  );
}

export default HeroSection;
