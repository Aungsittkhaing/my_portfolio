import React, { useState } from "react";
import { VscClose, VscMenu } from "react-icons/vsc";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(false);
  };
  return (
    <div className="flex text-xl justify-between items-center text-gray-200 px-6 max-w-[1300px] mx-auto h-24 sticky top-0 z-50">
      <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
        <li className="relative group">
          <Link
            to="home"
            duration={500}
            smooth={true}
            offset={50}
            className="cursor-pointer"
          >
            Aung Sitt Khaing
          </Link>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ease-in-out"></span>
        </li>
      </ul>
      <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
        <li className="relative group">
          <Link to="about" duration={500} smooth={true} offset={50}>
            About
          </Link>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ease-in-out"></span>
        </li>
        <li className="relative group">
          <Link to="project" duration={500} smooth={true} offset={50}>
            Projects
          </Link>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ease-in-out"></span>
        </li>
        <li className="relative group">
          <Link to="contact" duration={500} smooth={true} offset={50}>
            Contact
          </Link>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ease-in-out"></span>
        </li>
      </ul>

      <div className="md:hidden z-30" onClick={toggleNav}>
        {nav ? <VscClose size={30} /> : <VscMenu size={30} />}
      </div>
      <div
        className={
          nav
            ? "text-center z-20 fixed h-full w-full left-0 top-0 bg-[#232323]"
            : "fixed left-[-100%]"
        }
      >
        <ul className="font-semibold text-2xl space-y-8 mt-24">
          <li>
            <Link
              onClick={closeNav}
              to="about"
              duration={500}
              smooth={true}
              offset={50}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={closeNav}
              to="portfolio"
              duration={500}
              smooth={true}
              offset={50}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={closeNav}
              to="contact"
              duration={500}
              smooth={true}
              offset={50}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
