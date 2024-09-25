import img from '../assets/faq-img.jpg';

const AchievementSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-stretch min-h-screen">
      {/* Image Section */}
      <div className="w-full md:w-1/2 h-full">
        <img src={img} alt="FAQ" className="w-full h-full object-cover" />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 bg-[#061129] py-10 md:py-18 pt-10 md:pt-20 px-6 md:px-12 flex flex-col justify-center">
        <div className="">
          {/* Services Heading */}
          <div className="flex md:ml-60 ml-32  items-center space-x-2 ">
            <span className="bg-[#41CB5B] h-[4px] md:block hidden md:w-[50px] w-[200px] top-4 md:left-4 -left-32 "></span>
            <h5 className="text-2xl md:left-20 left- text-center  text-white font-normal tracking-wider ">
              SERVICES
            </h5>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-7xl font-medium text-white text-center md:text-left blueColor mt-6">
            Our Brilliant Skill & Creativity
          </h2>

          {/* Description */}
          <p className="text-center md:text-left text-[#bdbdbd] mt-6 md:mt-10">
            There are plenty of industrial solutions in the field. One of the
            best civil works in downtown has been done by our expert
            contractors.
          </p>

          {/* Achievements Section */}
          <div className="mt-10">
            <div className="flex flex-wrap justify-center md:justify-start gap-8">
              {/* Achievement 1 */}
              <div className="flex flex-col justify-center items-center p-5">
                <h2 className="text-white text-4xl font-medium">200+</h2>
                <span className="text-[#41CB5B] text-xl">
                  Satisfied Clients
                </span>
              </div>

              {/* Achievement 2 */}
              <div className="flex flex-col justify-center items-center p-5">
                <h2 className="text-white text-4xl font-medium">25</h2>
                <span className="text-[#41CB5B] text-xl">
                  Worldwide Branches
                </span>
              </div>

              {/* Achievement 3 */}
              <div className="flex flex-col justify-center items-center p-5">
                <h2 className="text-white text-4xl font-medium">150+</h2>
                <span className="text-[#41CB5B] text-xl">
                  Projects Completed
                </span>
              </div>

              {/* Achievement 4 */}
              <div className="flex flex-col justify-center items-center p-5">
                <h2 className="text-white text-4xl font-medium">30</h2>
                <span className="text-[#41CB5B] text-xl">Expert Engineers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementSection;
