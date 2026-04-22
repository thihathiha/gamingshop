import React from 'react';
import { Gamepad2, Twitter, Instagram, Youtube, Github, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black/80 pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-xs transition-all duration-300">
            <div className="flex items-center space-x-2 group mb-6">
              <div className="w-8 h-8 bg-gaming-accent-green rounded-lg flex items-center justify-center font-extrabold text-slate-900 group-hover:rotate-12 transition-transform">
                NL
              </div>
              <span className="text-xl font-extrabold tracking-tighter text-white uppercase italic">
                NEXTLEVEL<span className="text-gaming-accent-green NOT-italic">GAMING</span>
              </span>
            </div>
            <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest leading-relaxed mb-8">
              The premier destination for gaming hardware in the Middle East. Elevating your gaming experience one console at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 glass-panel rounded-lg hover:text-gaming-accent-green transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 glass-panel rounded-lg hover:text-gaming-accent-green transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 glass-panel rounded-lg hover:text-gaming-accent-green transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 glass-panel rounded-lg hover:text-gaming-accent-green transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
            <div>
              <h4 className="text-white font-bold mb-6 text-[10px] uppercase tracking-widest">Shop</h4>
              <ul className="space-y-4 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                <li><a href="#" className="hover:text-gaming-accent-green transition-colors">PlayStation</a></li>
                <li><a href="#" className="hover:text-gaming-accent-green transition-colors">Xbox Series</a></li>
                <li><a href="#" className="hover:text-gaming-accent-green transition-colors">Nintendo Switch</a></li>
                <li><a href="#" className="hover:text-gaming-accent-green transition-colors">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-[10px] uppercase tracking-widest">Company</h4>
              <ul className="space-y-4 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                <li><a href="#" className="hover:text-gaming-accent-green transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-gaming-accent-green transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-gaming-accent-green transition-colors">Affiliates</a></li>
                <li><a href="#" className="hover:text-gaming-accent-green transition-colors">Press</a></li>
              </ul>
            </div>
            <div className="hidden md:block">
              <h4 className="text-white font-bold mb-6 text-[10px] uppercase tracking-widest">Support</h4>
              <ul className="space-y-4 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                <li><a href="#" className="hover:text-gaming-accent-green transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-gaming-accent-green transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-gaming-accent-green transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-gaming-accent-green transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-[10px] font-bold tracking-widest uppercase">
            © 2026 NEXTLEVEL GAMING AE. ALL SYSTEMS OPERATIONAL.
          </p>
          <div className="flex space-x-8 text-[10px] font-bold text-slate-600 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <button 
              onClick={scrollToTop}
              className="group flex items-center space-x-2 text-gaming-accent-green"
            >
              <span>Back to top</span>
              <ArrowUp className="h-4 w-4 transform group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
