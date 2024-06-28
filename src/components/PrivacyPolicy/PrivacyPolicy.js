import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto lg:px-56 px-5 py-8 flex flex-col text-white">
        <h1 className="md:text-5xl text-3xl font-bold mb-4 text-center  py-10">
          Privacy Policy
        </h1>
        <h2 className="text-xl font-semibold mb-5">1. Introduction</h2>
        <p className="mb-20 ">
          At The Interns (Nurturing Interns Private Limited), we are committed
          to protecting your privacy. This Privacy Policy outlines how we
          collect, use, and safeguard your personal information when you visit
          our website or use our services.
        </p>
        <h2 className="text-xl font-semibold mb-5">
          2. Information Collection
        </h2>
        <p className="mb-20">
          We may collect personal information such as your name, email address,
          and contact details when you register for our courses or sign up for
          our newsletter.
        </p>
        <h2 className="text-xl font-semibold mb-5">3. Use of Information</h2>
        <p className="mb-20">
          We use your personal information to provide you with the services you
          request, to communicate with you, and to improve our offerings. We do
          not sell or share your information with third parties without your
          consent, except as required by law.
        </p>
        <h2 className="text-xl font-semibold mb-5">4. Data Security</h2>
        <p className="mb-20">
          We implement security measures to protect your personal information
          from unauthorized access and use.
        </p>
        <h2 className="text-xl font-semibold mb-5">5. Cookies</h2>
        <p className="mb-20">
          Our website may use cookies to enhance your browsing experience. You
          can adjust your browser settings to disable cookies if you prefer.
        </p>
        <h2 className="text-xl font-semibold mb-5">6. Third-Party Links</h2>
        <p className="mb-20">
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices or content of these websites.
        </p>
        <h2 className="text-xl font-semibold mb-5">
          7. Updates to Privacy Policy
        </h2>
        <p>
          We may update our Privacy Policy from time to time. Any changes will
          be reflected on this page.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
