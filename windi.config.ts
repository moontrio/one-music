import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'

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

    'btn': 'px-4 py-2 font-normal rounded-lg transition duration-200 ease-in-out hover:bg-gray-100',
    'btn-primary': 'btn bg-neutralLighter text-primary',
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
        primary: colors.blue[500],
        neutralDarker: colors.gray[900],
        neutralDark: colors.gray[700],
        neutral: colors.gray[500],
        neutralLight: colors.gray[300],
        neutralLighter: colors.gray[100],
      },
      boxShadow: {
        'blur': '0px 0px 10px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [
    require('windicss/plugin/line-clamp'),
  ],
})
