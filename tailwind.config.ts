import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        forest: "#2D6A4F",
        base: "#040D0A",
        surface: "#081C15",
        ink: "#F1FAEE"
      },
      boxShadow: {
        glow: "0 0 30px rgba(212, 175, 55, 0.25)"
      },
      fontFamily: {
        display: ["var(--font-playfair)"],
        body: ["var(--font-inter)"]
      }
    }
  },
  plugins: []
};

export default config;
