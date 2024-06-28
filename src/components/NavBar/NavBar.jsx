import React, { useState, useEffect } from "react";
import companyLogo from "../../assets/companyLogo.png";
import styles from "./NavBar.module.css";
// import expandArrow from "../../assets/expandArrow.png";
import powerbiIcon from "../../assets/powerBiIcon.png";
import sqlIcon from "../../assets/sqlIcon.png";
import advanceSqlIcon from "../../assets/microsoftSqlIcon.png";
import tableauIcon from "../../assets/tableau.png";
import googleSheetsIcon from "../../assets/googleSheets.png";
import msExcelSheetIcon from "../../assets/msExcelIcon.png";
import whiteExpandArrow from "../../assets/whiteExpandArrow.png";
import { IoMenu, IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import HireFromUs from "../HireComponent/HireFromUs";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > 1300);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.navBar}>
      <div className={styles.logo}>
        <img src={companyLogo} alt="company logo" />
        <p>
          The <span style={{ color: "#BFA55B" }}>Interns</span>
        </p>
      </div>
      <motion.div
        className={`${styles.centerNav} ${isOpen ? styles.active : ""}`}
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: isOpen ? "0%" : "100%" }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.navDiv}>
          <Link to={"/"}>Home </Link>
          {/* <a href="/">Home</a> */}
        </div>
        <div className={styles.dropdown}>
          <button className={styles.dropdownButton}>
            <p>Data Analytics</p>
            <div className={styles.arrow}>
              <img src={whiteExpandArrow} alt="arrow" />
            </div>
          </button>
          <div className={styles.dropdownContent}>
            <div className={styles.list}>
              <img src={powerbiIcon} alt="power bi icon" />
              {/* <a href="/powerbi">Power Bi</a> */}
              <Link to={"/powerbi"}>Power Bi</Link>
            </div>
            <div className={styles.list}>
              <img src={tableauIcon} alt="tableau icon" />
              {/* <a href="/tableau">Tableau</a> */}
              <Link to={"/tableau"}>Tableau</Link>
            </div>
          </div>
        </div>
        <div className={styles.dropdown}>
          <button className={styles.dropdownButton}>
            <p>SQL </p>
            <div className={styles.arrow}>
              <img src={whiteExpandArrow} alt="arrow icon" />
            </div>
          </button>
          <div className={styles.dropdownContent}>
            <div className={styles.list}>
              <img src={sqlIcon} alt="sql icon" />
              <Link to={"/basicsql"}>Basic SQL</Link>
              {/* <a href="/basicsql">Basic SQL</a> */}
            </div>
            <div className={styles.list}>
              <img src={advanceSqlIcon} alt="advance sql icon" />
              {/* <a href="/AdvancedSQL">Advanced SQL</a> */}
              <Link to={"/AdvancedSQL"}>Advanced SQL</Link>
            </div>
          </div>
        </div>
        <div className={styles.dropdown}>
          <button className={styles.dropdownButton}>
            <p>SpreadSheet</p>
            <div className={styles.arrow}>
              <img src={whiteExpandArrow} alt="arrow icon" />
            </div>
          </button>
          <div className={styles.dropdownContent}>
            <div className={styles.list}>
              <img src={googleSheetsIcon} alt="google sheet icon" />
              {/* <a href="/Googlesheets">Google Sheets</a> */}
              <Link to={"/Googlesheets"}>Google Sheets</Link>
            </div>
            <div className={styles.list}>
              <img src={msExcelSheetIcon} alt="ms-excel icon" />
              {/* <a href="/MS-Excel">MS-Excel</a> */}
              <Link to={"/MS-Excel"}>MS-Excel</Link>
            </div>
          </div>
        </div>
        <div className={styles.hireButton}>
          <Link to={"/HireFromUs"}>
            <span>Hire from Us</span>
          </Link>
        </div>
        <div className={styles.navButtons}>
          <div className={styles.loginButton}>
            <button>
              <Link to={"/login"}>Login</Link>
            </button>
          </div>
          <div className={styles.registerButton}>
            <button>
              {/* <a href="/register" target="_self">
                Register
              </a> */}
              <Link to={"/register"}>Register</Link>
            </button>
          </div>
        </div>
      </motion.div>
      <motion.button
        className={`${styles.navToggleButton} ${isOpen ? styles.active : ""}`}
        onClick={toggleMenu}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <IoClose /> : <IoMenu />}
      </motion.button>
    </div>
  );
};

