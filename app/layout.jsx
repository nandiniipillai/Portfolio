import { Geist, Caveat } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import ChromeShell from '@/components/ChromeShell';
import MotionProvider from '@/components/MotionProvider';
import { SITE } from '@/lib/site';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' });
const caveat = Caveat({ subsets: ['latin'], variable: '--font-caveat', display: 'swap' });

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
    <html lang="en" className={`${geist.variable} ${caveat.variable}`}>
      <body className="bg-[#0a0a0a] text-silver antialiased">
        <MotionProvider>
          <Nav />
          <ChromeShell>{children}</ChromeShell>
        </MotionProvider>
      </body>
    </html>
  );
}
