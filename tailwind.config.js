/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "dark-primary": "#2a254b",
        darkslateblue: "#2b254b",
        gray: {
          "100": "#22202e",
          "200": "rgba(255, 255, 255, 0.15)",
        },
        primary: "#4e4d93",
        "light-grey": "#f9f9f9",
        slategray: {
          "100": "#726d8d",
          "200": "#505977",
        },
        whitesmoke: "rgba(249, 249, 249, 0.15)",
        firebrick: "rgba(210, 59, 59, 0.1)",
      },
      spacing: {},
      fontFamily: {
        "body-medium": "Satoshi",
        "headings-h1": "'Clash Display'",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      "5xl": "24px",
      "17xl": "36px",
      lg: "18px",
      xl: "20px",
      "13xl": "32px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
