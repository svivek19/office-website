/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fire: {
          "0%, 100%": { transform: "translateY(0)", opacity: 1 },
          "50%": { transform: "translateY(-10px)", opacity: 0.6 },
        },
      },
      animation: {
        fire: "fire 0.5s infinite alternate",
      },
    },
  },
  plugins: [],
};
