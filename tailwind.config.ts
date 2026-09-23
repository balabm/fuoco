import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#EBE6DB",
        "cream-dark": "#E2DCCE",
        terracotta: "#934A22",
        "terracotta-dark": "#7A3C1B",
        olive: "#343425",
        "olive-soft": "#5C5C48",
        sage: "#8FA089",
        "sage-dark": "#6F8269",
        "sage-light": "#B3C0AC",
        ember: "#D9A05B",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        arch: "0 -18px 60px -12px rgba(217, 160, 91, 0.45), 0 24px 40px -24px rgba(52, 52, 37, 0.35)",
        "arch-inner": "inset 0 20px 50px -12px rgba(235, 230, 219, 0.35)",
        card: "0 10px 30px -12px rgba(52, 52, 37, 0.25)",
        bamboo: "0 14px 34px -14px rgba(147, 74, 34, 0.5)",
      },
      backgroundImage: {
        "bamboo-weave":
          "repeating-linear-gradient(90deg, rgba(52,52,37,0.06) 0 2px, transparent 2px 14px), repeating-linear-gradient(0deg, rgba(52,52,37,0.05) 0 2px, transparent 2px 10px)",
      },
    },
  },
  plugins: [],
};

export default config;
