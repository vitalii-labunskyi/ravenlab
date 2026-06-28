import React from 'react';
import { ArrowRight, Cpu, Bot, Layers, Zap } from 'lucide-react';
import Button from '../components/Button';
import RavenVisual from '../components/RavenVisual';

export default function Hero({ setIsModalOpen, theme }) {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Decorative cybernetic glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#005F73]/10 rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute top-20 right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Slogan Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-[64px] font-black tracking-tight leading-[1.05] mb-6 font-heading">
              <span className="text-text-primary/60 block mb-1">Don’t work more.</span>
              <span className="text-text-primary">Work </span>
              <span className="text-accent text-glow-cyan">smarter.</span>
            </h1>

            {/* Value Prop Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-soft-blue/90 font-light max-w-2xl mb-8 leading-relaxed">
              RavenLab helps businesses automate processes, integrate tools, and build AI-powered systems that save time and drive growth.
            </p>

            {/* Conversion CTA Group */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12">
              <Button 
                variant="primary" 
                onClick={() => setIsModalOpen(true)}
                className="group w-full sm:w-auto flex items-center justify-center gap-2 text-glow-cyan"
              >
                <span>Book a Call</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="secondary" 
                href="#services"
                className="w-full sm:w-auto"
              >
                View Services
              </Button>
            </div>

            {/* Trust and Credibility Badges (4 inline icons) */}
            <div className="border-t border-accent/10 pt-8 w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="flex items-center gap-2 text-text-secondary/70 hover:text-accent transition-colors duration-300">
                <Cpu size={16} className="text-accent/60" />
                <span className="text-[11px] font-heading uppercase tracking-wider font-semibold">Automation<br/>Experts</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary/70 hover:text-accent transition-colors duration-300">
                <Bot size={16} className="text-accent/60" />
                <span className="text-[11px] font-heading uppercase tracking-wider font-semibold">AI-Powered<br/>Solutions</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary/70 hover:text-accent transition-colors duration-300">
                <Layers size={16} className="text-accent/60" />
                <span className="text-[11px] font-heading uppercase tracking-wider font-semibold">Reliable &<br/>Scalable</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary/70 hover:text-accent transition-colors duration-300">
                <Zap size={16} className="text-accent/60" />
                <span className="text-[11px] font-heading uppercase tracking-wider font-semibold">Fast<br/>Delivery</span>
              </div>
            </div>

          </div>

          {/* Right Column: Animated Cyber-Raven Visual */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <RavenVisual theme={theme} />
          </div>

        </div>
      </div>
    </section>
  );
}
