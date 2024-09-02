import React from "react";

export default function About() {
  return (
    <div className="aboutDesc">
      <p style={{ fontSize: "24px", fontFamily:"cursive", marginTop:"2%" }}>My Intro</p>
      <h1 style={{color:"blue"}}>About me</h1>
      <div className="container">
        <div className="aboutsection">
          <i class="fa-solid fa-award"></i>
          <p className="aboutName">Experience</p>
          <p className="aboutLevel">6 Months</p>
        </div>
        <div className="aboutsection">
          <i class="fa-solid fa-suitcase"></i> 
          <p className="aboutName">Completed</p>
          <p className="aboutLevel">2 Projects</p>
        </div>
        <div className="aboutsection">
          <i class="fa-solid fa-headset"></i>
          <p className="aboutName">Support</p>
          <p className="aboutLevel">Online 24/7</p>
        </div>
      </div>
    </div>
  );
}
