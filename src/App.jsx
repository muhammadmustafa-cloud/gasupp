import './App.css'
import AboutUsSection from './components/aboutUsSection'
import AchievementSection from './components/achievementSection'
import ExtraFacility from './components/extraFacility'
import Footer from './components/footer'
import HomeBanner from './components/homeBanner'
import Navbar from './components/navbar'
import OurTeam from './components/ourTeam'
import Reviews from './components/reviews'
import ServicesSection from './components/servicesSection'
import Testimonials from './components/testimonials'

function App() {

  return (
    <div>
      <Navbar/>
      <HomeBanner/>
      <AboutUsSection/>
      <ServicesSection/>
      <ExtraFacility/>
      <AchievementSection/>
      <OurTeam/>
      <Testimonials/>
      <Reviews/>
      <Footer/>
    </div>
  )
}

export default App
