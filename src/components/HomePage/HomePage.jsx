import React from "react";
import "./HomePage.css";

const HomePage = ({ onNavigate }) => {
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
      <div id="title">
        <h1>Welcome to my Portfolio</h1>
        <p>
          Here you can find information about me and my projects. Hope you
          will find what you're looking for!
        </p>
      </div>
      <div id="buttons">
        {["projects", "aboutme", "contact"].map((page) => (
          <div key={page} onClick={() => onNavigate(page)}>
            <h2>{page.charAt(0).toUpperCase() + page.slice(1).replace('me', ' me')}</h2>
            <p>
              {page === "projects" && "Here are some of my projects."}
              {page === "aboutme" && "What you need to know about me"}
              {page === "contact" && "How to contact me"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;