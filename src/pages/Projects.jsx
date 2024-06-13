import React, { useEffect, useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import projectDetails from "../json/Projects.json";

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
      <div>
        {data.map((item, index) => (
          <div
            className={`${activeIndex === index ? "active" : ""}`}
            key={item.id}
          >
            <button
              className="py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 rounded-lg"
              onClick={() => toggleItem(index)}
            >
              {activeIndex === index ? (
                <FiMinus size={24} />
              ) : (
                <FiPlus size={24} />
              )}
              {item.title}
            </button>
            <div
              className={`w-full overflow-hidden transition-[height] duration-300 ${
                activeIndex === index ? "" : "hidden"
              }`}
            >
              <div className="text-gray-800 flex flex-col space-y-4 text-justify mx-0 md:mx-10">
                <div>
                  <h3 className="text-lg font-medium text-sky-600">Overview</h3>
                  <p className="text-slate-700 mx-6">{item.overview}</p>
                </div>
                <div>
                  <ul>
                    <li className="text-green-500 text-lg font-medium">
                      Features
                    </li>
                    {item.features.map((list, i) => (
                      <li key={i} className="mx-6 text-slate-700 blue-tick">
                        {list}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-sky-500">Benefits</h3>
                  <p className="text-slate-700 mx-6">{item.benefits}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
