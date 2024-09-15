import staion from '../assets/electric-station.png'

const ServicesSection = () => {
    return (
        <div className='h-[1100px] w-full' style={{
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
                <div className='flex mx-24 gap-6 mt-20'>
                    <div className='bg-[#41CB5B] py-5 rounded-lg text-white'>
                        <div className='px-10 mb-4'>
                            <img src={staion} className='w-[80px] ' alt='icon' />
                        </div>
                            <hr className='border-slate-400'/>
                        <div className='px-10 my-4'>
                            <h4 className='text-2xl font-semibold'>CNG Conversion</h4>
                            <p className='text-base'>This services involve transferring the parcels to the closest depot to the delivery location.</p>
                        </div>
                        <hr className='border-slate-400'/>
                        <button className='px-10 font-medium mt-4 text-xl '>Read More</button>
                    </div>
                    <div className='bg-[#061129] py-5 rounded-lg text-white'>
                        <div className='px-10 mb-4'>
                            <img src={staion} className='w-[80px]' alt='icon' />
                        </div>
                            <hr className='border-slate-400'/>
                        <div className='px-10 my-4'>
                            <h4 className='text-2xl font-semibold'>Car Wash</h4>
                            <p className='text-base'>This services involve transferring the parcels to the closest depot to the delivery location.</p>
                        </div>
                        <hr className='border-slate-400'/>
                        <button className='px-10 font-medium mt-4 text-xl '>Read More</button>
                    </div>
                    <div className='bg-[#41CB5B] py-5 rounded-lg text-white'>
                        <div className='px-10 mb-4'>
                            <img src={staion} className='w-[80px] ' alt='icon' />
                        </div>
                            <hr className='border-slate-400'/>
                        <div className='px-10 my-4'>
                            <h4 className='text-2xl font-semibold'>CNG Conversion</h4>
                            <p className='text-base'>This services involve transferring the parcels to the closest depot to the delivery location.</p>
                        </div>
                        <hr className='border-slate-400'/>
                        <button className='px-10 font-medium mt-4 text-xl '>Read More</button>
                    </div>  
                </div>
                <div className='flex mx-24 gap-6 mt-20'>
                    <div className='bg-[#061129] py-5 rounded-lg text-white'>
                        <div className='px-10 mb-4'>
                            <img src={staion} className='w-[80px] ' alt='icon' />
                        </div>
                            <hr className='border-slate-400'/>
                        <div className='px-10 my-4'>
                            <h4 className='text-2xl font-semibold'>CNG Conversion</h4>
                            <p className='text-base'>This services involve transferring the parcels to the closest depot to the delivery location.</p>
                        </div>
                        <hr className='border-slate-400'/>
                        <button className='px-10 font-medium mt-4 text-xl '>Read More</button>
                    </div>
                    <div className='bg-[#41CB5B] py-5 rounded-lg text-white'>
                        <div className='px-10 mb-4'>
                            <img src={staion} className='w-[80px]' alt='icon' />
                        </div>
                            <hr className='border-slate-400'/>
                        <div className='px-10 my-4'>
                            <h4 className='text-2xl font-semibold'>CNG Conversion</h4>
                            <p className='text-base'>This services involve transferring the parcels to the closest depot to the delivery location.</p>
                        </div>
                        <hr className='border-slate-400'/>
                        <button className='px-10 font-medium mt-4 text-xl '>Read More</button>
                    </div>
                    <div className='bg-[#061129] py-5 rounded-lg text-white'>
                        <div className='px-10 mb-4'>
                            <img src={staion} className='w-[80px] ' alt='icon' />
                        </div>
                            <hr className='border-slate-400'/>
                        <div className='px-10 my-4'>
                            <h4 className='text-2xl font-semibold'>CNG Conversion</h4>
                            <p className='text-base'>This services involve transferring the parcels to the closest depot to the delivery location.</p>
                        </div>
                        <hr className='border-slate-400'/>
                        <button className='px-10 font-medium mt-4 text-xl '>Read More</button>
                    </div>  
                </div>
                </div>
            </div>

        </div>
    )
}

export default ServicesSection
