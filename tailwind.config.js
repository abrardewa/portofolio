/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        'soft-white':'#F8F4F1',
        'soft-dark':'#1E293B',
        'soft-dark-disabled':'#707070',
        'bg-picture':'#E6DED7',
        'text-dark':'#111111',
        'button-download':'#C68259',
      },
    },
  },
  plugins: [],
}