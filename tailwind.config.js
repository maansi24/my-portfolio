/** @type {import('tailwindcss').Config} */
const settingsScreens = require("./tailwind.settings.screens");
const settingsFontSizes = require("./tailwind.settings.fontSizes");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: settingsScreens,
    fontSize: settingsFontSizes,
  },
  plugins: [],
};
