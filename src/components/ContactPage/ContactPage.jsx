import React from "react";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div id="pgs">
      <div className="stars">
        {Array.from({ length: 75 }).map((_, i) => (
          <div key={i} className="star"></div>
        ))}
      </div>

      <div id="contact-container">
        <h1>Contact Me</h1>
        <p>Feel free to reach out via any of the methods below:</p>

        <div id="contact-icons">
          <a href="tel:0658694233" aria-label="Call me">
            <FaPhone />
          </a>
          <a
            href="mailto:vincentpeauger0@gmail.com"
            aria-label="Email me"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/vincent-peauger-4923382bb/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/VVaps"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;