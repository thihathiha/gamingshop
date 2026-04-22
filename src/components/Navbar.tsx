import React, { useState, useEffect } from 'react';
import { Menu, X, Gamepad2, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-panel py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="w-8 h-8 bg-gaming-accent-green rounded-lg flex items-center justify-center font-extrabold text-slate-900 group-hover:rotate-12 transition-transform">
              NL
            </div>
            <span className="text-xl font-extrabold tracking-tighter text-white uppercase italic">
              NEXTLEVEL<span className="text-gaming-accent-green NOT-italic">GAMING</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-tighter"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-gaming-accent-green text-slate-950 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-green-400 transition-all neon-glow">
              CART (0)
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-gaming-accent-green hover:bg-gray-800/50 rounded-lg transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <button className="w-full bg-gaming-accent-green hover:bg-green-600 text-gaming-dark py-3 rounded-lg font-bold transition-colors">
                  SHOP NOW
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
