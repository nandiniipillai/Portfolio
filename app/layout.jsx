import { Geist, Geist_Mono, Caveat, Instrument_Serif } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import ChromeShell from '@/components/ChromeShell';
import MotionProvider from '@/components/MotionProvider';
import { SITE } from '@/lib/site';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' });
const caveat = Caveat({ subsets: ['latin'], variable: '--font-caveat', display: 'swap' });
const instrument = Instrument_Serif({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--font-instrument', display: 'swap' });

export const metadata = {
  title: 'Nandini Pillai — Product & Experience Designer',
  description: SITE.positioning,
  openGraph: {
    title: 'Nandini Pillai — Product & Experience Designer',
    description: SITE.positioning,
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${caveat.variable} ${instrument.variable}`}>
      <body className="bg-ink text-cream antialiased">
        <MotionProvider>
          <Nav />
          <ChromeShell>{children}</ChromeShell>
        </MotionProvider>
      </body>
    </html>
  );
}
