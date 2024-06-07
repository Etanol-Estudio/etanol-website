/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vt323: ["VT323", "monospace"],
        squada: ["Squada One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
