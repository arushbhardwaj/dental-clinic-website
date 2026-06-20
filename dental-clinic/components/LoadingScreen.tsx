'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ensure the loader never blocks the UI indefinitely in dev environments
    // where HMR/WebSocket issues can prevent expected re-renders.
    const timer = window.setTimeout(() => setLoading(false), 2000);

    // Safety net: after a bit longer, force-unmount even if something prevents state updates.
    const safetyTimer = window.setTimeout(() => setLoading(false), 10000);

    return () => {
      clearTimeout(timer);
      clearTimeout(safetyTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[100] bg-navy flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            className="flex flex-col items-center gap-4"
          >
            {/* Logo */}
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shadow-2xl shadow-teal-500/30">
              <span className="text-4xl">🦷</span>
            </div>

            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-display text-3xl font-bold text-white"
              >
                SmileCare
                <span className="text-teal-400"> Dental</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-white/40 text-sm mt-1"
              >
                Advanced Care. Confident Smiles.
              </motion.p>
            </div>
          </motion.div>

          {/* Loading bar */}
          <motion.div className="absolute bottom-0 left-0 h-1 bg-teal-400 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, ease: [0.4, 0, 0.2, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
