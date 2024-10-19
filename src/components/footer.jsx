import { FaFacebookF, FaInstagram, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import logo from '../assets/logo.png';
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
      <div className="bg-[#061129]">
        <div className="flex-1 container mx-auto bg-[#061129] text-white">
          <div className="grid grid-cols-1 relative sm:grid-cols-2 md:grid-cols-3 gap-8  px-4 sm:px-6 bg-transparent lg:px-8 pt-12 pb-8">
            <div className="flex -ml-10 md:ml-0 flex-col gap-2 items-start">
              <NavLink onClick={() => window.scrollTo(0, 0)} to="/">
                <img className="w-40 sm:w-48 h-auto" src={logo} alt="logo" />
              </NavLink>
              <div className="ml-10 md:ml-12">
                <p className="text-sm text-justify -mt-4 md:text-base">
                  GasUpp is dedicated to providing fast and reliable gas
                  delivery and automotive services right to your doorstep.
                </p>
                <div className="flex mt-2 -ml-4">
                  <a
                    href="https://facebook.com/gasuppus"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="buttonbg rounded-full w-10 h-10 flex justify-center items-center">
                      <FaFacebookF fontSize="1.2em" className="text-white" />
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/gasuppus"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="buttonbg rounded-full -ml-2 w-10 h-10 flex justify-center items-center">
                      <FaInstagram fontSize="1.2em" className="text-white" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* Company */}
            <div className="text-sm md:flex md:-mt-10 md:flex-col md:justify-center md:items-center md:text-base">
              <h2 className="text-xl text-left mb-4">Menu</h2>
              <ul className="flex flex-col md:ml-7 gap-1">
                <NavLink onClick={() => window.scrollTo(0, 0)} to="/">
                  <li>Home</li>
                </NavLink>
                {/* <NavLink onClick={() => window.scrollTo(0, 0)} to="/about-us">
                  <li>About Us</li>
                </NavLink> */}
                <NavLink onClick={() => window.scrollTo(0, 0)} to="/service">
                  <li>Services</li>
                </NavLink>
                <NavLink onClick={() => window.scrollTo(0, 0)} to="/contact-us">
                  <li>Contact Us</li>
                </NavLink>
                {/* <NavLink onClick={() => window.scrollTo(0, 0)} to='/why-choose-us'>
                            <li>Why Choose Us</li>
                        </NavLink> */}
              </ul>
            </div>
            {/* Contact Us */}
            <div className="text-sm md:mt-4 md:text-base">
              <h2 className="text-xl text-left ml-2 mb-4">Contact Us</h2>
              <div className="flex flex-col ">
                <div className="flex items-center gap-3">
                  <div className="buttonbg rounded-full w-10 h-10 flex justify-center items-center">
                    <MdOutlineMail fontSize="1.2em" className="text-white" />
                  </div>
                  <p>
                    <a href="mailto:info@gasupp.com">info@gasupp.com</a>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="buttonbg rounded-full w-10 h-10 flex justify-center items-center">
                    <FaPhoneAlt fontSize="1.2em" className="text-white" />
                  </div>
                  <p>
                    <a href="tel:4072595949">305-699-5252‬</a>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="buttonbg rounded-full w-10 h-10 flex justify-center items-center">
                    <FaLocationArrow fontSize="1.2em" className="text-white" />
                  </div>
                  <p>
                    1 GasUpp Road
                    <br /> Orlando, FL, 32808
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-between lg:px-10 flex md:w-[90%] pb-5 md:pb-7">
            <h5 className="text-[#898a9c] ml-2 md:ml-10">© 2024 GasUpp</h5>
            <div className="flex">
              <ul className="flex gap-8 text-[#898a9c] responsiveNav">
                <NavLink
                  onClick={() => window.scrollTo(0, 0)}
                  to="/privacy-policy"
                >
                  <li>Privacy</li>
                </NavLink>
                <NavLink
                  onClick={() => window.scrollTo(0, 0)}
                  to="/term-service"
                >
                  <li>Terms</li>
                </NavLink>
                <NavLink
                  onClick={() => window.scrollTo(0, 0)}
                  to="/accessibility"
                >
                  <li>Accessibility</li>
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer
