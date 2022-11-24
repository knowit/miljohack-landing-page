/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      dark: '#1e1e1e',
      green: {
        DEFAULT: '#b7debd',
        dark: '#00b055'
      }
    }
  },
  plugins: []
};
