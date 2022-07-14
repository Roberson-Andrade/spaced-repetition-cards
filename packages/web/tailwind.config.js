/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  safelist: [...Array(100)].map((_, index) => `z-[${index}]`),
  theme: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line import/no-extraneous-dependencies, global-require
    require("@kamona/tailwindcss-perspective")
  ],
};
