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
        "dark-blue": "hsl(209, 23%, 22%)",
        "very-dark-blue-dm-bg": "hsl(207, 26%, 17%)",
        "very-dark-blue-lm-text": "hsl(200, 15%, 8%)",
        "dark-gray-lm-input": "hsl(0, 0%, 52%)",
        "very-light-gray-lm-bg": "hsl(0, 0%, 98%)",
        "white-dm-text-lm-elements": "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
