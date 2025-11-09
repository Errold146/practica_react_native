/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'mora': {
          '50': '#f4f2ff',
          '100': '#ece7ff',
          '200': '#dbd2ff',
          '300': '#c1afff',
          '400': '#a381ff',
          '500': '#874eff',
          '600': '#792afd',
          '700': '#6b18e9',
          '800': '#5914c3',
          '900': '#49129c',
          '950': '#2d096c',
        },
        'rosa': {
          '50': '#fef1fb',
          '100': '#ffe4fa',
          '200': '#ffc9f7',
          '300': '#ff9dee',
          '400': '#ff60e0',
          '500': '#ff32cd',
          '600': '#f30fae',
          '700': '#d4028f',
          '800': '#b20577',
          '900': '#910a63',
          '950': '#5a0039',
        },
        'verde': {
          '50': '#eefbf2',
          '100': '#d6f5df',
          '200': '#afebc3',
          '300': '#7cd9a2',
          '400': '#63cb91',
          '500': '#23a662',
          '600': '#15864d',
          '700': '#116b40',
          '800': '#105535',
          '900': '#0e462c',
          '950': '#07271a',
        },
      },
      fontFamily: {
        'work-black': ['WorkSans-Black', 'sans-serif'],
        'work-medium': ['WorkSans-Medium', 'sans-serif'],
        'work-light': ['WorkSans-Light', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

