import React from 'react';

export default function GlassCard({ 
  children, 
  className = '', 
  hoverEffect = true,
  glowOnHover = false,
  ...props 
}) {
  return (
    <div 
      className={`
        bg-glass 
        rounded-xl 
        p-6 
        transition-all 
        duration-500 
        ease-out 
        relative 
        overflow-hidden
        group
        ${hoverEffect ? 'hover:translate-y-[-4px] hover:border-accent/40 hover:bg-glass-hover' : ''}
        ${glowOnHover ? 'hover:shadow-[0_0_30px_rgba(0,255,255,0.08)]' : ''}
        ${className}
      `}
      {...props}
    >
      {/* Laser line effect in background on hover */}
      {hoverEffect && (
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
