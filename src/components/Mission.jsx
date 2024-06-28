import React, { useState } from 'react';
import { ChevronRight, ChevronUp } from 'react-feather';
import commaimg from '../Images/commaimg.webp'
import { handleMouseLeave,handleMouseMove } from './CardAnimate';
function Card({ title, content }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="card p-6 md:p-10 max-h-full cursor-pointer rounded-xl border-2 shadow-xl mt-2"
    onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
    
      <img src={commaimg} alt="doublequotesimg" style={{height:"20px"}}/>

      <h3 className="font-bold pt-4 text-2xl">{title}</h3>

      <div className={`py-3 leading-normal text-grayText overflow-hidden ${expanded ? 'h-auto' : 'h-[93px]'} ${expanded ? '' : 'line-clamp-3'}`}>        
      <p className="h-full text-lg">{content}</p>
      </div>

      {!expanded && (
        <div className="flex items-center cursor-pointer group" onClick={toggleExpand}>
          <span className="text-lightBlue500 font-bold group-hover:text-grayBlue transition-all duration-200 mt-2">
            Show More <ChevronRight className="w-5 h-5 text-lightBlue500 group-hover:text-grayBlue transition-all duration-200 inline" />
          </span>
        </div>
      )}

      {expanded && (
        <div className="flex cursor-pointer group" onClick={toggleExpand}>
          <span className="text-lightBlue500 font-bold group-hover:text-grayBlue transition-all duration-200">
            Show Less <ChevronUp className="w-5 h-5 text-lightBlue500 group-hover:text-grayBlue transition-all duration-200 inline" />
          </span>
        </div>
      )}
    </div>
  );
}

function MissionSection() {
  return (
     <section className="relative font-mullish">
      <div className="w-11/12 mx-auto mt-8 max-w-[1280px] grid grid-cols-1 md:grid-cols-2 items-center gap-y-10 gap-x-6 text-white">
        <Card
          title="Our Mission"
          content="At The Interns, our mission is clear to nurture the growth of students and empower them to achieve their full potential. We understand the importance of education in today's rapidly evolving world, and we are dedicated to providing top-notch online courses that cater to the diverse needs of learners worldwide."
        />
        <Card
          title="Our Vision"
          content="At The Interns, our vision is to become a global leader in online education, known for our innovative approach to nurturing student growth and empowering learners to excel in an ever-changing world. Through our commitment to excellence, inclusivity, and cutting-edge education technology, we envision a world where every learner has the opportunity to achieve their dreams."
        />
      </div>
    </section>
  );
}

export default MissionSection;
