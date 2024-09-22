import { FaLocationDot } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoMdMailUnread } from "react-icons/io";
import ContactForm from "./contactForm";

const ContactUsPage = () => {
    return (
        <>
        {/* Header */}
            <div className='h-[500px] w-full' style={{
                backgroundImage: `url(images/bread-bg.jpg)`,
                backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
            }}>
                <div className="w-full h-full flex flex-col justify-center items-center text-white bg-[#021017] opacity-80">
                    <div className='flex relative'>
                        <span className='bg-[#41CB5B] h-[3px] rounded-xl -left-16 w-[50px] top-3 absolute'></span>
                        <h5 className="text-xl font-medium mb-5">Contact Us</h5>
                    </div>
                    <h2 className="text-5xl font-bold w-[60%] items-center text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem..</h2>
                </div>
            </div>
            {/* Contact Info */}
            <div className="bg-white w-full h-full flex flex-col items-center justify-center my-10 ">
                <div className='flex flex-wrap items-center justify-center gap-5  my-14'>
                    <div className='flex flex-col h-[320px] bg-white shadow-2xl w-[350px] rounded-2xl justify-center items-center px-2 py-8'>
                        <FaLocationDot color="#41CB5B" size="50" />
                        <h5 className='text-2xl mt-3 font-semibold'>Location</h5>
                        <p className='text-lg text-[#898a9c] mt-3 w-[80%] text-center'>1 GasUpp Road, Orlando, FL, United States, Florida.</p>
                        <h5 className='text-lg mt-5 text-[#41CB5B] font-medium uppercase'>Find us on map</h5>
                    </div>
                    <div className='flex flex-col h-[320px] bg-white shadow-2xl w-[350px] rounded-2xl justify-center items-center px-2 py-8'>
                        <IoPhonePortraitOutline color="#41CB5B" size="50" />
                        <h5 className='text-2xl mt-3 font-semibold'>Phone Number</h5>
                        <p className='text-lg text-[#898a9c] mt-3 w-[80%] text-center'>765-413-9667</p>
                        <h5 className='text-lg mt-5 text-[#41CB5B] font-medium uppercase'>Call Now</h5>
                    </div>
                    <div className='flex flex-col h-[320px] bg-white shadow-2xl w-[350px] rounded-2xl justify-center items-center px-2 py-8'>
                        <IoMdMailUnread color="#41CB5B" size="50" />
                        <h5 className='text-2xl mt-3 font-semibold'>E-mail Address</h5>
                        <p className='text-lg text-[#898a9c] mt-3 w-[80%] text-center'>info@gasupp.com</p>
                        <h5 className='text-lg mt-5 text-[#41CB5B] font-medium uppercase'>Mail Us</h5>
                    </div>

                </div>
            </div>
            {/* Contact Form */}
            <div className='w-full' style={{
                backgroundImage: `url(images/bread-bg.jpg)`,
                backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed',
            }}>
                <div className="bg-[#050C1D] w-full h-full flex flex-col items-center justify-center opacity-80">
                    <h1 className="text-5xl text-center font-semibold blueColor text-white mt-12 w-[20%]">Get In Touch</h1>
                    <ContactForm/>
                </div>
            </div>
        </>
    )
}

export default ContactUsPage
