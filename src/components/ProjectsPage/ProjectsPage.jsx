// ProjectsPage.jsx
import React, { useState } from "react";
import Slider from "react-slick";
import "./ProjectsPage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomArrow = ({ onClick, isNext }) => (
  <div
    onClick={onClick}
    className={`custom-arrow ${isNext ? "next-arrow" : "prev-arrow"}`}
  >
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {isNext ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      )}
    </svg>
  </div>
);

const FlipCard = ({ front, back }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="flip-card" onClick={() => setFlipped(!flipped)}>
      <div className={`flip-card-inner ${flipped ? "flipped" : ""}`}>
        <div className="flip-card-front">{front}</div>
        <div className="flip-card-back">{back}</div>
      </div>
    </div>
  );
};

export default function ProjectsPage() {

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

  
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "0px",
    nextArrow: <CustomArrow isNext={true} />,
    prevArrow: <CustomArrow isNext={false} />,
  };

  const carouselData = [
    {
      id: 1,
      title: "TrackDash",
      description:
        "This project is a web app designed to help and assist trainers and teachers with a concrete demonstration of what a phishing page can do.",
      image:
        "https://flatirons.com/static/0a79ca63e3ace4bfd802a70a2d7427ae/d7e39/What-is-Drupal-An-Overview-in-2025.webp",
    },
    {
      id: 2,
      title: "Projet la clef d'or",
      description:
        "This project is one of my most finished projects. It's an app that simplifies the work for a concierge, centralizing restaurant and hotel reservations for clients.",
      image: require("../../assets/img/logopetit.png"),
    },
    {
      id: 3,
      title: "This portfolio!",
      description:
        "Obviously this portfolio, it's not my entire talent, but it's a small part of it.",
      image: "https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg",
    },
    {
      id: 4,
      title: "Many more",
      description: (
        <p>
          Check out my GitHub for more projects:{" "}
          <a
            href="https://github.com/VVaps"
            target="_blank"
            rel="noopener noreferrer"
          >
            VVaps
          </a>
        </p>
      ),
      image: "https://www.bew-web-agency.fr/wp-content/uploads/2024/02/GitHub.jpg",
    },
  ];

  return (
    <div id="pg">
      <div className="stars">{generateStars()}</div>
      <h1 className="page-heading">Projects</h1>
      <p className="subheading">
          Here are some of my projects. Click an image to flip.
        </p>
      <div className="carousel-wrapper">
        <Slider {...settings}>
          {carouselData.map((item) => (
            <div key={item.id}>
              <h2 className="slide-title">{item.title}</h2>
              <div className="slide-container">
                <FlipCard
                  front={
                    <img
                      src={item.image}
                      alt={item.title}
                      className="slide-image"
                    />
                  }
                  back={<div className="slide-desc">{item.description}</div>}
                />
              </div>
            </div>
          ))}
        </Slider>
        <p className="mobile-scroll-hint">
          Swipe ← → to scroll through projects
        </p>
      </div>
    </div>
  );
}
