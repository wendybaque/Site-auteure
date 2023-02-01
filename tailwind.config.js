const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
        josefin: ["Josefin Sans", "sans-serif"],
        yeseva: ["Yeseva One"],
      },
    },
    colors: {
      primary: "#fff",
      secondary: "rgb(251 113 133)",
      bg: "rgb(241 245 249)",
      stars:"rgb(251 191 36)"
    },
    plugins: [],
  },
};
