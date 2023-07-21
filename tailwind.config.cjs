module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Roboto",
          ...require("tailwindcss/defaultTheme").fontFamily.sans,
        ],
      },
      colors: {
        violet: {
          light: "#8F6BE8",
          text: "#8765DD",
          dark: "#5E3DB3",
          line: "#603EBE",
        },
        gray: {
          text: "#C2C2C2",
          "text-light": "#E7E7E7",
          normal: "#F5F4F9",
          line: "#D8D8D8",
        },
        blue: {
          dark: "#090C35",
        },
      },
    },
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
