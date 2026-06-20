'use client';

import { motion } from 'framer-motion';
import { whyUs } from '@/lib/data';
import ScrollReveal from './ScrollReveal';

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm tracking-widest uppercase">
              Our Difference
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-navy">
              Why Choose SmileCare?
            </h2>
            <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
              We combine world-class expertise with cutting-edge technology to deliver 
              dental care that truly transforms lives.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                className="group relative bg-white rounded-3xl p-8 border border-slate-100 hover:border-teal-200 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 text-center h-full"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-50/50 to-cyan-50/50 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center text-3xl mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-display font-bold text-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Stats banner */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 rounded-3xl bg-gradient-to-r from-navy via-slate-800 to-navy p-8 md:p-12 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '5000+', label: 'Patients Treated' },
                { value: '12+', label: 'Years Experience' },
                { value: '4.9★', label: 'Average Rating' },
                { value: '98%', label: 'Success Rate' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-display font-black text-teal-400">
                    {stat.value}
                  </div>
                  <div className="text-slate-300 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
