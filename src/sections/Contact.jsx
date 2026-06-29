import React, { useState } from 'react';
import { Calendar, Check, Send, X, CheckCircle2, PhoneCall, Mail } from 'lucide-react';
import Button from '../components/Button';
import GlassCard from '../components/GlassCard';

export default function Contact({ isModalOpen, setIsModalOpen }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    currentStack: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in Name, Email, and Message.');
      return;
    }
    
    setError('');
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({
        name: '',
        email: '',
        company: '',
        currentStack: '',
        message: ''
      });
      
      setTimeout(() => {
        setSuccess(false);
        setIsModalOpen(false);
      }, 3500);
    }, 1500);
  };

  const checklistItems = [
    "Free automation audit",
    "Custom solution for your business",
    "Fast delivery and clear communication"
  ];

  return (
    <>
      {/* Ready to Automate CTA Banner */}
      <section className="py-20 bg-secondary-dark/20 border-t border-accent/15 relative overflow-hidden">
        {/* Glow overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent/5 rounded-full blur-3xl opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-glass rounded-3xl border border-accent/15 p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 hover:border-accent/35 hover:shadow-[0_0_40px_rgba(0,255,255,0.05)] transition-all duration-500">
            
            {/* Left side: Header & Checklist */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  <Calendar size={22} />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-text-primary">
                  Ready to automate your business?
                </h3>
              </div>
              
              {/* Checkmarks */}
              <div className="flex flex-col sm:flex-row gap-x-6 gap-y-2 mt-2">
                {checklistItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-text-secondary/80">
                    <div className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                      <Check size={10} strokeWidth={3} />
                    </div>
                    <span className="text-xs sm:text-sm font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Button & Subtext */}
            <div className="text-center flex flex-col items-center lg:items-end">
              <Button 
                variant="primary"
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-8 text-glow-cyan"
              >
                Book a Call
              </Button>
              <span className="text-xs text-text-secondary/50 mt-3 font-heading uppercase tracking-widest block">
                Let's talk about your project
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Cyberpunk Contact Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#060608]/80 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]">
          <div className="relative w-full max-w-2xl bg-bg border border-accent/25 rounded-2xl p-6 md:p-8 shadow-[0_0_50px_rgba(139,92,246,0.15)] max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg text-text-secondary/70 hover:text-accent hover:bg-accent/5 transition-colors focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              aria-label="Close Contact Modal"
            >
              <X size={20} />
            </button>

            {success ? (
              <div className="text-center py-12 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/35 flex items-center justify-center text-accent mb-6 animate-bounce">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold font-heading text-text-primary mb-3">
                  Transmission Secure
                </h3>
                <p className="text-text-secondary text-sm md:text-base max-w-md">
                  Thank you! Vitalii will review your request and contact you within 24 hours to schedule our alignment strategy call.
                </p>
              </div>
            ) : (
              <div>
                {/* Header */}
                <div className="mb-8 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-black font-heading text-text-primary flex items-center justify-center sm:justify-start gap-2">
                    <PhoneCall size={20} className="text-accent" />
                    Book a Strategy Call
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary/70 mt-1 font-light">
                    Provide your operational stack and details to prepare for our alignment session.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="p-3 rounded-lg bg-red-950/20 border border-red-500/30 text-red-400 text-xs font-semibold">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="flex flex-col">
                      <label htmlFor="name" className="text-[10px] font-heading font-semibold uppercase tracking-wider text-accent/80 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-secondary-dark/40 border border-accent/15 rounded-md px-4 py-2.5 text-text-primary text-sm placeholder-text-secondary/30 focus:outline-none focus:border-accent focus:shadow-[0_0_10px_rgba(139,92,246,0.15)] transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                      <label htmlFor="email" className="text-[10px] font-heading font-semibold uppercase tracking-wider text-accent/80 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        required
                        className="bg-secondary-dark/40 border border-accent/15 rounded-md px-4 py-2.5 text-text-primary text-sm placeholder-text-secondary/30 focus:outline-none focus:border-accent focus:shadow-[0_0_10px_rgba(139,92,246,0.15)] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Company */}
                    <div className="flex flex-col">
                      <label htmlFor="company" className="text-[10px] font-heading font-semibold uppercase tracking-wider text-accent/80 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Corp"
                        className="bg-secondary-dark/40 border border-accent/15 rounded-md px-4 py-2.5 text-text-primary text-sm placeholder-text-secondary/30 focus:outline-none focus:border-accent focus:shadow-[0_0_10px_rgba(139,92,246,0.15)] transition-all"
                      />
                    </div>

                    {/* Current Stack */}
                    <div className="flex flex-col">
                      <label htmlFor="currentStack" className="text-[10px] font-heading font-semibold uppercase tracking-wider text-accent/80 mb-2">
                        Current Tools (CRM, Sheets, n8n)
                      </label>
                      <input
                        type="text"
                        id="currentStack"
                        name="currentStack"
                        value={form.currentStack}
                        onChange={handleChange}
                        placeholder="n8n, HubSpot, Sheets"
                        className="bg-secondary-dark/40 border border-accent/15 rounded-md px-4 py-2.5 text-text-primary text-sm placeholder-text-secondary/30 focus:outline-none focus:border-accent focus:shadow-[0_0_10px_rgba(139,92,246,0.15)] transition-all"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col">
                    <label htmlFor="message" className="text-[10px] font-heading font-semibold uppercase tracking-wider text-accent/80 mb-2">
                      What tasks or operations do you want automated? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about the repetitive workflows or custom AI systems you want to design..."
                      rows={4}
                      required
                      className="bg-secondary-dark/40 border border-accent/15 rounded-md px-4 py-2.5 text-text-primary text-sm placeholder-text-secondary/30 focus:outline-none focus:border-accent focus:shadow-[0_0_10px_rgba(139,92,246,0.15)] transition-all resize-y"
                    />
                  </div>

                  {/* Action Group */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={loading}
                      className="w-full sm:w-auto flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-bg border-t-transparent rounded-full animate-spin" />
                          <span>Sending Signal...</span>
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          <span>Initialize Connection</span>
                        </>
                      )}
                    </Button>
                    <span className="text-[10px] text-text-secondary/50 font-heading uppercase tracking-widest text-center sm:text-left">
                      Or email direct: <a href="mailto:info@ravenlab.pro" className="text-accent underline">info@ravenlab.pro</a>
                    </span>
                  </div>
                </form>
              </div>
            )}
            
          </div>
        </div>
      )}
    </>
  );
}
