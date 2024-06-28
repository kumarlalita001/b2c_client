import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const RefundPolicy = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto lg:px-56 px-5 py-8 flex flex-col text-white">
        <h1 className="md:text-5xl text-3xl font-bold mb-4 text-center py-10">
          Refund Policy
        </h1>
        <h2 className="text-xl font-semibold mb-5">1. Introduction</h2>
        <p className="mb-20">
          We want you to be completely satisfied with your purchase. If you are
          not satisfied with our courses, we offer a refund under the following
          conditions:
        </p>
        <h2 className="text-xl font-semibold mb-5">2. Eligibility</h2>
        <p className="mb-20">
          To be eligible for a refund, you must request it within [number of
          days] days of purchase.
        </p>
        <h2 className="text-xl font-semibold mb-5">3. Course Completion</h2>
        <p className="mb-20">
          Refunds are only available if less than [percentage]% of the course
          content has been accessed.
        </p>
        <h2 className="text-xl font-semibold mb-5">
          4. How to Request a Refund
        </h2>
        <p className="mb-20">
          To request a refund, please contact us at [contact email] with your
          purchase details.
        </p>
        <h2 className="text-xl font-semibold mb-5">5. Processing Time</h2>
        <p className="mb-20">
          Refunds will be processed within [number of days] business days after
          approval.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default RefundPolicy;
