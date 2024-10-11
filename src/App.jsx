// App.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./components/aboutPage";
import Accessibility from "./components/accessibility";
import ContactUsPage from "./components/contactUsPage";
import Footer from "./components/footer";
import HomePage from "./components/homePage";
import Navbar from "./components/navbar";
import PrivacyPolicy from "./components/privacyPolicy";
import ServicePage from "./components/servicePage";
import TermServices from "./components/termServices";
import WhyChooseUs from "./components/whyChooseUs";
import GoToTop from "./components/goToTop";
import FAQPage from "./components/FAQPage";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import SubscribeModal from "./components/subscribeModal";

function App() {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    const modalTimer = setTimeout(() => {
      setIsModalOpen(true);
    }, 130000); // 2 minutes (120,000 milliseconds)

    return () => {
      clearTimeout(timer);
      clearTimeout(modalTimer);
    };
  }, []);

  const handleCloseModal = () => setIsModalOpen(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Process the form data here
    handleCloseModal();
    alert("Thank you for subscribing! You’ll receive a 20% discount.");
  };

  return (
    <>
      <BrowserRouter>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about-us" element={<AboutPage />} />
              <Route path="/service" element={<ServicePage />} />
              <Route path="/contact-us" element={<ContactUsPage />} />
              <Route path="/why-choose-us" element={<WhyChooseUs />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/term-service" element={<TermServices />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="/FAQ" element={<FAQPage />} />
            </Routes>
            <Footer />
            <GoToTop />
            <SubscribeModal
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              onSubmit={handleFormSubmit}
            />
          </>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
