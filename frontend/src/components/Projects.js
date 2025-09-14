import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <div className="projects-title-group">
          <span className="section-tag">Projects</span>
          <h2>
            <i className="fa-solid fa-folder-open"></i> Data Science Portfolio
          </h2>
        </div>
        <a href="#" className="view-all-button">
          View All Projects <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>

      <p className="projects-description">
        A selection of my data science and machine learning projects, showcasing my technical skills and analytical approaches.
      </p>

      <div className="projects-grid">
        {/* Project Card 1 */}
        <div className="project-card">
          <div className="card-image-container">
            {/* Placeholder for project image */}
            <img src="https://via.placeholder.com/400x250/2e2e4e/c0c0e0?text=Project+1+Image" alt="Project 1" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Plant Leaf Health Classification</h3>
            <p className="card-description">
              MLOps project with model training and deployment on Google Cloud (VertexAI, Cloud Run) using FastAPI, Streamlit, Docker, and GitHub Actions.
            </p>
            <div className="card-tags">
              <span className="card-tag">Python</span>
              <span className="card-tag">MLOps</span>
              <span className="card-tag">Google Cloud</span>
              <span className="card-tag">Docker</span>
              <span className="card-tag">CI/CD</span>
            </div>
            <a href="#" className="view-details-link">
              View Details <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="project-card">
          <div className="card-image-container">
            {/* Placeholder for project image */}
            <img src="https://via.placeholder.com/400x250/2e2e4e/c0c0e0?text=Project+2+Image" alt="Project 2" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Patient Mortality Classification</h3>
            <p className="card-description">
              Deep Learning project using EHRMamba model on Physionet2012 dataset, achieving 85% accuracy with PyTorch and HPC/GPU resources.
            </p>
            <div className="card-tags">
              <span className="card-tag">Deep Learning</span>
              <span className="card-tag">PyTorch</span>
              <span className="card-tag">Healthcare</span>
              <span className="card-tag">HPC</span>
            </div>
            <a href="#" className="view-details-link">
              View Details <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className="project-card">
          <div className="card-image-container">
            {/* Placeholder for project image */}
            <img src="https://via.placeholder.com/400x250/2e2e4e/c0c0e0?text=Project+3+Image" alt="Project 3" />
          </div>
          <div className="card-content">
            <h3 className="card-title">Copenhagen Apartments Price Prediction</h3>
            <p className="card-description">
              Built a neural network model using PyTorch to predict rental prices with a Mean Absolute Error of 2,000 DKK.
            </p>
            <div className="card-tags">
              <span className="card-tag">Neural Networks</span>
              <span className="card-tag">PyTorch</span>
              <span className="card-tag">Regression</span>
              <span className="card-tag">Real Estate</span>
            </div>
            <a href="#" className="view-details-link">
              View Details <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}