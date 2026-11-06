/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Montserrat"', '"Bricolage Grotesque"', 'sans-serif'],
        serif: ['"Montserrat"', '"Bricolage Grotesque"', 'sans-serif'],
        sans: ['"Montserrat"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        body: ['"Montserrat"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        brandGreen: {
          DEFAULT: '#2b3705',
          dark: '#1e2703',
          light: '#3d4d07',
          50: '#f4f6ec',
        },
        brandTan: {
          DEFAULT: '#d8cba9',
          light: '#e6dec8',
          50: '#faf7ef',
        },
        darkTan: {
          DEFAULT: '#9f7f29',
          dark: '#7e6420',
          hover: '#8a6e24',
        },
        greige: {
          DEFAULT: '#e0dbd7',
          light: '#f2efed',
          dark: '#c7bfb9',
        },
        forest: {
          900: '#1e2703',
          800: '#2b3705',
          700: '#2b3705',
          600: '#3d4d07',
          100: '#f4f6ec',
          50:  '#faf7ef',
        },
        gold: {
          900: '#7e6420',
          800: '#8a6e24',
          700: '#9f7f29',
          600: '#9f7f29',
          200: '#d8cba9',
          100: '#e6dec8',
          50:  '#faf7ef',
        },
        cream: {
          100: '#faf7ef',
          200: '#e0dbd7',
          300: '#d8cba9',
        }
      }
    },
  },
  plugins: [],
}
