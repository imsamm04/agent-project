/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jp': ['Noto Sans JP', 'sans-serif'],
        'latin': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#FF963C',
        secondary: '#8FE9D0',
        dark: '#2E2E2E',
        primary: {
          300: '#FFD700', // vàng nhạt
          400: '#FFB74D', // cam nhạt
          500: '#FF9800', // cam đậm
        },
        secondary: {
          300: '#7CF3CB', // xanh mint
        },
        gray: {
          400: '#757575',
        },
        black: {
          600: '#212121',
          500: '#333333',
        },
        white: '#fff',
        'dark-500': '#333333',
        'dark-600': '#212121',
      },
      borderRadius: {
        xl: '24px',
      },
    },
  },
  plugins: [],
} 