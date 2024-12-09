/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // h1-h2-h3-h4-h5-h6
      },
      colors: {
        primaryColor: '#23A6F0',
        secondaryColor: '#2A7CC7',
        primaryTextColor: '#252B42', // h1-h2-h3-h4-h5-h6
        secondaryTextColor: '#737373'
      },
    },
  },
  plugins: [],
}
