import { useState } from "react";
import img from "../assets/2.jpg"; // Sample image
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const testimonials = [
  {
    id: 1,
    text: "I love the convenience GasUpp offers! With my hectic work schedule, I don’t have time to stop at gas stations or service centers. Now I can get gas delivered right to my office and even get my wiper blades replaced on the go. It’s an absolute lifesaver!",
    name: "Jane L",
    role: "Busy Professional",
    image: img,
  },
  {
    id: 2,
    text: "GasUpp’s electric vehicle charging service is a game changer. I can schedule a pick-up, and my car is fully charged when I need it. It’s so easy and saves me the hassle of finding a charging station.",
    name: "Mark R",
    role: "Electric Vehicle Owner",
    image: img,
  },
  {
    id: 3,
    text: "I got a flat tire on my way to a meeting, and within 30 minutes, GasUpp was there to help. The roadside assistance was fast and professional. I even signed up for their subscription plan to get regular oil changes and battery boosts. Amazing service!",
    name: "Sarah K",
    role: "Roadside Assistance Customer",
    image: img,
  },
  {
    id: 4,
    text: "As a dad of three, I’m always on the go. GasUpp’s mobile car wash service is perfect for keeping my car clean without having to leave home. The team is always professional, and their attention to detail is impressive!",
    name: "Tim H",
    role: "Family Man",
    image: img,
  },
  {
    id: 5,
    text: "I’ve been using GasUpp for months now, and the quality of service is unmatched. Whether it’s gas delivery, a quick oil change, or topping up my fluids, GasUpp has saved me so much time. Highly recommend!",
    name: "Daniel P",
    role: "Long-Time User",
    image: img,
  },
  {
    id: 6,
    text: "Being a GasUpper has been an incredible side hustle for me. The app is easy to use, and I can pick up gas delivery orders when it fits my schedule. Plus, the extra income has been great. I’m proud to be part of this innovative service!",
    name: "Susan T",
    role: "GasUpper Driver",
    image: img,
  },
  {
    id: 7,
    text: "Partnering with GasUpp has significantly increased our revenue. We can now serve more customers by delivering gas and providing additional services like tire rotations and battery replacements. The technology is seamless, and the GasUpp team is always available to support us.",
    name: "Paul G",
    role: "Gas Station Partner",
    image: img,
  },
  {
    id: 8,
    text: "GasUpp has helped me expand my mobile car wash business by connecting me with more customers. The platform is easy to navigate, and their customer base is growing every day. It’s a win-win!",
    name: "Lisa M",
    role: "Mobile Car Wash Provider",
    image: img,
  },
  {
    id: 9,
    text: "Working with GasUpp to provide oil changes and wiper blade replacements has been a great way to reach new clients. The scheduling system is efficient, and the platform helps me manage my time better. I look forward to continuing our partnership!",
    name: "John D",
    role: "Automotive Technician",
    image: img,
  },
];

const Testimonials = ({ page }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const bgColor =
    page === "home"
      ? "bg-[#ededed]"
      : page === "about"
      ? "bg-[#050c1d]"
      : "bg-white";
  const textColor =
    page === "home"
      ? "text-[#050c1d]"
      : page === "about"
      ? "text-white"
      : "text-white";

  const handlePrev = () => {
    setCurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className={`flex flex-col justify-center items-center pb-5 ${bgColor}`}>
      {/* Section Heading */}
      <div className="flex relative mt-10">
        <span className="bg-[#41CB5B] h-[2px] w-[50px] top-4 right-4 absolute"></span>
        <h5 className="text-2xl absolute text-[#41CB5B] font-normal tracking-wider">
          Testimonial
        </h5>
      </div>

      <h2
        className={`text-3xl md:text-5xl text-center font-semibold ${textColor} mt-12 w-full md:w-[50%] lg:w-[60%]`}
      >
        What Our Clients Say About Us
      </h2>

      {/* Carousel */}
      <div className="relative flex justify-center items-center mt-12 w-full px-4">
        <button
          onClick={handlePrev}
          className="absolute left-0 bg-green-500 text-white px-2 py-2 rounded-full hover:bg-green-600"
        >
          <IoIosArrowBack size={35}/>
        </button>

        {/* Testimonial Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 w-full sm:w-[90%] md:w-[45%] lg:w-[30%] mx-auto transition-all duration-300 ease-in-out">
          <div className="relative -top-6 bg-green-500 w-12 h-12 flex items-center justify-center rounded-full">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"
              ></path>
            </svg>
          </div>

          <p className="text-gray-600 text-lg">
            {testimonials[currentIndex].text}
          </p>

          <div className="mt-6 flex items-center">
            <img
              src={testimonials[currentIndex].image}
              alt="Customer"
              className="w-12 h-12 rounded-full border-2 border-gray-300"
            />
            <div className="ml-4">
              <h4 className="text-xl font-semibold text-gray-900">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-gray-500">{testimonials[currentIndex].role}</p>
            </div>
          </div>
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 bg-green-500 text-white px-2 py-2 rounded-full hover:bg-green-600"
        >
          <IoIosArrowForward size={35} />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-6">
        {testimonials.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full mx-2 cursor-pointer ${
              index === currentIndex ? "bg-green-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
