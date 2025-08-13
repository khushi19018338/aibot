import React from "react";
import Navbar from "./navbar.jsx";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="video-background">
      <video autoPlay muted loop playsInline className="video-bg">
        <source src="/pink-blue-gradient.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay-content">
        <Navbar />
        
        
          
      
      </div>
    </div>
  );
}

export default HomePage;

