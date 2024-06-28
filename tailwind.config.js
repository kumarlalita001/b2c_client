const { default: theme } = require("@material-tailwind/react/theme");
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
 theme: {
    extend: {fontFamily: {
      mullish: ["Mulish", "sans-serif"],
    },
    colors: {
      deepBlue: "#02042a",
      lightBlue: "#2b84ea",
      lightBlue300: "#4b94ed",
      lightBlue500: "#0b72e7",
      greenLight: "#61cea6",
      grayText: "#818597",
      lightGray: "#e2e2e2",
      grayBlue: "#344a6c",
      deepBlueHead: "#162f56",
      gray2: "#525a76",
      green:"#008000",
      goldenrod:"#BFA55B",
      gold:" #daa520",
    },
    backgroundImage: {
      bgImage: "url('bgTemp.png')",
      bgLogo: "url('logosmall.png')",
    },
  },
  },
  plugins: [],
});