/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        OrangeMain: {
          50: "#fffbf2",
          100: "#fcf3e3",
          200: "#fae1be",
          300: "#f5c895",
          400: "#f0924a",
          500: "#e95005",
          600: "#d14504",
          700: "#ad3502",
          800: "#8c2601",
          900: "#691b01",
          950: "#420f01",
        },
      },
    },
  },
  plugins: [],
};
