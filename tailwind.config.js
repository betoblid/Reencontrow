/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'blue-drak': '#15161B',
        'gray-dark': '#2C2F37'
      },
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif']
      }
    },
  },
  plugins: [],
}

