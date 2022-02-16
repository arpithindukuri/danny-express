const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "300px",
      sm: "480px",
      md: "720px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1536px",
    },
    fontSize: {
      "6xs": ".125rem",
      "5xs": ".25rem",
      "4xs": ".375rem",
      "3xs": ".5rem",
      "2xs": ".625rem",
      xs: ".75rem",
      sm: ".875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "8xl": "6rem",
      "9xl": "7rem",
    },
    extend: {
      keyframes: {
        "border-ping": {
          "0%": {
            boxShadow: `0 0 0 0px ${colors.orange[500]}`,
          },
          "100%": {
            boxShadow: "0 0 0 6px rgba(0, 0, 0, 0)",
          },
        },
      },
      animation: {
        "border-ping": "border-ping 0.4s ease-out",
      },
    },
  },
  plugins: [],
};
