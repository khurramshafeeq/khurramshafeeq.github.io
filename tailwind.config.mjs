/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#A53DFF",
          600: "#8431CC",
        },
        gray: {
          50: "#F0F1F3",
          300: "#A5ACB5",
          400: "#87909D",
          500: "#697484",
          600: "#556070",
          700: "#424E60",
          800: "#2B384C",
          900: "#132238",
          950: "#333333",
        },
      },
    },
  },
  corePlugins: {
    preflight: false, // Disable preflight styles
  },
  plugins: [],
};

export default tailwindConfig;