export default NavBar;

// import React, { useState } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { useNavigate } from "react-router-dom";
// import { MdOutlineArrowDropDown } from "react-icons/md";
// import { MdOutlineClose } from "react-icons/md";
// import PowerBiLogo from "../../assets/powerBiIcon.png";
// import tableauLogo from "../../assets/tableau.png";

// const NavBar = () => {
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false);
//   const [isOne, setIsOne] = useState(false);
//   const [isTwo, setIsTwo] = useState(false);
//   const [isThree, setIsThree] = useState(false);
//   return (
//     <div className="w-full h-[8vh]  xl:h-[11vh] relative z-50  lg:fixed top-0 bg-black  flex justify-between items-center bg-blue-950">
//       <div className=" pl-4 xl:pl-14  ">
//         <div className="bg-bgLogo bg-cover filter invert text-white w-11 h-11 absolute  z-10"></div>
//         <h1 className="text-md ml-11   mt-4 text-white  font-extrabold  text-center">
//           THE INTERNS
//         </h1>
//         <span className="text-white ml-2 font-bold text-xs">
//           Nurturing Students Growth{" "}
//         </span>
//       </div>
//       <div className="text-white hidden ml-11 xl:block ">
//         <ul className="text-white flex gap-8 text-lg ">
//           <li>Home</li>
//           <li className="group  relative">
//             Data Analytics
//             <span
//               onClick={() => {
//                 setIsTwo(false);
//                 setIsThree(false);
//                 setIsOne((prev) => !prev);
//               }}
//               className="text-white h-5 font-bold text-lg text-center inline-block"
//             >
//               <MdOutlineArrowDropDown />
//             </span>
//             <ul
//               className={` ${
//                 isOne
//                   ? "absolute top-10 py-3 px-3 rounded-md shadow-md shadow-white  bg-deepBlue  group-hover:block"
//                   : "hidden "
//               }`}
//             >
//               <li className="py-1 mb-1 flex gap-1 justify-center text-[15px] font-serif items-center bg-black px-6">
//                 <img
//                   className="w-5 inline-block"
//                   src={PowerBiLogo}
//                   alt="powerBi"
//                 />
//                 Power&nbsp;Bi
//               </li>
//               <li className="py-1 bg-black flex justify-center items-center  font-serif text-[15px] px-6">
//                 <img
//                   className="w-5 mr-2 inline-block"
//                   src={tableauLogo}
//                   alt="powerBi"
//                 />
//                 Tableau
//               </li>
//             </ul>
//           </li>
//           <li className="relative">
//             SQL
//             <span
//               onClick={() => {
//                 setIsOne(false);
//                 setIsThree(false);
//                 setIsTwo((prev) => !prev);
//               }}
//               className="text-white h-5 font-bold  text-lg text-center inline-block"
//             >
//               <MdOutlineArrowDropDown />
//             </span>
//             <ul
//               className={` ${
//                 isTwo
//                   ? "absolute top-10 left-[-40px] py-3 px-3   rounded-md  bg-deepBlue  group-hover:block"
//                   : "hidden "
//               }`}
//             >
//               <li className="py-1 mb-1  bg-black px-4">Basic&nbsp;Sql</li>
//               <li className="py-1  bg-black px-4">Advance&nbsp;Sql</li>
//             </ul>
//           </li>
//           <li className="relative">
//             SpreadSheet
//             <span
//               onClick={() => {
//                 setIsOne(false);
//                 setIsTwo(false);
//                 setIsThree((prev) => !prev);
//               }}
//               className="text-white h-5 font-bold text-lg text-center inline-block"
//             >
//               <MdOutlineArrowDropDown />
//             </span>
//             <ul
//               className={` ${
//                 isThree
//                   ? "absolute top-10 left-[-20px] py-3 px-3   rounded-md  bg-deepBlue  group-hover:block"
//                   : "hidden "
//               }`}
//             >
//               <li className="py-1 mb-1  bg-black px-4">GoogleSheet</li>
//               <li className="py-1  bg-black px-4">MS-Excel</li>
//             </ul>
//           </li>
//         </ul>
//       </div>

