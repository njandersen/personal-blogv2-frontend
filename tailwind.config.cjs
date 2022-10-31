/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00ABB3",
        secondary: "#3C4048",
        grey: "#B2B2B2",
        lightGrey: "#EAEAEA",
      },
      fontFamily: {
        body: '"Open Sans"',
        title: "Merriweather",
      },
    },
  },
  plugins: [],
};
