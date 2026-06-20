'use client';

import { clinicInfo } from '@/lib/data';
import ScrollReveal from './ScrollReveal';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-teal-600 font-semibold text-sm tracking-widest uppercase">
              Find Us
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-navy">
              Contact Us
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <ScrollReveal>
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-navy/10 border border-slate-100 aspect-[4/3]">
              <iframe
                src={clinicInfo.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SmileCare Dental Clinic Location"
              />
            </div>
          </ScrollReveal>

          {/* Info cards */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-5">
              {[
                {
                  icon: '📍',
                  title: 'Address',
                  detail: clinicInfo.address,
                  link: `https://maps.google.com/?q=${encodeURIComponent(clinicInfo.address)}`,
                  linkText: 'Get Directions →',
                },
                {
                  icon: '📞',
                  title: 'Phone',
                  detail: clinicInfo.phone,
                  link: `tel:${clinicInfo.phone.replace(/\s/g, '')}`,
                  linkText: 'Call Now →',
                },
                {
                  icon: '✉️',
                  title: 'Email',
                  detail: clinicInfo.email,
                  link: `mailto:${clinicInfo.email}`,
                  linkText: 'Send Email →',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-5 p-5 rounded-2xl bg-white border border-slate-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-teal-100 flex items-center justify-center text-2xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      {item.title}
                    </div>
                    <div className="text-navy font-medium text-sm mb-1.5">{item.detail}</div>
                    <a
                      href={item.link}
                      target={item.title === 'Address' ? '_blank' : undefined}
                      rel={item.title === 'Address' ? 'noopener noreferrer' : undefined}
                      className="text-teal-600 text-xs font-semibold hover:text-teal-700 transition-colors"
                    >
                      {item.linkText}
                    </a>
                  </div>
                </div>
              ))}

              {/* Working Hours */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-navy to-slate-800 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-teal-500/20 flex items-center justify-center">
                    ⏰
                  </div>
                  <div className="font-semibold">Working Hours</div>
                </div>
                <div className="space-y-2">
                  {clinicInfo.hours.map((h) => (
                    <div key={h.day} className="flex justify-between text-sm">
                      <span className="text-white/70">{h.day}</span>
                      <span className="text-teal-400 font-semibold">{h.time}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <span className="inline-flex items-center gap-2 text-xs text-white/60">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Accepting appointments today
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
