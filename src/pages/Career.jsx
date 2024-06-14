import React, { useEffect } from "react";
import jobs from "../json/JobList.json";

const Career = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-11/12 md:w-5/6 mx-auto mb-5">
      <div data-aos="zoom-in" data-aos-duration="3000">
        <div
          className="mt-1 mb-6 justify-center space-y-8"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          <h1 className="text-4xl font-semibold">Current Openings</h1>
          <hr className="w-14 border-2 border-sky-600" />
        </div>
      </div>

      {jobs.current_openings.map((job) => (
        <div key={job.id}>
          <div
            className=" bg-slate-100 hover:bg-slate-200 cursor-pointer transition duration-500 my-6 md:my-4 rounded-md p-3 flex justify-between flex-col md:flex-row md:items-center"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <div className="flex flex-col  space-y-3">
              <p className="bg-gray-500 w-fit px-2 py-1 text-white rounded-full text-xs">
                {job.id}
              </p>
              <h1 className="text-2xl font-medium hover:text-sky-700 transition duration-500 cursor-pointer">
                {job.role}
              </h1>
              <h3 className="flex space-x-2 flex-wrap">
                {job.requirements.map((item, i) => (
                  <span
                    key={i}
                    className="bg-slate-700 w-fit text-white px-2 py-1 rounded-full text-xs select-none"
                  >
                    {item}
                  </span>
                ))}
              </h3>
              <p
                className={`text-sm font-medium bg-violet-700 w-fit px-2 py-1 rounded-md text-white ${
                  job.experience === "Fresher" ? "block" : "hidden"
                }`}
              >
                HOT
                <span className="text-sm animate-fire">🔥</span>
              </p>
            </div>
            <div className="mt-4 flex flex-row space-y-0 md:space-y-2 md:flex-col justify-between">
              <h4 className="text-base capitalize text-sky-800">
                {job.experience}
              </h4>
              <h5 className="text-base uppercase text-red-700">{job.salary}</h5>
              <button className="text-start my-2 text-sm text-violet-800 underline underline-offset-2 hover:text-violet-500">
                Apply
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* openings */}

      <div data-aos="zoom-in" data-aos-duration="3000" className="my-6">
        <div
          className="mt-1 mb-6 justify-center space-y-8"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          <h1 className="text-4xl font-semibold">Openings</h1>
          <hr className="w-14 border-2 border-sky-600" />
        </div>
      </div>

      {jobs.oppenigs.map((job) => (
        <div key={job.id}>
          <div
            className=" bg-slate-100 hover:bg-slate-200 cursor-pointer transition duration-500 my-6 md:my-4 rounded-md p-3 flex justify-between flex-col md:flex-row md:items-center"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <div className="flex flex-col  space-y-3">
              <p className="bg-gray-500 w-fit px-2 py-1 text-white rounded-full text-xs">
                {job.id}
              </p>
              <h1 className="text-2xl font-medium hover:text-sky-700 transition duration-500 cursor-pointer">
                {job.role}
              </h1>
              <h3 className="flex space-x-2 flex-wrap">
                {job.requirements.map((item, i) => (
                  <span
                    key={i}
                    className="bg-slate-700 w-fit text-white px-2 py-1 rounded-full text-xs select-none"
                  >
                    {item}
                  </span>
                ))}
              </h3>
              <p
                className={`text-sm font-medium bg-violet-700 w-fit px-2 py-1 rounded-md text-white ${
                  job.experience === "Fresher" ? "block" : "hidden"
                }`}
              >
                HOT
                <span className="text-sm animate-fire">🔥</span>
              </p>
            </div>
            <div className="mt-4 flex flex-row space-y-0 md:space-y-2 md:flex-col justify-between">
              <h4 className="text-base capitalize text-sky-800">
                {job.experience}
              </h4>
              <h5 className="text-base uppercase text-red-700">{job.salary}</h5>
              <button className="text-start my-2 text-sm text-violet-800 underline underline-offset-2 hover:text-violet-500">
                Apply
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Career;
