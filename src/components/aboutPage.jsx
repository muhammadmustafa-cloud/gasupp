import about2 from '../assets/about-2.jpg'
import oil from '../assets/oil.png'
import meter from '../assets/meter-checker.png'
import skillBg from '../assets/skill-bg.jpg'
import CounterSection from './counterSection'
import { HiExternalLink } from "react-icons/hi";
import Testimonials from './testimonials'
import OurTeam from './ourTeam'
import Reviews from './reviews'
import CardComponent from './cardComponent'

const AboutPage = () => {
  return (
    <>
      <div
        className="h-[500px] w-full overflow-hidden"
        style={{
          backgroundImage: `url(images/bread-bg.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-full flex flex-col  justify-center items-center text-white bg-[#021017] opacity-80">
          <div className="flex relative">
            <span className="bg-[#41CB5B] h-[3px] rounded-xl right-36 w-[50px] top-3 absolute"></span>
            <h5 className="text-xl font-medium mb-5">About GasUpp</h5>
          </div>
          <h2 className="md:text-5xl text-3xl font-bold md:w-[60%] w-full  items-center text-center">
            Trust GasUpp for Dependable Car Care! Anywhere, Anytime.
          </h2>
        </div>
      </div>
      {/* About Us Section */}
      <div className="w-full bg-[#ECF0F9] overflow-hidden flex justify-center items-center">
        <div className="my-12 md:my-24 bg-white flex flex-col md:flex-row w-[90%] md:w-[85%] rounded-lg shadow-lg">
          <div className="w-full flex justify-center items-center p-3">
            <img className="rounded-lg" src={about2} alt="About Us" />
          </div>
          <div className="py-6 md:py-14 px-6 md:px-12">
            <div className="flex relative">
              <span className="bg-[#41CB5B] h-[2px] w-[45px] top-3 absolute"></span>
              <h5 className="text-lg text-[#41CB5B] absolute font-normal tracking-wider left-16">
                ABOUT US
              </h5>
            </div>
            <h1 className="text-3xl  md:text-5xl leading-7 md:leading-10 font-bold blueColor mt-10 md:mt-8">
              We&apos;re the Top Filling Station in Downtown
            </h1>
            <p className="text-base md:text-lg text-[#898a9c] my-4 md:my-6">
              Fuel ennovation for freight plan Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Quos natus ipsam ea vero placeat?
              Quia consequuntur odio nemo incidunt, perferendis.
            </p>
            <div className="flex flex-col md:flex-row mt-6 md:mt-8 gap-6">
              <div className="flex flex-col items-center text-center">
                <img src={oil} className="w-16" alt="100% Pure Oil" />
                <h5 className="text-lg mt-3 font-semibold">100% Pure Oil</h5>
                <p className="text-base md:text-lg text-[#898a9c]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src={meter} className="w-16" alt="Accurate Meter" />
                <h5 className="text-lg mt-3 font-semibold">Accurate Meter</h5>
                <p className="text-base md:text-lg text-[#898a9c]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CardComponent />
      <CounterSection />

      {/* Best Features */}
      <div className="w-full bg-[#ECF0F9] justify-center items-center flex">
        <div className="my-24 bg-white flex-col md:flex-row-reverse flex w-[90%] md:w-[85%]">
          <div className="w-full flex justify-center items-center p-3">
            <img className="rounded-lg" src={skillBg} alt="Skill Background" />
          </div>
          <div className="py-14 px-6 md:px-24">
            <div className="flex relative">
              <span className="bg-[#41CB5B] h-[2px] w-[45px] top-3 absolute"></span>
              <h5 className="text-lg text-[#41CB5B] absolute font-normal tracking-wider uppercase left-16">
                Best Feature
              </h5>
            </div>
            <h1 className="text-4xl md:text-5xl leading-1 font-bold blueColor mt-8">
              Great Experience of Vehicle Services
            </h1>
            <p className="text-lg text-[#898a9c] my-6">
              The Most Popular courier & delivery service provider. We are
              served domestic and worldwide.
            </p>
            <div className="mt-8">
              <div className="flex flex-col justify-center gap-5 items-center">
                <div className="flex justify-center items-start gap-4">
                  <HiExternalLink
                    size={40}
                    color="#41CB5B"
                    className="my-auto h-full"
                  />
                  <div>
                    <h4 className="font-bold text-lg">Free Estimate</h4>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Dicta et doloribus, omnis!
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-start gap-4">
                  <HiExternalLink
                    size={40}
                    color="#41CB5B"
                    className="my-auto h-full"
                  />
                  <div>
                    <h4 className="font-bold text-lg">24/7 Services</h4>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Dicta et doloribus, omnis!
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-start gap-4">
                  <HiExternalLink
                    size={40}
                    color="#41CB5B"
                    className="my-auto h-full"
                  />
                  <div>
                    <h4 className="font-bold text-lg">Flat Rate Fees</h4>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Dicta et doloribus, omnis!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Testimonials page="about" />
      <OurTeam />
      <Reviews /> 
    </>
  );
}

export default AboutPage
