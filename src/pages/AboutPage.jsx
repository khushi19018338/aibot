import React from "react";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-container">
      <video autoPlay muted loop className="about-video">
        <source src="/aboutpage.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="about-content">
        <h1>About Tricky</h1>
        <p>
          <em>“Smart answers with a playful twist.”</em>
          <br /><br />
          Meet <strong>Tricky</strong> – your quick-witted AI companion who
          loves turning questions into answers and confusion into clarity.
          Whether you need help finding information, solving a problem, or
          just having a clever conversation, Tricky’s got you covered.
          Smart, fast, and a little playful, Tricky blends logic with
          personality to make every interaction both useful and enjoyable.
          No matter the topic—serious or silly—you can count on Tricky to
          keep the conversation engaging and insightful.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
