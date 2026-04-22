import React, { useState } from 'react';
import { Mail, MessageSquare, Phone, Send, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto glass-panel rounded-[2.5rem] overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Contact Info */}
            <div className="md:w-5/12 bg-gaming-accent-green p-10 md:p-16 text-slate-950">
              <h2 className="text-4xl font-extrabold mb-8 uppercase tracking-tighter italic">Get In <span className="text-white">Touch.</span></h2>
              <p className="text-xs font-bold uppercase tracking-widest mb-12 opacity-80">
                Authorized Dealer • UAE Wide Shipping • Tech Support
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-slate-900/10 p-3 rounded-xl border border-slate-900/10">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-widest opacity-60">Call Us</p>
                    <p className="font-extrabold">+971 4 000 0000</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-slate-900/10 p-3 rounded-xl border border-slate-900/10">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-widest opacity-60">Email</p>
                    <p className="font-extrabold">sales@nextlevel.ae</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-slate-900/10 p-3 rounded-xl border border-slate-900/10">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-widest opacity-60">HQ Location</p>
                    <p className="font-extrabold">Dubai, United Arab Emirates</p>
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <button className="flex items-center space-x-3 bg-slate-950 text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-xl active:scale-95 group neon-glow">
                  <MessageSquare className="h-5 w-5 text-gaming-accent-green group-hover:rotate-12 transition-transform" />
                  <span className="text-xs uppercase tracking-widest">Connect on Discord</span>
                </button>
              </div>
            </div>

            {/* Form */}
            <div className="md:w-7/12 p-10 md:p-16 bg-slate-900/30 backdrop-blur-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-slate-500">IDENTIFICATION</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-5 py-4 focus:border-gaming-accent-green focus:ring-1 focus:ring-gaming-accent-green outline-none transition-all text-sm text-white"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-slate-500">DIGITAL ADDRESS</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-5 py-4 focus:border-gaming-accent-green focus:ring-1 focus:ring-gaming-accent-green outline-none transition-all text-sm text-white"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-slate-500">TRANSMISSION DATA</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-5 py-4 focus:border-gaming-accent-green focus:ring-1 focus:ring-gaming-accent-green outline-none transition-all resize-none text-sm text-white"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-5 rounded-xl font-bold flex items-center justify-center space-x-3 transition-all ${
                    success 
                      ? 'bg-gaming-accent-green text-slate-950 neon-glow' 
                      : 'bg-white text-slate-950 hover:bg-gaming-accent-green active:scale-[0.98]'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="h-5 w-5 border-2 border-slate-950 border-t-transparent animate-spin rounded-full" />
                  ) : success ? (
                    <span className="text-xs uppercase tracking-widest">TRANSMISSION SUCCESSFUL</span>
                  ) : (
                    <>
                      <span className="text-xs uppercase tracking-widest tracking-[0.2em]">TRANSMIT ENQUIRY</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
                
                {success && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-gaming-accent-green text-sm font-bold"
                  >
                    Thanks! We'll get back to you within 24 hours.
                  </motion.p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
