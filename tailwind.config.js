/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        OrangeMain: {
          50: "#fff7ec",
          100: "#ffecd4",
          200: "#ffd6a7",
          300: "#ffb870",
          400: "#ff8e36",
          500: "#ff6f0f",
          600: "#e95005",
          700: "#c83c06",
          800: "#9e300e",
          900: "#7f290f",
          950: "#451205",
        },
      },
    },
  },
  plugins: [],
};
