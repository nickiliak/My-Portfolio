// src/components/Hero.js
import React, { useRef, useState, useEffect } from 'react';
import useFadeInOnView from './useFadeInOnView';
import './Hero.css';

export default function Hero() {
  const heroRef = useRef(null);
  const shouldFadeIn = useFadeInOnView(heroRef, { threshold: 0.1 });

  // Full name to be typed out
  const fullName = "Nikolaos Iliakis";
  // State to hold the name as it's being typed
  const [displayedName, setDisplayedName] = useState("");

  useEffect(() => {
    // Only run the typing effect once the component is in view
    if (shouldFadeIn) {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < fullName.length) {
          setDisplayedName(prevName => prevName + fullName.charAt(i));
          i++;
        } else {
          // Clear the interval once the full name is displayed
          clearInterval(typingInterval);
        }
      }, 100); // Adjust this value to change typing speed (e.g., 100ms)

      // Cleanup function to clear the interval if the component unmounts
      return () => clearInterval(typingInterval);
    }
  }, [shouldFadeIn, fullName]);

  return (
    <section 
      id="hero" 
      className={`hero-section ${shouldFadeIn ? 'is-visible' : ''}`} 
      ref={heroRef}
    >
      <div className="hero-content">
        <div className="hero-tag">Software Engineer & AI Student</div>
        {/* Render the dynamically typed name */}
        <h1 className="hero-title">{displayedName}</h1>
        <h2 className="hero-subtitle">Love to build & solve problems</h2>
        <p className="hero-description">
          I am a software engineer with a computer science background, currently pursuing an MSc in Human-Centered AI at DTU in Copenhagen, with a focus on Natural Language Processing and Machine Learning. Professionally, I have experience working on large-scale software engineering projects, aiming to solve pain points, streamline processes, and enhance projects through creativity.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="hero-button primary">
            Explore My Work
          </a>
          <a href="#contact" className="hero-button secondary">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}