import React from "react";
import ImageSlider from './ImageSlider';
import promise from '../Images/promise.png';
import join from '../Images/join.svg';
import { useNavigate } from "react-router-dom";


function PromiseSection() {
    const images = [
        'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=450&h=550&dpr=1',
        'https://images.pexels.com/photos/389818/pexels-photo-389818.jpeg?auto=compress&cs=tinysrgb&w=450&h=550&dpr=1',
        'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=450&h=550&dpr=1',
    ];
const navigate=useNavigate();
    // Array of paragraph content
    const paragraphContent = [
        "At The Interns, we are committed to providing a supportive learning environment where every student feels valued and empowered to succeed.",
        "With our comprehensive courses, expert instructors, and dedicated support team, we assure you that your journey with us will be nothing short of exceptional.",
        "Take the first step towards a brighter future today!"
    ];
    const login=(e)=>{
        navigate("/Register");

    }
    return (
        <div className="max-w-md mx-auto my-4 rounded-xl md:max-w-5xl mt-[5rem] border-l-2 border-b-4 relative text-white">

            <img src={join} alt="joinimage" loading='lazy' className=" absolute -translate-x-24 -translate-y-[6.6rem] lg:-right-[6rem] md:-right-[5rem] opacity-80 lg:w-[160px] lg:h-[160px] md:h-[160px] md:w-[160px] hidden md:block "/>
             <div className="flex flex-col">
                <img src={promise} alt="promiseimg" loading='lazy' style={{height:"100px",width:"100px"}} className="absolute opacity-100 lg:block lg:left-[15rem] xl:left-[17rem] xl:block md:block md:left-[10rem] hidden bg-white rounded-bl-xl rounded-br-xl "/>
                <h1 className="tracking-wide font-mullish text-2xl md:text-3xl font-bold m-8 text-center">
                    Our Promise
                </h1>
             </div>
           
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-2">
                <div className="font-mullish text-lg md:mt-0 -mt-6">
                    {paragraphContent.map((paragraph, index) => (
                        <p key={index} className="mt-2 px-4">{paragraph}</p>
                    ))}
                    <button onClick={
                        login
                    } className="mt-5 md:mx-3 text-white font-bold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-110 bg-goldenrod w-full md:w-40">Join</button>
    

                </div>
                <div className="md:shrink-0 mb-4">
                    <ImageSlider images={images} />
                </div>
            </div>
        </div>
    );
}

export default PromiseSection;
