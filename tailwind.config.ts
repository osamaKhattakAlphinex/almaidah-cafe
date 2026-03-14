import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0a0a0a",
          gold: "#EFB713",
          darkgold: "#C99A0E",
          cream: "#FDF6DC",
        },
        background: "#0a0a0a",
        foreground: "#EFB713",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-nunito)", "sans-serif"],
        sans: ["var(--font-nunito)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
      },
      boxShadow: {
        "glow-gold": "0 0 20px rgba(239, 183, 19, 0.4)",
      },
      ringColor: {
        DEFAULT: "#EFB713",
      },
      ringOffsetColor: {
        DEFAULT: "#0a0a0a",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".bg-noise": {
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            opacity: "0.03",
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            pointerEvents: "none",
            zIndex: "1",
          },
          "& > *": {
            position: "relative",
            zIndex: "2",
          },
        },
      });
    }),
  ],
};
export default config;
