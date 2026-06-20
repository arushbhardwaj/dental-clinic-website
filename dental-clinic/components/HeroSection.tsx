'use client';

import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import { clinicInfo } from '@/lib/data';

const trustBadges = [
  { value: '5000+', label: 'Happy Patients' },
  { value: '4.9★', label: 'Star Rating' },
  { value: '12+', label: 'Years Experience' },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};
const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-teal-50/30">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-teal-100/40 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-navy/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-teal-100/50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-teal-100/30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="text-center lg:text-left"
          >
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                Trusted by 5000+ Families in Bengaluru
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-navy leading-tight mb-6"
            >
              Advanced Dental Care{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600">
                For Confident
              </span>{' '}
              Smiles
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg text-slate-500 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Expert dentists, modern technology, and personalized treatment
              plans for the entire family. Because every smile deserves the best.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-navy to-slate-800 text-white font-semibold text-base hover:shadow-2xl hover:shadow-navy/30 transition-all duration-300 hover:-translate-y-1"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Appointment
              </a>
              <a
                href={`https://wa.me/${clinicInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#25D366]/10 border-2 border-[#25D366]/30 text-[#128C7E] font-semibold text-base hover:bg-[#25D366]/20 transition-all duration-300 hover:-translate-y-1"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={item}
              className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-8"
            >
              {trustBadges.map((badge) => (
                <div key={badge.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-display font-bold text-navy">
                    {badge.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium">
                    {badge.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-navy/20">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/hero.jpg"
                  alt="Modern SmileCare Dental clinic with smiling patient"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Floating card - top left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center text-xl">
                🏆
              </div>
              <div>
                <div className="text-xs text-slate-400">Certified by</div>
                <div className="text-sm font-bold text-navy">Indian Dental Association</div>
              </div>
            </motion.div>

            {/* Floating card - bottom right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4"
            >
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-sm">★</span>
                ))}
              </div>
              <div className="text-sm font-bold text-navy">4.9/5 Google Rating</div>
              <div className="text-xs text-slate-400">Based on 800+ reviews</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-400 font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 rounded-full border-2 border-slate-300 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-slate-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
