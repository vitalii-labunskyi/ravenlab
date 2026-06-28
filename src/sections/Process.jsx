import React from 'react';
import { Search, Network, Code2, FileCheck, Rocket, Headphones, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/landingData';
import GlassCard from '../components/GlassCard';

const iconMap = {
  Search,
  Network,
  Code2,
  FileCheck,
  Rocket,
  Headphones
};

export default function Process() {
  return (
    <section id="process" className="py-24 relative bg-bg border-t border-accent/5">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#005F73]/5 rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-heading font-semibold uppercase tracking-widest text-accent mb-3 block">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary font-heading">
            How we build your integration
          </h2>
        </div>

        {/* Process Roadmap Track */}
        <div className="relative">
          {/* Desktop Horizontal Connecting Line */}
          <div className="absolute top-8 left-[10%] right-[10%] h-[1px] border-t border-dashed border-accent/25 hidden lg:block z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const IconComponent = iconMap[step.iconName] || Search;
              return (
                <div key={step.step} className="flex flex-col items-center text-center group">
                  {/* Step Bubble & Icon Wrapper */}
                  <div className="relative mb-6 flex items-center justify-center">
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-bg font-heading text-xs font-bold flex items-center justify-center border-2 border-bg z-25 shadow-[0_0_8px_rgba(0,255,255,0.4)]">
                      {step.step}
                    </div>
                    {/* Icon container */}
                    <div className="w-16 h-16 rounded-2xl bg-glass border border-accent/20 flex items-center justify-center text-accent group-hover:border-accent group-hover:shadow-[0_0_20px_rgba(0,255,255,0.15)] transition-all duration-300">
                      <IconComponent size={24} />
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className="max-w-[180px]">
                    <h3 className="text-sm font-bold font-heading text-text-primary uppercase tracking-wider mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-text-secondary/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
