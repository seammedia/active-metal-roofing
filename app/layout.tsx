import type { Metadata } from 'next';
import { Roboto, Roboto_Slab } from 'next/font/google';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-roboto',
  display: 'swap',
});

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto-slab',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.activemetalroofing.com.au'),
  title: 'Active Metal Roofing | Commercial & Industrial Roofing Specialists Melbourne',
  description: 'Professional commercial and industrial metal roofing services across Melbourne. 22 years experience in re-roofing, cladding, and roof inspections. Licensed plumbers.',
  keywords: 'commercial roofing, industrial roofing, metal roofing, architectural cladding, roof inspections, Melbourne roofing, colorbond roofing',
  openGraph: {
    title: 'Active Metal Roofing | Commercial & Industrial Roofing Specialists',
    description: 'Professional commercial and industrial metal roofing services across Melbourne. 22 years experience. Licensed plumbers.',
    type: 'website',
    url: 'https://www.activemetalroofing.com.au/',
    images: [
      {
        url: 'https://www.activemetalroofing.com.au/img/hero-commercial-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Active Metal Roofing',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${robotoSlab.variable}`}>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BSHECP12LM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BSHECP12LM');
          `}
        </Script>
      </head>
      <body className={roboto.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
