import React from "react";
import "./AboutMePage.css";

const AboutMePage = () => {
  const pfp = require("../../assets/img/1718271076860-removebg-preview.png");

  const generateStars = () => {
    return Array.from({ length: 75 }).map((_, i) => {
      const style = {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${Math.floor(Math.random() * 3 + 2)}px`,
        height: `${Math.floor(Math.random() * 3 + 2)}px`,
        animationDelay: `${Math.random() * 2}s`
      };
      return <div key={i} className="star" style={style} />;
    });
  };

  return (
    <div id="pg">
      <div className="stars">{generateStars()}</div>
      <div id="center">
        <h1>About me</h1>
        <div id="content-wrapper">
          <div id="left">
            <p>I'm a driven and passionate developer currently advancing my expertise in web development through intensive training at CEPPIC. I thrive on writing clean, efficient code and continuously exploring modern technologies to build engaging, user-centric web experiences. With hands-on experience in diverse workplace environments, I bring a strong work ethic, adaptability, and a collaborative spirit to every project. Known for being open-minded and easygoing, I excel at building positive relationships with teammates and stakeholders alike. Committed to lifelong learning and professional growth, I’m eager to contribute my skills and enthusiasm to a forward-thinking development team.</p>
          </div>
          <div id="right">
            <div className="image-container">
              <div id="pfp">
              <img src={pfp} alt="Professional profile" loading="lazy" />
              </div>
              {[...Array(6)].map((_, i) => (
                <div key={i} className={`orbit orbit${i+1}`}>
                  <div className="planet" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;