import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex bg-white sticky top-0 z-40 md:justify-around justify-between md:px-0 px-3 items-center">
      <div className="">
        <NavLink to="/">
          <img className="w-40 md:ml-0 -ml-7" src={logo} alt="logo" />
        </NavLink>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:block">
        <ul className="flex gap-10 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-[#41CB5B]" : "")}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) => (isActive ? "text-[#41CB5B]" : "")}
          >
            <li>About Us</li>
          </NavLink>
          <NavLink
            to="/service"
            className={({ isActive }) => (isActive ? "text-[#41CB5B]" : "")}
          >
            <li>Services</li>
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) => (isActive ? "text-[#41CB5B]" : "")}
          >
            <li>Contact Us</li>
          </NavLink>
        </ul>
      </div>

      <div className="hidden md:block bg-[#41CB5B] text-white font-medium px-6 py-4 rounded-full cursor-pointer">
        <button>Download App</button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="sm:hidden mr-2">
        <button onClick={toggleNavbar}>
          {isOpen ? <IoClose size={40} /> : <IoMenu size={40} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full max-w-full h-auto bg-white z-50 transition-transform transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={closeNavbar}>
            <IoClose size={30} />
          </button>
        </div>

        <ul className="flex flex-col gap-4 px-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#41CB5B]" : "text-black"
            }
            onClick={closeNavbar}
          >
            <li className="border-b py-4 flex justify-between">Home</li>
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive ? "text-[#41CB5B]" : "text-black"
            }
            onClick={closeNavbar}
          >
            <li className="border-b py-4 flex justify-between">
              About <FaPlus />
            </li>
          </NavLink>
          <NavLink
            to="/service"
            className={({ isActive }) =>
              isActive ? "text-[#41CB5B]" : "text-black"
            }
            onClick={closeNavbar}
          >
            <li className="border-b py-4 flex justify-between">
              Services <FaPlus />
            </li>
          </NavLink>
       
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive ? "text-[#41CB5B]" : "text-black"
            }
            onClick={closeNavbar}
          >
            <li className="border-b py-4 flex justify-between">
              Contact <FaPlus />
            </li>
          </NavLink>
        </ul>

        {/* Donate Button */}
        <div className="px-6 my-4">
          <NavLink to="/donate" onClick={closeNavbar}>
            <button className="bg-[#41CB5B] text-white w-full py-3 rounded-full">
              Download Now
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
