import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import { Bebas_Neue, Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const bebas_neue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-bebas_neue',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'João e Maria - Cafeteria',
    template: 'João e Maria - Cafeteria | s%',
  },
  description: 'Apaixonados por café',
  keywords: 'João e Maria, cafeteria, café artesanal, jardim são luis',
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  metadataBase: new URL('https://joaoemaria-cafeteria.vercel.app/'),
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/pt-BR',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'João e Maria - Cafeteria',
    description: 'Apaixonados por café.',
    creator: 'Diogo Realles - Front-end',
    siteId: '',
    creatorId: '',
    images: {
      url: 'https://joaoemaria-cafeteria.vercel.app/opengraph-image.jpg',
      alt: 'João e Maria - Cafeteria',
    },
  },
  verification: {
    google:
      'google-site-verification=3SlupKUH0CMNB0NobkUuwdDCRA9J88hg5hWKaak5rzo',
  },
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Marcação JSON-LD para SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'João e Maria - Cafeteria',
    image: 'https://joaoemaria-cafeteria.vercel.app/opengraph-image.jpg',
    description: 'Apaixonados por café.',
    url: 'https://joaoemaria-cafeteria.vercel.app/',
    publisher: {
      '@type': 'Organization',
      name: 'João e Maria - Cafeteria',
      logo: {
        '@type': 'ImageObject',
        url: 'https://joaoemaria-cafeteria.vercel.app/favicon.ico',
      },
    },
  };

  return (
    <html className="scroll-smooth" lang="pt-br">
      <GoogleTagManager gtmId="GTM-NW7K2XL8" />
      <GoogleAnalytics gaId="G-M5HPYZ8C4X" />

      <body
        className={`${bebas_neue.variable} ${inter.variable} selection:bg-[#322C2B] selection:text-white bg-[#ffffff] text-322C2B`}
      >
        {/* Add JSON-LD to your page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navigation />

        {children}

        <Footer />
      </body>
    </html>
  );
}
