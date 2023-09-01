const baseThemeTailwindcss = require("tailwind-theme/baseThemeTailwindcss.js");

module.exports = {
  prefix: "ui-",
  content: [
    // app content
    "./src/**/*.{js,ts,jsx,tsx}",
    // include packages if not transpiling
    // "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [baseThemeTailwindcss],
  plugins: [],
};
