import ScrollToTopButton from '../ScrollTop';
import whatsapp from '../../Images/whatsapp.svg';
import advsql from '../../Images/advancesql.png'
import bg from '../../Images/bg.png'
import { ChevronRight } from 'react-feather';
import Lab from '../../Images/gold.png'
import Resume from "../../Images/resume.png"
import Medal from "../../Images/medal.png"
import Laptop from "../../Images/laptop.png"
import Bag from "../../Images/briefcase.png"
//import PowerBiSkill from './PowerBiSkill';
import { FaAward, FaBriefcase } from 'react-icons/fa';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import WhyChoose from '../WhyChoose';
import HorizontalLogoSlider from '../HorizontalLogoSlider';
import { useNavigate } from 'react-router-dom';

function SkillItem({ number, title, description }) {
    return (
        <div className="flex flex-col md:flex-row rounded-xl bg-gray-300 shadow-gray-500 shadow-lg h-auto p-2 m-2 w-[90%] mx-auto border">
            <div className="bg-goldenrod px-10 flex justify-center items-center md:w-20 rounded-md">
                <h1 className="text-5xl font-bold items-center text-center md:pt-2">{number}</h1>
            </div>
            <div className="flex flex-col justify-center flex-1">
                <h1 className="text-black text-2xl pb-3 font-bold text-center mt-2">{title}</h1>
                <p className="text-start p-4">{description}</p>
            </div>
        </div>
    );
}
const Card = ({ icon, title, description }) => (
    <div className="h-full md:w-[80%] w-full border-2 rounded-xl shadow-lg shadow-gray-700 md:hover:shadow-gold mx-auto hover:md:scale-105 transition duration-200 text-white bg-black relative">
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white mx-auto translate-y-4">
            <img className="w-12 h-12" src={icon} alt="icon" />
        </div>
        <div className="p-5">
            <h2 className="font-bold text-center font-mullish md:text-2xl text-md py-5">{title}</h2>
            <p className="text-center font-mullish lg:text-lg text-md">{description}</p>
        </div>
    </div>
);



