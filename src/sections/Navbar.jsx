import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import Button from '../components/Button';

export default function Navbar({ setIsModalOpen, theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Cases", href: "#cases" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-bg/85 backdrop-blur-md border-b border-accent/15 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.15)]' 
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded px-1">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <img src={theme === 'light' ? '/logo_purple.png' : '/logo_cyan.png'} alt="RavenLab Logo" className={`w-full h-full object-contain filter ${theme === 'light' ? 'drop-shadow-[0_0_8px_rgba(124,58,237,0.3)]' : 'drop-shadow-[0_0_8px_rgba(0,255,255,0.3)]'}`} />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-lg tracking-wider text-text-primary group-hover:text-accent transition-colors duration-300">
              Raven<span className="text-accent">Lab</span>
            </span>
            <span className="text-[9px] font-heading tracking-widest text-soft-blue uppercase -mt-1 group-hover:text-text-primary transition-colors">
              Automation Studio
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-heading font-medium tracking-wide text-text-primary/80 hover:text-accent transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded px-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA & Theme Switcher */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-lg text-text-secondary/70 hover:text-accent hover:bg-accent/5 transition-all focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent min-w-[40px] min-h-[40px] flex items-center justify-center cursor-pointer"
            aria-label="Toggle visual theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Button 
            variant="secondary" 
            onClick={() => setIsModalOpen(true)}
            className="group flex items-center gap-2 border-accent/30 text-accent hover:border-accent"
          >
            <span>Book a Call</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Mobile Controls & Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-lg text-text-secondary/70 hover:text-accent hover:bg-accent/5 transition-all focus:outline-none min-w-[40px] min-h-[40px] flex items-center justify-center cursor-pointer"
            aria-label="Toggle visual theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-text-primary/95 hover:text-accent focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div 
        className={`md:hidden fixed inset-y-0 right-0 w-full max-w-xs z-50 bg-bg border-l border-accent/20 p-6 shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <span className="font-heading font-extrabold text-lg text-text-primary">
            Raven<span className="text-accent">Lab</span>
          </span>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 text-text-primary/90 hover:text-accent focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col gap-6 mb-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-heading font-semibold text-text-primary/90 hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <Button 
          variant="primary" 
          onClick={() => { setIsOpen(false); setIsModalOpen(true); }}
          className="w-full text-center"
        >
          Book a Call
        </Button>
      </div>
    </header>
  );
}
