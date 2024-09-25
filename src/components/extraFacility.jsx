import { FaArrowRight } from "react-icons/fa";

const ExtraFacility = () => {
  return (
    <div className="flex flex-col items-center my-16 md:my-28 mx-6 md:mx-28">
      <div className="flex relative border md:mr-0 mr-20">
        <span className="bg-[#c1e0c7] h-[2px] w-[50px] top-4 right-4 absolute"></span>
        <h5 className="text-xl md:text-2xl absolute text-[#41CB5B] font-normal md:text-center text-left tracking-wider w-[160px]">
          WE ALSO DO
        </h5>
      </div>
      <h2 className="text-3xl md:text-7xl font-medium blueColor w-full md:w-[60%] my-8 md:my-14 text-center">
        More Additional Service in Filling Station
      </h2>
      <div className="flex flex-wrap gap-3 justify-center md:justify-between">
        {/* Card 1 */}
        <div
          className="h-60 md:h-80 w-full md:w-80 flex text-white"
          style={{
            backgroundImage: `url(images/01.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-full h-60 md:h-80 flex flex-col justify-center items-center text-white bg-[#021017] opacity-80">
            <h3 className="text-xl md:text-2xl font-semibold tracking-wide">
              Car Evacuation
            </h3>
            <h6 className="text-[#41CB5B] font-bold text-base md:text-lg flex items-center justify-center gap-2">
              Read More <FaArrowRight size={15} />
            </h6>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="h-60 md:h-80 w-full md:w-80 flex text-white"
          style={{
            backgroundImage: `url(images/01.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-full h-60 md:h-80 flex flex-col justify-center items-center text-white bg-[#021017] opacity-80">
            <h3 className="text-xl md:text-2xl font-semibold tracking-wide">
              Wheels Pumping
            </h3>
            <h6 className="text-[#41CB5B] font-bold text-base md:text-lg flex items-center justify-center gap-2">
              Read More <FaArrowRight size={15} />
            </h6>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="h-60 md:h-80 w-full md:w-80 flex text-white"
          style={{
            backgroundImage: `url(images/01.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-full h-60 md:h-80 flex flex-col justify-center items-center text-white bg-[#021017] opacity-80">
            <h3 className="text-xl md:text-2xl font-semibold tracking-wide">
              Engine Repair
            </h3>
            <h6 className="text-[#41CB5B] font-bold text-base md:text-lg flex items-center justify-center gap-2">
              Read More <FaArrowRight size={15} />
            </h6>
          </div>
        </div>

        {/* Card 4 */}
        <div
          className="h-60 md:h-80 w-full md:w-80 flex text-white"
          style={{
            backgroundImage: `url(images/01.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-full h-60 md:h-80 flex flex-col justify-center items-center text-white bg-[#021017] opacity-80">
            <h3 className="text-xl md:text-2xl font-semibold tracking-wide">
              Car Evacuation
            </h3>
            <h6 className="text-[#41CB5B] font-bold text-base md:text-lg flex items-center justify-center gap-2">
              Read More <FaArrowRight size={15} />
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraFacility;
