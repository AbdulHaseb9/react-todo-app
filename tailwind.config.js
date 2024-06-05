/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        heading: "#071C49",
        orange: "#FC5A41",
      },
      screens: {
        ml: '425px'
      }
    },
  },
  plugins: [],
};
