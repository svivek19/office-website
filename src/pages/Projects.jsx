import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import projectDetails from "../json/Projects.json";

console.log(projectDetails.projectDetails);

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="accordion-group">
      <div
        className={`accordion ${activeIndex === 0 ? "active" : ""}`}
        id="heading-one"
      >
        <button
          className="accordion-toggle py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 rounded-lg"
          onClick={() => toggleAccordion(0)}
          aria-controls="collapse-one"
        >
          {activeIndex === 0 ? <FiMinus size={24} /> : <FiPlus size={24} />}
          Accordion #1
        </button>
        <div
          id="collapse-one"
          className={`accordion-content w-full overflow-hidden transition-[height] duration-300 ${
            activeIndex === 0 ? "" : "hidden"
          }`}
        >
          <div className="text-gray-800">
            <em>This is the third item's accordion body.</em> It is hidden by
            default, until the collapse plugin adds the appropriate classes that
            we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
