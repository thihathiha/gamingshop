import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gaming-accent-green/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gaming-accent-orange/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center md:text-left md:flex items-center gap-12">
          <div className="md:w-3/5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 text-gaming-accent-green text-xs font-bold uppercase tracking-widest mb-4"
            >
              <Zap className="h-3 w-3" />
              <span>Now in Stock</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl md:text-8xl font-extrabold leading-[0.9] mb-6 tracking-tighter"
            >
              POWER UP <br />
              YOUR <span className="gradient-text">PLAY.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-sm leading-relaxed mb-8 max-w-xl mx-auto md:mx-0 pr-12"
            >
              Experience the next generation of console gaming with 4K resolution, 
              ultra-high speed SSD, and immersive 3D audio. Built for the elite gamer.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
            >
              <a 
                href="#products"
                className="bg-gaming-accent-green text-slate-950 px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg shadow-green-500/20"
              >
                Shop Now
              </a>
              
              <button className="border border-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors text-white">
                Learn More
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-12 flex items-center justify-center md:justify-start space-x-8 opacity-50 grayscale hover:grayscale-0 transition-all"
            >
              <div className="text-xl font-bold tracking-widest uppercase">Sony</div>
              <div className="text-xl font-bold tracking-widest uppercase">Microsoft</div>
              <div className="text-xl font-bold tracking-widest uppercase">Nintendo</div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:w-2/5 mt-16 md:mt-0 relative hidden md:block"
          >
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1606813907291-d86ebb9c74ad?auto=format&fit=crop&q=80&w=800"
                alt="Gaming Console"
                className="rounded-2xl shadow-2xl skew-x-2 skew-y-1 ring-1 ring-white/10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -inset-4 bg-gaming-accent-green opacity-20 blur-2xl -z-10 rounded-2xl animate-pulse" />
            </div>
            
            {/* Floating UI Elements */}
            <div className="absolute -top-10 -right-10 glass p-4 rounded-xl shadow-xl space-y-1 animate-bounce duration-[3000ms]">
              <div className="text-[10px] text-gaming-accent-green font-bold uppercase tracking-widest">In Stock</div>
              <div className="text-sm font-bold">PS5 Console</div>
              <div className="text-xs text-gray-400">$499.99</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
