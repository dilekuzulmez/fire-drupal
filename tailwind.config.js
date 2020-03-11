module.exports = {
  important: false,
  theme: {
    colors: {
      black: '#000',
      white: '#fff',

      light: '#f2f2f2',
      dark: '#37373c',

      gray: {
        '100': '#f2f2f2',
        '300': '#cccccc',
        '900': '#37373c',
      },

      green: {
        '100': '#E8F5E9',
        '400': '#28a745',
        '700': '#2E7D32',
      },

      red: {
        '100': '#fff5f5',
        '400': '#dc3545',
        '700': '#c53030',
      },

      primary: '#37b57b',
      secondary: '#695b8e',
      accent: '#ba95e8',
    },
    fontFamily: {
      body: ['Open Sans', 'sans-serif'],
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      bold: '700',
    },
    screens: {
      sm: { max: '575px' },
      md: { max: '768px' },
      lg: { max: '992px' },
      xl: { max: '1200px' },
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  extend: {
    margin: {
      96: '24rem',
      128: '32rem',
    },
  },
  variants: {
    opacity: ['responsive', 'hover'],
  },
};
