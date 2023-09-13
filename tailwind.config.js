/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-bg': 'rgba(0, 0, 0, 0.54)',
        'nav-text': 'rgba(255, 255, 255, 0.8)'
      }
    },
  },
  plugins: [],
}