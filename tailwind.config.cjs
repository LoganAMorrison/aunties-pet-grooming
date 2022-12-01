/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#059595",
          dark: "rgb(69, 114, 115)",
          light: "rgb(108, 148, 150)",
          lighter: "rgb(154, 184, 184)",
          lightest: "rgb(203, 219, 219)",
        }
      }
    },
  },
  plugins: [],
};
