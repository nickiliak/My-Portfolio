import React, { useRef } from "react";
import useFadeInOnView from "./useFadeInOnView"; // Use your new hook
import "./Experience.css";

export default function Experience() {
  const sectionRef = useRef(null);
  const isIntersecting = useFadeInOnView(sectionRef, { threshold: 0.1 });
  
  return (
    <section id="experience" className={`projects-section ${isIntersecting ? 'is-visible' : ''}`} ref={sectionRef}>
      <div className="experience-header">
        {/* CORRECTED: The span is now inside the h2. */}
        <div className="experience-title-group">
          <h2>
            <span className="section-tag">Experience</span> Professional Journey
          </h2>
        </div>
        <a href="/iliakis_cv.pdf" target="_blank" rel="noopener noreferrer" className="download-cv-button">
          Check CV <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>

      <p className="experience-description">
        My professional work experience so far.
      </p>

      {/* This is the container for all your experience cards. */}
      <div className="experience-grid">
        {/* Experience Card 1 */}
        <div className="experience-card">
          <div className="card-image-container">
            {/* Placeholder for image */}
            <img src="images/oramavr.png" alt="Company Logo" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Software Engineer</h3>
            <p className="card-description">
              I developed medical VR simulation features using C# for both frontend and backend, complemented by Python for unit testing and automation. As part of the team, I co-created and launched the MAGES NXT SDK, which attracted over 100 users in its first week. I also integrated CI/CD pipelines and containerized builds with Docker to support testing across Android and macOS platforms. Additionally, I prepared large datasets for 3D model and VR room generation, authored comprehensive documentation using Sphinx/reST, and resolved more than 30 pre-release bugs to ensure product stability.
            </p>
            <div className="card-tags">
              <span className="card-tag">Hybrid</span>
              <span className="card-tag">07/2023 - 10/2024</span>
              <span className="card-tag">C#</span>
              <span className="card-tag">Python</span>
              <span className="card-tag">Tests</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}