/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{jsx,js}',
    './pages/**/*.{jsx,js}',
    './components/**/*.{jsx,js}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#fff',
        'secondary-color': '#717171',
        'accent-color': '#9ccae4',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
};
