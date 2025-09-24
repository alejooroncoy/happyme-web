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
          50: '#e7e7f2',
          100: '#d1d4e8',
          200: '#a3a9d1',
          300: '#9eb2f8',
          400: '#7b8ef5',
          500: '#3d41c5',
          600: '#2f33a0',
          700: '#25287a',
          800: '#1e2154',
          900: '#171a2e',
        },
        background: '#e7e7f2',
        foreground: '#1e2154',
      },
    },
  },
  plugins: [],
};

export default config;
