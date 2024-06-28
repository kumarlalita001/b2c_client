import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import HeroSection from "../components/Hero.jsx";
import MissionSection from "../components/Mission";
import WhyChooseSection from "../components/WhyChoose";
import Features from "../components/Features";
import Promises from "../components/Promises";
import Courses from "../components/Courses";
import FAQ from "../components/FAQ";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <NavBar />
      <HeroSection />
      <Courses />
      <MissionSection />
      <WhyChooseSection />
      <Features />
      <Promises />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
