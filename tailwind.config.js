/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      gridTemplateColumns: {
        layout: "1fr 1fr",
      },
    },
  },
  plugins: [
       require('@tailwindcss/typography')
  ],
};
