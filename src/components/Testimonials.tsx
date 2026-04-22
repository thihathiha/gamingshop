import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Alex Johnson',
    role: 'Competitive Gamer',
    content: 'The PS5 I bought from NextLevel arrived same day! Super fast service and the pricing was the best I found in Dubai.',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200',
    rating: 5
  },
  {
    name: 'Sarah Chen',
    role: 'Tech Enthusiast',
    content: 'Authentic products and amazing customer support. They helped me choose the right accessories for my new Switch OLED.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    rating: 5
  },
  {
    name: 'Marcus Reed',
    role: 'Xbox Collector',
    content: 'Found the Series X in stock when nobody else had it. These guys are the real deal for hardware enthusiasts.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 uppercase tracking-tighter italic">Gamers Speaking</h2>
          <p className="text-gray-400">Join thousands of satisfied gamers who leveled up with us.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-[2.5rem] glass-panel relative group hover:border-gaming-accent-green/30 transition-all"
            >
              <div className="absolute -top-4 -left-4 bg-gaming-accent-green p-3 rounded-2xl shadow-lg neon-glow">
                <Quote className="text-slate-900 h-5 w-5" />
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 text-gaming-accent-green fill-gaming-accent-green" />
                ))}
              </div>

              <p className="text-slate-300 text-sm italic mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-bold text-white text-sm">{testimonial.name}</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