function AdvanceSQL() {
    const navigate=useNavigate();

    const skills = [
        {
            number: "01",
            title: "Review of Basic SQL Concepts",
            description:
                (
                    <div className='flex flex-col '>
                        <li>
                            Quick recap of basic SQL syntax and querying
                        </li>

                    </div>
                )


        },
        {
            number: "02",
            title: "Advanced Querying Techniques",
            description:
                (
                    <div className='flex flex-col '>
                        <li>
                            Window functions
                        </li>
                        <li>

                            Common table expressions(CTEs).
                        </li>
                        <li>
                            Recursive queries.
                        </li>
                    </div>
                )

        },
        {
            number: "03",
            title: "Indexes and Performance Optimization",
            description:
                (
                    <div className='flex flex-col '>
                        <li>
                            Understanding indexes
                        </li>
                        <li>

                            Index types: B-tree, hash, bitmap.Query optimization techniques
                        </li>

                    </div>
                )

        },
        {
            number: "04",
            title: "Stored Procedures and Functions",
            description:
                (
                    <div className='flex flex-col '>
                        <li>
                            Creating and using stored procedures
                        </li>
                        <li>
                            User-defined functions (UDFs)
                        </li>
                        <li>
                            Benefits and best practices
                        </li>
                    </div>
                )



        },
        {
            number: "05",
            title: "Triggers and Events",
            description:
                (
                    <div className='flex flex-col '>
                        <li>
                            Introduction to triggers
                        </li>
                        <li>

                            Types of triggers: BEFORE, AFTER, INSTEAD OF.Working with events and event handlers
                        </li>

                    </div>
                )


        },
        {
            number: "06",
            title: "Transactions and Concurrency Control",
            description:
                (
                    <div className='flex flex-col '>
                        <li>
                            Advanced transaction management
                        </li>
                        <li>

                            Isolation levels
                        </li>
                        <li>

                            Handling concurrency issues.
                        </li>
                    </div>
                )

        },
        {
            number: "07",
            title: "Advanced Database Design",
            description:
                (
                    <div className='flex flex-col '>
                        <li>
                            Schema design consideration.
                        </li>
                        <li>

                            Denormalization techniques
                        </li>
                        <li>
                            Partitioning and sharding
                        </li>
                    </div>
                )


        },
        {
            number: "08",
            title: "Performance Tuning and Monitoring",
            description:
                (
                    <div className='flex flex-col '>
                        <li>
                            Profiling database performance
                        </li>
                        <li>

                            Query optimization using EXPLAIN
                        </li>
                        <li>
                            Monitoring tools and techniques
                        </li>
                    </div>
                )


        },
        {
            number: "09",
            title: "Backup and Recovery",
            description:
                (
                    <div className='flex flex-col '>
                        <li>
                            Database backup strategies
                        </li>
                        <li>

                            Point-in-time recovery
                        </li>
                        <li>
                            Disaster recovery planning
                        </li>
                    </div>
                )



        },
        {
            number: "10",
            title: "Case Studies and Projects",
            description:
                (
                    <div className='flex flex-col '>
                        <li>
                            Real-world case studies to apply advanced SQL concepts
                        </li>
                        <li>

                            Hands-on projects to reinforce learning and demonstrate skills.
                        </li>

                    </div>
                )


        }
    ];
    const features = [
        {
            icon: Lab,
            title: "Deepen your understanding of SQL with advanced concepts and techniques.",

        },
        {
            icon: Laptop,
            title: "Learn optimization strategies to improve query performance",

        },
        {
            icon: Resume,
            title: "Explore advanced database features like stored procedures, triggers, and transactions.",

        },
        {
            icon: Medal,
            title: "Gain practical skills for managing complex databases and troubleshooting common issues.",

        },
        {
            icon: Bag,
            title: "Access to real-world case studies and hands-on projects to apply your knowledge",

        }

    ];


    return (
        <>
            <NavBar />
            <section className="relative overflow-hidden
             lg:ml-5 p-1">
                <div className="relative max-w-full pt-4">
                    <div className='w-full min-h-[540px] bg-black'>
                        <div className="flex flex-col lg:flex-row w-full bg-black text-white relative md:p-[3rem] p-[1rem]">
                            <div className="w-full">
                                <h1 className="font-mullish text-5xl leading-10 font-bold max-w-[500px]">
                                    Advance SQL <br />

                                </h1>
                                <div className='mt-4'>
                                    <p className="text-gold">Mastering Advanced SQL: Optimization and Beyond
</p>
                                </div>

                                <div className='space-y-6 mt-8'>
                                    <div className='flex items-center gap-4'>
                                        <div className='icon flex items-center'>
                                            <FaAward />
                                        </div>
                                        <p>Unlock the power of databases with our comprehensive SQL online course</p>
                                    </div>
                                    <div className='flex gap-4'>
                                        <div className='icon flex items-center'>
                                            <FaBriefcase />
                                        </div>
                                        <p>Whether you're a beginner or an experienced programmer, our course will take you from <br/> SQL basics to advanced database management.
                                        </p>
                                    </div>

                                </div>
                                <p className='mt-8 text-xl'>
                                    #1 Join <span className='text-goldenrod text-2xl'>The Interns</span> and craft your path to success within our diverse and supportive community.
                                </p>
                                <div className='cursor-pointer'>
                                    <div onClick={()=>navigate("/Register")}className="bg-goldenrod w-full md:w-fit hover:bg-goldenrod hover:text-black transition-all duration-200 hover:scale-105 text-white py-[14px] px-[18px] mt-4 rounded-md font-mullish font-bold text-center">Join Now
                                        <ChevronRight className='inline-block' />
                                    </div>
                                </div>
                            </div>
                            <div className='flex-shrink-0 my-auto mx-auto xl:block hidden'>
                                <img src={advsql} alt="advsqlimg" className="w-[350px] h-[300px] rounded-xl" />
                            </div>
                        </div>

                        <div className='w-full text-white relative lg:p-[5rem] md:p-[3rem] p-[1rem] shadow-md text-center md:-top-10 -top-6 mt-[4rem] md:mt-[3rem]'>
                            <div className='relative z-10'>
                                <div className='flex justify-center items-center '>
                                    <img src={bg} alt="" className='absolute -z-10 hidden xl:block lg:block lg:mt-10' />

                                </div>
                            

                              
                                <div className='flex justify-center md:col-span-3 mb-10'>
                                    <h1 className='font-mullish text-4xl mt-2 font-bold text-center '>Benefits</h1>
                                </div>
                                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-1 text-center '>
                                    {features.slice(0, 3).map((card, index) => (
                                        <div key={index}>
                                            <Card title={card.title} icon={card.icon} />
                                        </div>
                                    ))}
                                </div>

                                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-1 gap-4 text-center md:mt-12 mt-4'>
                                    {features.slice(3, 5).map((card, index) => (
                                        <div key={index}>
                                            <Card title={card.title} icon={card.icon} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <HorizontalLogoSlider/>
                        </div>
                    </div>
                    <div className='w-full md:-mt-36 -mt-8'>
                        <WhyChoose />
                    </div>
                    <div className="w-full flex flex-wrap flex-col items-center text-center pl-10 pr-10 pb-10 mt-9">
                        <div className="w-full flex flex-wrap flex-col items-center text-center">
                            <h1 className="text-5xl font-bold text-white py-5 mb-3">Skills You Will <span className="text-goldenrod">Master</span></h1>
                        </div>

                        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                            {skills.map((skill, index) => (
                                <SkillItem key={index} number={skill.number} title={skill.title} description={skill.description} />
                            ))}
                        </div>
                    </div>
                </div>


                <ScrollToTopButton />
                <a href="https://api.whatsapp.com/send/?phone=918376083977&text&type=phone_number&app_absent=0" rel='noreferrer' className="fixed md:bottom-[4rem] bottom-2 md:right-5 right-3 rounded-xl shadow-3xl z-50" target='_blank'>
                    <img src={whatsapp} alt="whatsappimg" style={{ height: "60px", width: "60px", borderRadius: "50%" }} />
                </a>

            </section>
            <Footer /></>
    );
}

export default AdvanceSQL;
