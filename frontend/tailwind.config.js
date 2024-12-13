/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
      FuturaStd: ["FuturaStd", "sans-serif"],
      PizzaDudeFatOutline: ["PizzaDudeFatOutline", "sans-serif"],
      HubenRegular: ["HubenRegular", "sans-serif"],
      SophiaPro: ["SophiaPro", "sans-serif"],
    },
    extend: {
      screens: {
        "1000px": "1050px",
        "1100px": "1110px",
        "800px": "800px",
        "1300px": "1300px",
        "400px": "400px",
        "1200px": "1200px",
        "760px": "760px",
        "600px": "600px",
        "500px": "500px",
        "400px": "400px",
        "300px": "300px",
        "200px": "200px",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
