import { FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import logo from '../assets/logo.png';
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="flex-1 bg-[#061129] text-white">
            <div className='grid grid-cols-1 relative sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto container px-4 sm:px-6 bg-transparent lg:px-8 pt-12 pb-14'>
                <div className='flex flex-col gap-6'>
                    <img className='w-40 sm:w-48 h-auto' src={logo} alt="logo" />
                    <p className='text-sm md:text-base'>
                        GasUpp is dedicated to providing fast and reliable gas delivery and automotive services right to your doorstep.
                    </p>
                    <div className='flex gap-4'>
                        <div className='buttonbg rounded-full w-10 h-10 flex justify-center items-center'>
                            <FaFacebookF fontSize="1.2em" className='text-white' />
                        </div>
                        <div className='buttonbg rounded-full w-10 h-10 flex justify-center items-center'>
                            <FaInstagram fontSize="1.2em" className='text-white' />
                        </div>
                        <div className='buttonbg rounded-full w-10 h-10 flex justify-center items-center'>
                            <FaLinkedinIn fontSize="1.2em" className='text-white' />
                        </div>
                    </div>
                </div>
                {/* Company */}
                <div className='text-sm md:flex md:flex-col md:justify-center md:items-center md:text-base'>
                    <h2 className='text-xl mb-4'>Company</h2>
                    <ul className="flex flex-col gap-4">
                        <NavLink to='/'>
                            <li>Home</li>
                        </NavLink>
                        <NavLink to='/about-us'>
                            <li>About</li>
                        </NavLink>
                        <NavLink to='/service'>
                            <li>Services</li>
                        </NavLink>
                        <NavLink to='/contact-us'>
                            <li>Contact Us</li>
                        </NavLink>
                        <NavLink to='/why-choose-us'>
                            <li>Why Choose Us</li>
                        </NavLink>
                        <NavLink
                            to='/privacy-policy'
                        >
                            <li>Privacy Policy</li>
                        </NavLink>
                        <NavLink
                            to='/term-service'
                        >
                            <li>Terms of Service</li>
                        </NavLink>
                        <NavLink
                            to='/accessibility'
                        >
                            <li>Accessibility</li>
                        </NavLink>
                    </ul>
                </div>
                {/* Contact Us */}
                <div className='text-sm md:text-base'>
                    <h2 className='text-xl mb-4'>Contact Us</h2>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-3'>
                            <div className='buttonbg rounded-full w-10 h-10 flex justify-center items-center'>
                                <MdOutlineMail fontSize="1.2em" className='text-white' />
                            </div>
                            <p>info@gasupp.com</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='buttonbg rounded-full w-10 h-10 flex justify-center items-center'>
                                <FaPhoneAlt fontSize="1.2em" className='text-white' />
                            </div>
                            <p>765-413-9667</p>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='buttonbg rounded-full w-10 h-10 flex justify-center items-center'>
                                <FaLocationArrow fontSize="1.2em" className='text-white' />
                            </div>
                            <p>123 Main St, City, Country</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
