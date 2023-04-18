/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navbar: "#171a21",
        main: "#1b2838",
        text1: "#c5c3c0",
      },
      screens: {
        lg: "912px",
      },
    },
  },
  plugins: [],
};
