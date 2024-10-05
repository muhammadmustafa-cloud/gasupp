import EV from "../assets/ev.png";
import fluid from "../assets/fluid.png";
import transport from "../assets/transport.png";
import tyre from "../assets/tyre.png";
import wiper from "../assets/wiper.png";
import staion from "../assets/electric-station.png";
import baterryy from "../assets/baterryy.png";
import carfluid from "../assets/carfluid.png";
import carwash from "../assets/carwash.png";
import { useNavigate } from "react-router-dom";


const ServicesComponent = () => {
    const navigate = useNavigate();



  const handleServiceOne = () => {
    navigate("/service#one");
  };

  const handleServiceTwo = () => {
    navigate("/service#two");
  };

  const handleServiceThree = () => {
    navigate("/service#three");
  };

  const handleServiceFour = () => {
    navigate("/service#four");
  };

  const handleServiceFive = () => {
    navigate("/service#five");
  };

  const handleServiceSix = () => {
    navigate("/service#six");
  };

  const handleServiceSeven = () => {
    navigate("/service#seven");
  };

  const handleServiceEight = () => {
    navigate("/service#eight");
  };

  const handleServiceNine = () => {
    navigate("/service#nine");
  };
 const services = [
   {
     title: "Gas Delivery",
     description:
       "Never worry about running out of fuel again. Our quick and reliable gas delivery service brings the fuel you need directly to your location.",
     imgSrc: staion,
     handleClick: handleServiceOne,
     bgColor: "#41CB5B",
   },
   {
     title: "Electric Vehicle Charging",
     description:
       "We offer a convenient pick-up and charging service for electric vehicles. Simply schedule a pick-up, and we’ll charge your vehicle and return it fully powered.",
     imgSrc: EV,
     handleClick: handleServiceTwo,
     bgColor: "#061129",
   },
   {
     title: "Wiper Blade Replacement",
     description:
       "Need new wiper blades? We’ll come to your location and replace them on the spot, ensuring optimal visibility during tough weather conditions.",
     imgSrc: wiper,
     handleClick: handleServiceThree,
     bgColor: "#41CB5B",
   },
   {
     title: "Tire Rotation",
     description:
       "Maximize the life of your tires with our on-site tire rotation services. We’ll come to your location and ensure even wear on all your tires.",
     imgSrc: tyre,
     handleClick: handleServiceFour,
     bgColor: "#061129",
   },
   {
     title: "Fluid Top-Up Services",
     description:
       "We’ll check and top up your essential vehicle fluids, such as coolant, brake fluid, and windshield washer fluid, to keep your car running smoothly.",
     imgSrc: carfluid,
     handleClick: handleServiceFive,
     bgColor: "#41CB5B",
   },
   {
     title: "Roadside Assistance",
     description:
       "From tire changes to lockout services, we’re here to help you get back on the road swiftly.",
     imgSrc: transport,
     handleClick: handleServiceSix,
     bgColor: "#061129",
   },
   {
     title: "Mobile Car Wash",
     description:
       "Enjoy a sparkling clean car without leaving your home. Our mobile car wash service provides thorough and convenient cleaning.",
     imgSrc: carwash,
     handleClick: handleServiceSeven,
     bgColor: "#41CB5B",
   },
   {
     title: "Oil Changes",
     description:
       "Keep your vehicle running smoothly with our on-site oil change services.",
     imgSrc: fluid,
     handleClick: handleServiceEight,
     bgColor: "#061129",
   },
   {
     title: "Battery Replacement/Boosting",
     description:
       "Get your car battery replaced or boosted quickly, right at your location.",
     imgSrc: baterryy,
     handleClick: handleServiceNine,
     bgColor: "#41CB5B",
   },
 ];

return (
  <div
    className="bg-no-repeat bg-cover bg-center"
    style={{
      backgroundImage: `url(images/service-bg.jpg)`,
      backgroundSize: "cover",
      opacity: "94%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div className="flex flex-col py-12 md:py-10 justify-center mx-auto container items-center">
      {/* Heading */}
      <h2 className="text-4xl md:text-7xl text-center font-medium blueColor mt-3 md:mt-3 max-w-[800px]">
        Best Service For All Types Of Vehicles
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-6 mt-12 md:mt-20">
        {services.map((service, index) => (
          <div
            key={index}
            className={`bg-[${service.bgColor}] w-full md:w-[400px] md:h-[450px] h-[300px] relative mx-4 md:mx-0 py-10 md:py-14 rounded-xl text-white`}
          >
            <div className="px-6 md:px-10 mb-4">
              <img
                src={service.imgSrc}
                className="w-[60px] md:w-[80px]"
                alt="icon"
              />
            </div>
            <div className="px-6 md:px-10 my-5 md:my-7">
              <h4 className="text-2xl md:text-3xl font-semibold ">
                {service.title}
              </h4>
              <p className="text-base md:text-lg mt-2">{service.description}</p>
            </div>
            <button
              onClick={service.handleClick}
              className="px-6 md:px-10 absolute bottom-6 font-medium mt-4 text-lg md:text-xl"
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);
}

export default ServicesComponent;
