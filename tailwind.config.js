/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        moveUp: {
          "100%": { transform: "translateY(0)" },
        },
        blur: {
          "0%": { boxShadow: "1px 1px 10px white" },
          "50%": { boxShadow: "3px 3px 50px white" },
          "100%": { boxShadow: "1px 1px 10px white" },
        },
      },
      animation: {
        moveUp: "moveUp 2.5s ease forwards",
        blur: "blur 3s ease infinite",
      },
      fontFamily: {
        source: ["Source Sans 3", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        },
      );
    }),
  ],
};
