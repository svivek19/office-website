import React, { useEffect, useState } from "react";
import projectDetails from "../json/Projects.json";
import "../App.css";

const data = projectDetails.projectDetails;

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="w-5/6 md:w-4/6 mx-auto mb-5"
      data-aos="zoom-in"
      data-aos-duration="3000"
    >
      <div
        className="mt-1 mb-4 justify-center space-y-8"
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        <h1 className="text-4xl font-semibold">Our Products</h1>
        <hr className="w-14 border-2 border-sky-600" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"></div>
    </div>
  );
};

export default Projects;
