
import ScrollToTopButton from '../ScrollTop';
import whatsapp from '../../Images/whatsapp.svg';
import tableau from '../../Images/tableau.svg'
import bg from '../../Images/bg.png'
import { ChevronRight } from 'react-feather';
import Lab from '../../Images/gold.png'
import Resume from "../../Images/resume.png"
import Medal from "../../Images/medal.png"
import Laptop from "../../Images/laptop.png"
import Bag from "../../Images/briefcase.png"
import TableauSkill from './TableauSkill';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { FaAward, FaBriefcase, FaFolder } from 'react-icons/fa';
import WhyChoose from '../WhyChoose';
import HorizontalLogoSlider from '../HorizontalLogoSlider';
import { useNavigate } from 'react-router-dom';


const Card = ({icon, title, description }) => (
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



function Tableau() {
  const navigate=useNavigate();
    const features = [
  {
    icon: Lab,
    title: "Data Visualization Fundamentals",
    description: [
      "Understand the principles of effective data visualization.",
      "Explore different chart types and when to use them for optimal communication of insights."
    ]
  },
  {
    icon: Laptop,
    title: "Dashboard Design and Creation",
    description: [
      "Dive into the process of designing and creating interactive dashboards.",
      "Learn how to arrange visualizations, add filters, and create interactivity for user engagement."
    ]
  },
  {
    icon: Resume,
    title: "Data Connection and Preparation",
    description: [
      "Gain skills in connecting to various data sources, including databases, spreadsheets, and cloud services.",
      "Learn techniques for cleaning and transforming data within Tableau for analysis."
    ]
  },
  {
    icon: Medal, 
    title: "Advanced Analytics with Tableau",
    description: [
      "Explore advanced analytics capabilities within Tableau, including forecasting, trend analysis, and clustering.",
      "Learn how to leverage calculations and parameters to perform complex analyses."
    ]
  },
  {
    icon: Bag,
    title: "Geospatial Analysis and Mapping",
    description: [
      "Discover how to visualize geographic data and perform spatial analysis using Tableau's mapping features.",
      "Learn how to create custom maps, plot data points, and analyze spatial relationships."
    ]
  },
  { 
    icon: Resume,
    title: "Dashboard Interactivity and Storytelling",
    description: [
      "Enhance dashboards with interactive elements such as filters, parameters, and actions.",
      "Develop skills in crafting compelling data stories that communicate insights effectively."
    ]
  },
  // {
  //   title: "Sharing and Collaboration",
  //   description: [
  //     "Understand how to share dashboards and visualizations with stakeholders using Tableau Server or Tableau Online.",
  //     "Learn best practices for collaboration and version control within a Tableau environment."
  //   ]
  // }
];

 

    return (
       <> <NavBar />
       <section className="relative mt-[20px] overflow-hidden p-1 lg:ml-5 md:mt-0">
           <div className="relative max-w-full ">
               <div className='w-full min-h-[540px] bg-black'>
                 <div className="flex flex-col lg:flex-row w-full bg-black text-white relative md:p-[3rem] p-[1rem] pt-[1rem]">
                   <div className="w-full">
                       <h1 className="font-mullish text-5xl leading-10 font-bold max-w-[500px]">
                          Tableau <br/>                 
                       
                       </h1>
                       <div className='pt-4'>
                           <p className="text-gold"> Unlock the Power of Data Visualization with Our Dynamic Tableau Online Course. Learn how to connect <br/> to data sources and import datasets into Tableau. </p>
                       </div>
                       <ul className="space-y-2 mt-6">
                           
                       </ul>

                       <div className='space-y-6'>
                           <div className='flex gap-4'>
                             <div className='icon flex items-center'>
                               <FaAward/>
                             </div>
                             <p>Ready to revolutionize your data analytics game?</p>
                           </div>
                           <div className='flex gap-4'>
                             <div className='icon flex items-center'>
                               <FaBriefcase/>
                             </div>
                               <p>Our Tableau online course is your ticket to mastering the art of data visualization and analysis with Tableau.</p>
                           </div>
                           <div className='flex gap-4'>
                             <div className='icon flex items-center'>
                               <FaFolder/>
                             </div>
                             <p> Whether you're a newbie or a seasoned data aficionado, our course offers a thrilling journey towards becoming a Tableau powerhouse.
                             </p>
                           </div>
                           
                       </div>
                       <p className='mt-8 text-xl'>
                               #1 Join <span className='text-goldenrod text-2xl'>The Interns</span> and craft your path to success within our diverse and supportive community.
                       </p>
                       <div className='cursor-pointer'>
                           <div onClick={()=>navigate("/Register")}
                           className="bg-goldenrod w-full md:w-fit text-white py-[14px] px-[18px] hover:bg-goldenrod transition-all duration-200 hover:scale-105 hover:text-black mt-4 rounded-md font-mullish font-bold text-center">Join Now
                           <ChevronRight className='inline-block' />
                       </div>
                   </div>
               </div>
               <div className='flex-shrink-0 mx-auto my-auto xl:block hidden'>
                   <img src={tableau} alt="tableauimg" className="w-[450px] rounded-xl"/> 
               </div>     
           </div>

           <div className='w-full text-white relative lg:p-[5rem] md:p-[3rem] p-[1rem] shadow-md text-center md:-top-10 -top-6 mt-[4rem] md:mt-[2rem]'>
                   <div className='relative z-10'>
                     <div className='flex justify-center items-center '>
                       <img src={bg} alt="" className='absolute -z-10 hidden xl:block lg:block lg:mt-10'/>

                    </div>
                     <div className='flex justify-center md:col-span-3 mb-10'>
                       <h1 className='font-mullish text-4xl mt-2 font-bold text-center '>Key Features</h1>
                     </div> 
                           <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8 text-center '>
                               {features.slice(0, 6).map((card, index) => (
                               <div key={index}>
                               <Card title={card.title} description={card.description} icon={card.icon}/>
                               </div>
                               ))}
                           </div>
                          <HorizontalLogoSlider />
                   </div>
               </div>
           </div>
           <div className='w-full md:-mt-36 -mt-8'>
              <WhyChoose />
            </div>
            <TableauSkill/>                   
           </div>

           
           <ScrollToTopButton />
           <a href="https://api.whatsapp.com/send/?phone=918376083977&text&type=phone_number&app_absent=0" rel='noreferrer' className="fixed md:bottom-[4rem] bottom-2 md:right-5
            right-3 rounded-xl shadow-3xl z-50" target='_blank'>
               <img src={whatsapp} alt="whatsappimg" style={{height:"60px" , width:"60px",borderRadius:"50%"}} />
           </a>
           
       </section>
       <Footer /></>
    );
}

export default Tableau;
