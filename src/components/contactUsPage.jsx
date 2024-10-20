import { FaLocationDot } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoMdMailUnread } from "react-icons/io";
import ContactForm from "./contactForm";
import Reviews from "./reviews";
import { useState } from "react";
import { questions } from "./questions";
import SingleQuestion from "./SingleQuestion";
import { useNavigate } from "react-router-dom";

const ContactUsPage = () => {
  const [cards] = useState(questions);
  const [activeIndex, setActiveIndex] = useState(null);
  const handleQuestionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle between active FAQs
  };
  const scrollToMap = () => {
    const mapElement = document.getElementById("map-iframe");
    if (mapElement) {
      mapElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const navigate = useNavigate();
  return (
    <>
      {/* Header */}
      <div
        className="h-[250px] w-full"
        style={{
          backgroundImage: `url(images/bread-bg.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-full flex flex-col justify-center items-center text-white bg-[#021017] opacity-80">
          <div className="flex relative">
            <span className="bg-[#41CB5B] h-[3px] rounded-xl -left-16 w-[50px] top-3 absolute"></span>
            <h5 className="text-xl font-medium mb-5">Contact Us</h5>
          </div>
          <h2 className="md:text-5xl text-3xl font-bold md:w-[60%] w-full items-center text-center">
            Let&apos;s Stay Connected!
            <br /> We&apos;re Here to Assist You Anytime.
          </h2>
        </div>
      </div>
      {/* Contact Info */}
      <div className="bg-white w-full h-full flex flex-col items-center justify-center ">
        <div className="flex flex-wrap items-center justify-center gap-5  mt-8">
          <div className="flex flex-col h-[320px] bg-white shadow-2xl w-[350px] rounded-2xl justify-center items-center px-2 py-8">
            <FaLocationDot color="#41CB5B" size="50" />
            <h5 className="text-2xl mt-3 font-semibold">Location</h5>
            <h4 className="text-lg text-[#898a9c] mt-3 w-[80%] text-center">
              1 GasUpp Road
              <br />
              Orlando, FL, 32808
              <br /> United States
            </h4>
            <button onClick={scrollToMap}
              className="text-lg mt-5 text-[#41CB5B] font-medium uppercase"
            >
              Find us on map
            </button>
          </div>

          <div className="flex flex-col h-[320px] bg-white shadow-2xl w-[350px] rounded-2xl justify-center items-center px-2 py-8">
            <IoPhonePortraitOutline color="#41CB5B" size="50" />
            <h5 className="text-2xl mt-3 font-semibold">Phone Number</h5>
            <p className="text-lg text-[#898a9c] mt-3 w-[80%] text-center">
              {/* Clickable phone number */}
              <a href="tel:4072595949" className="text-[#898a9c]">
                305-699-5252‬
              </a>
            </p>
            {/* Call Now button */}
            <a
              href="tel:7654139667"
              className="text-lg mt-5 text-[#41CB5B] font-medium uppercase"
            >
              Call Now
            </a>
          </div>

          <div className="flex flex-col h-[320px] bg-white shadow-2xl w-[350px] rounded-2xl justify-center items-center px-2 py-8">
            <IoMdMailUnread color="#41CB5B" size="50" />
            <h5 className="text-2xl mt-3 font-semibold">E-mail Address</h5>
            <p className="text-lg text-[#898a9c] mt-3 w-[80%] text-center">
              <a href="mailto:info@gasupp.com">info@gasupp.com</a>
            </p>
            {/* Mail Us button */}
            <a
              href="mailto:info@gasupp.com"
              className="text-lg mt-5 text-[#41CB5B] hover:underline font-medium uppercase"
            >
              Mail Us
            </a>
          </div>
        </div>
      </div>
      {/* Contact Form */}
      {/* <div className='w-full' style={{
                backgroundImage: `url(images/bread-bg.jpg)`,
                backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed',
            }}> */}
      <div className="bg-[#050C1D] mt-11 w-full h-full flex flex-col items-center justify-center">
        <h1 className="md:text-5xl text-3xl text-center font-semibold blueColor text-white mt-12 w-full md:w-[20%]">
          Get In Touch
        </h1>
        <p className="text-xl text-white mt-4 w-[40%] text-center font-medium mb-5">
          We’d love to hear from you! Fill out the form below, and we&apos;ll
          get back to you as soon as possible.{" "}
        </p>
        <div className="w-[60%]">
          <ContactForm />
        </div>
      </div>
      {/* </div> */}

      {/* FAQS Section */}
      <div
        className="w-full"
        style={{
          backgroundImage: `url(images/service4.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="bg-[#050C1D] w-full h-full flex flex-col items-center justify-center opacity-80">
          <section className="md:w-[50%] w-full mx-auto py-8 px-4">
            <h2 className="text-5xl text-center font-semibold blueColor text-white mt-8 mb-8">
              FAQ&apos;s
            </h2>
            <section className="grid grid-cols-1 gap-8">
              {cards.map((card, index) => (
                <SingleQuestion
                  key={index}
                  question={card.question}
                  answer={card.answer}
                  isActive={index === activeIndex} // Active status
                  onClick={() => handleQuestionClick(index)} // Handle click
                />
              ))}
            </section>
          </section>
          <div className="flex items-center justify-center">
            <button
              onClick={() => navigate("/faq")}
              type="submit"
              className="bg-[#41CB5B] hover:bg-white hover:text-[#41CB5B] mb-4 text-white font-medium py-3 px-10 rounded-lg"
            >
              More
            </button>
          </div>
        </div>
      </div>
      <div className="responsive-map" id="map-iframe">
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3505.023145961194!2d-81.381125!3d28.539023999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDMyJzIwLjUiTiA4McKwMjInNTIuMSJX!5e0!3m2!1sen!2s!4v1729113736810!5m2!1sen!2s" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <Reviews />
    </>
  );
};

export default ContactUsPage;
