import React from 'react';

export default function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  href, 
  className = '',
  type = 'button',
  ...props 
}) {
  const baseStyle = "inline-flex items-center justify-center font-heading text-sm md:text-base font-semibold tracking-wider uppercase transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none min-h-[44px] px-6 py-3 rounded-md";
  
  const variants = {
    primary: "bg-accent text-bg font-bold border border-accent hover:bg-transparent hover:text-accent hover:shadow-[0_0_25px_rgba(0,255,255,0.45)] border-glow-cyan",
    secondary: "bg-transparent text-text-primary border border-soft-blue/40 hover:border-accent hover:text-accent hover:bg-accent/5",
    accentGlow: "bg-transparent text-accent border border-accent hover:bg-accent hover:text-bg hover:shadow-[0_0_25px_rgba(0,255,255,0.45)]"
  };

  const selectedClass = `${baseStyle} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={selectedClass} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={selectedClass} {...props}>
      {children}
    </button>
  );
}
