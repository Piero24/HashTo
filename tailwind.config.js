/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#FF9500",
          2: "#141414",
          3: "#FFFFFF",
          4: "#00FA9A",
          5: "#00CC7E",
          6: "#CCCCCC",
          7: "#181818",
          8: "#151515",
          9: "#9C9C9C",
          10: "#1D1D1D",
          11: "#808080",
          12: "#333333",
          13: "#474747",
          14: "#ff5f57",
          15: "#323232",
        },
      },
      screens: {
        // NON DEFAULT SCREENS ARE ONLY FOR THE SHAPE IN THE FIRST SECTION OF THE HOMEPAGE
        // AND THE SHAPE IN THE SECOND SECTION OF THE HOMEPAGE (editor and dock)
        'xxsm': '350px',        // Extra small,
        'xsm': '423px',         //
        'xsm-sm': '495px',      //
        '2-xsm-sm': '567px',    //
        // sm: '640px',         // Small, default
        'sm-md': '704px',       // 
        // md: '768px',         // Medium, default
        'md-lg': '832px',       // 
        '2-md-lg': '896px',     // 
        '3-md-lg': '960px',     // 
        // lg: '1024px',        // Large, default
        'lg-xl': '1088px',      //
        '2-lg-xl': '1152px',    // 
        '3-lg-xl': '1216px',    // 
        // xl: '1280px',        // Extra large, default
        'xl-2xl': '1344px',     // 
        '2-xl-2xl': '1408px',   //
        '3-xl-2xl': '1472px',   //
        // 2xl: '1536px',       // Extra extra large, default
        '3xl': '1692px',        // Extra extra extra large, NOT default
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        code: "var(--font-code)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    flowbite.plugin(),
  ],
};