import { LiaCheckCircleSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import joy1 from "../assets/joy1.jpg";
import Reviews from "./reviews";
import ServicesComponent from "./ServicesComponent";
import Testimonials from "./testimonials";

const HomePage = () => {
  const navigate = useNavigate();

  const handleAbout = () => {
    navigate("/about-us");
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div
        className="h-[500px] max-w-full overflow-hidden"
        style={{
          backgroundImage: `url(images/slide-1.jpg)`,
          backgroundSize: "cover",
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

   

      <ServicesComponent />
      {/* <ExtraFacility /> */}
      {/* <AchievementSection /> */}
      {/* <OurTeam /> */}
      <Testimonials page="home" />
      <Reviews />
    </>
  );
};

export default HomePage;
