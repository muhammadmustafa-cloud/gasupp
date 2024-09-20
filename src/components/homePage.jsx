import AboutUsSection from "./aboutUsSection"
import AchievementSection from "./achievementSection"
import ExtraFacility from "./extraFacility"
import HomeBanner from "./homeBanner"
import OurTeam from "./ourTeam"
import Reviews from "./reviews"
import ServicesSection from "./servicesSection"
import Testimonials from "./testimonials"

const HomePage = () => {
    return (
        <>
            <HomeBanner />
            <AboutUsSection />
            <ServicesSection />
            <ExtraFacility />
            <AchievementSection />
            <OurTeam />
            <Testimonials page="home" />
            <Reviews />
        </>
    )
}

export default HomePage
