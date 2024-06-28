import React from "react";
import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Headers from "./components/Headers";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Otp from "./pages/Otp";
import Error from "./pages/Error";
import RegisterOtp from "./pages/registerOtp";
import Home from "./pages/Home";
import "./index.css";
import BasicSQL from "./components/CourseSection/BasicSQL";
import AdvanceSQL from "./components/CourseSection/AdvanceSQL";
import MSExcel from "./components/CourseSection/MSExcel";
import GoogleSheets from "./components/CourseSection/GoogleSheets";
import Tableau from "./components/CourseSection/Tableau";
import PowerBi from "./components/CourseSection/PowerBi";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import RefundPolicy from "./components/RefundPolicy/RefundPolicy";
import TermsOfUse from "./components/TermsOfUse/TermsOfUse";
import HireFromUs from "./pages/HireFromUs";

function App() {
  return (
    // <div className="bg-gray-300 w-full min-h-full">

    <div className="min-w-full  overflow-x-hidden md:overflow-hidden ">
      <div>
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user/otp" element={<Otp />} />
            <Route path="/user/register" element={<RegisterOtp />} />
            <Route path="*" element={<Error />} />
            <Route path="/" element={<Home />} />

            <Route path="/powerbi" element={<PowerBi />} />
            <Route path="/tableau" element={<Tableau />} />

            <Route path="/basicsql" element={<BasicSQL />} />
            <Route path="/AdvancedSQL" element={<AdvanceSQL />} />

            <Route path="/MS-Excel" element={<MSExcel />} />
            <Route path="/GoogleSheets" element={<GoogleSheets />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/terms-conditions" element={<TermsOfUse />} />
            <Route path="/HireFromUs" element={<HireFromUs />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
