import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import plugin from 'windicss/plugin'

export default defineConfig({
  extract: {
    include: [
      'index.html',
      'src/**/*.{vue,html,jsx,tsx}',
    ],
    exclude: [
      'node_modules/**/*',
      '.git/**/*',
    ],
  },
  darkMode: 'class', // or 'media'
  shortcuts: {
    'wh-full': 'w-full h-full',
    'flex-center': 'flex justify-center items-center',
    'absolute-center': 'absolute flex-center wh-full',
    'one-icon': 'p-2 !text-base !leading-none rounded-lg cursor-pointer hover:bg-gray-100',
    'one-icon-button': 'one-icon !text-24px !leading-none',
  },
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        gray: colors.coolGray,
        blue: colors.lightBlue,
        red: colors.rose,
        pink: colors.fuchsia,
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.skew-10deg': {
          transform: 'skewY(-10deg)',
        },
        '.skew-15deg': {
          transform: 'skewY(-15deg)',
        },
      }
      addUtilities(newUtilities)
    }),
    plugin(({ addComponents }) => {
      const buttons = {
        '.btn': {
          'padding': '.5rem 1rem',
          'borderRadius': '.5rem',
          'fontWeight': '600',
          'transition': 'all .2s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        },
        '.btn-plain': {
          backgroundColor: '#fff',
          color: '#000',
          boxShadow: '0 0 0.5rem rgba(0, 0, 0, 0.1)',
        },
        '.btn-blue': {
          'backgroundColor': '#f0f9ff',
          'color': '#0ea5e9',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        },
      }
      addComponents(buttons)
    }),
    // require('windicss/plugin/filters'),
    require('windicss/plugin/forms'),
    require('windicss/plugin/aspect-ratio'),
    require('windicss/plugin/line-clamp'),
    require('windicss/plugin/typography')({
      modifiers: ['DEFAULT', 'sm', 'lg', 'red'],
    }),
  ],
})
