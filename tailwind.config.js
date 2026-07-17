/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,jsx,mdx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0A0908',
        graphite: '#111110',
        carbon: '#161513',
        steel: '#1D1B18',
        seam: '#2A2723',
        cream: '#F0EDE4',
        silver: '#F0EDE4',
        fog: '#B8B2A6',
        ash: '#78736A',
        amber: '#E8A55C',
        lime: '#C6F24E',
      },
      fontFamily: {
        heading: ['var(--font-geist)', 'system-ui', 'sans-serif'],
        body: ['var(--font-geist)', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['var(--font-instrument)', 'Georgia', 'serif'],
        hand: ['var(--font-caveat)', 'ui-rounded', 'cursive'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: { measure: '42rem' },
      letterSpacing: { tightest: '-0.04em' },
    },
  },
  plugins: [],
};
