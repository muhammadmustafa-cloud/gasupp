const HomeBanner = () => {
    return (
        <div className='h-screen w-full' style={{
                backgroundImage: `url(images/bannerImg.jpg)`,
                backgroundSize: 'cover', opacity:'94%' ,backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
            }}>
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
    )
}

export default HomeBanner
