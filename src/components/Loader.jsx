import  { useEffect, useState } from "react";
import logo from "../assets/logo.png"; 

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10; 
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-container">
      <img src={logo} alt="Loading..." className="loader-logo" />
      <div className="loader-slider-container">
        <div className="loader-slider" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="loader-percentage">{progress}%</div>
    </div>
  );
};

export default Loader;
