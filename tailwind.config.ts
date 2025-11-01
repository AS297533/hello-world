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
          50: '#fef9f5',
          100: '#fdf3ea',
          200: '#fae4ca',
          300: '#f7d5aa',
          400: '#f1b76a',
          500: '#eb992a',
          600: '#d48a26',
          700: '#b17320',
          800: '#8e5c19',
          900: '#744b15',
        },
        terracotta: {
          50: '#fef6f3',
          100: '#fdede7',
          200: '#fad2c3',
          300: '#f7b79f',
          400: '#f18157',
          500: '#eb4b0f',
          600: '#d4440e',
          700: '#b1390b',
          800: '#8e2e09',
          900: '#742607',
        },
        beige: {
          50: '#fdfcfb',
          100: '#fbf9f7',
          200: '#f5f0eb',
          300: '#efe7df',
          400: '#e3d5c7',
          500: '#d7c3af',
          600: '#c2b09e',
          700: '#a29384',
          800: '#82766a',
          900: '#6a6057',
        },
        gold: {
          50: '#fffef5',
          100: '#fffceb',
          200: '#fff8cd',
          300: '#fff4af',
          400: '#ffec73',
          500: '#ffe437',
          600: '#e6cd32',
          700: '#bfab2a',
          800: '#998921',
          900: '#7d701b',
        },
      },
    },
  },
  plugins: [],
};

export default config;
