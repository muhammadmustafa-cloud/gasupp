import AchievementSection from "./achievementSection";
import Reviews from "./reviews";
import Testimonials from "./testimonials";
import aboutSection from "../assets/about.jpg";
import joy1 from "../assets/joy1.jpg";
import EV from "../assets/ev.png";
import wiper from "../assets/wiper.png";
import tyre from "../assets/tyre.png";
import fluid from "../assets/fluid.png";
import transport from "../assets/transport.png";

import carwash from "../assets/carwash.png";
import carfluid from "../assets/carfluid.png";
import baterryy from "../assets/baterryy.png";






import { LiaCheckCircleSolid } from "react-icons/lia";
import staion from "../assets/electric-station.png";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  const handleAbout = () => {
    navigate('/about-us');
    window.scrollTo(0, 0)
  }

  const handleServiceOne = () => {
    navigate('/service#one');
  };

  const handleServiceTwo = () => {
    navigate('/service#two');
  };

  const handleServiceThree = () => {
    navigate('/service#three');
  };

  const handleServiceFour = () => {
    navigate('/service#four');
  };

  const handleServiceFive = () => {
    navigate('/service#five');
  };

  const handleServiceSix = () => {
    navigate('/service#six');
  };

  const handleServiceSeven = () => {
    navigate('/service#seven');
  };

  const handleServiceEight = () => {
    navigate('/service#eight');
  };

  const handleServiceNine = () => {
    navigate('/service#nine');
  };
  return (
    <>
      {/* Header */}
      <div
        className="h-[500px] max-w-full overflow-hidden"
        style={{
          backgroundImage: `url(images/slide-1.jpg)`,
          backgroundSize: "cover",
          // backgroundPosition: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="h-full flex flex-col text-white bg-[#021017] opacity-80">
          <div className="flex flex-col gap-9 w-full md:w-[50%] ml-0 md:ml-28 justify-center my-auto h-screen text-white">
            <div className="flex relative">
              <span className="bg-[#41CB5B] h-[2px] w-[50px] top-4 absolute"></span>
              <h5 className="md:text-2xl text-xl md:w-full w-72  absolute font-normal tracking-wider left-16">
                Welcome to GasUpp
              </h5>
            </div>
            <h2 className="md:text-7xl text-4xl mx-4 md:mx-0 font-bold tracking-wide mt-4">
              Instant Gas,
              <br /> Maximum Comfort!
            </h2>
            <p className="md:text-xl mx-4 md:mx-0 text-base">
              Your one-stop solution for gas delivery and automotive services,
              available 24/7.
            </p>
            <div className="bg-[#41CB5B] z-50 text-white mx-4 md:mx-0 font-medium md:px-6 px-4 py-2 w-40 md:py-4 md:w-52 text-center rounded-full cursor-pointer">
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </div>

      {/* About Us */}
      <div className="flex flex-col lg:flex-row gap-14 lg:my-10 mx-6 mt-4 md:mt-4 lg:mx-24">
        <div className="w-full lg:w-1/2 flex flex-col gap-7">
          <div className="flex relative">
            <span className="bg-[#41CB5B] h-[2px] w-[50px] top-4 absolute"></span>
            <h5 className="text-xl lg:text-2xl absolute text-[#41CB5B] font-normal tracking-wider left-14 lg:left-16">
              ABOUT US
            </h5>
          </div>
          <h2 className="text-3xl lg:text-6xl font-medium blueColor mt-4">
            Experience Reliable Car Care with GasUpp: Your Go-To Car Service
            Provider
          </h2>
          <p className="text-base lg:text-xl text-[#898a9c]">
            GasUpp is dedicated to providing fast and reliable gas delivery and
            automotive services right to your doorstep. Our mission is to make
            car care as effortless as possible, offering convenience and peace
            of mind with every service.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span>
                <LiaCheckCircleSolid size={20} lg:size={25} color="#41CB5B" />
              </span>
              <span className="font-normal text-[#898a9c] text-sm lg:text-lg">
                <span className="font-medium text-[#898a9c] text-sm lg:text-lg">
                  Reliability:
                </span>{" "}
                Count on GasUpp for top-notch roadside assistance, car washes,
                oil changes, and more. We’re your one-stop auto solution.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <LiaCheckCircleSolid size={20} lg:size={25} color="#41CB5B" />
              </span>
              <span className="font-normal text-[#898a9c] text-sm lg:text-lg">
                <span className="font-medium text-[#898a9c] text-sm lg:text-lg">
                  Convenience:
                </span>{" "}
                GasUpp brings the gas station to you, saving you time and effort
                in your busy schedule. Enjoy car care without leaving home.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <LiaCheckCircleSolid size={20} lg:size={25} color="#41CB5B" />
              </span>
              <span className="font-normal text-[#898a9c] text-sm lg:text-lg">
                <span className="font-medium text-[#898a9c] text-sm lg:text-lg">
                  Customer Satisfaction:
                </span>{" "}
                We deliver premium fuel and services to ensure your vehicle runs
                smoothly. Trust GasUpp for quality care you can rely on.
              </span>
            </div>
          </div>
          <div className="border-[#41CB5B] hover:bg-[#41CB5B] hover:text-white transition translate-x-1 border text-[#41CB5B] font-medium px-6 py-4 w-40 lg:w-52 text-center rounded-full cursor-pointer">
            <button onClick={handleAbout}>Learn More</button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
          <div className="relative">
            <img
              src={joy1}
              className="w-[full] lg:w-[600px] rounded-2xl"
              alt="about-section"
            />
            {/* <div className="absolute flex flex-col justify-center py-6 lg:py-8 px-2 lg:px-4 rounded-xl gap-2 items-center bg-[#FF6E03] text-white bottom-0">
              <img src={staion} className="w-[40px] lg:w-[60px]" alt="icon" />
              <h2 className="text-3xl lg:text-5xl font-bold">5+</h2>
              <h6 className="text-sm lg:text-lg font-medium">
                Years of Experience
              </h6>
            </div> */}
          </div>
        </div>
      </div>

      {/* Services */}
      <div
        className="mx-auto container"
        style={{
          backgroundImage: `url(images/service-bg.jpg)`,
          backgroundSize: "cover",
          opacity: "94%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col py-12 md:py-10 justify-center items-center">
          {/* <div className="flex relative md:mr-0 mr-20">
            <span className="bg-[#41CB5B] h-[2px] w-[50px] top-4 right-4 absolute"></span>
            <h5 className="text-xl md:text-2xl absolute text-[#41CB5B] font-normal tracking-wider">
              SERVICES
            </h5>
          </div> */}
          <h2 className="text-4xl md:text-7xl text-center font-medium blueColor mt-3 md:mt-3 max-w-[800px]">
            Best Service For All Types Of Vehicles
          </h2>
          <div>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12 md:mt-20">
              <div className="bg-[#41CB5B] w-full md:w-[400px] mx-4 md:mx-0 py-10 md:py-14 rounded-xl text-white">
                <div className="px-6 md:px-10 mb-4">
                  <img
                    src={staion}
                    className="w-[60px] md:w-[80px]"
                    alt="icon"
                  />
                </div>
                <div className="px-6 md:px-10 my-5 md:my-7">
                  <h4 className="text-2xl md:text-3xl font-semibold">
                    Gas Delivery
                  </h4>
                  <p className="text-base md:text-lg mt-2">
                    Never worry about running out of fuel again. Our quick and
                    reliable gas delivery service brings the fuel you need
                    directly to your location.
                  </p>
                </div>
                <button
                  onClick={handleServiceOne}
                  className="px-6  md:px-10 font-medium mt-4 text-lg md:text-xl"
                >
                  Read More
                </button>
              </div>

              <div className="bg-[#061129] w-[full] md:h-[450px] md:w-[400px] mx-4 md:mx-0 py-4 md:py-6 rounded-xl text-white">
                <div className="px-6 md:px-10 mb-4">
                  <img src={EV} className="w-[60px] md:w-[80px]" alt="icon" />
                </div>
                <div className="px-6 md:px-10 my-5 md:my-7">
                  <h4 className="text-2xl md:text-3xl font-semibold">
                    Electric Vehicle Charging
                  </h4>
                  <p className="text-base md:text-lg mt-2">
                    We offer a convenient pick-up and charging service for
                    electric vehicles. Simply schedule a pick-up, and we&apos;ll
                    charge your vehicle and return it fully powered.
                  </p>
                </div>
                <button
                  onClick={handleServiceTwo}
                  className="px-6 md:px-10 font-medium mt-4 text-lg md:text-xl"
                >
                  Read More
                </button>
              </div>

              <div className="bg-[#41CB5B] w-[full] md:h-[450px] md:w-[400px] mx-4 md:mx-0 py-4 md:py-6 rounded-xl text-white">
                <div className="px-6 md:px-10 mb-4">
                  <img
                    src={wiper}
                    className="w-[60px] md:w-[80px]"
                    alt="icon"
                  />
                </div>
                <div className="px-6 md:px-10 my-5 md:my-7">
                  <h4 className="text-2xl md:text-3xl font-semibold">
                    Wiper Blade Replacement
                  </h4>
                  <p className="text-base md:text-lg mt-2">
                    Need new wiper blades? We’ll come to your location and
                    replace them on the spot, ensuring optimal visibility during
                    tough weather conditions.
                  </p>
                </div>
                <button
                  onClick={handleServiceThree}
                  className="px-6 md:px-10 font-medium mt-4 text-lg md:text-xl"
                >
                  Read More
                </button>
              </div>

              <div className="bg-[#061129] w-[full] md:h-[360px] md:w-[400px]  mx-4 md:mx-0 py-4 md:py-3 rounded-xl text-white">
                <div className="px-6 md:px-10 mb-4">
                  <img src={tyre} className="w-[60px] md:w-[80px]" alt="icon" />
                </div>
                <div className="px-6 md:px-10 my-5 md:my-7">
                  <h4 className="text-2xl md:text-3xl font-semibold">
                    Tire Rotation
                  </h4>
                  <p className="text-base md:text-lg mt-2">
                    Maximize the life of your tires with our on-site tire
                    rotation services. We&apos;ll come to your location and
                    ensure even wear on all your tires.
                  </p>
                </div>
                <button
                  onClick={handleServiceFour}
                  className="px-6 md:px-10 font-medium mt-4 text-lg md:text-xl"
                >
                  Read More
                </button>
              </div>

              <div className="bg-[#41CB5B] w-[full] md:h-[360px] md:w-[400px] mx-4 md:mx-0 py-4 md:py-3 rounded-xl text-white">
                <div className="px-6 md:px-10 mb-4">
                  <img
                    src={carfluid}
                    className="w-[60px] md:w-[80px]"
                    alt="icon"
                  />
                </div>
                <div className="px-6 md:px-10 my-5 md:my-7">
                  <h4 className="text-2xl md:text-3xl font-semibold">
                    Fluid Top-Up Services
                  </h4>
                  <p className="text-base md:text-lg mt-2">
                    We’ll check and top up your essential vehicle fluids, such
                    as coolant, brake fluid, and windshield washer fluid, to
                    keep your car running smoothly.
                  </p>
                </div>
                <button
                  onClick={handleServiceFive}
                  className="px-6 md:px-10 font-medium mt-4 text-lg md:text-xl"
                >
                  Read More
                </button>
              </div>

              <div className="bg-[#061129] w-[full] md:h-[360px] md:w-[400px]  mx-4 md:mx-0 py-4 md:py-6 rounded-xl text-white">
                <div className="px-6 md:px-10 mb-4">
                  <img
                    src={transport}
                    className="w-[60px] md:w-[80px]"
                    alt="icon"
                  />
                </div>
                <div className="px-6 md:px-10 my-5 md:my-7">
                  <h4 className="text-2xl md:text-3xl font-semibold">
                    Roadside Assistance
                  </h4>
                  <p className="text-base md:text-lg mt-2">
                    From tire changes to lockout services, we’re here to help
                    you get back on the road swiftly.
                  </p>
                </div>
                <button
                  onClick={handleServiceSix}
                  className="px-6 md:px-10 font-medium mt-4 text-lg md:text-xl"
                >
                  Read More
                </button>
              </div>

              <div className="bg-[#41CB5B] w-[full] md:h-[360px] md:w-[400px] mx-4 md:mx-0 py-4 md:py-4 rounded-xl text-white">
                <div className="px-6 md:px-10 mb-4">
                  <img
                    src={carwash}
                    className="w-[60px] md:w-[80px]"
                    alt="icon"
                  />
                </div>
                <div className="px-6 md:px-10 my-5 md:my-7">
                  <h4 className="text-2xl md:text-3xl font-semibold">
                    Mobile Car Wash
                  </h4>
                  <p className="text-base md:text-lg mt-2">
                    Enjoy a sparkling clean car without leaving your home. Our
                    mobile car wash service provides thorough and convenient
                    cleaning.
                  </p>
                </div>
                <button
                  onClick={handleServiceSeven}
                  className="px-6 md:px-10 font-medium mt-4 text-lg md:text-xl"
                >
                  Read More
                </button>
              </div>

              <div className="bg-[#061129] w-[full] md:h-[360px] md:w-[400px]  mx-4 md:mx-0 py-4 md:py-6 rounded-xl text-white">
                <div className="px-6 md:px-10 mb-4">
                  <img
                    src={fluid}
                    className="w-[60px] md:w-[80px]"
                    alt="icon"
                  />
                </div>
                <div className="px-6 md:px-10 my-5 md:my-7">
                  <h4 className="text-2xl md:text-3xl font-semibold">
                    Oil Changes
                  </h4>
                  <div className="text-base md:text-lg mt-2">
                    Keep your vehicle running smoothly with our on-site oil
                    change services.
                  </div>
                  <button
                    onClick={handleServiceEight}
                    className="px-0 md:px-0 font-medium mt-4 text-lg md:text-xl"
                  >
                    Read More
                  </button>
                </div>
              </div>
              <div className="bg-[#41CB5B] w-[full] md:h-[360px] md:w-[400px] mx-4 md:mx-0 py-4 md:py-6 rounded-xl text-white">
                <div className="px-6 md:px-10 mb-4">
                  <img
                    src={baterryy}
                    className="w-[60px] md:w-[80px]"
                    alt="icon"
                  />
                </div>
                <div className="px-6 md:px-10 my-5 md:my-7">
                  <h4 className="text-2xl md:text-3xl font-semibold">
                    Battery Replacement/Boosting
                  </h4>
                  <p className="text-base md:text-lg mt-2">
                    Get your car battery replaced or boosted quickly, right at
                    your location.
                  </p>
                </div>
                <button
                  onClick={handleServiceNine}
                  className="px-6 md:px-10 font-medium mt-4 text-lg md:text-xl"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ExtraFacility /> */}
      {/* <AchievementSection /> */}
      {/* <OurTeam /> */}
      <Testimonials page="home" />
      <Reviews />
    </>
  );
};

export default HomePage;
