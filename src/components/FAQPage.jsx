import { useState } from "react";
import SingleQuestion from "./SingleQuestion"
import { question2, question3 } from "./question2";

const FAQPage = () => {
    const [cards] = useState(question2);
    const [cards2] = useState(question3);
    const [activeIndex, setActiveIndex] = useState(null);
    const handleQuestionClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index); // Toggle between active FAQs
    };
    return (
        <>
            {/* Header */}
            <div className='h-[250px] w-full' style={{
                backgroundImage: `url(images/bread-bg.jpg)`,
                backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
            }}>
                <div className="w-full h-full flex flex-col justify-center items-center text-white bg-[#021017] opacity-80">
                    <div className='flex relative'>
                        {/* <span className='bg-[#41CB5B] h-[3px] rounded-xl -left-16 w-[50px] top-3 absolute'></span>
                        <h5 className="text-xl font-medium mb-5">FAQ&apos;s</h5> */}
                    </div>
                    <h2 className="md:text-5xl text-3xl font-bold md:w-[60%] w-full items-center text-center">FAQ&apos;s</h2>
                </div>
            </div>
            <div className="bg-[#050C1D] w-full h-full flex flex-col items-center justify-center">
                <section className="md:w-[50%] w-full mx-auto py-8 px-4">
                    <h2 className="text-3xl text-center font-semibold blueColor text-white mt-8 mb-8">
                        General FAQs for Customers
                    </h2>
                    <section className="grid grid-cols-1 gap-8">
                        {cards.map((card, index) => (
                            <SingleQuestion
                                key={index}
                                question={card.question}
                                answer={card.answer}
                                isActive={index === activeIndex} // Active status
                                onClick={() => handleQuestionClick(index)} // Handle click
                            />
                        ))}
                    </section>
                </section>
                <section className="md:w-[50%] w-full mx-auto py-8 px-4">
                    <h2 className="text-3xl text-center font-semibold blueColor text-white mt-8 mb-8">
                    FAQs for GasUppers (Drivers)
                    </h2>
                    <section className="grid grid-cols-1 gap-8">
                        {cards2.map((card, index) => (
                            <SingleQuestion
                                key={index}
                                question={card.question}
                                answer={card.answer}
                                isActive={index === activeIndex} // Active status
                                onClick={() => handleQuestionClick(index)} // Handle click
                            />
                        ))}
                    </section>
                </section>
            </div>
        </>
    )
}

export default FAQPage
