import { Anek_Latin, Anek_Devanagari } from 'next/font/google';

// Baari's own display face, loaded only where the Baari case study renders
// its design system, so the type samples are the real typeface.
export const anekLatin = Anek_Latin({
  subsets: ['latin'],
  axes: ['wdth'],
  display: 'swap',
  preload: false,
});

export const anekDevanagari = Anek_Devanagari({
  subsets: ['devanagari'],
  axes: ['wdth'],
  display: 'swap',
  preload: false,
});
