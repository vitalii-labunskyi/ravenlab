import React from 'react';

export default function Footer({ setIsModalOpen, theme }) {
  return (
    <footer className="bg-secondary-dark/15 border-t border-accent/15 pt-16 pb-8 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#005F73]/5 rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Column 1: Brand (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#hero" className="flex items-center gap-3 group mb-4">
              <img src={theme === 'light' ? '/logo_purple.png' : '/logo_cyan.png'} alt="RavenLab Logo" className={`w-8 h-8 object-contain filter ${theme === 'light' ? 'drop-shadow-[0_0_8px_rgba(124,58,237,0.3)]' : 'drop-shadow-[0_0_8px_rgba(0,255,255,0.3)]'}`} />
              <span className="font-heading font-extrabold text-lg tracking-wider text-text-primary">
                Raven<span className="text-accent">Lab</span>
              </span>
            </a>
            <p className="text-xs text-text-secondary/70 max-w-xs leading-relaxed mb-6">
              Automation & AI integration studio for modern businesses. We design systems that run your operations on autopilot.
            </p>
            <div className="text-xs text-text-secondary/40">
              &copy; 2024 RavenLab. All rights reserved.
            </div>
          </div>

          {/* Column 2: Navigation Links (lg:col-span-2) */}
          <div className="lg:col-span-2 text-center md:text-left">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-text-primary mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-heading">
              <li><a href="#hero" className="text-text-secondary/70 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#services" className="text-text-secondary/70 hover:text-accent transition-colors">Services</a></li>
              <li><a href="#cases" className="text-text-secondary/70 hover:text-accent transition-colors">Cases</a></li>
              <li><a href="#process" className="text-text-secondary/70 hover:text-accent transition-colors">Process</a></li>
              <li><a href="#about" className="text-text-secondary/70 hover:text-accent transition-colors">About</a></li>
              <li><a href="#contact" className="text-text-secondary/70 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Services (lg:col-span-2) */}
          <div className="lg:col-span-2 text-center md:text-left">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-text-primary mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-xs font-heading">
              <li><a href="#services" className="text-text-secondary/70 hover:text-accent transition-colors">Process Automation</a></li>
              <li><a href="#services" className="text-text-secondary/70 hover:text-accent transition-colors">n8n & Make.com</a></li>
              <li><a href="#services" className="text-text-secondary/70 hover:text-accent transition-colors">AI Agents</a></li>
              <li><a href="#services" className="text-text-secondary/70 hover:text-accent transition-colors">API Integrations</a></li>
              <li><a href="#services" className="text-text-secondary/70 hover:text-accent transition-colors">Architecture</a></li>
            </ul>
          </div>

          {/* Column 4: Contact details (lg:col-span-2) */}
          <div className="lg:col-span-2 text-center md:text-left">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-text-primary mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-xs font-heading text-text-secondary/70">
              <li><a href="mailto:hello@ravenlab.studio" className="hover:text-accent transition-colors">hello@ravenlab.studio</a></li>
              <li className="select-text">+38 (063) 123 45 67</li>
              <li className="select-text">Kyiv, Ukraine</li>
            </ul>
          </div>

          {/* Column 5: Let's Connect (lg:col-span-2) */}
          <div className="lg:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-text-primary mb-4">
              Let's Connect
            </h4>
            <p className="text-[10px] text-text-secondary/60 leading-normal mb-4 font-heading">
              Book a call and take the first step towards automation.
            </p>
            
            {/* Outline CTA button */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full text-center text-xs font-heading font-bold uppercase tracking-wider px-4 py-2 border border-accent/40 text-accent hover:border-accent hover:bg-accent/5 rounded transition-all mb-4"
            >
              Book a Call →
            </button>

            {/* Social Icons row */}
            <div className="flex items-center gap-3">
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/vitalii-labunskyi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded bg-secondary-dark/40 border border-accent/15 flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              {/* Upwork */}
              <a 
                href="https://www.upwork.com/freelancers/vitaliil29" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded bg-secondary-dark/40 border border-accent/15 flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-all font-heading font-black text-[10px]"
                aria-label="Upwork"
              >
                Up
              </a>
              {/* Telegram */}
              <a 
                href="https://t.me/vlabunskyi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded bg-secondary-dark/40 border border-accent/15 flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-all"
                aria-label="Telegram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom row */}
        <div className="pt-8 border-t border-accent/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-text-secondary/40 font-heading">
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
          <div>
            RavenLab &copy; 2024. Autopilot Operational Systems.
          </div>
        </div>

      </div>
    </footer>
  );
}
