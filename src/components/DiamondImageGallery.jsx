import React from "react";
import imgOne from "../assets/services/img1.jpg";
import imgTwo from "../assets/services/img2.jpg";
import imgThree from "../assets/services/img3.jpg";
import imgFour from "../assets/services/img4.jpg";

const DiamondImageGallery = () => {
  return (
    <div className="flex justify-center items-center mt-28">
      <div className="relative w-72 h-72 hidden md:block ">
        <div
          className="absolute w-36 h-36 bg-cover transform rotate-45 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain rounded-md shadow-md hover:scale-110 transition-all duration-500"
          style={{ backgroundImage: `url(${imgOne})` }}
        ></div>
        <div
          className="absolute w-36 h-36 bg-cover transform rotate-45 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 object-contain rounded-md shadow-md hover:scale-110 transition-all duration-500"
          style={{ backgroundImage: `url(${imgTwo})` }}
        ></div>
        <div
          className="absolute w-36 h-36 bg-cover transform rotate-45 left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 object-contain rounded-md shadow-md hover:scale-110 transition-all duration-500"
          style={{ backgroundImage: `url(${imgThree})` }}
        ></div>
        <div
          className="absolute w-36 h-36 bg-cover transform rotate-45 right-0 top-1/2 -translate-y-1/2 translate-x-1/2 object-contain rounded-md shadow-md hover:scale-110 transition-all duration-500"
          style={{ backgroundImage: `url(${imgFour})` }}
        ></div>
      </div>
    </div>
  );
};

export default DiamondImageGallery;
