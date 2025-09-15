import React, { useRef } from "react";
import useFadeInOnView from "./useFadeInOnView"; // Use your new hook
import "./Contact.css";

export default function Contact() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const sectionRef = useRef(null);
  const isIntersecting = useFadeInOnView(sectionRef, { threshold: 0.1 });

  return (
    <>
      <section id="contact" className={`contact-section ${isIntersecting ? 'is-visible' : ''}`} ref={sectionRef}>
        <div className="contact-header-content">
          <span className="section-tag">Get in Touch</span>
          <h2>Let's work together</h2>
          <p className="contact-intro">
            I would love to help you solve your software, machine learning or data analysis needs. Send me a message and let's talk!
          </p>
        </div>
        <div className="contact-container">
          {/* We are removing the contact-form-container */}
          <div className="contact-info-card">
            <h3>Contact Information</h3>
            <ul>
              <li>
                <i className="fa-solid fa-map-marker-alt"></i>
                <span>Copenhagen, Denmark</span>
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <span>nickiliak847@gmail.com</span>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <span>+45 91482938</span>
              </li>
            </ul>
            <h4></h4>
            <div className="social-links">
              <a href="https://linkedin.com/in/nikolaos-iliakis" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://github.com/nickiliak" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* NEW FOOTER SECTION */}
      <footer className="footer-section">
        <button onClick={scrollToTop} className="scroll-to-top">
          <i className="fa-solid fa-chevron-up">↑</i>
        </button>
        <div className="footer-details">
          <h3>Nikolaos Iliakis</h3>
          <p className="footer-title">Software and ML Engineer</p>
          <p className="footer-location">
            <i className="fa-solid fa-map-marker-alt"></i> Copenhagen, Denmark
          </p>
          <div className="footer-contact-links">
            <a href="mailto:nickiliak847@gmail.com"><i className="fa-solid fa-envelope"></i> Email</a>
            <a href="https://github.com/nickiliak" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i> GitHub</a>
            <a href="https://www.linkedin.com/in/nikolaosiliakis/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i> LinkedIn</a>
            <span><i className="fa-solid fa-phone"></i> +45 91482938</span>
          </div>
        </div>
        <p className="footer-copyright">
          © {new Date().getFullYear()} Nikolaos Iliakis. All rights reserved.
        </p>
        <p className="footer-tags">
          Machine Learning | Data Science | Software Engineering
        </p>
      </footer>
    </>
  );
}