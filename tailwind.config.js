/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
        },
      },
      colors: {
        main: "#fac413",
        tcolor: "#333",
      },
    },
  },
  plugins: [],
};
