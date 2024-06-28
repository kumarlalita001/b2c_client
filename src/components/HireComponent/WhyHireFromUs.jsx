import React, { useState, useEffect } from 'react';
import { Carousel } from '@material-tailwind/react';
import Light from '../../Images/light.png';
import Light1 from '../../Images/light.png';
import source from '../../Images/source.svg';
import {handleMouseLeave,handleMouseMove} from '../CardAnimate'; // Import the CardAnimate component

function Card({ title, content}) {
  return (
    <div className="card p-6 md:p-8 md:max-h-[350px] rounded-xl border-2 h-[20rem] flex flex-col justify-center m-auto text-white bg-opacity-90 relative bg-black cursor-pointer" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <img src={Light} alt="leftbacklightimg" className='absolute h-[400px] md:-top-4 md:left-0.5 rotate-180 pt-20 hidden md:block'/>
      <img src={Light1} alt="rightbacklightimg" className='absolute h-[400px] md:-bottom-4 md:right-0.5 pt-20 hidden sm:block -z-10'/>
      <div className='flex flex-col justify-center h-full md:w-[540px] mx-auto'>
        <div className='md:w-full sm:w-[420px] flex flex-col justify-between md:justify-center'>
          <h2 className="md:text-3xl font-bold pt-2 text-center text-2xl lg:text-3xl">{title}</h2>
          <p className="text-md md:text-md leading-normal text-Gray text-center mt-2 lg:text-lg ">{content}</p>
        </div>
      </div>
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
}

function WhyHireFromUs() {
  const datas = [
    {
      title: "Quality Assurance",
      content: "We thoroughly vet our candidates to ensure they meet the highest standards of proficiency."
    },
    {
      title: "Flexibility",
      content: "Whether you need full-time, part-time, or project-based support, we can tailor our services to meet your needs."
    },
    {
      title: "Cost-Effective",
      content: "Hiring from us can save you time and resources compared to traditional recruitment methods."
    },
    {
      title: "Ongoing Support",
      content: "We provide ongoing support and mentorship to our candidates, ensuring they stay up-to-date with the latest industry trends and technologies."
    },
  ];

  const [manualControl, setManualControl] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setManualControl(window.innerWidth <= 720); // Set to true if window width is less than or equal to 720px
    };

    handleResize(); // Call initially

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  return (
    <div id="why-choose" className="max-w-[1840px] relative font-mullish h-[460px] mx-auto">
      <div className="absolute hidden md:block lg:-top-[8rem] md:-top-[5rem] right-0">
          <img src={source} alt="bgimg" loading='lazy' className="z-10 lg:w-[250px] lg:h-[250px] md:h-[180px] md:w-[180px]"/>
      </div>
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1080px] mt-[2rem] mx-auto md:mt-[5rem] hover:scale-105 transition-all duration-400">
       <div className='p-5'>
         <h2 className="text-3xl font-bold mb-8 text-center text-white z-10 ">Why Hire <span className='text-goldenrod text-4xl'>From Us ?</span></h2>
        {manualControl ? (
          <Carousel 
          autoplay
          loop
          className="rounded-lg overflow-hidden">
            {datas.map((data, index) => (
              <div className="item text-center" key={index}>
                <Card title={data.title} content={data.content}/>
              </div>
            ))}
          </Carousel>
        ) : (
          <Carousel
            loop
            className="rounded-xl overflow-hidden"
            autoplay
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-3 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}>
            {datas.map((data, index) => (
              <div className="item text-center" key={index}>
                <Card title={data.title} content={data.content} />
              </div>
            ))}
          </Carousel>
        )}
       </div>
      </div>
       <style jsx>{`
        @media screen and (max-width: 640px) {
          #why-choose button {
            display: none !important;
          }
        }
      `}</style> 
    </div>
  );
}

export default WhyHireFromUs;
