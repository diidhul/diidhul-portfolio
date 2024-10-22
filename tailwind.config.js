/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Helvetica", "Arial", "sans-serif"],
        serif: ["Merriweather", "serif"],
        mono: ["Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkNavyBlue: "#243763",
        offWhite: "#F5F5EB",
        lightGray: "#EAEAEA",
        aquaBlue: "#78C6D2",
        mediumPinkishBeige: "#FFC8A2",
      },
      animation: {
        wave: "wave 1.5s ease-in-out infinite",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" },
          "60%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [],
};
