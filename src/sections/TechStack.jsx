import React from 'react';

export default function TechStack() {
  const stackItems = [
    { name: "n8n", iconSvg: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    )},
    { name: "Make", iconSvg: (
      <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8" />
        <path d="M12 8v8" />
      </svg>
    )},
    { name: "Airtable", iconSvg: (
      <svg className="w-5 h-5 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h18v18H3z" />
        <path d="M3 9h18" />
        <path d="M3 15h18" />
        <path d="M9 3v18" />
        <path d="M15 3v18" />
      </svg>
    )},
    { name: "Supabase", iconSvg: (
      <svg className="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    )},
    { name: "OpenAI", iconSvg: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v6" />
        <path d="M12 16v6" />
        <path d="M2 12h6" />
        <path d="M16 12h6" />
      </svg>
    )},
    { name: "Google Workspace", iconSvg: (
      <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    )},
    { name: "HubSpot", iconSvg: (
      <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <path d="M6 9v6" />
        <path d="M9 6h6" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )},
  ];

  return (
    <section id="stack" className="py-12 border-y border-accent/10 bg-secondary-dark/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
          {/* Section Header Title */}
          <span className="font-heading font-extrabold text-sm uppercase tracking-widest text-text-secondary/70 whitespace-nowrap">
            Tech Stack
          </span>

          {/* Horizontal Tech Items Flex */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 w-full md:w-auto">
            {stackItems.map((tech) => (
              <div 
                key={tech.name} 
                className="flex items-center gap-2 text-text-primary/75 hover:text-accent transition-colors duration-300 select-none"
              >
                {tech.iconSvg}
                <span className="font-heading font-bold text-xs uppercase tracking-wider">
                  {tech.name}
                </span>
              </div>
            ))}
            
            {/* + More indicator */}
            <span className="font-heading font-extrabold text-xs text-accent text-glow-cyan uppercase tracking-widest cursor-default">
              + More
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
