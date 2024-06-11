import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-900 flex flex-col space-y-4 text-slate-100 px-8 py-12">
      <div className="p-4 flex flex-col space-y-4 w-1/2">
        <h1 className="text-xl font-semibold">
          Quantum Sharq Innovative Solutions
        </h1>
        <p className="text-xl text-slate-300">ifo.quantumsharq@gmail.com</p>
        <p className="text-slate-300 text-lg">
          Flat No.3D, Dolphin Flats, No.99 & 100, Vaibhav Nagar,phase-I,Opp to
          VIT,Vellore- 632014
        </p>
        <p className="text-slate-300 text-lg">9342836860 </p>
        {/* right contact,  */}
      </div>
      {/* copyrights */}
    </div>
  );
};

export default Footer;
