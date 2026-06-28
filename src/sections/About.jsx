import React from 'react';
import GlassCard from '../components/GlassCard';

export default function About() {
  const badges = [
    "Business Mindset",
    "Process Expert",
    "Automation Architect",
    "Reliable Partner"
  ];

  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "1000+", label: "Hours Automated" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "5+", label: "Years Experience" }
  ];

  return (
    <section id="about" className="py-24 relative bg-bg border-t border-accent/5">
      {/* Glow overlays */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Tag */}
        <div className="mb-12 text-center lg:text-left">
          <span className="text-xs font-heading font-semibold uppercase tracking-widest text-accent mb-3 block">
            About RavenLab
          </span>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Portrait Avatar Frame (Left) */}
          <div className="lg:col-span-3 flex justify-center w-full">
            <div className="relative w-full max-w-[240px] aspect-[4/5] rounded-2xl overflow-hidden border border-accent/20 bg-graphite p-3 flex flex-col justify-between group hover:border-accent/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-500">
              
              {/* Corner accent lines */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-accent rounded-tl-2xl" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-accent rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-accent rounded-bl-2xl" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-accent rounded-br-2xl" />

              {/* Photo Container */}
              <div className="w-full h-full rounded-xl bg-gradient-to-b from-secondary-dark/40 to-bg border border-white/5 flex items-center justify-center relative overflow-hidden transition-all duration-500">
                <img 
                  src="/vitalii.jpg" 
                  alt="Vitalii Labunskyi" 
                  className="w-full h-full object-cover rounded-xl filter grayscale contrast-110 brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                {/* Scanner Overlay Line */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-accent/40 shadow-[0_0_8px_var(--color-accent)] animate-scanline" />
              </div>

            </div>
          </div>

          {/* Column 2: Biography & Pills (Center) */}
          <div className="lg:col-span-6 flex flex-col text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary mb-2 font-heading">
              Hi, I'm Vitalii Labunskyi
            </h3>
            <span className="text-sm font-heading font-semibold text-accent uppercase tracking-widest mb-6 block">
              Automation Expert
            </span>
            
            <div className="text-text-secondary/85 font-light space-y-4 mb-8 leading-relaxed text-sm sm:text-base">
              <p>
                I help businesses transform complex, manual processes into smart, automated systems. With a background in HR and business operations, I understand both people and processes. That's why I build solutions that actually work in real life.
              </p>
            </div>

            {/* Pill Badges */}
            <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start">
              {badges.map((badge) => (
                <span 
                  key={badge} 
                  className="text-[10px] font-heading font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#1E1E24]/60 border border-accent/15 text-text-primary hover:border-accent transition-colors"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Column 3: Statistics Card (Right) */}
          <div className="lg:col-span-3 w-full">
            <GlassCard 
              className="border-accent/15 bg-glass p-6 text-left hover:border-accent/40"
              hoverEffect={false}
              glowOnHover={true}
            >
              <div className="space-y-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                    <span className="block text-2xl sm:text-3xl font-black font-heading text-accent text-glow-cyan">
                      {stat.value}
                    </span>
                    <span className="text-[10px] sm:text-xs text-text-secondary/60 uppercase tracking-widest font-heading mt-0.5 block">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
}
