import React from "react";
import HireFromUs from "../components/HireComponent/HireFromUs";
import HowWeAssistu from "../components/HireComponent/HowWeAssistu";
import GetInTouch from "../components/GetInTouch";
import WhyHireFromUs from "../components/HireComponent/WhyHireFromUs";

function HireFromUsPage() {
  return (
    <div>
      <HireFromUs />
      <HowWeAssistu />
      <WhyHireFromUs/>
      <GetInTouch/>
    </div>
  );
}

export default HireFromUsPage;
