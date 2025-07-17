/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#81E6D9',
          DEFAULT: '#319795',
          dark: '#2C7A7B',
        },
      },
    },
  },
  plugins: [],
};
