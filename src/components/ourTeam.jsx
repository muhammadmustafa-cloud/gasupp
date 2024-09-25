import team1 from "../assets/team1.jpg";

const OurTeam = () => {
  return (
    <div className="my-16 px-4 md:px-10">
      {/* Section Heading */}
      <div className="flex flex-col items-center mt-16">
        <div className="flex   items-center space-x-2 ">
          <span className="bg-[#41CB5B] h-[4px] md:block hidden md:w-[50px] w-[200px] top-4 md:left-4 -left-32 "></span>
          <h5 className="text-2xl md:left-20 left- text-center  text-[#41CB5B] font-normal tracking-wider ">
            EXPERT
          </h5>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold blueColor text-center my-4 md:my-14">
          Meet Our Dedicated Team
        </h2>
      </div>

      {/* Team Members */}
      <div className="flex flex-wrap justify-center gap-8">
        {/* Team Member 1 */}
        <div className="flex flex-col justify-center items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <img
            src={team1}
            className="w-60 h-60 object-cover rounded-full"
            alt="team member"
          />
          <h6 className="font-semibold text-xl mt-4">James Cameron</h6>
          <span className="font-medium text-base">CEO</span>
        </div>

        {/* Team Member 2 */}
        <div className="flex flex-col justify-center items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <img
            src={team1}
            className="w-60 h-60 object-cover rounded-full"
            alt="team member"
          />
          <h6 className="font-semibold text-xl mt-4">Sarah Connor</h6>
          <span className="font-medium text-base">CTO</span>
        </div>

        {/* Team Member 3 */}
        <div className="flex flex-col justify-center items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <img
            src={team1}
            className="w-60 h-60 object-cover rounded-full"
            alt="team member"
          />
          <h6 className="font-semibold text-xl mt-4">Kyle Reese</h6>
          <span className="font-medium text-base">CFO</span>
        </div>

        {/* Team Member 4 */}
        <div className="flex flex-col justify-center items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <img
            src={team1}
            className="w-60 h-60 object-cover rounded-full"
            alt="team member"
          />
          <h6 className="font-semibold text-xl mt-4">John Connor</h6>
          <span className="font-medium text-base">COO</span>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
