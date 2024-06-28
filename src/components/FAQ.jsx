// FAQ.js
import React, { useState } from 'react';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';
import circledot from '../Images/circledot.png';


const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const faqData = [
    {
      question: "Is Quality Education Provided ?",
      answer: "We offer high-quality online courses taught by industry experts who are passionate about sharing their knowledge and expertise with students."
    },
    {
      question: "Is Placement Assistance Provided ?",
      answer: "We provide placement assistance to help our learners kick start their careers."
    },
    {
      question: "Is Comprehensive Course Catalog Provided ?",
      answer: "Whether you're looking to upgrade your skills in technology, business, or creative fields, we have a diverse range of courses to meet your needs."
    },
    {
      question: "Is Flexible Learning Provided ?",
      answer: "Our online platform allows you to learn at your own pace, anytime and anywhere. With 24/7 access to course materials, you can balance your studies with your other commitments."
    },
    {
      question: "Is Community Support Provided ?",
      answer: "Join a vibrant community of learners from around the world. Interact with fellow students, share ideas, and collaborate on projects to enhance your learning experience."
    }
  ];

  return (
    <div className="max-w-[100%] mx-auto font-mullish relative shadow-deep-purple-100">
      <div className="absolute right-0 -top-[6rem] -z-10">
        <img src={circledot} alt="circle" className='animated inline-block' style={{ height: '200px', width: '200px' }} />
      </div>
      <div className="max-w-4xl mx-auto p-6 mt-[6rem]">
        <h2 className="font-bold mb-6 text-center text-gold text-4xl">Frequently Asked Questions ?</h2>
        <div className="space-y-4 text-xl ">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="faq-item rounded-lg max-w-[1080px] opacity-80 text-white shadow-2xl transition-all duration-200 ease hover:scale-105"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="w-full flex items-center justify-between py-3 px-4 font-semibold focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span>{item.question}</span>
                {activeIndex === index || hoveredIndex === index ? (
                  <FaChevronDown className="faq-arrow" />
                ) : (
                  <FaChevronRight className="faq-arrow" />
                )}
              </div>
              <div className={`faq-answer p-4 ${activeIndex === index ? 'block' : 'hidden'} `}>{item.answer}</div>
              <hr className="w-full border-b-1 border-gray-300 mt-4" />

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
