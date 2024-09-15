import img from '../assets/2.jpg'
const Testimonials = () => {
    return (
        <div className='flex flex-col justify-center items-center pb-20 bg-[#ededed]'>
             <div className='flex relative mt-20'>
                    <span className='bg-[#41CB5B] h-[2px] w-[50px] top-4 right-4 absolute'></span>
                    <h5 className='text-2xl absolute text-[#41CB5B] font-normal tracking-wider '>Testimonial</h5>
                </div>
                <h2 className='text-7xl text-center font-medium blueColor mt-12 w-[800px]'>What Our Clients Say About Us</h2>
            <div className='flex mt-12 justify-around gap-10'>
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg mx-auto">
                    {/* Quote Icon */}
                    <div className="relative -top-6 bg-green-500 w-12 h-12 flex items-center justify-center rounded-full">
                        <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"
                            ></path>
                        </svg>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-600 text-lg">
                        Tempore, cum soluta nobis est optio cumque nihil impedit quo minus id maxime placeat facere possimus. Omni dolor repellendus emoribus autem quibusdam et aut officiis
                    </p>

                    {/* Customer Info */}
                    <div className="mt-6 flex items-center">
                        {/* Profile Image */}
                        <img
                            src={img}
                            alt="Customer"
                            className="w-12 h-12 rounded-full border-2 border-gray-300"
                        />
                        {/* Name and Designation */}
                        <div className="ml-4">
                            <h4 className="text-xl font-semibold text-gray-900">Paul Scholes</h4>
                            <p className="text-gray-500">Customer</p>
                        </div>
                    </div>
                </div>
                {/* another card */}
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg mx-auto">
                    {/* Quote Icon */}
                    <div className="relative -top-6 bg-green-500 w-12 h-12 flex items-center justify-center rounded-full">
                        <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"
                            ></path>
                        </svg>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-600 text-lg">
                        Tempore, cum soluta nobis est optio cumque nihil impedit quo minus id maxime placeat facere possimus. Omni dolor repellendus emoribus autem quibusdam et aut officiis
                    </p>

                    {/* Customer Info */}
                    <div className="mt-6 flex items-center">
                        {/* Profile Image */}
                        <img
                            src={img}
                            alt="Customer"
                            className="w-12 h-12 rounded-full border-2 border-gray-300"
                        />
                        {/* Name and Designation */}
                        <div className="ml-4">
                            <h4 className="text-xl font-semibold text-gray-900">Paul Scholes</h4>
                            <p className="text-gray-500">Customer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
