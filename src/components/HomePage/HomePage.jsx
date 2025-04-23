import React from "react";
import "./HomePage.css";

const HomePage = ({ onNavigate }) => {
  // Common stars background
  const StarsBackground = (
    <div className="stars">
      {Array.from({ length: 75 }).map((_, i) => (
        <div key={i} className="star"></div>
      ))}
    </div>
  );

  return (
    <div id="pg">
      {StarsBackground}
      <div id="title">
        <h1>Welcome to my Portfolio</h1>
        <p>
          Here you can find information about me and my projects. Hope you
          will find what you are looking for!
        </p>
      </div>
      <div id="buttons">
        <div onClick={() => onNavigate("projects")}>
          <h2>Projects</h2>
          <p>Here are some of my projects.</p>
        </div>
        <div onClick={() => onNavigate("aboutme")}>
          <h2>About me</h2>
          <p>What you need to know about me</p>
        </div>
        <div onClick={() => onNavigate("contact")}>
          <h2>Contact</h2>
          <p>How to contact me</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;