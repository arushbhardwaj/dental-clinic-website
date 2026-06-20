'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { beforeAfterCases } from '@/lib/data';
import ScrollReveal from './ScrollReveal';

function BeforeAfterSlide({
  caseData,
  index,
}: {
  caseData: (typeof beforeAfterCases)[0];
  index: number;
}) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pos = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(pos, 5), 95));
  };

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) handleMove(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const imagePaths = ['/images/before-after-1.jpg', '/images/before-after-2.jpg'];
  const imgSrc = imagePaths[index % imagePaths.length];

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100">
      {/* Image comparison */}
      <div
        ref={containerRef}
        className="relative aspect-[16/9] cursor-col-resize select-none overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* After image (full) */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
          <Image src={imgSrc} alt="After treatment" fill className="object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-teal-600/80 text-white text-xs font-bold px-3 py-1 rounded-full absolute top-3 right-3">
              AFTER
            </span>
          </div>
        </div>

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
            <Image src={imgSrc} alt="Before treatment" fill className="object-cover grayscale contrast-75" />
            <div className="absolute inset-0 bg-slate-900/20" />
            <span className="bg-slate-800/80 text-white text-xs font-bold px-3 py-1 rounded-full absolute top-3 left-3">
              BEFORE
            </span>
          </div>
        </div>

        {/* Slider handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg cursor-col-resize"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center border-2 border-teal-400">
            <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
            </svg>
          </div>
        </div>

        {/* Instructions hint */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-3 py-1 rounded-full pointer-events-none">
          Drag to compare
        </div>
      </div>

      {/* Case info */}
      <div className="p-6">
        <div className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-bold mb-3">
          {caseData.treatment}
        </div>
        <p className="text-slate-600 text-sm leading-relaxed mb-3">
          &ldquo;{caseData.story}&rdquo;
        </p>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-navy/10 flex items-center justify-center text-sm font-bold text-navy">
            {caseData.patient[0]}
          </div>
          <span className="text-sm font-semibold text-navy">{caseData.patient}</span>
          <div className="ml-auto flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-amber-400 text-xs">★</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
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
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm tracking-widest uppercase">
              Real Results
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-navy">
              Before & After
            </h2>
            <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
              See the life-changing smile transformations achieved by our expert team.
              Drag the slider to compare.
            </p>
          </div>
        </ScrollReveal>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {beforeAfterCases.map((c, i) => (
              <div key={i} className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0">
                <BeforeAfterSlide caseData={c} index={i} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {beforeAfterCases.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-teal-500' : 'w-2 bg-slate-300'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