//       <div className="pt-2 hidden xl:block">
//         <h2 className=" px-3 hover:bg-[#ede77c] py-[5px] rounded-md bg-[#a39f50] text-lg text-black font-bold">
//           Hire From Us
//         </h2>
//       </div>

//       <div className="flex  text-white  pr-14 pt-2 hidden gap-10 xl:block ">
//         <button className="py-[5px] px-4 rounded-md bg-[#ada843] text-lg text-black font-bold">
//           Login
//         </button>
//         <button className="py-[5px] ml-5 px-2 rounded-md bg-[#ada843] text-lg text-black font-bold">
//           Register
//         </button>
//       </div>

//       <p
//         onClick={() => setIsOpen((prev) => !prev)}
//         className="pr-6 text-2xl pt-2 xl:hidden font-bold text-black"
//       >
//         {isOpen ? <MdOutlineClose /> : <GiHamburgerMenu />}
//       </p>

//       <div
//         className={`${
//           isOpen
//             ? "xl:hidden  top-[8vh] z-20 h-[92vh] absolute w-[100vw]  bg-black "
//             : "xl:hidden hidden top-[8vh] z-20 h-[92vh] absolute w-[100vw] bg-black "
//         } flex flex-col items-center py-24 `}
//       >
//         <div className="text-white h-[60%] ">
//           <ul className="text-white flex flex-col gap-10  text-decoration-none text-lg">
//             <li className="text-2xl ">Home</li>
//             <li>
//               Data Analytics{" "}
//               <span
//                 onClick={() => {
//                   setIsTwo(false);
//                   setIsThree(false);
//                   setIsOne((prev) => !prev);
//                 }}
//                 className="text-white h-5 font-bold text-lg text-center inline-block"
//               >
//                 <MdOutlineArrowDropDown />
//               </span>
//               <ul className={`${isOne ? " " : "hidden"} pl-6 pt-5`}>
//                 <li className="pb-5" onClick={() => navigate("/powerbi")}>
//                   {" "}
//                   Power Bi{" "}
//                 </li>
//                 <li onClick={() => navigate("/tableau")}>Tableau</li>
//               </ul>
//             </li>

//             <li className="">
//               SQL
//               <span
//                 onClick={() => {
//                   setIsOne(false);
//                   setIsThree(false);
//                   setIsTwo((prev) => !prev);
//                 }}
//                 className="text-white h-5 font-bold text-lg text-center inline-block"
//               >
//                 <MdOutlineArrowDropDown />
//               </span>
//               <ul className={`${isTwo ? " " : "hidden"} pl-6 pt-5`}>
//                 <li className="pb-5" onClick={() => navigate("/powerbi")}>
//                   {" "}
//                   Basic Sql{" "}
//                 </li>
//                 <li onClick={() => navigate("/AdvanceSql")}>Advance Sql</li>
//               </ul>
//             </li>

//             <li>
//               SpreadSheet
//               <span
//                 onClick={() => {
//                   setIsOne(false);
//                   setIsTwo(false);
//                   setIsThree((prev) => !prev);
//                 }}
//                 className="text-white h-5 font-bold text-lg text-center inline-block"
//               >
//                 <MdOutlineArrowDropDown />
//               </span>
//               <ul className={`${isThree ? " " : "hidden"} pl-6 pt-5`}>
//                 <li className="pb-5" onClick={() => navigate("/powerbi")}>
//                   {" "}
//                   Google Sheets
//                 </li>
//                 <li>MS-Excel</li>
//               </ul>
//             </li>
//           </ul>
//         </div>
//         <div className="">
//           <h2 className="mt-6 px-6 py-[6px] rounded-md bg-[#ada843] text-lg text-black font-bold">
//             Hire From Us
//           </h2>
//         </div>
//         <div className="flex  text-white  gap-10 lg:block  pt-10">
//           <button className="py-[6px] px-6 rounded-md bg-[#ada843] text-lg text-black font-bold">
//             Login
//           </button>
//           <button className="py-[6px] ml-5 px-4 rounded-md bg-[#ada843] text-lg text-black font-bold">
//             Register
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavBar;
