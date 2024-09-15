import img from '../assets/faq-img.jpg'
const AchievementSection = () => {
    return (
        <div className='flex'>
            <div>
                <img src={img} />
            </div>
            <div className='bg-[#061129] py-18 pt-20'>
                <div className=''>
                    <div className='flex ml-60 relative'>
                        <span className='bg-[#41CB5B] h-[2px] w-[50px] top-4 left-4 absolute'></span>
                        <h5 className='text-2xl left-20 absolute text-white font-normal tracking-wider '>SERVICES</h5>
                    </div>
                    <h2 className='text-7xl text-center font-medium text-white blueColor mt-12 w-[800px]'>Our Brilliant Skill & Creativity</h2>
                    <p className='text-center text-[#bdbdbd] mt-10'>There are planty industrial solution the filed. One of the best civil work in downtown have done by expert contractor.</p>
                   <div>
                   <div className='flex items-center justify-center'>
                        <div className='flex flex-col justify-center items-center p-10'>
                            <h2 className='text-white text-4xl font-medium'>200+</h2>
                            <span className='text-[#41CB5B] text-xl'>Satisfied Client</span>
                        </div>
                        <div className='flex flex-col justify-center items-center p-10'>
                            <h2 className='text-white text-4xl font-medium'>25</h2>
                            <span className='text-[#41CB5B] text-xl'>Worldwide Branches</span>
                        </div>
                        
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='flex flex-col justify-center items-center p-10'>
                            <h2 className='text-white text-4xl font-medium'>200+</h2>
                            <span className='text-[#41CB5B] text-xl'>Satisfied Client</span>
                        </div>
                        <div className='flex flex-col justify-center items-center p-10'>
                            <h2 className='text-white text-4xl font-medium'>25</h2>
                            <span className='text-[#41CB5B] text-xl'>Worldwide Branches</span>
                        </div>
                        
                    </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default AchievementSection
