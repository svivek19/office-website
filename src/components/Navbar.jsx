import React, { useState } from "react";
import logo from "../assets/company-logo.png";
import { Link } from "react-router-dom";
import { IoMdMore } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a href="/" className="flex items-center">
          <img src={logo} className="w-28 h-28" alt="Logo" />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 justify-center text-gray-900 rounded-lg md:hidden outline-none"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? "true" : "false"}
          onClick={toggleMenu}
        >
          <IoMdMore className="text-4xl" />
        </button>
        <div
          className={`w-full md:block md:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 ">
            <li>
              <Link
                to={"/"}
                onClick={toggleMenu}
                className="block py-2 px-3 text-gray-900 md:p-0  hover:text-sky-600 transition-all duration-500 text-[18px] font-medium"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/projects"}
                onClick={toggleMenu}
                className="block py-2 px-3 text-gray-900 md:p-0 hover:text-sky-600 transition-all duration-500 text-[18px] font-medium"
              >
                Our Projects
              </Link>
            </li>

            <li>
              <Link
                to={"/contact"}
                onClick={toggleMenu}
                className="block py-2 px-3 text-gray-900 md:p-0 hover:text-sky-600 transition-all duration-500 text-[18px] font-medium"
              >
                Add Enquiry
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
