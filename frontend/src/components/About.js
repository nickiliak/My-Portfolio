import React, { useRef } from "react";
import useFadeInOnView from "./useFadeInOnView"; // Use your new hook
import "./About.css";

export default function About() {
  const sectionRef = useRef(null);
  const isIntersecting = useFadeInOnView(sectionRef, { threshold: 0.1 });

  return (
    <section id="about" className={`about-section ${isIntersecting ? 'is-visible' : ''}`} ref={sectionRef}>
      <div className="about-content-wrapper">
        <div className="about-left">
          <div className="about-header-tag">About Me</div>
          <h1 className="about-title">Love to build</h1>
          <p className="about-intro">
            I am a software engineer with a computer science background, currently pursuing an MSc in Human-Centered AI at DTU in Copenhagen, with a focus on Natural Language Processing and Machine Learning. Professionally, I have experience working on large-scale software engineering projects, aiming to solve pain points, streamline processes, and enhance projects through creativity.
          </p>
          <p className="about-hobbies">
            Outside of work, I enjoy staying active at the gym and occasionally practicing Brazilian Jiu Jitsu to keep things exciting. 
            Intellectually, I enjoy playing chess to the extent where if you see me on the metro, I'm probably on Chess.com, either that or reading about history.
          </p>
          <div className="skills-tags">
            <span className="skill-tag">Python</span>
            <span className="skill-tag">SQL</span>
            <span className="skill-tag">Machine Learning</span>
            <span className="skill-tag">Docker</span>
            <span className="skill-tag">Git/GitHub</span>
            <span className="skill-tag">Devops</span>
            <span className="skill-tag">Fullstack Development</span>
          </div>
        </div>

        <div className="about-right">
          <div className="skills-grid">
            <div className="skill-card">
              {/* Placeholder for icon */}
              <div className="icon-placeholder">
                <i className="fa-solid fa-database"></i>
              </div>
              <h3>Software Engineering</h3>
              <p>Working on large-scale codebases, applying proper testing and agile practices to efficiently deliver solutions and tackle complex problems.</p>
            </div>
            <div className="skill-card">
              {/* Placeholder for icon */}
              <div className="icon-placeholder">
                <i className="fa-solid fa-code"></i>
              </div>
              <h3>Machine Learning</h3>
              <p>Designing and developing predictive models and algorithms to extract insights and drive decision-making.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="credentials-section">
        <div className="info-card">
          <h3>Education</h3>
          <ul>
            <li>
              <strong>M.Sc. in Human Centered Artificial Intelligence</strong>
              <p>DTU, Copenhagen, Denmark</p>
              <p className="card-date">2024 - Present</p>
            </li>
            <li>
              <strong>B.Sc. in Computer Science</strong>
              <p>University of Crete</p>
              <p className="card-date">2019 - 2023</p>
            </li>
          </ul>
        </div>

        <div className="info-card">
          <h3>Achievements & Credentials</h3>
          <ul>
            <li>
              <strong>SQL For Data Science</strong>
              <p>Codebasics</p>
              <p className="card-date">Issued Sept 2025</p>
            </li>
            <li>
              <strong>Python Beginner to Advanced for Data Professionals</strong>
              <p>Codebasics</p>
              <p className="card-date">Issued Aug 2025</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}