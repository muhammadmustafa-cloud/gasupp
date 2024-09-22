
import aboutSection from '../assets/choose.jpg'
import staion from '../assets/electric-station.png'
import { MdLocalGasStation } from "react-icons/md";
import { BsSpeedometer } from "react-icons/bs";
import { FaChartLine } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import Reviews from './reviews';

const WhyChooseUs = () => {
  return (
    <>
      {/* Header */}
      <div className='h-[500px] w-full' style={{
        backgroundImage: `url(images/bread-bg.jpg)`,
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
      }}>
        <div className="w-full h-full flex flex-col justify-center items-center text-white bg-[#021017] opacity-80">
          <div className='flex relative'>
            <span className='bg-[#41CB5B] h-[3px] rounded-xl -left-16 w-[50px] top-3 absolute'></span>
            <h5 className="text-xl font-medium mb-5">Why Choose Us</h5>
          </div>
          <h2 className="text-5xl font-bold w-[60%] items-center text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem..</h2>
        </div>
      </div>
      {/* Let Us Know */}
      <div className='flex gap-14 my-28 mx-24'>
        <div className='w-1/2 flex flex-col gap-7'>
          <div className='flex relative'>
            <span className='bg-[#41CB5B] h-[2px] w-[50px] top-4 absolute'></span>
            <h5 className='text-2xl absolute text-[#41CB5B] font-normal uppercase tracking-wider left-16'>Let&apos;s to Know Us</h5>
          </div>
          <h2 className='text-6xl font-medium blueColor mt-4'>We Delivering The Best Global Refueling Solutions.</h2>
          <p className='text-xl text-[#898a9c]'>GasUpp is dedicated to providing fast and reliable gas delivery and automotive services right to your doorstep. Our mission is to make car care as effortless as possible, offering convenience and peace of mind with every service.</p>
          <div className='flex flex-col gap-4'>
            <div className="container">
              <div className="skill-box">
                <span className="title">Fuel Management</span>
                <div className="skill-bar">
                  <span className="skill-per html">
                    <span className="tooltip">90%</span>
                  </span>
                </div>
              </div>
              <div className="skill-box">
                <span className="title">Converted Gas</span>
                <div className="skill-bar">
                  <span className="skill-per css">
                    <span className="tooltip">70%</span>
                  </span>
                </div>
              </div>
              <div className="skill-box">
                <span className="title">Vehicle Maintenance</span>
                <div className="skill-bar">
                  <span className="skill-per javascript">
                    <span className="tooltip">80%</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-1/2'>
          <div className='relative'>
            <img src={aboutSection} className='w-[600px] rounded-2xl' alt='about-section' />
            <div className='absolute flex flex-col justify-center py-8 px-4 rounded-xl gap-2 items-center bg-[#41CB5B] text-white bottom-0'>
              <img src={staion} className='w-[60px] ' alt='icon' />
              <h2 className='text-5xl font-bold'>5+</h2>
              <h6 className='text-lg font-medium'>Years of Experience</h6>
            </div>
          </div>
        </div>
      </div>
      {/* Extra Facilities */}
      <div className='w-full h-[400px] absolute' style={{
        backgroundImage: `url(images/service4.jpg)`,
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed',
      }}>
        <div className="bg-[#050C1D] w-full h-full flex flex-col items-center opacity-80">
          <div className='flex relative mt-20'>
            <span className='bg-[#41CB5B] h-[2px] w-[50px] top-4 right-4 absolute'></span>
            <h5 className='text-2xl absolute text-[#41CB5B] font-normal w-48 tracking-wider '>Why Choose Us</h5>
          </div>
          <h2 className={`text-5xl text-center font-semibold blueColor text-white mt-12 w-[20%]}`}>We offer perfect real
            Delivery Service</h2>
        </div>
      </div>
      <div className="bg-white w-full h-full flex flex-col items-center justify-center my-52 ">
        <div className=' relative top-24'>
          <div className='flex flex-wrap items-center justify-center gap-4  my-14'>
            <div className='flex flex-col h-[300px] bg-white shadow-2xl w-[300px] rounded-2xl justify-center items-center px-2 py-8'>
              <MdLocalGasStation color="#41CB5B" size="50" />
              <h5 className='text-xl mt-3 font-semibold'>100% Pure Fuel</h5>
              <p className='text-base text-[#898a9c] mt-3 w-[80%] text-center'>We help you find a architect by offering interior experience</p>
            </div>
            <div className='flex flex-col h-[300px] bg-white shadow-2xl w-[300px] rounded-2xl justify-center items-center px-2 py-8'>
              <BsSpeedometer color="#41CB5B" size="50" />
              <h5 className='text-xl mt-3 font-semibold'>Accurate Meter</h5>
              <p className='text-base text-[#898a9c] mt-3 w-[80%] text-center'>We help you find a architect by offering interior experience</p>
            </div>
            <div className='flex flex-col h-[300px] bg-white shadow-2xl w-[300px] rounded-2xl justify-center items-center px-2 py-8'>
              <FaChartLine color="#41CB5B" size="50" />
              <h5 className='text-xl mt-3 font-semibold'>Flat Rate Fees</h5>
              <p className='text-base text-[#898a9c] mt-3 w-[80%] text-center'>We help you find a architect by offering interior experience</p>
            </div>
            <div className='flex flex-col h-[300px] bg-white shadow-2xl w-[300px] rounded-2xl justify-center items-center px-2 py-8'>
              <FaClock color="#41CB5B" size="50" />
              <h5 className='text-xl mt-3 font-semibold'>24/7 Support</h5>
              <p className='text-base text-[#898a9c] mt-3 w-[80%] text-center'>We help you find a architect by offering interior experience</p>
            </div>
          </div>
        </div>
      </div>

      <Reviews/>
    </>
  )
}

export default WhyChooseUs
