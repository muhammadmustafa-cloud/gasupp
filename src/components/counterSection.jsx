import { useState } from "react"
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"

const CounterSection = () => {
    const [counterState, setCounterState] = useState(false);

    return (
        <div className='h-[300px] w-full' style={{
            backgroundImage: `url(images/bread-bg.jpg)`,
            backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed',
        }}>
            <div className="bg-[#050C1D] w-full h-full flex flex-col justify-center opacity-80">
                <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
                    <div className="grid grid-cols-4 text-center px-20 ">
                        <div>
                            <h2 className="text-5xl font-bold text-white">
                                {counterState && <CountUp start={0} end={700} duration={2.75}></CountUp>}+
                            </h2>
                            <p className="mt-2 font-semibold text-lg text-[#41CB5B]">Satisfied Client</p>
                        </div>
                        <div>
                            <h2 className="text-5xl font-bold text-white">
                                {counterState && <CountUp start={0} end={20} duration={2.75}></CountUp>}
                            </h2>
                            <p className="mt-2 font-semibold text-lg text-[#41CB5B]">Worldwide Branches</p>
                        </div>
                        <div>
                            <h2 className="text-5xl font-bold text-white">
                                {counterState && <CountUp start={0} end={15} duration={2.75}></CountUp>}+
                            </h2>
                            <p className="mt-2 font-semibold text-lg text-[#41CB5B]">Countries Covered</p>
                        </div>
                        <div>
                            <h2 className="text-5xl font-bold text-white">
                                {counterState && <CountUp start={0} end={4} duration={2.75}></CountUp>}.0
                            </h2>
                            <p className="mt-2 font-semibold text-lg text-[#41CB5B]">Reviews</p>
                        </div>
                    </div>
                </ScrollTrigger>
            </div>
        </div>
    )
}

export default CounterSection
