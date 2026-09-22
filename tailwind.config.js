/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Merriweather', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        forest: {
          900: '#1E2D14',
          800: '#2E441B',
          700: '#334C22',
          600: '#43632E',
          100: '#EDF4E7',
          50:  '#F4F8F1',
        },
        gold: {
          900: '#7A5818',
          800: '#9E7422',
          700: '#B88728',
          600: '#C2953B',
          200: '#F4EFE4',
          100: '#F9F5EC',
          50:  '#FCFBF8',
        },
        cream: {
          100: '#FAF8F5',
          200: '#F4EFE4',
          300: '#E5DEC9',
        }
      }
    },
  },
  plugins: [],
}
