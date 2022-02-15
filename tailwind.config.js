module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "300px",
      // => @media (min-width: 640px) { ... }

      sm: "480px",
      // => @media (min-width: 640px) { ... }

      md: "720px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
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
  },
  plugins: [],
};
