/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
      fontSize: {
        '6xl': '4rem',
        '7xl': '5rem',
        '8xl': '6rem',
      }
    },
  },
  plugins: [],
}