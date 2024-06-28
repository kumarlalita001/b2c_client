import React from "react";
import Footer from "../Footer/Footer";
import { Navbar } from "@material-tailwind/react";
import NavBar from "../NavBar/NavBar";

const TermsOfUse = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto lg:px-56 px-5 py-8 flex flex-col text-white">
        <h1 className="md:text-5xl text-3xl  font-bold mb-4 text-center py-10">
          Terms & Conditions
        </h1>
        <h2 className="text-xl font-semibold mb-5">1. Introduction</h2>
        <p className="mb-20">
          By accessing or using our website, you agree to be bound by these
          Terms of Use. Please read these terms carefully before using our
          services.
        </p>
        <h2 className="text-xl font-semibold mb-5">2. Content Ownership</h2>
        <p className="mb-20">
          All content on this website, including text, images, and videos, is
          owned by The Interns (Nurturing Interns Private Limited) unless
          otherwise stated. You may not reproduce, distribute, or use our
          content without permission.
        </p>
        <h2 className="text-xl font-semibold mb-5">3. User Conduct</h2>
        <p className="mb-20">
          You agree to use our website and services for lawful purposes only.
          You may not engage in any conduct that violates these terms or
          infringes on the rights of others.
        </p>
        <h2 className="text-xl font-semibold mb-5">4. Disclaimer</h2>
        <p className="mb-20">
          While we strive to provide accurate and up-to-date information, we
          make no representations or warranties of any kind, express or implied,
          about the completeness, accuracy, reliability, or suitability of the
          information on our website.
        </p>
        <h2 className="text-xl font-semibold mb-5">
          5. Limitation of Liability
        </h2>
        <p className="mb-20">
          We shall not be liable for any direct, indirect, incidental, special,
          or consequential damages arising out of or in any way connected with
          your use of our website or services.
        </p>
        <h2 className="text-xl font-semibold mb-5">6. Governing Laws</h2>
        <p className="mb-20">
          These Terms of Use shall be governed by and construed in accordance
          with the laws of India
        </p>
      </div>
      <Footer />
    </>
  );
};

export default TermsOfUse;
