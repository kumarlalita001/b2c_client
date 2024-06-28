import React from 'react';
import { ChevronRight } from 'react-feather';
import learning from '../Images/learning.webp';
import Education from '../Images/education.webp';
import Mentorship from '../Images/mentorship.png';
// import backdot from '../Images/backdot.jpg';
import Mentorship1 from '../Images/mentorship.png';
import {handleMouseLeave,handleMouseMove} from './CardAnimate';


const ServiceBox = ({ title, description }) => (
  <div className="card mt-5 rounded-lg shadow-lg shadow-gray-700 md:hover:shadow-gold mx-auto h-full overflow-hidden cursor-pointer bg-black"  onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
    <div className='p-2'>
      <div className='flex flex-col items-center'>
        <h2 className="font-bold my-4 text-2xl">{title}</h2>
        <p className="p-2 opacity-90">{description}</p>
      </div>
    </div>
  </div>
);

const Features = () => {

  const serviceData = [
    {
      title: '100% Job Assistance',
      description: "Partnering with us isn't just a step; it's a leap towards success. With our unwavering commitment and dedication, success isn't just a possibility it's inevitable. Join us, and watch your aspirations turn into achievements."
    },
    {
      title: 'Course Duration',
      description: "Our 1.5 months course is tailored to provide you with a thorough understanding of the subject matter in a condensed timeframe. Despite the shorter duration, our curriculum is meticulously crafted to cover all essential concepts comprehensively."
    },
    {
      title: 'Internship Provided',
      description: "After completing our course, you'll have the opportunity to further enhance your skills through a 45-day internship program. This internship is a valuable component of our program, offering real-world experience and practical application of the knowledge gained during the course."
    },
    {
      title: 'Resume Building',
      description: "Building a compelling resume is essential for showcasing your skills and experiences effectively. At TheInterns, we provide personalized assistance in crafting professional resumes that highlight your strengths, accomplishments, and qualifications."
    },
    
  ];

  return (
    <section className="relative font-mullish p-2">
      <div className="w-11/12 max-w-[1080px] mx-auto relative mt-12 text-white">
        {/* <img src={backdot} alt="bgimage" className='absolute -z-10 opacity-70'/> */}
        <div className="absolute hidden md:block md:top-[5rem] lg:top-0 right-0">
          <img src={learning} alt="learninganimation" loading='lazy' className="animate-img -z-10 lg:w-[250px] lg:h-[250px] md:h-[180px] md:w-[180px]"/>
        </div>
        <div className="absolute hidden md:block md:top-[5rem] lg:top-0 left-0">
          <img src={Education} alt="educationanimaton" loading='lazy' className="animate -z-10 lg:w-[200px] lg:h-[200px] md:h-[120px] md:w-[120px]"/>
        </div>
        <div className="relative z-10 md:bg-transparent">
          <h1 className="font-extrabold text-3xl text-center">Features</h1>
          <div className="w-10 border-y-2 border-goldenrod bg-black my-4 mx-auto"></div>
          <p className="text-center max-w-[470px] mx-auto text-xl font-semibold">
            Empower Your Journey, Ignite Your Career with <span className="text-goldenrod text-3xl block font-bold">The Interns</span>
          </p>
          {/* <img src={backdot} alt="bgimage" className='absolute opacity-70 rotate-[180deg] md:block hidden right-3 -z-10 bottom-0'/> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] mt-10 p-3 font-semibold">
            {serviceData.slice(0, 4).map((service, index) => (
              <div key={index} {...service}>
                <ServiceBox key={index} {...service} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="card max-w-[1080px] mx-auto text-white py-10 px-4 rounded-lg text-center mt-[5rem] shadow-2xl mb-6 relative border cursor-pointer" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <h1 className="font-mullish text-3xl md:text-3xl font-bold mb-4 text-center">Mentorship Session 
          <img src={Mentorship} alt="mentorshipanimation" width="300" loading='lazy' height="200px" className="animate-image absolute opacity-90 lg:w-[200px] lg:h-[200px] md:h-[160px] md:w-[160px] md:bottom-[20rem] lg:bottom-[18rem] hidden md:block bottom-[18rem] left-16"/>
          </h1>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="md:flex md:flex-col justify-center items-center md:mt-2 mt-6">
                <div className='grid sm:grid-cols-2 md:grid-cols-1'>
                  <ul className="space-y-8 flex flex-wrap flex-col items-start justify-start my-auto font-semibold" style={{wordSpacing:"-1.6px"}}>
                    <li className="flex items-center space-x-2">
                      <ChevronRight style={{ color: "goldenrod" }} className="inline" /> Batch of Maximum 30 Students
                    </li>
                    <li className="flex items-center space-x-2">
                      <ChevronRight style={{ color: "goldenrod" }} className="inline" /> Certificate of Course Completion
                    </li>
                    <li className="flex items-center space-x-2">
                      <ChevronRight style={{ color: "goldenrod" }} className="inline" /> Certificate of Internship
                    </li>
                  </ul>
                  <img src={Mentorship1} alt="mentorshipimg" loading='lazy'  className=" absolute opacity-90 sm:h-[250px] sm:w-[250px] top-14 hidden right-5 sm:block md:hidden lg:hidden "/>
                </div>
              </div>
              <div className="md:flex md:flex-col text-start">
                <p className="font-mullish space-x-2 md:mb-8 text-lg w-full italic">
                  " Cultivating potential is at the heart of our mentorship sessions. Within our organization, these sessions are more than just meetings they're opportunities for empowerment, collaboration, and personal growth. With every interaction, we strive to ignite the spark of inspiration and nurture it into a flame of achievement. Together, let's embark on a journey of mentorship, where knowledge is shared, skills are honed, and success is not just a destination, but a way of life."
                </p>
              </div>
            </div>
          </div>
    </section>
  );
}

export default Features;
