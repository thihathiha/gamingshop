import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function PromotionBanner() {
  return (
    <section className="py-20 relative px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden relative group glass-panel border-gaming-accent-green/30"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-gaming-accent-green/20" />
        
        <div className="relative z-10 px-8 py-16 md:px-20 md:py-24 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center space-x-2 bg-black/20 backdrop-blur-md px-3 py-1 rounded-full text-gaming-accent-green text-[10px] font-bold uppercase tracking-widest mb-6">
              <Sparkles className="h-3 w-3" />
              <span>Limited Time Offer</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tighter leading-tight">
              WEEKLY <br /> <span className="gradient-text">OFFER.</span>
            </h2>
            <p className="text-white/80 text-xs font-bold uppercase tracking-widest max-w-md">
              Up to 20% off select consoles. <br />
              <span className="text-gaming-accent-green">Time is running out.</span>
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-6 w-full md:w-auto">
            <div className="w-full md:w-64">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">CLAIM STATUS</span>
                <span className="text-[10px] font-bold text-gaming-accent-green uppercase tracking-widest">65% CLAIMED</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden border border-white/5">
                <div className="h-full bg-gaming-accent-green w-2/3 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
              </div>
            </div>
            <button className="bg-gaming-accent-green text-slate-950 px-10 py-5 rounded-xl font-bold text-sm tracking-widest uppercase hover:scale-105 active:scale-95 transition-all shadow-xl shadow-green-500/20">
              Shop the Sale
            </button>
          </div>
        </div>
        
        {/* Decorative Circles */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-black/10 rounded-full blur-2xl" />
      </motion.div>
    </section>
  );
}
