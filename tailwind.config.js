/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#121D31",
        textLight: "#a7a9be",
        textDark: "#2e2f3e",
        // secondary: "#EB996E",
      },
      container: {
        center: true,
        margin: {
          default: "0",
        },
      },
      padding: {
        standart: "1rem 1.5rem",
      },
    },
  },
  plugins: [],
};
