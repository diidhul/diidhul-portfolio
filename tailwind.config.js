/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Helvetica", "Arial", "sans-serif"],
        serif: ["Merriweather", "serif"],
        mono: ["Menlo", "monospace"],
      },
      colors: {
        darkNavyBlue: "#243763",
        offWhite: "#F5F5EB",
        lightGray: "#EAEAEA",
        aquaBlue: "#78C6D2",
        mediumPinkishBeige: "#FFC8A2",
      },
      animation: {
        wave: "wave 1.5s ease-in-out infinite",
        softBounce: "softBounce 1s infinite",
        typewriter: "typewriter 10s steps(60, end) infinite", // Loop terus
        caret: "caret 0.7s steps(1, end) infinite", // Loop kedipan
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
        softBounce: {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "ease-in-out",
          },
          "50%": {
            transform: "translateY(-10%)",
            animationTimingFunction: "ease-in-out",
          },
        },

        typewriter: {
          "0%": { transform: "translateX(-100%)" }, // Mulai dari luar layar (kiri)
          "50%": { transform: "translateX(0%)" }, // Teks sepenuhnya terlihat
          "100%": { transform: "translateX(100%)" }, // Pergi ke luar layar (kanan)
        },

        caret: {
          0: { opacity: "50" },
        },

        blink: {
          "0%": {
            opacity: "0",
          },
          "0.1%": {
            opacity: "1",
          },
          "50%": {
            opacity: "1",
          },
          "50.1%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
    },
  },

  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".underline-from-right": {
          position: "relative",
          color: "currentColor", // Menggunakan warna teks saat ini
          textDecoration: "none",
        },
        ".underline-from-right::after": {
          content: '""',
          position: "absolute",
          right: 0,
          bottom: "0px",
          width: "100%",
          height: "2px",
          backgroundColor: "currentColor",
          transform: "scaleX(0)",
          transformOrigin: "right",
          transition: "transform 0.3s ease-in-out",
        },
        ".underline-from-right:hover::after": {
          transform: "scaleX(1)",
          transformOrigin: "left",
        },
      });
    },
  ],
};
