/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      xs: { max: '766px' },
      xsonly: { max: '766px' },
      xsup: { min: '767px' }
    },
    plugins: []
  }
};
