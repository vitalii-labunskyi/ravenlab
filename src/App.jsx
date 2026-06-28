import React, { useState } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Problem from './sections/Problem';
import Services from './sections/Services';
import Process from './sections/Process';
import CaseStudies from './sections/CaseStudies';
import TechStack from './sections/TechStack';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === 'dark' ? 'light' : 'dark';
      if (next === 'light') {
        document.documentElement.classList.add('light');
      } else {
        document.documentElement.classList.remove('light');
      }
      return next;
    });
  };

  return (
    <div className="relative min-h-screen bg-bg text-text-primary flex flex-col">
      {/* Sticky Navigation */}
      <Navbar setIsModalOpen={setIsModalOpen} theme={theme} toggleTheme={toggleTheme} />

      {/* Main Landing Sections */}
      <main className="flex-grow">
        <Hero setIsModalOpen={setIsModalOpen} theme={theme} />
        <Problem />
        <Services />
        <Process />
        <CaseStudies />
        <TechStack />
        <About />
        <Contact isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </main>

      {/* Footer */}
      <Footer setIsModalOpen={setIsModalOpen} theme={theme} />
    </div>
  );
}
