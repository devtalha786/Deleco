/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        md1: "836px",
        XL: "1280px",
        md2: "920px",
        "custom-md": "840px",
        "custom-lg": "1200px",
      },
    },
  },
  plugins: [],
};
