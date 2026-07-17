'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function ChromeShell({ children }) {
  const pathname = usePathname();
  const showFooter = pathname !== '/';
  return (
    <>
      <main>{children}</main>
      {showFooter && <Footer />}
    </>
  );
}
