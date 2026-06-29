import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandDark: "#020617",
        brandPanel: "#0f172a",
        brandOrange: "#f97316",
        brandGold: "#facc15",
        brandBlue: "#38bdf8"
      }
    }
  },
  plugins: []
};

export default config;
