import React from "react";
import DiamondImageGallery from "../components/DiamondImageGallery";

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto mt-4">
      <div className="flex flex-col justify-center space-y-8">
        <div className="text-start flex flex-col space-y-3">
          <p className="text-4xl font-semibold">Welcome to</p>
          <p className="text-2xl font-semibold">
            Quantum Sharq Innovative Solutions
          </p>
          <hr className="w-14 border-2 border-sky-600" />
        </div>
        <p className="text-justify text-lg text-gray-800">
          Welcome to Quantum Sharq, a leader in innovative technology solutions.
          We specialize in developing advanced systems for crime analysis,
          automation, and detection. Explore our projects and see how we are
          making a difference.
        </p>
      </div>

      <div>
        <DiamondImageGallery />
      </div>
    </div>
  );
};

export default Home;
