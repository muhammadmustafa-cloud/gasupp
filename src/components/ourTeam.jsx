import team1 from '../assets/team1.jpg'
const OurTeam = () => {
    return (
        <div className='my-16'>
            <div className='flex w-full mt-16 justify-center'>
                <div className='flex left-40 relative'>
                    <span className='bg-[#41CB5B] h-[2px] w-[50px] top-4 absolute'></span>
                    <h5 className='text-2xl absolute text-[#41CB5B] font-normal tracking-wide left-16'>EXPERT</h5>
                </div>
                <h2 className='text-5xl font-bold blueColor my-14'>Meet Our Dedicated Team</h2>
            </div>
            <div className='flex justify-center gap-8'>
                <div className='flex flex-col justify-center items-center'>
                    <img src={team1} className='w-60 h-60'/>
                    <h6 className='font-semibold text-xl'>James Cameron</h6>
                    <span className='font-medium text-base'>CEO</span>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src={team1} className='w-60 h-60'/>
                    <h6 className='font-semibold text-xl'>James Cameron</h6>
                    <span className='font-medium text-base'>CEO</span>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src={team1} className='w-60 h-60'/>
                    <h6 className='font-semibold text-xl'>James Cameron</h6>
                    <span className='font-medium text-base'>CEO</span>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src={team1} className='w-60 h-60'/>
                    <h6 className='font-semibold text-xl'>James Cameron</h6>
                    <span className='font-medium text-base'>CEO</span>
                </div>
            </div>
        </div>
    )
}

export default OurTeam
