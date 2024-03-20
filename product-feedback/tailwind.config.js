/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['libs/./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        blue: {
          primary: '#647196',
          secondary: '#373F68',
          dark: '#3A4374',
          greyish: '#647196',
          sky: '#62BCFA',
          default: '#F2F4FE',
          hover: '#CFD7FF',
          active: '#4661E6',
          background: '#F2F4FF',
        },
        purple: {
          default: '#AD1FEA',
          hover: '#C75AF6',
        },
        red: {
          default: '#D73737',
          hover: '#E98888',
        },
        orange: '#F49F85',
        background: '#F7F8FD',
      },
      fontFamily: {
        Jost: ['Jost', 'sans-serif'],
      },
    },
  },

  plugins: [],
};
