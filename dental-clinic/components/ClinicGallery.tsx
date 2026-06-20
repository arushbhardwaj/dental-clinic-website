'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const galleryItems = [
  {
    src: '/images/gallery-reception.jpg',
    alt: 'SmileCare Dental reception area',
    label: 'Reception',
    span: 'col-span-2',
  },
  {
    src: '/images/gallery-treatment.jpg',
    alt: 'Modern dental treatment room',
    label: 'Treatment Room',
    span: 'col-span-1',
  },
  {
    src: '/images/gallery-equipment.jpg',
    alt: 'Advanced dental technology and equipment',
    label: 'Technology',
    span: 'col-span-1',
  },
  {
    src: '/images/gallery-team.jpg',
    alt: 'SmileCare dental team',
    label: 'Our Team',
    span: 'col-span-2',
  },
  {
    src: '/images/hero.jpg',
    alt: 'Patient consultation',
    label: 'Consultation',
    span: 'col-span-1',
  },
  {
    src: '/images/doctor.jpg',
    alt: 'Dr. Arjun Sharma',
    label: 'Dr. Arjun Sharma',
    span: 'col-span-1',
  },
];

// Gradient placeholder colors for missing images
const placeholderGradients = [
  'from-teal-100 to-cyan-200',
  'from-blue-100 to-indigo-200',
  'from-slate-100 to-slate-200',
  'from-navy/10 to-teal-100',
  'from-teal-50 to-slate-100',
  'from-indigo-100 to-blue-100',
];

export default function ClinicGallery() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState('');

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm tracking-widest uppercase">
              Inside SmileCare
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-navy">
              Our Clinic
            </h2>
            <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
              A welcoming, state-of-the-art facility designed for your comfort and care.
            </p>
          </div>
        </ScrollReveal>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`${item.span} cursor-pointer group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br ${placeholderGradients[i]}`}
                onClick={() => {
                  setLightboxSrc(item.src);
                  setLightboxAlt(item.alt);
                }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    // Gracefully hide broken images, show gradient background
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white font-semibold text-sm">{item.label}</span>
                </div>
                {/* Placeholder text for gradient backgrounds */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-4xl opacity-20">
                    {['🏥', '🦷', '🔬', '👨‍⚕️', '😊', '👨‍⚕️'][i]}
                  </span>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxSrc(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[80vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[60vh] bg-gradient-to-br from-teal-100 to-navy/10">
                <Image
                  src={lightboxSrc}
                  alt={lightboxAlt}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
            <button
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              onClick={() => setLightboxSrc(null)}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
