'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { doctor } from '@/lib/data';
import ScrollReveal from './ScrollReveal';

export default function AboutDoctor() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm tracking-widest uppercase">
              Meet the Expert
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-navy">
              About Your Doctor
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <ScrollReveal delay={0.1}>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-navy/15">
                <div className="aspect-[3/4] relative bg-gradient-to-br from-teal-100 to-navy/10">
                  <Image
                    src="/images/doctor.jpg"
                    alt={`${doctor.name} - Senior Dental Surgeon at SmileCare Dental`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Experience badge */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-navy to-slate-800 text-white rounded-2xl p-6 shadow-xl"
              >
                <div className="text-4xl font-display font-black">{doctor.experience}</div>
                <div className="text-teal-300 text-sm font-medium mt-1">Years of Excellence</div>
              </motion.div>

              {/* IDA badge */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-lg p-3 flex items-center gap-2">
                <div className="text-2xl">🏅</div>
                <div className="text-xs">
                  <div className="font-bold text-navy">IDA Member</div>
                  <div className="text-slate-400">Verified</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content Side */}
          <ScrollReveal delay={0.2}>
            <div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-navy mb-2">
                {doctor.name}
              </h3>
              <p className="text-teal-600 font-semibold mb-6">{doctor.title}</p>

              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {doctor.intro}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-4 mb-8">
                {doctor.highlights.map((h) => (
                  <div
                    key={h.sub}
                    className="flex-1 min-w-[100px] text-center py-4 px-4 rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100"
                  >
                    <div className="text-2xl font-display font-black text-navy">{h.label}</div>
                    <div className="text-xs text-slate-500 font-medium mt-0.5">{h.sub}</div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div>
                <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-4">
                  Qualifications & Certifications
                </h4>
                <div className="space-y-3">
                  {doctor.certifications.map((cert) => (
                    <div key={cert} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-700 text-sm leading-relaxed">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <a
                  href="#booking"
                  className="px-6 py-3 rounded-xl bg-navy text-white font-semibold text-sm hover:bg-navy/90 transition-colors"
                >
                  Book a Consultation
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
