import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        primary: "#d3eaf8",
      },
      textColor: {
        highlight: "#4433ff",
        base: "#2A2A2A",
        title: "#E60067",
        "notes-title": "#21232c",
        notes: "#0a0c10",
        "notes-grey": "#636363",
        dbase: "#FFFFFF",
      },
      maxWidth: {
        "192": "48rem",
      },
    },
  },
  plugins: [],
};
export default config;
