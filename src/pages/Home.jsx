import React from "react";
import DiamondImageGallery from "../components/DiamondImageGallery";
import mission from "../assets/mission.png";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto mt-4 md:mt-0">
        <div className="flex flex-col justify-center space-y-8">
          <div className="text-start flex flex-col space-y-3">
            <p className="text-4xl font-semibold">Welcome to</p>
            <p className="text-2xl font-semibold">
              Quantum Sharq Innovative Solutions
            </p>
            <hr className="w-14 border-2 border-sky-600" />
          </div>
          <p className="text-justify text-lg text-gray-800">
            Welcome to Quantum Sharq, a leader in innovative technology
            solutions. We specialize in developing advanced systems for crime
            analysis, automation, and detection. Explore our projects and see
            how we are making a difference.
          </p>
        </div>

        <div>
          <DiamondImageGallery />
        </div>
      </div>

      {/* mission */}

      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto my-36">
        <div className="w-[70%] flex justify-center items-center">
          <img src={mission} alt="mission logo" />
        </div>
        <div className="mt-16 justify-center space-y-8">
          <h1 className="text-4xl font-semibold">Our Mission</h1>
          <hr className="w-14 border-2 border-sky-600" />
          <p className="text-justify text-lg text-gray-800">
            Our mission is to leverage technology to create a safer, more
            efficient world. We strive to deliver top-notch solutions tailored
            to the unique needs of our clients.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
