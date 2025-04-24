import React from "react";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "./ContactPage.css";

const ContactPage = () => {
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
    <div id="pgs">
      <div className="stars">{generateStars()}</div>
      <div id="contact-container">
        <h1>Contact Me</h1>
        <p>Feel free to reach out via any of the methods below:</p>
        <div id="contact-icons">
          {[
            {
              icon: <FaPhone />,
              href: "tel:0658694233",
              label: "Call me",
              external: false
            },
            {
              icon: <FaEnvelope />,
              href: "mailto:vincentpeauger0@gmail.com",
              label: "Email me",
              external: false
            },
            {
              icon: <FaLinkedin />,
              href: "https://www.linkedin.com/in/vincent-peauger-4923382bb/",
              label: "LinkedIn profile",
              external: true
            },
            {
              icon: <FaGithub />,
              href: "https://github.com/VVaps",
              label: "GitHub profile",
              external: true
            }
          ].map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;