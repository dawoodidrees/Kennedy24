import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      lg: { max: "1279px" },
      md: { max: "991px" },
      sm: { max: "767px" },
      xs: { max: "575px" },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#2B2C78",
        red: "#FF0031",
        gray: {
          400: "#F6F6F6",
          500: "#E5E5E5",
          600: "#E3E3E3",
        },
        green: "#08AD08",
        "accent-slate": "#CFD9E3",
      },
    },
  },
  plugins: [],
};
export default config;
