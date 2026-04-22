import React from 'react';
import { ShieldCheck, Truck, BadgePercent, Headset } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    title: 'Genuine Products',
    desc: 'We only sell original products direct from authorized distributors.',
    color: 'border-blue-500/30'
  },
  {
    icon: <BadgePercent className="h-8 w-8" />,
    title: 'Best Prices',
    desc: 'Unbeatable deals and seasonal discounts that won\'t break the bank.',
    color: 'border-gaming-accent-orange/30'
  },
  {
    icon: <Truck className="h-8 w-8" />,
    title: 'Fast Delivery',
    desc: 'Same-day delivery across Dubai and UAE for your urgent gaming needs.',
    color: 'border-gaming-accent-green/30'
  },
  {
    icon: <Headset className="h-8 w-8" />,
    title: 'Warranty Support',
    desc: 'Comprehensive local and international warranty for complete peace of mind.',
    color: 'border-purple-500/30'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-24 bg-gray-950/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tight">
            Why Choose <span className="text-gaming-accent-orange">NextLevel?</span>
          </h2>
          <div className="h-1 w-24 bg-gaming-accent-orange mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl glass-panel text-center relative overflow-hidden group hover:border-gaming-accent-green/50 transition-all cursor-default"
            >
              <div className="text-gaming-accent-green mb-4 text-3xl flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-2">{feature.title}</h3>
              <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
