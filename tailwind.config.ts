import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: "#f4f6f1",
          100: "#e6e8df",
          200: "#ccd0bf",
          300: "#acb097",
          400: "#8B9474",
          500: "#7A8266",
          600: "#626951",
          700: "#4d5241",
          800: "#3f4236",
          900: "#36392f",
        },
        rose: {
          50: "#fdf5f4",
          100: "#fbe8e6",
          200: "#f5d1cd",
          300: "#eab3ab",
          400: "#D4A5A0",
          500: "#c9908a",
          600: "#b5756f",
          700: "#965d58",
          800: "#7c4c47",
          900: "#68403d",
        },
        forest: {
          50: "#f3f5f3",
          100: "#e2e7e2",
          200: "#c5cfC5",
          300: "#9fb19f",
          400: "#779178",
          500: "#3D4A3A",
          600: "#323d2e",
          700: "#2a3226",
          800: "#242a21",
          900: "#1f241c",
        },
        warm: {
          50: "#f9f6f3",
          100: "#f1ebe5",
          200: "#e2d5ca",
          300: "#cfb8a8",
          400: "#bc9a87",
          500: "#5C4A3A",
          600: "#4a3b2e",
          700: "#3e3126",
          800: "#342a21",
          900: "#2c241e",
        },
        cream: {
          50: "#FAF5EE",
          100: "#f5ebe0",
          200: "#e8d8c9",
          300: "#d7c2ae",
          400: "#c4a88e",
          500: "#b59372",
          600: "#a87d5a",
          700: "#8c654a",
          800: "#73533f",
          900: "#5f4536",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },
      lineHeight: {
        relaxed: "1.75",
      },
    },
  },
  plugins: [],
};

export default config;
