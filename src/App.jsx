import './App.css'
import AboutPage from './components/aboutPage'
import Footer from './components/footer'
import HomePage from './components/homePage'
import Navbar from './components/navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ServicePage from './components/servicePage'
import ContactUsPage from './components/contactUsPage'
import WhyChooseUs from './components/whyChooseUs'
import PrivacyPolicy from './components/privacyPolicy'
import TermServices from './components/termServices'
import Accessibility from './components/accessibility'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
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
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
