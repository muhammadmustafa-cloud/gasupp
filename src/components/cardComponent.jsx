import star from '../assets/Star.svg';
import send from '../assets/Send.svg';
import shield from '../assets/Shield.svg';


const FeatureCard = ({ icon, title, content, index }) => (
    <div className={`flex flex-row p-6 text-black rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
        <div className={`w-[70px] h-[70px] rounded-full bg-[#41CB5B]  ${styles.flexCenter} bg-dimBlue`}>
            <img src={icon} alt="star" className="w-[100%] text-black rounded-full h-[50%] object-contain" />
        </div>
        <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold  text-[18px] leading-[23.4px] mb-1">
                {title}
            </h4>
            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
                {content}
            </p>
        </div>
    </div>
);
const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",

    heading2: " font-semibold xs:text-[48px] text-[40px] text-[#41CB5B] xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-normal text-dimWhite text-[18px] leading-[30.8px]",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",

    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",

    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
};
const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

const features = [
    {
        id: "feature-1",
        icon: star,
        title: "Reliability",
        content:
            "Count on GasUpp for top-notch roadside assistance, car washes, oil changes, wiper blade replacements, and more. We’re your one-stop auto solution.",
    },
    {
        id: "feature-2",
        icon: shield,
        title: "Customer Satisfaction",
        content:
            "We deliver premium fuel and services to ensure your vehicle runs smoothly. Trust GasUpp for quality care you can rely on.",
    },
    {
        id: "feature-3",
        icon: send,
        title: "Convenience",
        content:
            "GasUpp brings the gas station to you, saving you time and effort in your busy schedule. Enjoy car care without leaving home.",
    },
];




const CardComponent = () => {
    return (
        <section id="features" className={`${layout.section} px-24`}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Experience Reliable Car, <br className="sm:block hidden" /> Care with GasUpp.
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    GasUpp is dedicated to providing fast and reliable gas delivery and automotive services right to
                    your doorstep. Our mission is to make car care as effortless as possible, offering convenience and
                    peace of mind with every service.
                </p>

                <button type="submit" className="py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none mt-10" />
            </div>

            <div className={`${layout.sectionImg} flex-col`}>
                {features.map((feature, index) => (
                    <FeatureCard key={feature.id} {...feature} index={index} />
                ))}
            </div>
        </section>
    )
}

export default CardComponent
