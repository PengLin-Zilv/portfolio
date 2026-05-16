import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        background: "#0A0A0A",
        foreground: "#FAFAFA",
        muted: "#737373",
        border: "#1F1F1F",
        accent: {
          DEFAULT: "#3B82F6",
          hover: "#60A5FA",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "720px",
        wide: "1100px",
      },
    },
  },
  plugins: [],
};

export default config;