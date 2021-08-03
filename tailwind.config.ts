const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  future: {
    removeDeprecatedGapUtilities: true
  },
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
   // You can define the bg colors for the project here
    }),
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {},
      colors: { primary: '#2623CC', 
    // here you can add more colors
    },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1408px'
      },
      backgroundSize: {
        ...defaultTheme.backgroundSize,
        // you can define more sizes here
      },
      height: {}
    }
  },
  plugins: []
}