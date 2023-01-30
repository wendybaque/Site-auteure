const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
        poppins: ["Poppins", "sans-serif"],
      },
    },
    colors: {
      primary: "#fff",
      secondary: "rgb(251 113 133)",
    },
    plugins: [],
  },
};
