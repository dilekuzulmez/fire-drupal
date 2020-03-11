module.exports = {
  important: false,
  theme: {
    extend: {
      margin: {
        96: '24rem',
        128: '32rem',
      },
    },
    colors: {
      black: '#000',
      white: '#fff',

      light: '#f2f2f2',
      dark: '#37373c',

      'gray-100': '#f2f2f2',
      'gray-300': '#cccccc',
      'gray-900': '#37373c',

      'green-100': '#E8F5E9',
      'green-400': '#28a745',
      'green-700': '#2E7D32',

      'red-100': '#fff5f5',
      'red-400': '#dc3545',
      'red-700': '#c53030',

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
      sm: { max: '639px' },
      md: { max: '767px' },
      lg: { max: '1023px' },
      xl: { max: '1279px' },
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  variants: {
    opacity: ['responsive', 'hover'],
  },
};
