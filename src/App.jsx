import './App.css'
import AboutPage from './components/aboutPage'
import Footer from './components/footer'
import HomePage from './components/homePage'
import Navbar from './components/navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ServicePage from './components/servicePage'
import ContactUsPage from './components/contactUsPage'
import WhyChooseUs from './components/whyChooseUs'
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about-us' element={<AboutPage/>} />
          <Route path='/service' element={<ServicePage/>}/>
          <Route path='/contact-us' element={<ContactUsPage/>}/>
          <Route path='/why-choose-us' element={<WhyChooseUs/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
