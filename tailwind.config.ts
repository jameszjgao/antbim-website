import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff8eb",
          100: "#ffefc6",
          200: "#ffdd88",
          300: "#ffc84d",
          400: "#ffad20",
          500: "#f58a07",
          600: "#d96803",
          700: "#b44a06",
          800: "#92390c",
          900: "#78300f",
        },
        ink: {
          950: "#0c0f14",
          900: "#141922",
          800: "#1c2330",
          700: "#2a3344",
          600: "#3d4a5f",
          500: "#5a6a82",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 80px -24px rgba(15, 23, 42, 0.35)",
        glow: "0 0 0 1px rgba(245, 138, 7, 0.25), 0 20px 60px -20px rgba(245, 138, 7, 0.35)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(12,15,20,0) 0%, rgba(12,15,20,0.85) 100%), radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
        "grid-fade-light":
          "linear-gradient(to bottom, rgba(248,250,252,0) 0%, rgba(241,245,249,0.96) 100%), radial-gradient(circle at 1px 1px, rgba(15,23,42,0.07) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};

export default config;
