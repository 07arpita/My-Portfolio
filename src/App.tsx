import React from 'react';
import Navbar from './components/Navbar';
import CosmicBackground from './components/CosmicBackground';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import LeetCode from './components/LeetCode';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <CosmicBackground />
      <Navbar />
      <main className="relative z-10 pt-20" style={{ perspective: '1000px' }}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <LeetCode />
        <Contact />
      </main>
    </div>
  );
}

export default App;