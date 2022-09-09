/** @type {import('tailwindcss').Config} */
const settingsScreens = require("./tailwind.settings.screens");
const settingsFontSizes = require("./tailwind.settings.fontSizes");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4c4c4c",
        sideText: "#F3F4F6",
      },
      screens: settingsScreens,
      fontSize: settingsFontSizes,
    },
    plugins: [require("@tailwindcss/line-clamp")],
  },
};
