/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        libre: ['Libre Baskerville', 'sans-serif'],
        bungee: ['Bungee Shade', 'sans-serif'],
        space: ['Space Mono', 'monospace'],
        shippori: ['Shippori Mincho', 'serif'],
      },
    },
  },
  plugins: [],
};
