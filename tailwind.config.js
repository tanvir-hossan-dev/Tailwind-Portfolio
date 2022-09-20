/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        para: "#6C6C6C",
        primary: "#F40404",
        yellowBorder: "#FFB800",
        blackOpacity: "rgba(0, 0, 0, .6)",
      },
      maxWidth: {
        container: "1140px",
      },
      backgroundImage: {
        banner: "url('/src/assests/banner.png')",
      },
    },
  },
  plugins: [],
};
