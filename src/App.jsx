import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AboutPage from './components/aboutPage'
import Accessibility from './components/accessibility'
import ContactUsPage from './components/contactUsPage'
import Footer from './components/footer'
import HomePage from './components/homePage'
import Navbar from './components/navbar'
import PrivacyPolicy from './components/privacyPolicy'
import ServicePage from './components/servicePage'
import TermServices from './components/termServices'
import WhyChooseUs from './components/whyChooseUs'
import GoToTop from './components/goToTop'
import FAQPage from './components/FAQPage'
function App() {

  return (
    <>
      
      <BrowserRouter>
        <div></div>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about-us' element={<AboutPage/>} />
          <Route path='/service' element={<ServicePage/>}/>
          <Route path='/contact-us' element={<ContactUsPage/>}/>
          <Route path='/why-choose-us' element={<WhyChooseUs/>}/>
          <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
          <Route path='/term-service' element={<TermServices/>}/>
          <Route path='/accessibility' element={<Accessibility/>}/>
          <Route path='/FAQ' element={<FAQPage/>}/>
        </Routes>
        <Footer />
        <GoToTop/>
      </BrowserRouter>

    </>
  )
}

export default App
