/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  important: "#root",
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        jBlue: "#040066",
        blue2: "#040ab2",
        blue3: "#1941fa",
        blue4: "#3c82ff",
        jRed: "#f00a0a",
        red2: "#ff3f3f",
        red3: "#f16a6a",
        red4: "#ff8982",
        lilac1: "#5c13b5",
        lilac2: "#6633cc",
        lilac3: "#9966ff",
        lilac4: "#cc99ff",
        tourquoise1: "#008b8b",
        tourquoise2: "#339999",
        tourquoise3: "#33cccc",
        tourquoise4: "#afeeee",
        grey1: "#f5f5f5",
        grey2: "#e8e8e8",
        grey3: "#cfcfcf",
        grey4: "#b5b5b5",
      },
    },
  },
  plugins: [],
};
