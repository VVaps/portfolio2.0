import React from "react";
import "./AboutMePage.css";

const AboutMePage = () => {
  return (
    <div id="pg">
      <div className="stars">
        {Array.from({ length: 75 }).map((_, i) => (
          <div key={i} className="star"></div>
        ))}
      </div>
      <div id="center">
      <h1>About me</h1>
        <div id="left">
          <p>I'm a driven and passionate developer currently advancing my expertise in web development through intensive training at CEPPIC. I thrive on writing clean, efficient code and continuously exploring modern technologies to build engaging, user-centric web experiences. With hands-on experience in diverse workplace environments, I bring a strong work ethic, adaptability, and a collaborative spirit to every project. Known for being open-minded and easygoing, I excel at building positive relationships with teammates and stakeholders alike. Committed to lifelong learning and professional growth, I’m eager to contribute my skills and enthusiasm to a forward-thinking development team.</p>
        </div>
        <div id="right">
          <div className="image-container">
            <img src="https://picsum.photos/seed/1/300/300" alt="Profile" />
            <div className="orbit orbit1">
              <div className="planet"></div>
            </div>
            <div className="orbit orbit2">
              <div className="planet"></div>
            </div>
            <div className="orbit orbit3">
              <div className="planet"></div>
            </div>
            <div className="orbit orbit4">
              <div className="planet"></div>
            </div>
            <div className="orbit orbit5">
              <div className="planet"></div>
            </div>
            <div className="orbit orbit6">
              <div className="planet"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
