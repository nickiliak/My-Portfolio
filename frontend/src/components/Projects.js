import React from "react";
import "./Projects.css";

// This is a placeholder for your actual project data.
// In a real application, you would fetch this from an API or a local JSON file.
const projectsData = [
  {
    id: "customer-segmentation",
    title: "Customer Segmentation: Regression & Classification",
    description: "Machine learning and data analysis focused project, with the main goal of predicting Spending Score segmenting into high/low value customers. Used both classical and neural models.",
    image: "images/customer-seg.png",
    tags: ["Python", "Machine Learning", "Data analysis", "Github", "Neural Networks"],
    githubUrl: "https://github.com/nickiliak/02450-Customer-Segmentation" 
  },
  {
    id: "gym-progress-tracker",
    title: "Gym Progress Tracker and Analytics",
    description: "Full-stack Python project for logging and tracking weights and workouts. Built with Docker, Pytest, and GitHub Actions for CI/CD, featuring an automatic logger and SQL-based data management.",
    image: "images/gym-progress.png",
    tags: ["Py-test", "CI/CD", "Docker", "Python", "Fullstack", "SQL"],
    githubUrl: "https://github.com/nickiliak/GymProgressTracker"
  },
  {
    id: "Zelda-2",
    title: "Zelda II",
    description: "Created a 2D game engine using C++ to recreate the famous game Zelda II. Employed design patterns to build the project and a test driven approach to catch bugs.",
    image: "images/zelda.jpg",
    tags: ["Github", "Test-Driven Development", "Cmake", "Software Engineering", "Design Patterns"],
    githubUrl: "https://github.com/Thodorhs/Zelda_II"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <div className="projects-title-group">
          <span className="section-tag">Projects</span>
          <h2>
            <i className="fa-solid fa-folder-open"></i> Portfolio
          </h2>
        </div>
        <a href="https://github.com/nickiliak" target="_blank" rel="noopener noreferrer" className="view-all-button">
          View All Projects <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>

      <p className="projects-description">
        A mix of my favourite projects on software engineering and machine learning/data science.
      </p>

      <div className="projects-grid">
        {projectsData.map(project => (
          <div className="project-card" key={project.id}>
            <div className="card-image-container">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="card-content">
              <h3 className="card-title">{project.title}</h3>
              <p className="card-description">{project.description}</p>
              <div className="card-tags">
                {project.tags.map(tag => (
                  <span className="card-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}