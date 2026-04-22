import React from 'react';
import { motion } from 'motion/react';
import { products } from '../data/products';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              LEVEL UP YOUR <span className="text-gaming-accent-green underline decoration-wavy decoration-2 underline-offset-8">HARDWARE</span>
            </h2>
            <p className="text-gray-400">
              Browse our selection of the most powerful consoles and must-have accessories in the market today.
            </p>
          </div>
          <button className="flex items-center space-x-2 text-gaming-accent-orange font-bold group hover:opacity-80 transition-opacity">
            <span>VIEW ALL PRODUCTS</span>
            <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass-panel rounded-[2.5rem] p-6 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:border-gaming-accent-green/50 transition-all">
                <div className="relative w-full aspect-[4/3] mb-4 bg-slate-700/50 rounded-2xl flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gaming-accent-green text-slate-900 text-[10px] font-bold px-2 py-1 rounded-lg uppercase tracking-widest">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                <div className="w-full">
                  <h3 className="text-xl font-bold mb-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-500 mb-4 uppercase tracking-wider">
                    {product.description.split('.')[0]}
                  </p>
                  
                  <div className="text-2xl font-bold text-gaming-accent-green mb-6">
                    {product.price}
                  </div>
                  <button className="w-full py-3 rounded-xl bg-slate-800 text-white text-xs font-bold uppercase tracking-widest hover:bg-gaming-accent-green hover:text-slate-950 transition-all neon-glow">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
