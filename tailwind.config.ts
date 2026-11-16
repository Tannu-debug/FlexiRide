import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            DEFAULT: "#0B132B",
            50: "#F0F4FA",
            100: "#DCE5F3",
            200: "#B8CBE7",
            300: "#8EAEDB",
            400: "#5D8BCB",
            500: "#3768B4",
            600: "#274F91",
            700: "#1C396B",
            800: "#132649",
            900: "#0B132B",
            950: "#060A17",
          },
          orange: {
            DEFAULT: "#FF6B00",
            50: "#FFF6ED",
            100: "#FFE8D5",
            200: "#FFCFA8",
            300: "#FFB070",
            400: "#FF8C38",
            500: "#FF6B00",
            600: "#E55600",
            700: "#BD4000",
            800: "#963305",
            900: "#7C2D08",
            950: "#431402",
          },
        },
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(255, 107, 0, 0.35)",
        "glow-lg": "0 0 40px -10px rgba(255, 107, 0, 0.45)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
