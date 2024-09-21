import service1 from '../assets/service1.jpg'
import service2 from '../assets/service3.jpg'
import service3 from '../assets/service4.jpg'
import service4 from '../assets/service5.jpg'
import service5 from '../assets/service8.jpg'
import service6 from '../assets/services2.jpg'
import confirmation from '../assets/confirmation.png'
import delivery from '../assets/delivery.png'
import booking from '../assets/booking.png'
import ExtraFacility from './extraFacility'
const ServicePage = () => {
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
                        <h5 className="text-xl font-medium mb-5">Premium Automotive Services</h5>
                    </div>
                    <h2 className="text-5xl font-bold w-[60%] items-center text-center">Trust GasUpp for Dependable Car Care! Anywhere, Anytime.</h2>
                </div>
            </div>
            {/* Services Section */}
            <div className='bg-[#ECF0F9]  '>
                <div className='flex items-center justify-center gap-6 py-14 flex-wrap'>
                    <div className="bg-white rounded-lg shadow-xl p-6 w-[400px] h-[500px]">
                        <div className="flex justify-center">
                            <img src={service1} alt="Electric Charging" className="w-[400px] h-auto rounded-md " />
                        </div>
                        <div className="mt-10 text-center">
                            <h2 className="text-xl font-semibold">Electric Charging</h2>
                            <p className="text-gray-600 mt-2">This services involve transferring the parcels to the closest depot to the delivery location.</p>
                        </div>
                        <div className="mt-8">
                            <button className="bg-green-500 text-white rounded-full px-4 py-2 w-full hover:bg-green-600">Read More</button>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-xl p-6 w-[400px] h-[500px]">
                        <div className="flex justify-center">
                            <img src={service2} alt="Electric Charging" className="w-[400px] h-auto rounded-md " />
                        </div>
                        <div className="mt-10 text-center">
                            <h2 className="text-xl font-semibold">Gas Delivery</h2>
                            <p className="text-gray-600 mt-2">This services involve transferring the parcels to the closest depot to the delivery location.</p>
                        </div>
                        <div className="mt-8">
                            <button className="bg-green-500 text-white rounded-full px-4 py-2 w-full hover:bg-green-600">Read More</button>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-xl p-6 w-[400px] h-[500px]">
                        <div className="flex justify-center">
                            <img src={service3} alt="Electric Charging" className="w-[400px] h-auto rounded-md " />
                        </div>
                        <div className="mt-10 text-center">
                            <h2 className="text-xl font-semibold">Roadside Assistance</h2>
                            <p className="text-gray-600 mt-2">This services involve transferring the parcels to the closest depot to the delivery location.</p>
                        </div>
                        <div className="mt-8">
                            <button className="bg-green-500 text-white rounded-full px-4 py-2 w-full hover:bg-green-600">Read More</button>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-xl p-6 w-[400px] h-[500px]">
                        <div className="flex justify-center">
                            <img src={service4} alt="Electric Charging" className="w-[400px] h-auto rounded-md " />
                        </div>
                        <div className="mt-10 text-center">
                            <h2 className="text-xl font-semibold">Mobile Car Wash</h2>
                            <p className="text-gray-600 mt-2">This services involve transferring the parcels to the closest depot to the delivery location.</p>
                        </div>
                        <div className="mt-8">
                            <button className="bg-green-500 text-white rounded-full px-4 py-2 w-full hover:bg-green-600">Read More</button>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-xl p-6 w-[400px] h-[500px]">
                        <div className="flex justify-center">
                            <img src={service5} alt="Electric Charging" className="w-[400px] h-auto rounded-md " />
                        </div>
                        <div className="mt-10 text-center">
                            <h2 className="text-xl font-semibold">Oil Changes</h2>
                            <p className="text-gray-600 mt-2">This services involve transferring the parcels to the closest depot to the delivery location.</p>
                        </div>
                        <div className="mt-8">
                            <button className="bg-green-500 text-white rounded-full px-4 py-2 w-full hover:bg-green-600">Read More</button>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-xl p-6 w-[400px] h-[500px]">
                        <div className="flex justify-center">
                            <img src={service6} alt="Electric Charging" className="w-[400px] h-auto rounded-md " />
                        </div>
                        <div className="mt-10 text-center">
                            <h2 className="text-xl font-semibold">Battery Replacement/Boosting</h2>
                            <p className="text-gray-600 mt-2">This services involve transferring the parcels to the closest depot to the delivery location.</p>
                        </div>
                        <div className="mt-8">
                            <button className="bg-green-500 text-white rounded-full px-4 py-2 w-full hover:bg-green-600">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Why Choose Us */}
            <div className='w-full' style={{
                backgroundImage: `url(images/bread-bg.jpg)`,
                backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed',
            }}>
                <div className="bg-[#050C1D] w-full h-full flex flex-col items-center justify-center opacity-80">
                    <div className='flex relative mt-20'>
                        <span className='bg-[#41CB5B] h-[2px] w-[50px] top-4 right-4 absolute'></span>
                        <h5 className='text-2xl absolute text-[#41CB5B] font-normal tracking-wider '>Services</h5>
                    </div>
                    <h2 className={`text-5xl text-center font-semibold blueColor text-white mt-12 w-[20%]}`}>How It Works</h2>

                    <div className='flex flex-wrap items-center justify-center gap-6 my-14'>
                        <div className='flex flex-col h-[320px] bg-white w-[450px] justify-center items-center px-2 py-8 rounded-xl'>
                            <img src={booking} className='w-32' alt="" />
                            <h5 className='text-2xl mt-3 font-semibold'>Request Service</h5>
                            <p className='text-lg text-[#898a9c] w-[60%] text-center'>Use our app or website to schedule a gas delivery or automotive service.</p>
                        </div>
                        <div className='flex flex-col h-[320px] bg-white w-[450px] justify-center items-center px-2 py-8 rounded-xl'>
                            <img src={confirmation} className='w-32' alt="" />
                            <h5 className='text-2xl mt-3 font-semibold'>Get Confirmed </h5>
                            <p className='text-lg text-[#898a9c] w-[60%] text-center'>Receive a confirmation with the estimated time of arrival.</p>
                        </div>
                        <div className='flex flex-col h-[320px] bg-white w-[450px] justify-center items-center px-2 py-8 rounded-xl'>
                            <img src={delivery} className='w-32' alt="" />
                            <h5 className='text-2xl mt-3 font-semibold'>Enjoy Convenience</h5>
                            <p className='text-lg text-[#898a9c] w-[60%] text-center'>Our team arrives at your location to provide the requested service.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Additional Services */}
            <div>
                <ExtraFacility/>
            </div>
        </>

    )
}

export default ServicePage
