/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  safelist: [
    ...[...Array(100)].map((_, index) => `z-[${index}]`)
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        7: "repeat(7, minmax(0, 1fr))"
      },
      colors: {
        success: {
          50: "#7de775",
          100: "#73dd6b",
          200: "#69d361",
          300: "#5fc957",
          400: "#55bf4d",
          500: "#4bb543",
          600: "#41ab39",
          700: "#37a12f",
          800: "#2d9725",
          900: "#238d1b"
        }
      }
    },

  },
  plugins: [
    // eslint-disable-next-line import/no-extraneous-dependencies, global-require
    require("@kamona/tailwindcss-perspective")
  ],
};
