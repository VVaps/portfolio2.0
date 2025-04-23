import React, { useState } from "react";
import Slider from "react-slick";
import "./ProjectsPage.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomNextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className=" right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-gray-800 text-orange-500 hover:bg-gray-700 p-1 rounded-full"
    style={{
      width: "30px",
      height: "30px",
      display: "block",
      color: "orange",
      borderRadius: "50%",
      border: "1px solid orange",
      padding: "5px",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      right: "-4rem",
      zIndex: "10"
    }}
  >
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </div>
);

const CustomPrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className=" left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-gray-800 text-orange-500 hover:bg-gray-700 p-1 rounded-full"
    style={{
      width: "30px",
      height: "30px",
      display: "block",
      color: "orange",
      borderRadius: "50%",
      border: "1px solid orange",
      padding: "5px",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      left: "-4rem",
      zIndex: "10"
    }}
  >
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </div>
);

// Simplified FlipCard: fills its parent
const FlipCard = ({ front, back }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      style={{
        perspective: "1000px",
        cursor: "pointer",
        width: "100%",
        height: "100%"
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transition: "transform 0.6s",
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)"
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden"
          }}
        >
          {front}
        </div>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
            backgroundColor: "#121212",
            color: "orange"
          }}
        >
          {back}
        </div>
      </div>
    </div>
  );
};

const ProjectsPage = () => {

  const styles = {
    heading: {
      marginTop: 0,
      textAlign: 'center',
      fontFamily: 'Orbitron',
      color: 'orange',
      fontSize: '5rem',
      textShadow: '0 0 5px rgba(255, 140, 0, 0.6), 0 0 10px rgba(255, 140, 0, 0.5), 0 0 15px rgba(255, 140, 0, 0.4)'
    },
    subheading: {
      marginTop: 0,
      textAlign: 'center',
      fontFamily: 'Orbitron',
      color: 'orange',
      fontSize: '1.2rem',
      textShadow: '0 0 5px rgba(255, 140, 0, 0.6), 0 0 10px rgba(255, 140, 0, 0.5), 0 0 15px rgba(255, 140, 0, 0.4)'
    },
    slideTitle: {
      textAlign: 'center',
      fontFamily: 'Orbitron',
      color: 'orange',
      fontSize: '2rem',
      textShadow: '0 0 5px rgba(255, 140, 0, 0.6), 0 0 10px rgba(255, 140, 0, 0.5), 0 0 15px rgba(255, 140, 0, 0.4)',
      marginBottom: '1rem'
    }
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    centerMode: true,
    centerPadding: '0',
  };

  const logopetit = require('../../assets/img/logopetit.png');

  const carouselData = [
    {
      id: 1,
      title: "TrackDash",
      description:
        "This project is a web app designed to help and assist trainers and teachers with a concrete demonstration of what a phishing page can do.",
      image: "https://flatirons.com/static/0a79ca63e3ace4bfd802a70a2d7427ae/d7e39/What-is-Drupal-An-Overview-in-2025.webp",
    },
    {
      id: 2,
      title: "Projet la clef d'or",
      description: "This project is one of my most finished projects. It's an app that simplifies the work for a concierge, centralizing restaurant and hotel reservations for clients.",
      image: logopetit,
    },
    {
      id: 3,
      title: "This portfolio!",
      description: "Obviously this portfolio, it's not my entire talent, but it's a small part of it.",
      image: "https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg",
    },
    {
      id: 4,
      title: "Many more",
      description: (
        <p style={{ textAlign: 'center', fontFamily: 'roboto', fontSize: '1rem' }}>
          I invite you to check out my GitHub to see more of my projects. Many more to come.{' '}
          <a
            href="https://github.com/VVaps"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'underline', color: 'lightblue' }}
          >
            Click here
          </a>
        </p>
      ),
      image: "https://www.bew-web-agency.fr/wp-content/uploads/2024/02/GitHub.jpg",
    },
    

    // Add more slides as needed
  ];

  return (
    <div id="pg">
      <div className="stars">
        {Array.from({ length: 75 }).map((_, i) => (
          <div key={i} className="star"></div>
        ))}
      </div>

      <div className="relative mx-auto" style={{ width: "60%", position: "relative" }}>
        <h1 style={styles.heading}>Projects</h1>
        <p style={styles.subheading}>Here are some of my projects. Click on the images to learn more.</p>
        <Slider {...settings}>
          {carouselData.map((item) => (
            <div key={item.id}>  {/* Slick slide wrapper */}
              <h2 style={styles.slideTitle}>{item.title}</h2>
              {/* Fixed-size slide container (600×400) */}
              <div style={{ width: 600, height: 400, margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <FlipCard
                  front={
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: '100%', height: 'auto', maxHeight: '100%', objectFit: 'contain' }}
                    />
                  }
                  back={
                    <p style={{ textAlign: 'center', fontFamily: 'roboto', fontSize: '1rem' }}>
                      {item.description}
                    </p>
                  }
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProjectsPage;
