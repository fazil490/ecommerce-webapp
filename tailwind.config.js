/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      textColor: {
        // green: "#15803D",
        // red: "#E11D48",
        // grey: "#393E46",
      },
      fontFamily: {
        Montserrat: "Montserrat",
      },
      backgroundColor: {
        green: "#15803D",
        lightGreen: "#DCFCE7",
        red: "#E11D48",
        grey: "#F9FAFB",
        white: "#ffffff",
      },
      borderColor: {
        red: "#E11D48",
      },
    },
  },
  plugins: [],
};
