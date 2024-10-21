import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // State to track scroll

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  // Effect to handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0); // Set scrolled to true if page is scrolled down
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex bg-white mx-auto container  bg-opacity-90 md:bg-opacity-100  sticky top-0 z-40 md:justify-around justify-between md:px-0 px-2 items-center transition-all duration-300 ${
        scrolled
          ? "md:rounded-lg rounded-full shadow-lg md:justify-evenly mt-8 h-16 md:top-0 top-4 md:h-[90px] md:mt-0"
          : "rounded-none"
      }`}
    >
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
          {/* <NavLink
            to="/about-us"
            className={({ isActive }) => (isActive ? "text-[#41CB5B]" : "")}
          >
            <li>About Us</li>
          </NavLink> */}
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? "text-[#41CB5B]" : "")}
          >
            <li>Services</li>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "text-[#41CB5B]" : "")}
          >
            <li>Contact</li>
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
        className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-full bg-white rounded-lg p-6 z-50 transition-transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden`}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <button onClick={closeNavbar}>
            <IoClose size={30} />
          </button>
        </div>

        <ul className="flex flex-col gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#41CB5B]" : "text-black"
            }
            onClick={closeNavbar}
          >
            <li className="border-b py-4 flex justify-between">Home</li>
          </NavLink>
          {/* <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive ? "text-[#41CB5B]" : "text-black"
            }
            onClick={closeNavbar}
          >
            <li className="border-b py-4 flex justify-between">About</li>
          </NavLink> */}
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "text-[#41CB5B]" : "text-black"
            }
            onClick={closeNavbar}
          >
            <li className="border-b py-4 flex justify-between">Services</li>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-[#41CB5B]" : "text-black"
            }
            onClick={closeNavbar}
          >
            <li className="border-b py-4 flex justify-between">Contact</li>
          </NavLink>
        </ul>

        {/* Download Button */}
        <div className="my-4">
          <NavLink onClick={closeNavbar}>
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
