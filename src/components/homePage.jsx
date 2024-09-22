import AchievementSection from "./achievementSection"
import ExtraFacility from "./extraFacility"
import OurTeam from "./ourTeam"
import Reviews from "./reviews"
import Testimonials from "./testimonials"
import aboutSection from '../assets/about.jpg'
import { LiaCheckCircleSolid } from "react-icons/lia";
import staion from '../assets/electric-station.png'
const HomePage = () => {
    return (
        <>
            {/* Header */}
            <div className='h-screen w-full' style={{
                backgroundImage: `url(images/slide-1.jpg)`,
                backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
            }}>
                <div className="w-full h-full flex flex-col text-white bg-[#021017] opacity-80">
                    <div className=' flex flex-col gap-9 w-[45%] ml-28 justify-center my-auto h-screen text-white'>
                        <div className='flex relative'>
                            <span className='bg-[#41CB5B] h-[2px] w-[50px] top-4 absolute'></span>
                            <h5 className='text-2xl absolute font-normal tracking-wider left-16'>Welcome to GasUpp</h5>
                        </div>
                        <h2 className='text-7xl font-bold tracking-wide mt-4'>Instant Gas, Maximum Comfort!</h2>
                        <p className='text-xl'>Your one-stop solution for gas delivery and automotive services, available 24/7.</p>
                        <div className='greenColor text-white font-medium px-6 py-4 w-52 text-center rounded-full cursor-pointer'>
                            <button>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* About Us */}
            <div className='flex gap-14 my-28 mx-24'>
                <div className='w-1/2 flex flex-col gap-7'>
                    <div className='flex relative'>
                        <span className='bg-[#41CB5B] h-[2px] w-[50px] top-4 absolute'></span>
                        <h5 className='text-2xl absolute text-[#41CB5B] font-normal tracking-wider left-16'>ABOUT US</h5>
                    </div>
                    <h2 className='text-6xl font-medium blueColor mt-4'>Experience Reliable Car Care with GasUpp: Your Go-To Car Service Provider</h2>
                    <p className='text-xl text-[#898a9c]'>GasUpp is dedicated to providing fast and reliable gas delivery and automotive services right to your doorstep. Our mission is to make car care as effortless as possible, offering convenience and peace of mind with every service.</p>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-2'>
                            <span><LiaCheckCircleSolid size={25} color='#41CB5B' /></span><span className='font-normal text-[#898a9c] text-lg'><span className='font-medium text-[#898a9c] text-lg'>Reliability:</span> Count on GasUpp for top-notch roadside assistance, car washes, oil changes, and more. We’re your one-stop auto solution.</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span><LiaCheckCircleSolid size={25} color='#41CB5B' /></span><span className='font-normal text-[#898a9c] text-lg'><span className='font-medium text-[#898a9c] text-lg'>Convenience:</span> GasUpp brings the gas station to you, saving you time and effort in your busy schedule. Enjoy car care without leaving home.</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span><LiaCheckCircleSolid size={25} color='#41CB5B' /></span><span className='font-normal text-[#898a9c] text-lg'><span className='font-medium text-[#898a9c] text-lg'>Customer Satisfaction:</span> We deliver premium fuel and services to ensure your vehicle runs smoothly. Trust GasUpp for quality care you can rely on.</span>
                        </div>
                    </div>
                    <div className='border-[#41CB5B] hover:bg-[#41CB5B] hover:text-white transition translate-x-1 border text-[#41CB5B] font-medium px-6 py-4 w-52 text-center rounded-full cursor-pointer'>
                        <button>Learn More</button>
                    </div>
                </div>
                <div className='w-1/2'>
                    <div className='relative'>
                        <img src={aboutSection} className='w-[600px] rounded-2xl' alt='about-section' />
                        <div className='absolute flex flex-col justify-center py-8 px-4 rounded-xl gap-2 items-center bg-[#FF6E03] text-white bottom-0'>
                            <img src={staion} className='w-[60px] ' alt='icon' />
                            <h2 className='text-5xl font-bold'>5+</h2>
                            <h6 className='text-lg font-medium'>Years of Experience</h6>
                        </div>
                    </div>
                </div>
            </div>
            {/* Services */}
            <div className='w-full' style={{
                backgroundImage: `url(images/service-bg.jpg)`,
                backgroundSize: 'cover', opacity: '94%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
            }}>
                <div className="flex flex-col py-24 justify-center items-center">
                    <div className='flex relative'>
                        <span className='bg-[#41CB5B] h-[2px] w-[50px] top-4 right-4 absolute'></span>
                        <h5 className='text-2xl absolute text-[#41CB5B] font-normal tracking-wider '>SERVICES</h5>
                    </div>
                    <h2 className='text-7xl text-center font-medium blueColor mt-12 w-[800px]'>Best Service for<br /> all type of Vehicle</h2>
                    <div>
                        <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
                            <div className='bg-[#41CB5B] w-[400px] py-14 rounded-xl text-white'>
                                <div className='px-10 mb-4'>
                                    <img src={staion} className='w-[80px] ' alt='icon' />
                                </div>
                                <div className='px-10 my-7'>
                                    <h4 className='text-3xl font-semibold'>CNG Conversion</h4>
                                    <p className='text-lg mt-2'>This services involve transferring the parcels to the closest depot to the delivery location.</p>
                                </div>
                                <button className='px-10 font-medium mt-4 text-xl '>Read More</button>
                            </div>
                            <div className='bg-[#061129] w-[400px] py-14 rounded-xl text-white'>
                                <div className='px-10 mb-4'>
                                    <img src={staion} className='w-[80px] ' alt='icon' />
                                </div>
                                <div className='px-10 my-7'>
                                    <h4 className='text-3xl font-semibold'>Electric Charging</h4>
                                    <p className='text-lg mt-2'>This services involve transferring the parcels to the closest depot to the delivery location.</p>
                                </div>
                                <button className='px-10 font-medium mt-4 text-xl '>Read More</button>
                            </div>
                            <div className='bg-[#41CB5B] w-[400px] py-14 rounded-xl text-white'>
                                <div className='px-10 mb-4'>
                                    <img src={staion} className='w-[80px] ' alt='icon' />
                                </div>
                                <div className='px-10 my-7'>
                                    <h4 className='text-3xl font-semibold'>Cas Washing</h4>
                                    <p className='text-lg mt-2'>This services involve transferring the parcels to the closest depot to the delivery location.</p>
                                </div>
                                <button className='px-10 font-medium mt-4 text-xl '>Read More</button>
                            </div>
                            <div className='bg-[#061129] w-[400px] py-14 rounded-xl text-white'>
                                <div className='px-10 mb-4'>
                                    <img src={staion} className='w-[80px] ' alt='icon' />
                                </div>
                                <div className='px-10 my-7'>
                                    <h4 className='text-3xl font-semibold'>Pure Octane</h4>
                                    <p className='text-lg mt-2'>This services involve transferring the parcels to the closest depot to the delivery location.</p>
                                </div>
                                <button className='px-10 font-medium mt-4 text-xl '>Read More</button>
                            </div>
                            <div className='bg-[#41CB5B] w-[400px] py-14 rounded-xl text-white'>
                                <div className='px-10 mb-4'>
                                    <img src={staion} className='w-[80px] ' alt='icon' />
                                </div>
                                <div className='px-10 my-7'>
                                    <h4 className='text-3xl font-semibold'>Light Diesel</h4>
                                    <p className='text-lg mt-2'>This services involve transferring the parcels to the closest depot to the delivery location.</p>
                                </div>
                                <button className='px-10 font-medium mt-4 text-xl '>Read More</button>
                            </div>
                            <div className='bg-[#061129] w-[400px] py-14 rounded-xl text-white'>
                                <div className='px-10 mb-4'>
                                    <img src={staion} className='w-[80px] ' alt='icon' />
                                </div>
                                <div className='px-10 my-7'>
                                    <h4 className='text-3xl font-semibold'>Crystal Petrol</h4>
                                    <p className='text-lg mt-2'>This services involve transferring the parcels to the closest depot to the delivery location.</p>
                                </div>
                                <button className='px-10 font-medium mt-4 text-xl '>Read More</button>
                            </div>


                        </div>
                    </div>
                </div>

            </div>
            <ExtraFacility />
            <AchievementSection />
            <OurTeam />
            <Testimonials page="home" />
            <Reviews />
        </>
    )
}

export default HomePage
