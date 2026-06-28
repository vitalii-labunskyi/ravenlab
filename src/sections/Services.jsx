import React from 'react';
import { Cpu, Shuffle, Bot, Link2, Database } from 'lucide-react';
import { SERVICES } from '../data/landingData';
import GlassCard from '../components/GlassCard';

const iconMap = {
  Cpu,
  Shuffle,
  Bot,
  Link2,
  Database
};

export default function Services() {
  return (
    <section id="services" className="py-24 relative bg-bg border-t border-accent/5">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-deep-blue/5 rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Solution Branding & Text */}
          <div className="lg:col-span-5 text-center lg:text-left sticky top-32">
            <span className="text-xs font-heading font-semibold uppercase tracking-widest text-accent mb-3 block">
              The Solution
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary mb-6 font-heading leading-tight">
              Automation architecture <br/>that works for you
            </h2>
            <p className="text-base sm:text-lg text-text-secondary/80 font-light leading-relaxed">
              We design, build and optimize automation systems so you can focus on growth while your business runs smoother than ever.
            </p>
          </div>

          {/* Right Column: 5 Service Cards in Grid/List */}
          <div className="lg:col-span-7 space-y-4">
            {SERVICES.map((service) => {
              const IconComponent = iconMap[service.iconName] || Cpu;
              return (
                <GlassCard
                  key={service.id}
                  className="p-6 border-accent/10 hover:border-accent/35 hover:shadow-[0_0_25px_rgba(0,255,255,0.05)] transition-all duration-300"
                  hoverEffect={true}
                >
                  <div className="flex gap-4 items-start">
                    {/* Icon Container */}
                    <div className="w-12 h-12 rounded-xl bg-accent/5 border border-accent/25 flex items-center justify-center text-accent flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <IconComponent size={24} />
                    </div>
                    {/* Content */}
                    <div className="text-left">
                      <h3 className="text-base sm:text-lg font-bold font-heading text-text-primary mb-2">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-text-secondary/85 leading-relaxed">
                        {service.description}
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
