import React from 'react';
import './App.css';
import Header from './components/Header'
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
