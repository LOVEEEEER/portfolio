/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#d7f3f5",
      black: "rgba(75, 75, 75, 0.4)",
      grey: "rgba(147, 146, 146, 0.4)",
    },
    maxWidth: {
      "text-max": "700px",
    },
    container: {
      center: true,
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1028px",
      xl: "1440px",
    },
    extend: {},
  },
  plugins: [],
};
