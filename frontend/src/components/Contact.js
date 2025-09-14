import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-header-content">
        <span className="section-tag">Get in Touch</span>
        <h2>Let's work together</h2>
        <p className="contact-intro">
          Whether you need help with data analysis, photography services, or just want
          to chat about potential collaborations, I'd love to hear from you.
        </p>
      </div>
      <div className="contact-container">
        <div className="contact-form-container">
          <form className="contact-form">
            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Your email" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="What's this about?" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Your message..."></textarea>
            </div>
            <button type="submit" className="send-message-button">
              <i className="fa-solid fa-paper-plane"></i> Send Message
            </button>
          </form>
        </div>
        <div className="contact-info-card">
          <h3>Contact Information</h3>
          <ul>
            <li>
              <i className="fa-solid fa-map-marker-alt"></i>
              <span>Copenhagen, Denmark</span>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <span>papantzikos12@gmail.com</span>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <span>+45 91 82 87 19</span>
            </li>
          </ul>
          <h4>Connect with me</h4>
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}