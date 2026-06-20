'use client';

import { motion } from 'framer-motion';
import { treatments } from '@/lib/data';
import ScrollReveal from './ScrollReveal';

export default function Treatments() {
  return (
    <section id="treatments" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm tracking-widest uppercase">
              What We Offer
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-navy">
              Our Treatments
            </h2>
            <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
              Comprehensive dental care using the latest technology for comfortable, 
              long-lasting results.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((treatment, index) => (
            <ScrollReveal key={treatment.title} delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`group relative rounded-3xl p-6 bg-gradient-to-br ${treatment.color} border border-white/50 hover:shadow-2xl hover:shadow-navy/10 transition-shadow duration-300 cursor-pointer h-full`}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />

                <div className="text-4xl mb-4">{treatment.icon}</div>
                <h3 className="text-lg font-display font-bold text-navy mb-2">
                  {treatment.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  {treatment.description}
                </p>
                <button className="flex items-center gap-1.5 text-teal-600 text-sm font-semibold group-hover:gap-2.5 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
