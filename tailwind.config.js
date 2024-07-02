const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
      },
      colors: {
        'primary-base': '#FF2020',
        'primary-light': '#FF6868',
        'primary-dark': '#6B0303'

      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.btn-primary': {
          '@apply px-4 py-2 rounded-md font-medium font-lato text-[#FFF] bg-primary-base hover:bg-primary-dark': {},
        },
        '.input-field-primary': {
          '@apply text-gray-500 text-sm border border-gray-700 rounded-md px-2 lg:px-4 py-2 w-full lg:py-3': {},
        }
      });
    }),
  ]
}