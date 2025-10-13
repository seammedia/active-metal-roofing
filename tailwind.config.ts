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
        primary: {
          DEFAULT: "#006991",
          light: "#A4D7F4",
          dark: "#004d6b",
        },
        secondary: {
          DEFAULT: "#6EC1E4",
          light: "#a8d8f0",
          dark: "#4a9fc9",
        },
        accent: {
          DEFAULT: "#61CE70",
          light: "#8fdb9a",
          dark: "#45a552",
        },
        text: {
          DEFAULT: "#7A7A7A",
          dark: "#212121",
          light: "#9E9E9E",
        },
      },
      fontFamily: {
        sans: ["Roboto", "system-ui", "sans-serif"],
        serif: ["Roboto Slab", "serif"],
      },
      fontSize: {
        "hero-xl": "clamp(2rem, 5vw, 3.5rem)",
        "hero-md": "clamp(1.1rem, 2.5vw, 1.4rem)",
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-primary',
    'bg-primary-light',
    'bg-secondary',
    'bg-accent',
    'text-primary',
    'text-secondary',
    'text-accent',
    'border-primary',
    'border-secondary',
  ],
};

export default config;
