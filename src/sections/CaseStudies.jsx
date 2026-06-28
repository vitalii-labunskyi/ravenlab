import React from 'react';
import { CASE_STUDIES } from '../data/landingData';
import GlassCard from '../components/GlassCard';

// Airtable Database Grid Mockup
const AirtableMockup = () => (
  <div className="w-full h-36 bg-secondary-dark/35 rounded-lg border border-white/5 p-3 flex flex-col font-mono text-[9px] text-text-secondary/70 overflow-hidden mb-4 select-none relative">
    <div className="flex border-b border-white/10 pb-1.5 mb-2 font-semibold text-accent/80">
      <div className="w-1/3">Name</div>
      <div className="w-1/3">Status</div>
      <div className="w-1/3">Appointment</div>
    </div>
    <div className="space-y-2">
      <div className="flex border-b border-white/5 pb-1">
        <div className="w-1/3 text-text-primary truncate">Alex Mercer</div>
        <div className="w-1/3"><span className="px-1.5 py-0.5 rounded bg-green-500/10 text-green-400 text-[8px]">Booked</span></div>
        <div className="w-1/3">Jun 25, 14:00</div>
      </div>
      <div className="flex border-b border-white/5 pb-1">
        <div className="w-1/3 text-text-primary truncate">Sarah Connor</div>
        <div className="w-1/3"><span className="px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-400 text-[8px]">Pending</span></div>
        <div className="w-1/3">Jun 26, 11:30</div>
      </div>
      <div className="flex">
        <div className="w-1/3 text-text-primary truncate">John Doe</div>
        <div className="w-1/3"><span className="px-1.5 py-0.5 rounded bg-green-500/10 text-green-400 text-[8px]">Booked</span></div>
        <div className="w-1/3">Jun 26, 16:15</div>
      </div>
    </div>
  </div>
);

// AI Chatbot Interface Mockup
const ChatMockup = () => (
  <div className="w-full h-36 bg-secondary-dark/35 rounded-lg border border-white/5 p-3 flex flex-col justify-between overflow-hidden mb-4 select-none relative">
    <div className="space-y-2.5">
      <div className="flex items-start gap-2">
        <div className="w-4.5 h-4.5 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-[7px] text-accent">AI</div>
        <div className="bg-glass border border-white/5 text-[9px] text-text-primary rounded-lg p-2 max-w-[80%] leading-snug">
          How can I help you today?
        </div>
      </div>
      <div className="flex items-start justify-end gap-2">
        <div className="bg-accent/15 border border-accent/30 text-[9px] text-accent rounded-lg p-2 max-w-[80%] text-right leading-snug">
          Can I reschedule my onboarding call?
        </div>
      </div>
    </div>
    <div className="h-6 border-t border-white/5 pt-2 flex items-center justify-between text-[8px]">
      <span className="text-text-secondary/40">Type a message...</span>
      <span className="text-accent font-semibold">Send</span>
    </div>
  </div>
);

// Workflow Flowchart Diagram Mockup
const FlowMockup = () => (
  <div className="w-full h-36 bg-secondary-dark/35 rounded-lg border border-white/5 p-3 flex items-center justify-around overflow-hidden mb-4 select-none relative">
    <div className="flex flex-col items-center gap-1 bg-glass border border-accent/20 px-2 py-1.5 rounded text-[8px] text-text-primary w-20 text-center">
      <span className="text-accent font-bold">New Contact</span>
      <span className="text-[7px] text-text-secondary/60">HubSpot CRM</span>
    </div>
    <div className="text-accent/60 font-black animate-pulse-slow">➔</div>
    <div className="flex flex-col items-center gap-1 bg-glass border border-accent/20 px-2 py-1.5 rounded text-[8px] text-text-primary w-20 text-center">
      <span className="text-accent font-bold">Send Email</span>
      <span className="text-[7px] text-text-secondary/60">Gmail API</span>
    </div>
    <div className="text-accent/60 font-black animate-pulse-slow">➔</div>
    <div className="flex flex-col items-center gap-1 bg-glass border border-accent/20 px-2 py-1.5 rounded text-[8px] text-text-primary w-20 text-center">
      <span className="text-accent font-bold">Create Event</span>
      <span className="text-[7px] text-text-secondary/60">Google Calendar</span>
    </div>
  </div>
);

// Semantic Search Results Mockup
const SearchMockup = () => (
  <div className="w-full h-36 bg-secondary-dark/35 rounded-lg border border-white/5 p-3 flex flex-col justify-center gap-2 overflow-hidden mb-4 select-none relative">
    <div className="bg-glass border border-white/5 rounded px-2 py-1 flex items-center justify-between text-[8px] text-text-secondary/40">
      <span>Query: liability limits in NDA contracts</span>
      <span className="text-accent">Search</span>
    </div>
    <div className="space-y-1">
      <div className="bg-bg/60 border-l-2 border-accent p-1.5 rounded text-[8px]">
        <div className="font-semibold text-text-primary flex justify-between">
          <span>Section 9.1: Limitation of Liability</span>
          <span className="text-accent font-bold">96% match</span>
        </div>
        <p className="text-[7px] text-text-secondary/60 mt-0.5 truncate">
          The liability of either party shall not exceed the amount of fees paid...
        </p>
      </div>
    </div>
  </div>
);

const mockupMap = {
  table: AirtableMockup,
  chat: ChatMockup,
  flow: FlowMockup,
  search: SearchMockup
};

export default function CaseStudies() {
  return (
    <section id="cases" className="py-24 relative bg-bg border-t border-accent/5">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-deep-blue/5 rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-heading font-semibold uppercase tracking-widest text-accent mb-3 block">
            Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary font-heading">
            Proven systems in active production
          </h2>
        </div>

        {/* Case Studies Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study, idx) => {
            const MockupComponent = mockupMap[study.imageType] || AirtableMockup;
            return (
              <GlassCard 
                key={idx}
                className="border-accent/10 hover:border-accent/35 hover:shadow-[0_0_30px_rgba(0,255,255,0.06)] flex flex-col justify-between p-6"
                hoverEffect={true}
                glowOnHover={true}
              >
                <div>
                  {/* Technology Tags Header */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.techUsed.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-[9px] font-heading font-bold tracking-wide uppercase px-2 py-0.5 rounded bg-accent/5 text-accent border border-accent/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                    {study.title}
                  </h3>

                  {/* High-Fidelity Mockup Container */}
                  <MockupComponent />

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-text-secondary/80 leading-relaxed mb-6">
                    {study.description}
                  </p>
                </div>

                {/* View Case Action Link */}
                <div className="pt-4 border-t border-accent/5">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider text-accent hover:text-white transition-colors group/link"
                  >
                    <span>{study.linkText}</span>
                  </a>
                </div>
              </GlassCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
