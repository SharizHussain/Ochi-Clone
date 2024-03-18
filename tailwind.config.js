/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        marquee: 'marquee 10s linear infinite',
      },
      keyframes:{
        marquee:{
          '0%': { transform: 'translateX(4vw)' },
          '100%': { transform: 'translateX(-100vw)' },
        }
      }
    },
  },
  plugins: [],
}