/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      sm: ["15px", "15px"],
      base: ["20px", "24px"],
      lg: ["30px", "30px"],
      xl: ["40px", "35px"],
    },
    screens: {
      sm: "400px",
      // => @media (min-width: 640px) { ... }

      md: "547px",
      // => @media (min-width: 768px) { ... }

      lg: "768px",
      // => @media (min-width: 1024px) { ... }

      xl: "1024px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1680px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: "#ff4800",
        blue: {
          450: "#5F99F7",
        },
      },
    },
  },
  plugins: [],
};
