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
        ink: '#000000',
        graphite: '#0F0F10',
        carbon: '#161617',
        steel: '#1D1D1F',
        seam: '#2A2A2C',
        silver: '#F4F4F2',
        fog: '#B4B4B0',
        ash: '#6E6E6A',
        lime: '#C6F24E',
      },
      fontFamily: {
        heading: ['var(--font-geist)', 'system-ui', 'sans-serif'],
        body: ['var(--font-geist)', 'system-ui', '-apple-system', 'sans-serif'],
        hand: ['var(--font-caveat)', 'ui-rounded', 'cursive'],
      },
      maxWidth: { measure: '42rem' },
      letterSpacing: { tightest: '-0.04em' },
    },
  },
  plugins: [],
};
