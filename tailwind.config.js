/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-fast': 'spin 0.5s linear infinite',
      },
    },
  },
  variants: {},
  plugins: [],
};
