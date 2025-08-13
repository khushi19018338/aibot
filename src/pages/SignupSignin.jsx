import React, { useState } from "react";
import "./Signup.css";
import bgVideo from "../pages/RUBRIK.mp4"; // put your video here

function SignupSignin() {
  const [signedIn, setSignedIn] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleGenerate = (e) => {
    e.preventDefault();
    setSignedIn(true);
  };
  const handleSignOut = () => {
    setSignedIn(false);
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <div className="signup-page">
      {/* Background video */}
      <video autoPlay muted loop playsInline className="bg-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Signup box on top */}
      <div className="signup-box">
        <h2>Sign Up / Sign In</h2>
        {!signedIn ? (
          <form className="signup-form" onSubmit={handleGenerate}>
            <input
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={formData.name}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email ID"
              onChange={handleChange}
              value={formData.email}
              required
            />
            <input
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              value={formData.phone}
              required
            />
            <button type="submit" className="otp-btn">
              Generate OTP or Password
            </button>
          </form>
        ) : (
          <div>
            <div className="signedin-box">✅ Already Signed In!</div>
            <button className="otp-btn" onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SignupSignin;
