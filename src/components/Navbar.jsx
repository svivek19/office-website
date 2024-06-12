import React, { useState, useEffect } from "react";
import logo from "../assets/company-logo.png";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-10 backdrop-blur-sm  transition-all duration-200 ${
        isScrolled ? "bg-sky-50" : ""
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a href="/" className="flex items-center">
          <img src={logo} className="w-24 h-24" alt="Logo" />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 justify-center text-gray-900 rounded-lg md:hidden outline-none"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? "true" : "false"}
          onClick={toggleMenu}
        >
          <CiMenuFries className="text-4xl" />
        </button>
        <div
          className={`w-full md:block md:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
            <li>
              <Link
                to="/"
                onClick={toggleMenu}
                className="block py-2 px-3 text-gray-900 md:p-0 hover:text-sky-600 transition-all duration-500 text-[18px] font-medium"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                onClick={toggleMenu}
                className="block py-2 px-3 text-gray-900 md:p-0 hover:text-sky-600 transition-all duration-500 text-[18px] font-medium"
              >
                Our Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
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
