/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // h1-h2-h3 // p1-p2-p3
      },
      colors: {
        primaryColor: '#23A6F0',
        secondaryColor: '#2A7CC7',
        thirdColor: '#FFFFFF',
        primaryColorText: '#23A6F0',
        secondaryColorText: '#2A7CC7',
        thirdColorText: '#FFFFFF', // h2
        primaryTextColor: '#252B42', // h1-h2-h3
        secondaryTextColor: '#737373', // p1-p2-p3
        primaryColorButton: '#23A6F0',
        thirdColorButton: '#FFFFFF',
      },
    },
  },
  plugins: [],
}
