import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'B. Satya Chandra | AI/ML Engineer & Full-Stack Developer',
  description: 'Official portfolio of B. Satya Chandra. AI/ML Engineer and Full-Stack Web Developer specializing in Deep Learning, Node.js, FastAPI, and Earth-Toned Glassmorphism UI.',
  keywords: [
    'B Satya Chandra',
    'Satya Chandra Portfolio',
    'AI ML Engineer',
    'Full-Stack Developer',
    'Deep Learning',
    'Python TensorFlow',
    'MB Bloods',
    'Vertex Proserv',
    'Stock Market Trend Prediction',
    'Mummidivaram'
  ],
  authors: [{ name: 'B. Satya Chandra' }],
  openGraph: {
    title: 'B. Satya Chandra | AI/ML Engineer & Full-Stack Developer',
    description: 'Personal portfolio showcasing machine learning benchmarks, full-stack case studies, and creative media work.',
    url: 'https://satyachandra.vercel.app',
    siteName: 'B. Satya Chandra Portfolio',
    images: [
      {
        url: '/satya.png',
        width: 800,
        height: 1000,
        alt: 'B. Satya Chandra Profile'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'B. Satya Chandra | AI/ML Engineer & Full-Stack Developer',
    description: 'Personal portfolio showcasing machine learning benchmarks, full-stack case studies, and creative media work.',
    images: ['/satya.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'B. Satya Chandra',
    jobTitle: 'AI/ML Engineer & Full-Stack Developer',
    email: 'mailto:satyachandra722@gmail.com',
    telephone: '+919948550301',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mummidivaram',
      addressRegion: 'Andhra Pradesh',
      addressCountry: 'India'
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Srinivasa Institute of Engineering and Technology'
    },
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Deep Learning',
      'TensorFlow',
      'Full-Stack Web Development',
      'Node.js',
      'FastAPI',
      'Tailwind CSS',
      'UI/UX Design',
      'Adobe Premiere Pro',
      'Adobe Photoshop'
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Syne:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#FFFFFF] text-[#0F172A] antialiased selection:bg-[#FF6600] selection:text-[#FFFFFF]">
        {children}
      </body>
    </html>
  );
}
