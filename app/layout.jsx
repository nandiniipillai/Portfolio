import { Geist, Caveat } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import ChromeShell from '@/components/ChromeShell';
import MotionProvider from '@/components/MotionProvider';
import LenisProvider from '@/components/LenisProvider';
import { SITE } from '@/lib/site';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' });
const caveat = Caveat({ subsets: ['latin'], variable: '--font-caveat', display: 'swap' });

// One source of truth — three hardcoded copies had already drifted from SITE.title.
const pageTitle = `${SITE.name} — ${SITE.title}`;

export const metadata = {
  title: pageTitle,
  description: SITE.positioning,
  openGraph: {
    title: pageTitle,
    description: SITE.positioning,
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Nandini Pillai — portfolio home' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: SITE.positioning,
    images: ['/og.png'],
  },
};

export const viewport = {
  themeColor: '#000000',
  colorScheme: 'dark',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.variable} ${caveat.variable}`}>
      <body className="bg-black text-silver antialiased">
        <LenisProvider>
          <MotionProvider>
            <Nav />
            <ChromeShell>{children}</ChromeShell>
          </MotionProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
