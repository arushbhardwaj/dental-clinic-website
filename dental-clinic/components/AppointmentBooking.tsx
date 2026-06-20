'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clinicInfo } from '@/lib/data';
import ScrollReveal from './ScrollReveal';

const treatments = [
  'Dental Implants',
  'Root Canal Treatment',
  'Teeth Whitening',
  'Smile Makeover',
  'Invisalign / Aligners',
  'Crowns & Bridges',
  'Pediatric Dentistry',
  'Tooth Extraction',
  'General Checkup',
  'Other',
];

export default function AppointmentBooking() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    treatment: '',
    date: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const whatsappMsg = encodeURIComponent(
    `Hello SmileCare Dental! I'd like to book an appointment.\nName: ${form.name}\nPhone: ${form.phone}\nTreatment: ${form.treatment}\nPreferred Date: ${form.date}`
  );

  return (
    <section id="booking" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left info */}
          <ScrollReveal>
            <div>
              <span className="text-teal-600 font-semibold text-sm tracking-widest uppercase">
                Get Started
              </span>
              <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-navy mb-6">
                Book Your Appointment
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                Ready to achieve your best smile? Fill out the form and our team will 
                confirm your appointment within 2 hours.
              </p>

              <div className="space-y-4">
                {[
                  { icon: '📍', title: 'Visit Us', detail: clinicInfo.address },
                  { icon: '📞', title: 'Call Us', detail: clinicInfo.phone },
                  { icon: '⏰', title: 'Working Hours', detail: 'Mon–Sat: 9 AM–8 PM | Sun: 10 AM–2 PM' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center text-xl flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-navy text-sm">{item.title}</div>
                      <div className="text-slate-500 text-sm mt-0.5">{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={0.2}>
            <div className="bg-white rounded-3xl shadow-2xl shadow-navy/10 p-8 border border-slate-100">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                          Full Name *
                        </label>
                        <input
                          id="booking-name"
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-400 focus:ring-2 focus:ring-teal-100 outline-none transition-all text-sm text-slate-800 placeholder:text-slate-300"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          id="booking-phone"
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-400 focus:ring-2 focus:ring-teal-100 outline-none transition-all text-sm text-slate-800 placeholder:text-slate-300"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                        Treatment Needed *
                      </label>
                      <select
                        id="booking-treatment"
                        required
                        value={form.treatment}
                        onChange={(e) => setForm({ ...form, treatment: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-400 focus:ring-2 focus:ring-teal-100 outline-none transition-all text-sm text-slate-800 bg-white appearance-none"
                      >
                        <option value="">Select a treatment</option>
                        {treatments.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                        Preferred Date *
                      </label>
                      <input
                        id="booking-date"
                        type="date"
                        required
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-400 focus:ring-2 focus:ring-teal-100 outline-none transition-all text-sm text-slate-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                        Additional Notes
                      </label>
                      <textarea
                        id="booking-message"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-400 focus:ring-2 focus:ring-teal-100 outline-none transition-all text-sm text-slate-800 placeholder:text-slate-300 resize-none"
                        placeholder="Any specific concerns or requirements..."
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3 pt-2">
                      <button
                        id="booking-submit"
                        type="submit"
                        disabled={loading}
                        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-navy to-slate-800 text-white font-semibold text-sm hover:shadow-lg hover:shadow-navy/30 transition-all disabled:opacity-60 flex items-center justify-center gap-2"
                      >
                        {loading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Booking...
                          </>
                        ) : (
                          'Book Appointment'
                        )}
                      </button>
                      <a
                        href={`https://wa.me/${clinicInfo.whatsapp}?text=${whatsappMsg}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#22c55e] transition-colors flex items-center justify-center gap-2"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        WhatsApp
                      </a>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-navy mb-2">
                      Appointment Requested!
                    </h3>
                    <p className="text-slate-500 mb-6">
                      Our team will call you within 2 hours to confirm your appointment with Dr. Arjun Sharma.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: '', phone: '', treatment: '', date: '', message: '' });
                      }}
                      className="text-teal-600 font-semibold text-sm hover:underline"
                    >
                      Book Another →
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
