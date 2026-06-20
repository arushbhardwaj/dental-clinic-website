'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clinicInfo } from '@/lib/data';

export default function StickyAppointmentBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show the sticky bar once the hero section scrolls out of view.
    const hero = document.getElementById('hero');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);


  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-white border-t border-slate-200 px-4 py-3 flex gap-3 shadow-2xl"
        >
          <a
            href="#booking"
            id="sticky-book-btn"
            className="flex-1 py-3 rounded-xl bg-navy text-white font-semibold text-sm text-center hover:bg-navy/90 transition-colors"
          >
            Book Appointment
          </a>
          <a
            href={`https://wa.me/${clinicInfo.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm text-center"
          >
            WhatsApp
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
