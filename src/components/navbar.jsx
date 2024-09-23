import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className='flex bg-white justify-around items-center'>
      <div>
        <img className='w-40' src={logo} alt='logo' />
      </div>
      <div>
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
      <div className='greenColor text-white font-medium px-6 py-4 rounded-full cursor-pointer'>
        <button>Download App</button>
      </div>
    </div>
  );
};

export default Navbar;
