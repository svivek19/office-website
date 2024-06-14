import React, { useEffect } from "react";
import projectDetails from "../json/Projects.json";
import "../App.css";
import Timeline from "../components/Timeline";

const data = projectDetails.projectDetails;

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-5/6 md:w-4/6 mx-auto mb-5">
      <div
        className="mt-1 mb-6 justify-center space-y-8"
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        <h1 className="text-4xl font-semibold">Our Products</h1>
        <hr className="w-14 border-2 border-sky-600" />
      </div>

      <div>
        <Timeline data={data} />
      </div>
    </div>
  );
};

export default Projects;
