/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        lora: ["Lora", "serif"],
        grostek: ["Space Grotesk", "sans-sarif"],
      },
      colors: {
        dark: "#121212",
      },
      backgroundImage: {
        hero: `url('./src/assets/images/line-grid.png'),
        linear-gradient(114.86deg, #2D0936 14.71%, #170312 78.23%)`,
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
