const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#161A1D",
        "dark-opacity": "rgba(22, 26, 29, 0.7)",
        "dark-lighter": "#20262b",
        sudo: "#D1483B",
        "sudo-dark": "#83271f",
        "sudo-light": "#fb6355",
      },
      fontFamily: {
        sans: ["SF Pro", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
