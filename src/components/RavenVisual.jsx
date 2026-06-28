import React from 'react';

export default function RavenVisual({ theme }) {
  return (
    <div className="relative w-full max-w-[450px] aspect-square mx-auto flex items-center justify-center animate-float">
      {/* Outer spinning circular lines */}
      <div className="absolute inset-0 rounded-full border border-accent/15 animate-[spin_40s_linear_infinite] opacity-60" />
      <div className="absolute inset-6 rounded-full border border-dashed border-accent/10 animate-[spin_20s_linear_infinite_reverse] opacity-40" />
      <div className="absolute inset-12 rounded-full border border-accent/20 animate-pulse-slow" />
      <div className="absolute inset-24 rounded-full border border-accent/5" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 rounded-full overflow-hidden pointer-events-none" />

      {/* Cyber Glow background behind logo */}
      <div className="absolute w-48 h-48 bg-gradient-to-tr from-accent/25 to-deep-blue/20 rounded-full blur-3xl opacity-75 animate-pulse-slow" />

      {/* Bounding box of the logo with cyber rings */}
      <div className={`relative z-10 w-[240px] h-[240px] rounded-full p-4 flex items-center justify-center bg-bg/40 backdrop-blur-sm border border-accent/20 ${theme === 'light' ? 'shadow-[0_0_50px_rgba(124,58,237,0.12)]' : 'shadow-[0_0_50px_rgba(0,255,255,0.12)]'}`}>
        {/* Decorative inner circular details */}
        <div className="absolute inset-2 rounded-full border border-accent/10 pointer-events-none" />
        <div className="absolute inset-3 rounded-full border border-dashed border-accent/5 pointer-events-none" />
        
        {/* Actual cropped raven logo */}
        <img 
          src={theme === 'light' ? '/logo_purple.png' : '/logo_cyan.png'} 
          alt="RavenLab Cyber Logo" 
          className={`w-4/5 h-4/5 object-contain filter relative z-20 ${theme === 'light' ? 'drop-shadow-[0_0_20px_rgba(124,58,237,0.5)]' : 'drop-shadow-[0_0_20px_rgba(0,255,255,0.5)]'}`}
        />
      </div>

      {/* External decorative floating nodes */}
      <div className="absolute top-[10%] left-[10%] w-2 h-2 rounded-full bg-accent animate-ping" />
      <div className="absolute bottom-[15%] right-[12%] w-1.5 h-1.5 rounded-full bg-accent" />
      <div className="absolute top-[45%] right-[5%] w-2 h-2 rounded-full bg-deep-blue" />
    </div>
  );
}
