/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black": "#000",
        "primary": "#FFFFFF",
        "secondary": "#A14A15",
        "HigherText": "#ffffff",
        "LowerText": "#a3a3a3",
        "CardColor": "#EDEDED"
      }
    },
  },
  plugins: [],
}