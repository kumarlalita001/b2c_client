import React from "react";

const LeftBar = () => {
  return (
    <div className="md:w-[40vw] md:h-[90vh] w-screen  bg-black relative rounded-tl-3xl rounded-bl-3xl  overflow-hidden  shadow-lg ">
      {/* <div className="absolute top-5 left-[25px]">
        <div className="bg-bgLogo filter invert  bg-cover w-12 h-12 absolute  z-10"></div>
        <h1 className="text-md ml-12 mt-4 text-white  font-extrabold  text-center">
          THE INTERNS
        </h1>
        <span className="text-white ml-2 font-bold text-xs">
          Nurturing Students Growth{" "}
        </span>
      </div> */}

      <div className="absolute xl:top-[5%] xl:left-[20%] lg:text-[2rem] lg:top-[10rem] md:top-[10rem] md:text-[1.5rem] top-36 left-[25px] text-[30px]  font-extrabold ml-3 mr-3 mb-5">
        <h1 className="text-justify text-white  ">
          {" "}
          Learn From World's
          <br /> <span className="text-orange-100">
            {" "}
            Best Instructors
          </span> 🌍 <br />
          Around the World.
        </h1>
      </div>

      <div className=" absolute z-20 top-96 lg:top-[30rem] xl:top-[32%] left-[50px] xl:left-[20%] md:left-[0rem] lg:left-[2rem]  w-[100%]">
        <div className="bg-bgImage absolute w-80 h-96  md:w-72 md:h-72  bg-cover bg-center"></div>
      </div>
    </div>
  );
};

export default LeftBar;
