/** @type {import('tailwindcss').Config} */

module.exports = {
  presets: [require("nativewind/preset")],
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#282928",
        primaryPurple: "#7E57C2",
      },
    },
  },
  plugins: [],
};
