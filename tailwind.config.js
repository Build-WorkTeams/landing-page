/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // "regal-blue": "#243c5a",
        Lavender: "#EEE9FF",
        "Ocean-Blue": "#4D27BA",
        Tangerine: "#F48C06",
        "Old-Lavender": "#696984",
        "Battery-Charged-Blue": "#29B9E7",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/desktop/heroBg.png')",
      },
    },
    fontFamily: {
      poppins: ["poppins", "system-ui"],
      nunitoSans: ['"nunito sans"', "system-ui"],
    },
  },
  plugins: [],
};
