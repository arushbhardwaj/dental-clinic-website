'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { testimonials } from '@/lib/data';
import ScrollReveal from './ScrollReveal';

export default function Testimonials() {
  const isDev = process.env.NODE_ENV === 'development';

  // Autoplay can crash under certain dev/HMR conditions (Turbopack + visibility engine).
  // Disable autoplay entirely in dev to keep the page stable.
  const autoplay = isDev ? undefined : Autoplay({ delay: 4000, stopOnInteraction: false });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    autoplay ? [autoplay] : [],
  );
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrent(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="reviews" className="py-24 bg-navy relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-teal-500/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-teal-500/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-teal-400 font-semibold text-sm tracking-widest uppercase">
              Patient Stories
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-white">
              What Our Patients Say
            </h2>
            {/* Google Reviews badge */}
            <div className="inline-flex items-center gap-3 mt-6 px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <div className="text-left">
                <div className="text-white font-bold text-sm">Google Reviews</div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-xs">★</span>
                  ))}
                  <span className="text-white/60 text-xs ml-1">4.9 · 800+ reviews</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div
          className="overflow-hidden"
          ref={emblaRef}
          onMouseEnter={() => {
            if (!autoplay) return;
            autoplay.stop();
          }}
          onMouseLeave={() => {
            if (!autoplay) return;
            autoplay.play();
          }}
        >
          <div className="flex gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <span key={j} className="text-amber-400">★</span>
                    ))}
                  </div>

                  <p className="text-white/80 text-sm leading-relaxed flex-1 mb-5">
                    &ldquo;{t.review}&rdquo;
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-bold text-sm">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{t.name}</div>
                      <div className="text-teal-400 text-xs">{t.treatment}</div>
                    </div>
                    <div className="ml-auto">
                      <svg className="w-6 h-6 text-white/20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-teal-400' : 'w-2 bg-white/30'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
