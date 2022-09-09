/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#ff1168",
        secondary: "#341931",
        additional: "#111625",
        gradientStart: "#ee0979",
        gradientEnd: "#ff6a00",
        darkBlue: "115793",
        blue: "00a1cb",
        cyan: "0abebe",
        darkGreen: "3a7634",
        green: "5eb11c",
        yellow: "f2bc06",
        orange: "f18d05",
        red: "e54028",
      },
    },
  },
  plugins: [],
};
