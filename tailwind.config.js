const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
      },
      colors: {
        'primary-base': '#FF2020',
        'primary-light': '#FF6868',
        'primary-dark': '#6B0303',
        'secondary': '#FFDEDE',
        'secondary-light': '#FFFAFA',
        'gray-dark': '#4D4D4D'
      },
      boxShadow: {
        'custom': '0 4px 8px rgba(0, 0, 0, 0.1)',
      },
    },
    fontFamily: {
      sans: ['sans-serif']
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ addComponents }) {
      addComponents({
        '.btn-primary': {
          '@apply px-4 py-2 rounded-md font-medium text-white font-lato bg-primary-base': {},
        },
        '.btn-primary:hover': {
          '@apply hover:bg-primary-dark hover:duration-100': {},
        },
        '.btn-primary:disabled': {
          '@apply bg-primary-base': {},
          'pointer-events': 'none',
        },
        '.input-field-primary': {
          '@apply text-sm border border-gray-700 rounded-md px-2 lg:px-4 py-2 w-full lg:py-3 bg-inherit': {},
          'color': 'gray-500',
          '&::placeholder': {
            'color': 'gray-500'
          },
          '&:focus': {
            'border-color': 'black',
            'outline': 'none',
            'color': 'black',
            '&::placeholder': {
              'color': 'gray-400'
            }
          }
        },
        '.nav-link': {
          '@apply block lg:inline-block text-xl hover:text-primary-base hover:underline underline-offset-8 py-2 lg:py-0 lg:mr-8 decoration-2': {},
        },
        '.heading': {
          '@apply text-lg sm:text-4xl lg:text-5xl': {},
        },
        '.main-heading': {
          '@apply text-primary-base font-semibold': {},
        },
        '.checkbox': {
          '@apply appearance-none text-green-600 w-6 h-6 bg-white rounded-md border border-black focus:ring-2 focus:ring-gray-700 hover:bg-green-600': {},
          '&:checked': {
            '@apply bg-green-600 border-green-600': {},
            '&::after': {
              content: "'\u2713'",
              '@apply absolute text-white text-sm font-bold inset-0 flex items-center justify-center': {},
            },
          },
          '&:checked:hover': {
            '@apply bg-green-900 border-green-900': {},
          },
          '&:focus, &:focus-visible': {
            '@apply outline-none ring-2 ring-green-900': {},
          },
        },
        '.custom-radio': {
          '@apply absolute opacity-0 w-0 h-0': {},
          '& + label': {
            '@apply flex items-center cursor-pointer': {},
            '.custom-radio-visual': {
              '@apply w-6 h-6 inline-block mr-2 rounded-md border-2 border-black bg-white relative': {},
              '&:hover': {
                '@apply bg-green-600': {},
              },
            },
          },
          '&:checked + label .custom-radio-visual': {
            '@apply bg-green-600 border-green-600': {},
            '&::after': {
              content: "'\u2714'",
              '@apply absolute text-white text-sm font-bold inset-0 flex items-center justify-center': {},
            },
          },
          '&:checked:hover + label .custom-radio-visual': {
            '@apply bg-green-900 border-green-900': {},
          },
          '&:focus + label .custom-radio-visual': {
            '@apply ring-2 ring-green-900': {},
          },
        },
      });
    }),
  ]
};