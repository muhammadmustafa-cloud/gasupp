import { FaArrowRight } from "react-icons/fa";

const ExtraFacility = () => {
    return (
        <div className="flex flex-col items-center  my-28 mx-28">
            <div className='flex relative border'>
            <span className='bg-[#41CB5B] h-[2px] w-[50px] top-4 right-4 absolute'></span>
            <h5 className='text-2xl absolute text-[#41CB5B] font-normal text-center tracking-wider w-[160px]'>WE ALSO DO</h5>
            </div>
            <h2 className='text-7xl font-medium blueColor w-[60%] my-14 text-center'>More Additional Service in Filling Station</h2>
            <div className="flex gap-3 justify-between">
                <div className='h-80 w-80 flex  text-white' style={{
                    backgroundImage: `url(images/01.jpg)`,
                    backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
                }}>
                    <div className="w-80 h-80 flex flex-col justify-center items-center text-white bg-[#021017] opacity-80">
                        <h3 className="text-2xl font-semibold tracking-wide">Car Evacaution</h3>
                        <h6 className="text-[#41CB5B] font-bold text-lg flex items-center justify-center gap-2">Read More <FaArrowRight size={15}/></h6>
                    </div>
                </div>
                <div className='h-80 w-80 flex  text-white' style={{
                    backgroundImage: `url(images/01.jpg)`,
                    backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
                }}>
                    <div className="w-80 h-80 flex flex-col justify-center items-center text-white bg-[#021017] opacity-80">
                        <h3 className="text-2xl font-semibold tracking-wide">Wheels Pumping</h3>
                        <h6 className="text-[#41CB5B] font-bold text-lg flex items-center justify-center gap-2">Read More <FaArrowRight size={15}/></h6>
                    </div>
                </div>
                <div className='h-80 w-80 flex  text-white' style={{
                    backgroundImage: `url(images/01.jpg)`,
                    backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
                }}>
                    <div className="w-80 h-80 flex flex-col justify-center items-center text-white bg-[#021017] opacity-80">
                        <h3 className="text-2xl font-semibold tracking-wide">Engine Repair</h3>
                        <h6 className="text-[#41CB5B] font-bold text-lg flex items-center justify-center gap-2">Read More <FaArrowRight size={15}/></h6>
                    </div>
                </div>
                <div className='h-80 w-80 flex  text-white' style={{
                    backgroundImage: `url(images/01.jpg)`,
                    backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
                }}>
                    <div className="w-80 h-80 flex flex-col justify-center items-center text-white bg-[#021017] opacity-80">
                        <h3 className="text-2xl font-semibold tracking-wide">Car Evacaution</h3>
                        <h6 className="text-[#41CB5B] font-bold text-lg flex items-center justify-center gap-2">Read More <FaArrowRight size={15}/></h6>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ExtraFacility
