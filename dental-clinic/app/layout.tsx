import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dental Clinic',
  description: 'Professional dental care website',
  keywords: [
    'dental clinic Bengaluru',
    'dentist Koramangala',
    'dental implants Bengaluru',
    'teeth whitening Bengaluru',
    'root canal treatment',
    'Invisalign Bengaluru',
    'smile makeover',
    'SmileCare Dental',
  ],
  authors: [{ name: 'SmileCare Dental' }],
  openGraph: {
    title: 'SmileCare Dental | Advanced Dental Care in Bengaluru',
    description:
      'Expert dentists, modern technology, and personalized treatment plans. Book your appointment today!',
    type: 'website',
    locale: 'en_IN',
    siteName: 'SmileCare Dental',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmileCare Dental | Advanced Dental Care in Bengaluru',
    description: 'Expert dental care with 12+ years experience. 5000+ happy patients. Book today!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://smilecaredental.in',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'SmileCare Dental',
  description: 'Advanced dental care clinic in Bengaluru offering implants, whitening, RCT, Invisalign, and more.',
  url: 'https://smilecaredental.in',
  telephone: '+91-98765-43210',
  email: 'info@smilecaredental.in',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '42, MG Road, Koramangala',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560034',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 12.9352,
    longitude: 77.6272,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday'],
      opens: '10:00',
      closes: '14:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '800',
  },
  medicalSpecialty: 'Dentistry',
  priceRange: '₹₹',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-slate-900 dark:bg-navy dark:text-slate-100">
        {children}
      </body>
    </html>
  );
}
