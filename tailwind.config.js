/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'base': '#0E1318',
      'secondary': '#192028',
      'optional': '#2C3340',
      'text-secondary': '#6F7D94',
      'text-optional': '#9FA8B5',
      'lines': '#A2BBB0',
      'brand': '#A0D8A9',
      'white': '#fefefe',
      'bg-light': "#F3F5F7",
    },
    extend: {
      fontFamily: {
        inter: ['"Inter"']
      }
    }
  },
  plugins: [],
  darkMode: 'class',
}