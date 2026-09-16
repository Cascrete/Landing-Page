import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#634fa6",
          dark: "#5f4da3",
          deep: "#604da3",
          light: "#7866be",
          muted: "#615883",
        },
        ink: {
          900: "#1a1b22",
          800: "#1a1b20",
          700: "#484551",
          500: "#797582",
          950: "#12131a",
        },
        surface: {
          DEFAULT: "#faf8ff",
          alt: "#f4f2fc",
          card: "#f4f3fa",
          drawer: "#eeedf4",
          tag: "#eeedf6",
        },
        dark: {
          800: "#32323c",
          900: "#2f3037",
        },
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        jakarta: ["var(--font-jakarta)", "sans-serif"],
        hanken: ["var(--font-hanken)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
