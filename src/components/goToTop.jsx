import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import './GoToTop.css'; // Assuming you are adding a new CSS file for GoToTop styles

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="top-btn" onClick={goToBtn}>
          <FaArrowUp size={25} className="top-btn--icon" />
        </div>
      )}
    </>
  );
};

export default GoToTop;