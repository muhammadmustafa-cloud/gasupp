import aboutSection from '../assets/about.jpg'
import { LiaCheckCircleSolid } from "react-icons/lia";
import staion from '../assets/electric-station.png'
const AboutUsSection = () => {
    return (
        <div className='flex gap-14 my-28 mx-24'>
            <div className='w-1/2 flex flex-col gap-7'>
                <div className='flex relative'>
                    <span className='bg-[#41CB5B] h-[2px] w-[50px] top-4 absolute'></span>
                    <h5 className='text-2xl absolute text-[#41CB5B] font-normal tracking-wider left-16'>ABOUT US</h5>
                </div>
                <h2 className='text-7xl font-medium blueColor mt-4'>Universal GasUpp Solutions for Every Vehicle</h2>
                <p className='text-xl text-[#898a9c]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur est dicta iure cupiditate magnam tempore molestias veniam quis recusandae in quos fugiat rerum perspiciatis veritatis, porro minus quibusdam quam voluptatum.</p>
                <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-2'>
                    <span><LiaCheckCircleSolid size={25} color='#41CB5B' /></span><span className='font-medium text-[#898a9c] text-base'>From Starting our launch to service with dignity.</span>
                </div>
                <div className='flex items-center gap-2'>
                    <span><LiaCheckCircleSolid size={25} color='#41CB5B' /></span><span className='font-medium text-[#898a9c] text-base'>We always provide flexible & quality task.</span>
                </div>
                <div className='flex items-center gap-2'>
                    <span><LiaCheckCircleSolid size={25} color='#41CB5B' /></span><span className='font-medium text-[#898a9c] text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, tempore!.</span>
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
                        <img src={staion} className='w-[60px] ' alt='icon'/>
                        <h2 className='text-5xl font-bold'>5+</h2>
                        <h6 className='text-lg font-medium'>Years of Experience</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsSection
