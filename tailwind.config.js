/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
        "bg-secondary": "#EEE9FF",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/desktop/heroBg.png')",
      },
    },
    fontFamily: {
      poppins: ["poppins", "system-ui"],
    },
  },
  plugins: [],
};
