import battery from "../assets/battery.webp";
import kiskeliye from "../assets/kiskeliye.jpg";
import tyre from "../assets/tyre.jpg";
import fluid from "../assets/fluid.jpg";
import firstone from "../assets/firstone.jpg";
import carwash from "../assets/carwash.jpg";
import wipperr from "../assets/wipperr.jpg";
import oilchange from "../assets/oilchange.jpg";
import confirmation from "../assets/confirmation.png";
import delivery from "../assets/delivery.png";
import booking from "../assets/booking.png";
import joy3 from "../assets/joy3.jpg";

import Reviews from "./reviews";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const servicesData = [
  {
    id: "one",
    title: "Gas Delivery",
    description:
      "Never worry about running out of fuel again. Our quick and reliable gas delivery service brings the fuel you need directly to your location.",
    image: firstone,
  },
  {
    id: "two",
    title: "Electric Vehicle Charging",
    description:
      "We offer a convenient pick-up and charging service for electric vehicles. Simply schedule a pick-up, and we'll charge your vehicle and return it fully powered.",
    image: joy3,
  },
  {
    id: "three",
    title: "Wiper Blade Replacement",
    description:
      "Need new wiper blades? We’ll come to your location and replace them on the spot, ensuring optimal visibility during tough weather conditions.",
    image: wipperr,
  },
  {
    id: "four",
    title: "Tire Rotation",
    description:
      "Maximize the life of your tires with our on-site tire rotation services. We'll come to your location and ensure even wear on all your tires.",
    image: tyre,
  },
  {
    id: "five",
    title: "Fluid Top-Up Services",
    description:
      "We'll check and top up your essential vehicle fluids, such as coolant, brake fluid, and windshield washer fluid, to keep your car running smoothly.",
    image: fluid,
  },
  {
    id: "six",
    title: "Roadside Assistance",
    description:
      "From tire changes to lockout services, we’re here to help you get back on the road swiftly.",
    image: kiskeliye,
  },
  {
    id: "seven",
    title: "Mobile Car Wash",
    description:
      "Enjoy a sparkling clean car without leaving your home. Our mobile car wash service provides thorough and convenient cleaning.",
    image: carwash,
  },
  {
    id: "eight",
    title: "Oil Changes",
    description:
      "Keep your vehicle running smoothly with our on-site oil change services.",
    image: oilchange,
  },
  {
    id: "nine",
    title: "Battery Replacement/Boosting",
    description:
      "Get your car battery replaced or boosted quickly, right at your location.",
    image: battery,
  },
];

const stepsData = [
  {
    title: "Request Service",
    description:
      "Use our app or website to schedule a gas delivery or automotive service.",
    image: booking,
  },
  {
    title: "Get Confirmed",
    description: "Receive a confirmation with the estimated time of arrival.",
    image: confirmation,
  },
  {
    title: "Enjoy Convenience",
    description:
      "Our team arrives at your location to provide the requested service.",
    image: delivery,
  },
];

const ServicePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <>
      {/* Header */}
      <div
        className="h-[250px] w-full overflow-hidden"
        style={{
          backgroundImage: `url(images/joy5.avif)`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-full flex flex-col justify-center items-center text-white bg-[#021017] opacity-80">
          <div className="flex relative">
            <span className="bg-[#41CB5B] h-[3px] rounded-xl -left-16 w-[50px] top-3 absolute"></span>
            <h5 className="text-xl font-medium mb-5">
              Premium Automotive Services
            </h5>
          </div>
          <h2 className="md:text-5xl text-3xl font-bold md:w-[80%] w-full items-center text-center">
            GasUpp offers a variety of automotive services
            <br /> to keep your car running smoothly and looking great.
          </h2>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-[#ECF0F9] flex flex-col justify-center items-center">
        <h2 className="md:text-5xl text-2xl text-center font-semibold blueColor text-black pt-12 w-full md:w-[60%]">
          Complete Car Care – <br />
          Our Comprehensive Service Offerings Include:
        </h2>
        <div className="flex items-center mx-auto container justify-center gap-6 py-14 flex-wrap">
          {servicesData.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-white rounded-lg shadow-xl p-6 w-[400px] md:mx-0 mx-4 h-[450px] flex flex-col"
            >
              <div className="flex justify-center h-[250px] w-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover h-auto w-max rounded-md"
                />
              </div>
              <div className="mt-10 text-center flex-grow">
                <h2 className="text-xl font-semibold">{service.title}</h2>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div
        className="w-full overflow-hidden"
        style={{
          backgroundImage: `url(images/bread-bg.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="bg-[#050C1D] w-full h-full flex flex-col items-center justify-center opacity-80">
          <h2 className="text-5xl text-center font-semibold blueColor text-white mt-12 w-[20%]">
            How It Works
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-6 my-14 md:mx-0 mx-4">
            {stepsData.map((step, index) => (
              <div
                key={index}
                className="flex flex-col h-[320px] bg-white w-[450px] justify-center items-center px-2 py-8 rounded-xl"
              >
                <img src={step.image} className="w-32" alt={step.title} />
                <h5 className="text-2xl mt-3 font-semibold">{step.title}</h5>
                <p className="text-lg text-[#898a9c] w-[80%] text-center">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div>
        <Reviews />
      </div>
    </>
  );
};

export default ServicePage;
