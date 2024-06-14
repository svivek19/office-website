import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const updateYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className="bg-slate-900 text-slate-100 px-3 md:px-8 py-6 md:py-12 selection:text-gray-900">
      <div className="block md:flex justify-between items-center">
        <div className="p-4 flex flex-col space-y-4 w-full md:w-1/2">
          <h1 className="text-[15px] md:text-lg font-semibold">
            Quantum Sharq Innovative Solutions
          </h1>
          <p className="text-[12px] md:text-[15px] text-slate-300">
            ifo.quantumsharq@gmail.com
          </p>
          <p className="text-slate-300 text-[12px] md:text-[15px]">
            Flat No.3D, Dolphin Flats, No.99 & 100, Vaibhav Nagar, phase-I, Opp
            to VIT, Vellore- 632014
          </p>
          <p className="text-slate-300 text-[12px] md:text-[15px]">
            +91 9342836860{" "}
          </p>
        </div>
        <div className="flex  p-4 md:p-0 justify-start space-x-6 text-slate-400 text-sm underline underline-offset-2 ">
          <a
            href="https://forms.gle/MNQuffQD9VowYrh2A"
            target="_blank"
            className="hover:text-sky-600 transition-all duration-500"
          >
            Contact
          </a>
          <Link
            to={"/career"}
            className="hover:text-sky-600 transition-all duration-500"
          >
            Careers
          </Link>
        </div>
      </div>
      {/* copyrights */}
      <div className="flex justify-center mt-5 text-[10px] md:text-[14px]">
        <h4>
          © {updateYear()},{" "}
          <span className="text-sky-300">
            Quantum Sharq Innovative Solutions
          </span>
          . All Rights Reserved.
        </h4>
      </div>
    </div>
  );
};

export default Footer;
