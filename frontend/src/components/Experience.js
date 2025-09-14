import React from "react";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-header">
        <div className="experience-title-group">
          <span className="section-tag">Experience</span>
          <h2>
            <i className="fa-solid fa-code"></i> Professional Journey
          </h2>
        </div>
        <a href="/your-cv.pdf" target="_blank" rel="noopener noreferrer" className="download-cv-button">
          Download CV <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>

      <p className="experience-description">
        My work experience and contributions in data analysis, research, and community involvement.
      </p>

      <div className="experience-grid">
        {/* Experience Card 1 */}
        <div className="experience-card">
          <div className="card-image-container">
            {/* Placeholder for image */}
            <img src="https://via.placeholder.com/400x250/2e2e4e/c0c0e0?text=Company+Logo" alt="Company Logo" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Data & Research Analyst at Company A</h3>
            <p className="card-description">
              End-to-end reporting, automations with Python web scraping, NLP processing,
              and machine learning model development (AVM).
            </p>
            <div className="card-tags">
              <span className="card-tag">Remote</span>
              <span className="card-tag">09/2023 - Present</span>
              <span className="card-tag">SQL</span>
            </div>
            <a href="#" className="view-details-link">
              View Details <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* Experience Card 2 */}
        <div className="experience-card">
          <div className="card-image-container">
            {/* Placeholder for image */}
            <img src="https://via.placeholder.com/400x250/2e2e4e/c0c0e0?text=Another+Company" alt="Another Company" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Data Analyst at Data to Action</h3>
            <p className="card-description">
              Data gathering (SQL, web scraping), manipulation, visualization (Tableau), and
              forecasting (scikit-learn).
            </p>
            <div className="card-tags">
              <span className="card-tag">Athens</span>
              <span className="card-tag">11/2022 - 08/2023</span>
              <span className="card-tag">BI</span>
            </div>
            <a href="#" className="view-details-link">
              View Details <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* You can add more experience cards here */}
      </div>
    </section>
  );
}