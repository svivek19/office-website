import React from "react";
import jobs from "../json/JobList.json";

const Career = () => {
  return (
    <div>
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
      </div>
    </div>
  );
};

export default Career;
