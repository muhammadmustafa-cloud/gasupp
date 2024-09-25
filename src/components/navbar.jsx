import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className='flex bg-white justify-around items-center'>
      <div>
        <img className='w-40' src={logo} alt='logo' />
      </div>
      <div className='hidden md:block'>
        <ul className='flex gap-10 font-medium'>
          <NavLink
            to='/'
            className={({ isActive }) => isActive ? 'text-[#41CB5B]' : ''}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to='/about-us'
            className={({ isActive }) => isActive ? 'text-[#41CB5B]' : ''}
          >
            <li>About</li>
          </NavLink>
          <NavLink
            to='/service'
            className={({ isActive }) => isActive ? 'text-[#41CB5B]' : ''}
          >
            <li>Services</li>
          </NavLink>
          <NavLink
            to='/contact-us'
            className={({ isActive }) => isActive ? 'text-[#41CB5B]' : ''}
          >
            <li>Contact Us</li>
          </NavLink>
          <NavLink
            to='/why-choose-us'
            className={({ isActive }) => isActive ? 'text-[#41CB5B]' : ''}
          >
            <li>Why Choose Us</li>
          </NavLink>
          {/* <NavLink 
            to='/privacy-policy' 
            className={({ isActive }) => isActive ? 'text-[#41CB5B]' : ''}
          >
            <li>Privacy Policy</li>
          </NavLink>
          <NavLink 
            to='/term-service' 
            className={({ isActive }) => isActive ? 'text-[#41CB5B]' : ''}
          >
            <li>Terms of Service</li>
          </NavLink>
          <NavLink 
            to='/accessibility' 
            className={({ isActive }) => isActive ? 'text-[#41CB5B]' : ''}
          >
            <li>Accessibility</li>
          </NavLink> */}
        </ul>
      </div>
      <div className='hidden md:block greenColor text-white font-medium px-6 py-4 rounded-full cursor-pointer'>
        <button>Download App</button>
      </div>
      {/* Mobile Menu Icon */}
      <div className='sm:hidden mr-2'>
        <button onClick={toggleNavbar}>{isOpen ? <IoClose size={40} /> : <IoMenu size={40} />}</button>
      </div>
      {/* Sidebar for Small Screens */}
      <div className={`fixed top-0 left-0 w-[75%] h-full bg-[#41CB5B] text-gray-600 z-50 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
        <ul className='flex flex-col items-center gap-10 font-semibold mt-20'>
          <NavLink
            to='/'
            className={({ isActive }) => isActive ? 'text-white' : ''}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to='/about-us'
            className={({ isActive }) => isActive ? 'text-white' : ''}
          >
            <li>About</li>
          </NavLink>
          <NavLink
            to='/service'
            className={({ isActive }) => isActive ? 'text-white' : ''}
          >
            <li>Services</li>
          </NavLink>
          <NavLink
            to='/contact-us'
            className={({ isActive }) => isActive ? 'text-white' : ''}
          >
            <li>Contact Us</li>
          </NavLink>
          <NavLink
            to='/why-choose-us'
            className={({ isActive }) => isActive ? 'text-[#41CB5B]' : ''}
          >
            <li>Why Choose Us</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
