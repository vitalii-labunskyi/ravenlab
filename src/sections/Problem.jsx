import React from 'react';
import { RefreshCw, GitFork, EyeOff, AlertTriangle, Clock } from 'lucide-react';
import { PROBLEMS } from '../data/landingData';
import GlassCard from '../components/GlassCard';

const iconMap = {
  RefreshCw,
  GitFork,
  EyeOff,
  AlertTriangle,
  Clock
};

export default function Problem() {
  return (
    <section id="problem" className="py-24 relative bg-bg border-t border-accent/5">
      {/* Subtle glow overlay */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl opacity-25 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Description */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <span className="text-xs font-heading font-semibold uppercase tracking-widest text-accent mb-3 block">
              The Problem
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary mb-6 font-heading leading-tight">
              Manual work is <br/>holding your business back
            </h2>
            <p className="text-base sm:text-lg text-text-secondary/80 font-light leading-relaxed">
              Scattered tools, repetitive tasks, and no visibility lead to wasted time, mistakes, and lost opportunities.
            </p>
          </div>

          {/* Right Column: 5 Horizontal List Cards */}
          <div className="lg:col-span-7 space-y-4">
            {PROBLEMS.map((prob) => {
              const IconComponent = iconMap[prob.iconName] || Clock;
              return (
                <GlassCard 
                  key={prob.title}
                  className="p-5 border-accent/10 hover:border-accent/35 transition-all duration-300"
                  hoverEffect={true}
                >
                  <div className="flex gap-4 items-center">
                    {/* Icon container */}
                    <div className="w-10 h-10 rounded-lg bg-accent/5 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                      <IconComponent size={20} />
                    </div>
                    {/* Content */}
                    <div className="text-left">
                      <h3 className="text-sm sm:text-base font-bold font-heading text-text-primary mb-1">
                        {prob.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-text-secondary/80 leading-normal">
                        {prob.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
