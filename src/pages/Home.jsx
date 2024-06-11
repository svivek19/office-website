import React from "react";
import DiamondImageGallery from "../components/DiamondImageGallery";
import mission from "../assets/mission.png";
import vision from "../assets/vision.gif";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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

      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto mt-4 md:mt-36">
        <div className="w-full md:w-[70%] mx-auto flex justify-center items-center">
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

      {/* vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto my-4 md:mt-36 md:mb-10">
        <div className="mt-16 justify-center space-y-8">
          <h1 className="text-4xl font-semibold">Our Vision</h1>
          <hr className="w-14 border-2 border-sky-600" />
          <p className="text-justify text-lg text-gray-800">
            At Quantum Sharq Innovative Solutions, our vision is to create a
            safer, more efficient, and sustainable world by harnessing the power
            of technology. We aim to be the leading provider of cutting-edge
            solutions that address critical challenges in public safety,
            agriculture, traffic management, and beyond. By continuously pushing
            the boundaries of innovation, we strive to improve the quality of
            life for individuals and communities globally.
          </p>
        </div>
        <div className="w-full md:w-[70%] mx-auto order-first md:order-last flex justify-center items-center">
          <img src={vision} alt="mission logo" />
        </div>
      </div>

      {/* Social Accounts */}

      <div className="flex flex-col space-y-2 justify-center items-center mt-12 mb-12">
        <h1 className="text-4xl font-semibold">Connect Us!</h1>
        <hr className=" w-14 border-2 border-sky-600" />

        <div className="flex py-14 text-3xl space-x-6">
          <div className="border border-slate-800 p-3 rounded-full hover:bg-sky-200 transition-all duration-500 transform hover:scale-110 cursor-pointer">
            <a href="#">
              <FaXTwitter />
            </a>
          </div>
          <div className="border border-slate-800 p-3 rounded-full hover:bg-sky-200 transition-all duration-500 transform hover:scale-110 cursor-pointer">
            <a href="#">
              <FaLinkedin />
            </a>
          </div>
          <div className="border border-slate-800 p-3 rounded-full hover:bg-sky-200 transition-all duration-500 transform hover:scale-110 cursor-pointer">
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
