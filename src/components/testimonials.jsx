import img from "../assets/2.jpg";

const Testimonials = ({ page }) => {
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

  return (
    <div
      className={`flex flex-col justify-center items-center pb-20 ${bgColor}`}
    >
      {/* Section Heading */}
      <div className="flex relative mt-20 ">
        <span className="bg-[#41CB5B] h-[2px] w-[50px] top-4 right-4 absolute"></span>
        <h5 className="text-2xl absolute text-[#41CB5B] font-normal tracking-wider ">
          Testimonial
        </h5>
      </div>

      <h2
        className={`text-3xl md:text-5xl text-center font-semibold blueColor ${textColor} mt-12 w-full md:w-[50%] lg:w-[40%]`}
      >
        What Our Clients Say About Us
      </h2>

      {/* Testimonial Cards */}
      <div className="flex flex-wrap justify-center mt-12 gap-10 px-4">
        {/* Testimonial 1 */}
        <div className="bg-white rounded-lg shadow-lg p-8 w-full sm:w-[90%] md:w-[45%] lg:w-[30%] mx-auto">
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
            Tempore, cum soluta nobis est optio cumque nihil impedit quo minus
            id maxime placeat facere possimus. Omni dolor repellendus emoribus
            autem quibusdam et aut officiis.
          </p>

          <div className="mt-6 flex items-center">
            <img
              src={img}
              alt="Customer"
              className="w-12 h-12 rounded-full border-2 border-gray-300"
            />
            <div className="ml-4">
              <h4 className="text-xl font-semibold text-gray-900">
                Paul Scholes
              </h4>
              <p className="text-gray-500">Customer</p>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white rounded-lg shadow-lg p-8 w-full sm:w-[90%] md:w-[45%] lg:w-[30%] mx-auto">
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
            Tempore, cum soluta nobis est optio cumque nihil impedit quo minus
            id maxime placeat facere possimus. Omni dolor repellendus emoribus
            autem quibusdam et aut officiis.
          </p>

          <div className="mt-6 flex items-center">
            <img
              src={img}
              alt="Customer"
              className="w-12 h-12 rounded-full border-2 border-gray-300"
            />
            <div className="ml-4">
              <h4 className="text-xl font-semibold text-gray-900">
                Paul Scholes
              </h4>
              <p className="text-gray-500">Customer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
